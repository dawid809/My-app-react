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
import { fontSize } from "../../styledHelpers/FontSizes";

type GetPhotos = ReturnType<typeof getPhotos>;

const WorkspacesWrapper = styled.div`
  margin: 0.5% 5%;
  position: relative;
  min-height: 230px;
  z-index: 5;
`;

const SingleSlideContainer = styled.div`
  border-radius: 4px;
  z-index: 5;
  cursor: pointer;
  overflow: hidden;
  box-shadow: ${Colors.shadow};
`;

const TitleText = styled.h2`
  margin: 10px;
  font-weight: bold;
  font-size: ${fontSize[20]};
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
  font-weight: bold;
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
  background: ${Colors.white};
  width: 60px;
  height: 60px;
  border: ${Colors.border};
  border-radius: 5px;
`;

const ImgAndTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 5px 0px;
  align-items: center;
`;

const DatePulicationText = styled.a`
  color: ${Colors.gray};
  font-size: ${fontSize[10]};
  margin: 0 5px;
`;

const SmallImg = styled.img`
  width: 16px;
  height: 16px;
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
    slidesToShow: 3,
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
              <ImgInsideDiv src="icons/file-signature.png" />
            </ImgRoundedWrapper>
            <SubtitleText>Client Contract</SubtitleText>
          </TitleImgWrapper>
          <SingleContentWrapper>
            <ImgAndTextWrapper>
              <SmallImg src="icons/file-signature.png" alt="" />
              <Text>Contract</Text>
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
              <ImgInsideDiv src="icons/file-signature.png" />
            </ImgRoundedWrapper>
            <SubtitleText>Supplier contract</SubtitleText>
          </TitleImgWrapper>
          <SingleContentWrapper>
            <ImgAndTextWrapper>
              <SmallImg src="icons/file-signature.png" alt="" />
              <Text>Contract</Text>
              <DotImg src="icons/black-circle.png" alt="" />
              <SmallImg src="icons/people.png" alt="" />
              <Text>50 Users</Text>
            </ImgAndTextWrapper>
            <DatePulicationText> Last update 2 days ago</DatePulicationText>
          </SingleContentWrapper>
        </SingleSlideContainer>
        <SingleSlideContainer>
          <ImgHalf src={photosList[112]?.url} alt="" />
          <TitleImgWrapper>
            <ImgRoundedWrapper>
              <ImgInsideDiv src="icons/entities.png" />
            </ImgRoundedWrapper>
            <SubtitleText>Corporate</SubtitleText>
          </TitleImgWrapper>
          <SingleContentWrapper>
            <ImgAndTextWrapper>
              <SmallImg src="icons/entities.png" alt="" />
              <Text>Corporate</Text>
              <DotImg src="icons/black-circle.png" alt="" />
              <SmallImg src="icons/people.png" alt="" />
              <Text>25 Users</Text>
            </ImgAndTextWrapper>
            <DatePulicationText> Last update 2 days ago</DatePulicationText>
          </SingleContentWrapper>
        </SingleSlideContainer>
        <SingleSlideContainer>
          <ImgHalf src={photosList[113]?.url} alt="" />
          <TitleImgWrapper>
            <ImgRoundedWrapper>
              <ImgInsideDiv src="icons/book-alt.png" />
            </ImgRoundedWrapper>
            <SubtitleText>Group norms</SubtitleText>
          </TitleImgWrapper>
          <SingleContentWrapper>
            <ImgAndTextWrapper>
              <SmallImg src="icons/book-alt.png" alt="" />
              <Text>Norms</Text>
              <DotImg src="icons/black-circle.png" alt="" />
              <SmallImg src="icons/people.png" alt="" />
              <Text>40 Users</Text>
            </ImgAndTextWrapper>
            <DatePulicationText> Last update 2 days ago</DatePulicationText>
          </SingleContentWrapper>
        </SingleSlideContainer>
        <SingleSlideContainer>
          <ImgHalf src={photosList[115]?.url} alt="" />
          <TitleImgWrapper>
            <ImgRoundedWrapper>
              <ImgInsideDiv src="icons/file-signature.png" />
            </ImgRoundedWrapper>
            <SubtitleText>Real estate contracts</SubtitleText>
          </TitleImgWrapper>
          <SingleContentWrapper>
            <ImgAndTextWrapper>
              <SmallImg src="icons/file-signature.png" alt="" />
              <Text>Client contract</Text>
              <DotImg src="icons/black-circle.png" alt="" />
              <SmallImg src="icons/people.png" alt="" />
              <Text>75 Users</Text>
            </ImgAndTextWrapper>
            <DatePulicationText> Last update 2 days ago</DatePulicationText>
          </SingleContentWrapper>
        </SingleSlideContainer>
      </Slider>
    </WorkspacesWrapper>
  );
};
