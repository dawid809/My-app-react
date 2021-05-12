import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import ReactPaginate from 'react-paginate';

import { Colors } from "../../styledHelpers/Colors";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { getPosts } from "../../actions/postsActions";
import { IPostsReducer } from "../../reducers/postsReducer";
import { GET_POSTS } from "../../actions/actionTypes/postTypes";

type GetPosts = ReturnType<typeof getPosts>;

const ResumeWorkWrapper = styled.div`
  position: relative;
  background: whitesmoke;
  height: 400px;
  margin: 0.5% 5%;
`;

const PostsWrapper = styled.div`
`;

const SinglePostWrapper = styled.div`
  background: white;
  border-radius: 5px;
  border: 1px solid lightgrey;
  margin: 5px 0;
  padding: 5px;
`;

const TopContainer = styled.div`
  margin: 10px 5px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  align-self: center;
  font-weight: bold;
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
  height: 16px;;
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


export const ResumeWork: FC = () => {

    const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetPosts>(getPosts());
  }, []);

  const { postsList } = useSelector<IState, IPostsReducer>((globalState) => ({
    ...globalState.posts,
  }));

  return (
    <ResumeWorkWrapper>
      <TopContainer>
        <Title>Resume your work </Title>
        <RightIconsAndTextWrapper>
          <FilterContainer>
            <CustomInput type="text" placeholder="Filter by title..." />
            <MediumImg
              src="icons/search.png"
              alt="filtrowanie"
              style={{ marginLeft: "-20px" }}
            />
          </FilterContainer>
          <FollowedContainer>
            <MediumImg src="icons/broadcast.png" alt="transmitowanie" />
            <Subtititle>Followed</Subtititle>
            <SmallImgArrow src="icons/arrow-down.png" alt="strzałka-dół" />
          </FollowedContainer>
        </RightIconsAndTextWrapper>
      </TopContainer>
      <PostsWrapper>
        <SinglePostWrapper>
        <Subtititle>
          World Company
        </Subtititle>
        <PostText> repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed
         est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque
         </PostText>
         <ImgAndTextWrapper>
              <SmallImg src="icons/book-alt.png" alt="" />
              <PostText>Subsid.corp</PostText>
              <DotImg src="icons/black-circle.png" alt="" />
              <SmallImg src="icons/people.png" alt="" />
              <PostText>Client contract</PostText>
              <DotImg src="icons/black-circle.png" alt="" />
              <PublicationDate> Updated 2 days ago</PublicationDate>
            </ImgAndTextWrapper>
        </SinglePostWrapper>
      </PostsWrapper>
    </ResumeWorkWrapper>
  );
};
