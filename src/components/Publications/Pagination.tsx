import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import "../publications/index.css";

import { Colors } from "../../styledHelpers/Colors";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { getComments } from "../../actions/commentsActions";
import { getUsers } from "../../actions/usersActions";
import { ICommentsReducer } from "../../reducers/commentsReducers";
import { IUsersReducer } from "../../reducers/usersReducers";

type GetComments = ReturnType<typeof getComments>;
type GetUsers = ReturnType<typeof getUsers>;

const PostsWrapper = styled.div`
`;

const SinglePostWrapper = styled.div`
  background: white;
  border-radius: 5px;
  border: 1px solid lightgrey;
  margin: 5px 0;
  padding: 5px;
`;

const SmallImg = styled.img`
  width: 12px;
  height: 12px;
  margin: 0 5px;
  align-self: center;
`;

const Subtititle = styled.h3`
  color: blue;
  margin: 5px 0;
`;

const PostText = styled.a`
`;

const ImgAndTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px 0px;
`;

const PublicationDate = styled.a`
  color: gray;
  font-size: 12px;
  align-self: center;
`;

const DotImg = styled(SmallImg)`
  width: 4px;
  height: 4px;
  align-self: center;
  margin: 0 10px;
`;

export const Pagination: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetComments>(getComments());
    dispatch<GetUsers>(getUsers());
  }, []);

  const { commentsList, usersList } = useSelector<IState, ICommentsReducer & IUsersReducer>((globalState) => ({
    ...globalState.comments,
    ...globalState.users,
  }));

  const [comments, setComments] = useState(commentsList.slice(0, 500));
  const [pageNumber, setPageNumber] = useState(0);

  const commentsPerPage = 10;
  const pagesVisited = pageNumber * commentsPerPage;

  const displayComments = commentsList
    .slice(pagesVisited, pagesVisited + commentsPerPage)
    .map((comments) => {
      return (
        <PostsWrapper key={comments.id}>
          <SinglePostWrapper>
            <Subtititle>{comments?.name}</Subtititle>
            <PostText> {comments?.body}</PostText>
            <ImgAndTextWrapper>
              <SmallImg src="icons/book-alt.png" alt="" />
              <PostText>{comments?.name}</PostText>
              <DotImg src="icons/black-circle.png" alt="" />
              <SmallImg src="icons/people.png" alt="" />
              <PostText>Client contract</PostText>
              <DotImg src="icons/black-circle.png" alt="" />
              <PublicationDate> Updated 2 days ago by {usersList[0]?.name}</PublicationDate>
            </ImgAndTextWrapper>
          </SinglePostWrapper>
        </PostsWrapper>
      );
    });

  const pageCount = Math.ceil(commentsList.length / commentsPerPage);

  const changePage = ({ selected }: { selected: any }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      {/* {commentsList.filter(elem => elem.name.
        toLowerCase()
        .includes)}
        input.toLowerCase() */}
      {console.log("Comments", displayComments)}
      {displayComments}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        containerClassName={"pagination-bttns"}
        previousLinkClassName={"previous-bttn"}
        nextLinkClassName={"next-bttn"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"pagination-active"}
      />
    </div>
  );
};