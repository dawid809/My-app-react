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
import { StyledLink } from "../../styledHelpers/Components";
import { linkSmart } from "../common/smartLink/SmartLink";

type GetPhotos = ReturnType<typeof getPhotos>;

const WorkspacesWrapper = styled.div`
  margin: 0.5% 5%;
  position: relative;
  min-height: 290px;
  z-index: 5;
`;

const SingleSlideContainer = styled.div`
  border-radius: 4px;
  z-index: 5;
  cursor: pointer;
  overflow: hidden;
  box-shadow: ${Colors.shadow};
  h2 {
    margin: 5px 10px;
    font-weight: bold;
    font-size: ${fontSize[20]};
  }

  h3 {
    font-size: ${fontSize[14]};
    color: ${Colors.darkerGray};
    margin-left: 10px;
  }

  h4 {
    font-size: ${fontSize[12]};
    color: ${Colors.gray};
    margin-left: 10px;
  }
`;

const TitleText = styled.h2`
  margin: 10px;
  font-weight: bold;
  font-size: ${fontSize[20]};
`;

const HalfImgWrapper = styled.div`
  img {
    width: 100%;
    height: 125px;
  }
`;

const ImgAndTitleWrapper = styled.div`
  display: flex;
  img {
    height: 80px;
  }

  div {
    box-shadow: ${Colors.shadow};
    border-radius: 5px;
    padding: 10px;
    margin-top: -40px;
    z-index: 100;
    background-color: ${Colors.whiteSmoke};
  }
`;

const IconsAndTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 10px 10px;
`;

const DotImg = styled.img`
  width: 5px;
  height: 5px;
  align-self: center;
  margin: 0 10px;
`;

const SmallImg = styled(DotImg)`
  height: 20px;
  width: auto;
  margin: 0;
`;

const workspaces = [
  {
    id: 1,
    name: "Client Contract",
    pathName: "ClientContract",
    imgUrl: "icons/file-signature.png",
    userNumber: 23,
  },
  {
    id: 2,
    name: "Supplier Contract",
    pathName: "SupplierContract",
    imgUrl: "icons/file-signature.png",
    userNumber: 36,
  },
  {
    id: 3,
    name: "Corporate",
    pathName: "Corporate",
    imgUrl: "icons/entities.png",
    userNumber: 45,
  },
  {
    id: 4,
    name: "Group Norms",
    pathName: "GroupNorms",
    imgUrl: "icons/book-alt.png",
    userNumber: 59,
  },
  {
    id: 5,
    name: "Real Estate Contracts",
    pathName: "RealEstateContracts",
    imgUrl: "icons/request.png",
    userNumber: 67,
  },
];

export const Workspaces: FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
    ]
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
        {workspaces.map((value) => (
          <div key={value.id}>
            <StyledLink to={"/workspaces/" + value.pathName}>
              <SingleSlideContainer>
                <HalfImgWrapper>
                  <img src={photosList[value.id]?.url} alt="photo" />
                </HalfImgWrapper>
                <div style={{ padding: "10px", position: "relative" }}>
                  <ImgAndTitleWrapper>
                    <div>
                      <img src={linkSmart(value.imgUrl)} alt="icon" />
                    </div>
                    <h2>{value.name}</h2>
                  </ImgAndTitleWrapper>
                  <IconsAndTextWrapper>
                    <SmallImg src={linkSmart(value.imgUrl)} alt="icon" />
                    <h3>{value.name.split(" ")[0]}</h3>
                    <DotImg
                      src={linkSmart("icons/black-circle.png")}
                      alt="icon"
                    />
                    <SmallImg src={linkSmart("icons/people.png")} alt="icon" />
                    <h3>{value.userNumber} Users</h3>
                  </IconsAndTextWrapper>
                  <h4> Last update {value.id} days ago</h4>
                </div>
              </SingleSlideContainer>
            </StyledLink>
          </div>
        ))}
      </Slider>
    </WorkspacesWrapper>
  );
};
