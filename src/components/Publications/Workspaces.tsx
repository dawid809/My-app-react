import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Slider from "react-slick";
import { Colors } from "../../styledHelpers/Colors";
import "../publications/index.css";

import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { getPhotos } from "../../actions/photosActions";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { GET_PHOTOS } from "../../actions/actionTypes/photoTypes";

type GetPhotos = ReturnType<typeof getPhotos>;

const WorkspacesWrapper = styled.div`
  margin: 0.5% 5%;
  position: relative;
  min-height: 210px;
`;

const SingleSlideContainer = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  z-index: 5;
  cursor: pointer;
`;

const TitleText = styled.h2`
  margin: 10px;
  font-weight: bold;
`;

const ImgHalf = styled.img`
  width: 100%;
  height: 40%;
  min-height: 90px;
  max-height: 90px;
`;

const SingleContentWrapper = styled.div`
  margin: 5px;
`;

const SubtitleText = styled.h3`
align-self: center;
margin: 0 10px;
`;

const ImgInsideDiv = styled.img`
  height: 80%;
  align-self: center;
`;

const TitleImgWrapper = styled.div`
display: flex;
flex-direction: row;
padding: 10px;
position: relative;
top: -25px;
margin-bottom: -25px;
`;

const ImgRoundedWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  width: 60px;
  height: 60px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const ImgAndTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 5px 0px;
`;

const DatePulicationText = styled.a`
  color: gray;
  font-size: 12px;
  margin: 0 5px;
`;

const SmallImg = styled.img`
  width: 12px;
  height: 12px;
  margin: 0 5px;
`;

const DotImg = styled(SmallImg)`
  width: 4px;
  height: 4px;
  align-self: center;
  margin: 0 10px;
`;

const Text = styled.a`
  font-size: 12px;
`;

export const Workspaces: FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetPhotos>(getPhotos());
  }, []);

  const { photosList } = useSelector<IState, IPhotosReducer>((globalState) => ({
    ...globalState.photos,
  }));

  return (
    <WorkspacesWrapper>
      <TitleText> Workspaces </TitleText>

      <Slider {...settings}>
        <SingleSlideContainer>
          <ImgHalf src={photosList[111]?.url} alt="" />
          <TitleImgWrapper>
          <ImgRoundedWrapper>
              <ImgInsideDiv src="icons/book-alt.png" />
            </ImgRoundedWrapper>
            <SubtitleText>Client Contract1</SubtitleText>
          </TitleImgWrapper>
          <SingleContentWrapper>
            <ImgAndTextWrapper>
              <SmallImg src="icons/book-alt.png" alt="" />
              <Text>Client contract</Text>
              <DotImg src="icons/black-circle.png" alt="" />
              <SmallImg src="icons/people.png" alt="" />
              <Text>25 Users</Text>
            </ImgAndTextWrapper>
            <DatePulicationText> Last update 2 days ago</DatePulicationText>
          </SingleContentWrapper>
        </SingleSlideContainer>
        <SingleSlideContainer>
          <ImgHalf src={photosList[111]?.url} alt="" />
          <TitleImgWrapper>
          <ImgRoundedWrapper>
              <ImgInsideDiv src="icons/book-alt.png" />
            </ImgRoundedWrapper>
            <SubtitleText>Client Contract2</SubtitleText>
          </TitleImgWrapper>
          <SingleContentWrapper>
            <ImgAndTextWrapper>
              <SmallImg src="icons/book-alt.png" alt="" />
              <Text>Client contract</Text>
              <DotImg src="icons/black-circle.png" alt="" />
              <SmallImg src="icons/people.png" alt="" />
              <Text>25 Users</Text>
            </ImgAndTextWrapper>
            <DatePulicationText> Last update 2 days ago</DatePulicationText>
          </SingleContentWrapper>
        </SingleSlideContainer>
        <SingleSlideContainer>
          <ImgHalf src={photosList[111]?.url} alt="" />
          <TitleImgWrapper>
          <ImgRoundedWrapper>
              <ImgInsideDiv src="icons/book-alt.png" />
            </ImgRoundedWrapper>
            <SubtitleText>Client Contract3</SubtitleText>
          </TitleImgWrapper>
          <SingleContentWrapper>
            <ImgAndTextWrapper>
              <SmallImg src="icons/book-alt.png" alt="" />
              <Text>Client contract</Text>
              <DotImg src="icons/black-circle.png" alt="" />
              <SmallImg src="icons/people.png" alt="" />
              <Text>25 Users</Text>
            </ImgAndTextWrapper>
            <DatePulicationText> Last update 2 days ago</DatePulicationText>
          </SingleContentWrapper>
        </SingleSlideContainer>
        <SingleSlideContainer>
          <ImgHalf src={photosList[111]?.url} alt="" />
          <TitleImgWrapper>
          <ImgRoundedWrapper>
              <ImgInsideDiv src="icons/book-alt.png" />
            </ImgRoundedWrapper>
            <SubtitleText>Client Contract4</SubtitleText>
          </TitleImgWrapper>
          <SingleContentWrapper>
            <ImgAndTextWrapper>
              <SmallImg src="icons/book-alt.png" alt="" />
              <Text>Client contract</Text>
              <DotImg src="icons/black-circle.png" alt="" />
              <SmallImg src="icons/people.png" alt="" />
              <Text>25 Users</Text>
            </ImgAndTextWrapper>
            <DatePulicationText> Last update 2 days ago</DatePulicationText>
          </SingleContentWrapper>
        </SingleSlideContainer>
        <SingleSlideContainer>
          <ImgHalf src={photosList[111]?.url} alt="" />
          <TitleImgWrapper>
          <ImgRoundedWrapper>
              <ImgInsideDiv src="icons/book-alt.png" />
            </ImgRoundedWrapper>
            <SubtitleText>Client Contract5</SubtitleText>
          </TitleImgWrapper>
          <SingleContentWrapper>
            <ImgAndTextWrapper>
              <SmallImg src="icons/book-alt.png" alt="" />
              <Text>Client contract</Text>
              <DotImg src="icons/black-circle.png" alt="" />
              <SmallImg src="icons/people.png" alt="" />
              <Text>25 Users</Text>
            </ImgAndTextWrapper>
            <DatePulicationText> Last update 2 days ago</DatePulicationText>
          </SingleContentWrapper>
        </SingleSlideContainer>
      </Slider>
    </WorkspacesWrapper>
  );
};
