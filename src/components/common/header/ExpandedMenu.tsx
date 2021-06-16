import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { fontSize } from "../../../styledHelpers/FontSizes";
import { Colors } from "../../../styledHelpers/Colors";
import { CustomImgWithMargin } from "../../../styledHelpers/Components";
import { StyledLink } from "../../../styledHelpers/Components";
import { getUsers } from "../../../actions/usersActions";
import { getPhotos } from "../../../actions/photosActions";

import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IPhotosReducer } from "../../../reducers/photosReducer";

const ExpandedWrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${Colors.white};
  border: ${Colors.border};
  border-radius: 4px;
  z-index: 100;
  top: 30px;
`;

const ExpandedContent = styled.div`
  padding: 10px;
  padding-right: 0px;
  z-index: 100;
`;

const AccountWraper = styled.div`
  margin-left: -10px;
  padding-left: 10px;
  border-bottom: ${Colors.border};
  border-top: ${Colors.border};
`;

const ProfileWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: flex-start;
`;

const LogoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 10px;
  margin-top: 10px;
  color: ${Colors.darkerGray};
  cursor: pointer;
`;

const ImgAndTextContainer = styled.div`
  display: flex;
  margin: 5px;
  margin-top: 10px;
  align-items: center;
`;

const ScrollWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
`;

const CustomPargraf = styled.p`
  font-size: ${fontSize[16]};
`;

const CustomSubtitles = styled.h3`
  color: ${Colors.darkerGray};
  margin: 8px 5px;
`;

const CustomFilter = styled.input`
  padding: 4px;
  width: 90%;
  border: 1px solid ${Colors.lightGray};
  border-radius: 4px;
  outline: none;
  :focus {
    border-color: ${Colors.black};
  }
  ::placeholder {
    color: ${Colors.gray};
  }
  &:hover {
    background: ${Colors.whiteSmoke};
  }
`;

const UserAvatar = styled.img`
  border-radius: 50%;
  height: 36px;
  width: 36px;
`;

const RightProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  min-height: 35px;
  justify-content: center;
`;

const ProfileLinkText = styled.p`
  color: ${Colors.blue};
  font-size: ${fontSize[14]};
  margin: 2px 0;

  &:hover {
    color: ${Colors.darkerGray};
  }
`;

const Logout = styled(CustomPargraf)`
  color: ${Colors.darkerGray};
  font-size: ${fontSize[16]};
`;

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;

export const ExpandedMenu: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhotos>(getPhotos());
  }, []);

  const { usersList, photosList, currentUser } = useSelector<
    IState,
    IUsersReducer & IPhotosReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.photos,
  }));

  const [inputText, setInputText] = useState<string>("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  return (
    <ExpandedWrapper>
      <ExpandedContent>
        <CustomFilter
          type="text"
          placeholder="Filter ..."
          value={inputText}
          onChange={inputHandler}
        />
        <ScrollWrapper>
          <CustomSubtitles>Platfom</CustomSubtitles>
          {"Home".toLowerCase().includes(inputText.toLowerCase()) && (
            <ImgAndTextContainer>
              <CustomImgWithMargin src="icons/house2.png" alt="house2" />
              <StyledLink to="/">
                <CustomPargraf> Home </CustomPargraf>
              </StyledLink>
            </ImgAndTextContainer>
          )}

          {"Publications".toLowerCase().includes(inputText.toLowerCase()) && (
            <ImgAndTextContainer>
              <CustomImgWithMargin
                src="icons/publications.png"
                alt="publications"
              />
              <StyledLink to="/publications">
                <CustomPargraf> Publications </CustomPargraf>
              </StyledLink>
            </ImgAndTextContainer>
          )}

          {"People".toLowerCase().includes(inputText.toLowerCase()) && (
            <ImgAndTextContainer>
              <CustomImgWithMargin src="icons/people.png" alt="people" />
              <StyledLink to="/people">
                <CustomPargraf>People </CustomPargraf>
              </StyledLink>
            </ImgAndTextContainer>
          )}

          {"Entities".toLowerCase().includes(inputText.toLowerCase()) && (
            <ImgAndTextContainer>
              <CustomImgWithMargin src="icons/entities2.png" alt="entities2" />
              <StyledLink to="/entities">
                <CustomPargraf> Entities </CustomPargraf>
              </StyledLink>
            </ImgAndTextContainer>
          )}

          {"Administration".toLowerCase().includes(inputText.toLowerCase()) && (
            <ImgAndTextContainer>
              <CustomImgWithMargin
                src="icons/administration.png"
                alt="administration"
              />
              <StyledLink to="/administration">
                <CustomPargraf> Administration</CustomPargraf>
              </StyledLink>
            </ImgAndTextContainer>
          )}

          <CustomSubtitles>Workspaces</CustomSubtitles>

          {"Client contract"
            .toLowerCase()
            .includes(inputText.toLowerCase()) && (
            <ImgAndTextContainer>
              <CustomImgWithMargin src="icons/file-signature.png" alt="file" />
              <StyledLink to="/workspace">
                <CustomPargraf> Client contract </CustomPargraf>
              </StyledLink>
            </ImgAndTextContainer>
          )}

          {"Supplier contract"
            .toLowerCase()
            .includes(inputText.toLowerCase()) && (
            <ImgAndTextContainer>
              <CustomImgWithMargin src="icons/file-signature.png" alt="file" />
              <StyledLink to="/workspace">
                <CustomPargraf> Supplier contract </CustomPargraf>
              </StyledLink>
            </ImgAndTextContainer>
          )}

          {"Corporate".toLowerCase().includes(inputText.toLowerCase()) && (
            <ImgAndTextContainer>
              <CustomImgWithMargin src="icons/entities.png" alt="entities" />
              <StyledLink to="/workspace">
                <CustomPargraf> Corporate </CustomPargraf>
              </StyledLink>
            </ImgAndTextContainer>
          )}

          {"Group Norms".toLowerCase().includes(inputText.toLowerCase()) && (
            <ImgAndTextContainer>
              <CustomImgWithMargin src="icons/book-alt.png" alt="book" />
              <StyledLink to="/workspace">
                <CustomPargraf> Group Norms </CustomPargraf>
              </StyledLink>
            </ImgAndTextContainer>
          )}

          {"Real estate contracts"
            .toLowerCase()
            .includes(inputText.toLowerCase()) && (
            <ImgAndTextContainer>
              <CustomImgWithMargin src="icons/file-signature.png" alt="file" />
              <StyledLink to="/testPage">
                <CustomPargraf> Real estate contracts </CustomPargraf>
              </StyledLink>
            </ImgAndTextContainer>
          )}
        </ScrollWrapper>

        <AccountWraper>
          <CustomSubtitles>Account</CustomSubtitles>

          <ProfileWrapper>
            <UserAvatar
              src={photosList[currentUser?.id - 1]?.url}
              alt="User photo"
            />
            <RightProfileWrapper>
              {usersList[currentUser?.id - 1]?.name}
              <StyledLink to="/profile">
                <ProfileLinkText>See profile</ProfileLinkText>
              </StyledLink>
            </RightProfileWrapper>
          </ProfileWrapper>

          <ImgAndTextContainer>
            <CustomImgWithMargin src="icons/privacy.png" alt="privacy" />
            <StyledLink to="/testPage">
              <CustomPargraf>Privacy </CustomPargraf>
            </StyledLink>
          </ImgAndTextContainer>

          <ImgAndTextContainer>
            <CustomImgWithMargin src="icons/settings.png" alt="settings" />
            <StyledLink to="/testPage">
              <CustomPargraf> Settings </CustomPargraf>
            </StyledLink>
          </ImgAndTextContainer>
        </AccountWraper>
        <LogoutWrapper>
          <CustomImgWithMargin src="icons/logout.png" alt="logout" />
          <StyledLink to="/testPage">
            <Logout> Logout </Logout>
          </StyledLink>
        </LogoutWrapper>
      </ExpandedContent>
    </ExpandedWrapper>
  );
};
