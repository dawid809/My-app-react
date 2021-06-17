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
import { getPosts } from "../../actions/postsActions";
import { getPhotos } from "../../actions/photosActions";
import { ICommentsReducer } from "../../reducers/commentsReducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { IPostsReducer } from "../../reducers/postsReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";

type GetComments = ReturnType<typeof getComments>;
type GetUsers = ReturnType<typeof getUsers>;
type GetPosts = ReturnType<typeof getPosts>;
type GetPhotos = ReturnType<typeof getPhotos>;

const PostsWrapper = styled.div``;

const SinglePostWrapper = styled.div`
  background: ${Colors.white};
  border-radius: 5px;
  box-shadow: ${Colors.shadow};
  margin: 5px 0;
  padding: 10px;
`;

const SmallImg = styled.img`
  width: 15px;
  height: 15px;
  margin: 0 5px;
  align-self: center;
`;

const Subtititle = styled.h3`
  color: ${Colors.blue};
  margin: 5px 0;
  font-weight: bold;
`;

const PostText = styled.a``;

const ImgAndTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px 0px;
`;

const PublicationDate = styled.a`
  color: ${Colors.darkerGray};
  font-size: 12px;
  align-self: center;
`;

const DotImg = styled(SmallImg)`
  width: 4px;
  height: 4px;
  align-self: center;
  margin: 0 10px;
`;

interface IPaginationProps {
  searchValue: string;
  isFollowed: boolean;
}

export const Pagination: FC<IPaginationProps> = (props) => {
  const { isFollowed, searchValue } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetComments>(getComments());
    dispatch<GetUsers>(getUsers());
    dispatch<GetPosts>(getPosts());
    dispatch<GetPhotos>(getPhotos());
  }, []);

  const { commentsList, usersList, postsList, currentUser, photosList } =
    useSelector<
      IState,
      ICommentsReducer & IUsersReducer & IPostsReducer & IPhotosReducer
    >((globalState) => ({
      ...globalState.comments,
      ...globalState.users,
      ...globalState.posts,
      ...globalState.photos,
    }));

  const [pageNumber, setPageNumber] = useState(0);

  const commentsPerPage = 10;
  const pagesVisited = pageNumber * commentsPerPage;

  const displayComments = commentsList
    .filter((val) => {
      if (searchValue == "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return val;
      }
    })
    .filter((val) => {
      if (isFollowed == true) {
        return usersList?.[postsList?.[val?.postId - 1]?.userId - 1].id == 1;
      } else if (val.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + commentsPerPage)
    .map((comments) => {
      return (
        <PostsWrapper key={comments.id}>
          <SinglePostWrapper>
            <Subtititle>{comments?.name}</Subtititle>
            <PostText> {comments?.body}</PostText>
            <ImgAndTextWrapper>
              <SmallImg
                src={
                  photosList?.[postsList?.[comments?.postId - 1]?.userId - 1]
                    ?.url
                }
                alt="photo"
                style={{ borderRadius: "50%" }}
              />
              <PostText>
                {
                  usersList?.[postsList?.[comments?.postId - 1]?.userId - 1]
                    ?.name
                }
              </PostText>
              <DotImg src="icons/black-circle.png" alt="circle" />
              <SmallImg src="icons/suitcase.png" alt="suitcase" />
              <PostText>Client contract</PostText>
              <DotImg src="icons/black-circle.png" alt="cirlce" />
              <PublicationDate>
                Updated 2 days ago by{" "}
                {
                  usersList?.[postsList?.[comments?.postId - 1]?.userId - 1]
                    ?.name
                }
              </PublicationDate>
            </ImgAndTextWrapper>
          </SinglePostWrapper>
        </PostsWrapper>
      );
    });

  const pageCount = Math.ceil(commentsList.length / commentsPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      {console.log("Comments", displayComments)}
      {displayComments}
      <ReactPaginate
        previousLabel={"PREVIOUS"}
        nextLabel={"NEXT"}
        pageCount={pageCount}
        onPageChange={changePage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        containerClassName={"pagination-bttns"}
        previousLinkClassName={"previous-bttn"}
        nextLinkClassName={"next-bttn"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"pagination-active"}
      />
    </div>
  );
};
