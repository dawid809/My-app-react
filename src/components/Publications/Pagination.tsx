import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import "../publications/index.css";

import { Colors } from "../../styledHelpers/Colors";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { getPosts } from "../../actions/postsActions";
import { IPostsReducer } from "../../reducers/postsReducer";
import { GET_POSTS } from "../../actions/actionTypes/postTypes";

type GetPosts = ReturnType<typeof getPosts>;

const PostsWrapper = styled.div``;

const SinglePostWrapper = styled.div`
  background: white;
  border-radius: 5px;
  border: 1px solid lightgrey;
  margin: 5px 0;
  padding: 5px;
`;

const RightIconsAndTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SmallImg = styled.img`
  width: 12px;
  height: 12px;
  margin: 0 5px;
  align-self: center;
`;

const MediumImg = styled(SmallImg)`
  width: 16px;
  height: 16px; ;
`;

const SmallImgArrow = styled.img`
  width: 8px;
  height: 5px;
  margin: 0 5px;
`;

const CustomInput = styled.input`
  border-color: gray;
  padding: 3px;
  border-radius: 5px;
`;

const FilterContainer = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
`;

const FollowedContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Subtititle = styled.h3`
  color: blue;
  margin: 5px 0;
`;

const PostText = styled.a``;

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
    dispatch<GetPosts>(getPosts());
  }, []);

  const { postsList } = useSelector<IState, IPostsReducer>((globalState) => ({
    ...globalState.posts,
  }));

  const [posts, setPosts] = useState(postsList.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const postsPerPage = 10;
  const pagesVisited = pageNumber * postsPerPage;

  const displayPosts = postsList
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => {
      return (
        <PostsWrapper key={post.id}>
          <SinglePostWrapper>
            <Subtititle>{post?.title}</Subtititle>
            <PostText> {post?.body}</PostText>
            <ImgAndTextWrapper>
              <SmallImg src="icons/book-alt.png" alt="" />
              <PostText>{post?.title}</PostText>
              <DotImg src="icons/black-circle.png" alt="" />
              <SmallImg src="icons/people.png" alt="" />
              <PostText>Client contract</PostText>
              <DotImg src="icons/black-circle.png" alt="" />
              <PublicationDate> Updated 2 days ago</PublicationDate>
            </ImgAndTextWrapper>
          </SinglePostWrapper>
        </PostsWrapper>
      );
    });

  const pageCount = Math.ceil(postsList.length / postsPerPage);

  const changePage = ({ selected }: { selected: any }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      {console.log("Posts", displayPosts)}
      {displayPosts}
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
      />
    </div>
  );
};
