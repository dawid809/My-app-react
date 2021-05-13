import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Colors } from '../../../styledHelpers/Colors';
import { CustomImgWithMargin } from '../../../styledHelpers/Components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { StyledLink } from '../../../styledHelpers/Components'
import { getUsers } from '../../../actions/usersActions';
import { GET_USERS } from '../../../actions/actionTypes/userTypes';
import { getPhotos } from '../../../actions/photosActions';
import { GET_PHOTOS } from '../../../actions/actionTypes/photoTypes';

import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { IPhotosReducer } from '../../../reducers/photosReducer';


const ExpandedWrapper = styled.div`
position: absolute;
display:flex;
flex-direction:column;
min-width: 240px;
background: white;
border: 1px solid ${Colors.gray};
z-index:5;
padding:10px;
padding-right: 0px;
margin:5px;
left: 30px;
`;

const AccountWraper = styled.div`
margin-left:-10px;
padding-left: 10px;
border-bottom: 1px solid ${Colors.gray};
border-top: 1px solid ${Colors.gray};
`;

const ProfileWrapper = styled.div`
padding:5px;
display:flex;
align-items:flex-start;
`;

const LogoutWrapper = styled.div`
display:flex;
justify-content:center;
padding-right: 10px;
margin-top: 10px;
color:  ${Colors.gray};
`;

const ImgAndTextContainer = styled.div`
display:flex;
margin: 5px;
margin-top: 10px;
align-items: center;
`;

const ScrollWrapper = styled.div`
overflow-x: hidden;
overflow-y: scroll;
`;

const CustomPargraf = styled.p`
align-self:center;
text-decoration:none;
`;

const CustomSubtitles = styled.h3`
color: ${Colors.gray};
margin: 5px;
`;

const CustomFilter = styled.input`
padding: 4px;
width: 90%;
border-color: ${Colors.lightGray};
border-radius: 4px;
::placeholder {
  color: ${Colors.lightGray};;
}
`;

const UserAvatar = styled.img`
border-radius: 50%;
height: 35px;
width: 35px;
`;

const RightProfileWrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
min-height:35px;
justify-content:center;
`;

const ShowProfileWrapper = styled.p`
color: ${Colors.blue};
font-size: 13px;
`;

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>


export const ExpandedMenu: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers())
        dispatch<GetPhotos>(getPhotos())
    }, []);

    const { usersList, photosList, currentUser } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos
    }));

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return (
        <ExpandedWrapper>
            <CustomFilter type="text" placeholder="Filter ..." value={inputText} onChange={inputHandler} />
            <ScrollWrapper>

                <CustomSubtitles>Platfom</CustomSubtitles>
                {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ImgAndTextContainer>
                        <CustomImgWithMargin src="icons/house2.png" />
                        <StyledLink to="/">
                            <CustomPargraf> Home </CustomPargraf>
                        </StyledLink>
                    </ImgAndTextContainer>
                }

                {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ImgAndTextContainer>
                        <CustomImgWithMargin src="icons/publications.png" />
                        <StyledLink to="/publications">
                            <CustomPargraf>  Publications </CustomPargraf>
                        </StyledLink>
                    </ImgAndTextContainer>
                }

                {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ImgAndTextContainer>
                        <CustomImgWithMargin src="icons/people.png" />
                        <StyledLink to="/people">
                            <CustomPargraf>People </CustomPargraf>
                        </StyledLink>
                    </ImgAndTextContainer>
                }

                {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ImgAndTextContainer>
                        <CustomImgWithMargin src="icons/entities2.png" />
                        <StyledLink to="/entities">
                            <CustomPargraf> Entities </CustomPargraf>
                        </StyledLink>
                    </ImgAndTextContainer>
                }

                {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ImgAndTextContainer>
                        <CustomImgWithMargin src="icons/administration.png" />
                        <StyledLink to="/administration">
                            <CustomPargraf> Administration</CustomPargraf>
                        </StyledLink>
                    </ImgAndTextContainer>
                }

                <CustomSubtitles>Workspaces</CustomSubtitles>

                {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ImgAndTextContainer>
                        <CustomImgWithMargin src="icons/file-signature.png" />
                        <CustomPargraf> Client contract </CustomPargraf>
                    </ImgAndTextContainer>
                }

                {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ImgAndTextContainer>
                        <CustomImgWithMargin src="icons/file-signature.png" />
                        <CustomPargraf> Supplier contract </CustomPargraf>
                    </ImgAndTextContainer>
                }

                {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ImgAndTextContainer>
                        <CustomImgWithMargin src="icons/entities.png" />
                        <CustomPargraf> Corporate  </CustomPargraf>
                    </ImgAndTextContainer>
                }

                {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ImgAndTextContainer>
                        <CustomImgWithMargin src="icons/book-alt.png" />
                        <CustomPargraf> Group Norms </CustomPargraf>
                    </ImgAndTextContainer>
                }

                {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ImgAndTextContainer>
                        <CustomImgWithMargin src="icons/file-signature.png" />
                        <CustomPargraf> Real estate contracts </CustomPargraf>
                    </ImgAndTextContainer>
                }

            </ScrollWrapper>

            <AccountWraper>

                <CustomSubtitles>Account</CustomSubtitles>

                <ProfileWrapper>
                    <UserAvatar src={photosList[0]?.url} alt="User photo" />
                    <RightProfileWrapper>
                        {usersList[0]?.name}
                        <StyledLink to="/profile">
                        <ShowProfileWrapper>See profile</ShowProfileWrapper>
                        </StyledLink>
                    </RightProfileWrapper>
                </ProfileWrapper>

                <ImgAndTextContainer>
                    <CustomImgWithMargin src="icons/privacy.png" />
                    <CustomPargraf>Privacy </CustomPargraf>
                </ImgAndTextContainer>

                <ImgAndTextContainer>
                    <CustomImgWithMargin src="icons/settings.png" />
                    <CustomPargraf> Settings </CustomPargraf>
                </ImgAndTextContainer>

            </AccountWraper>
            <LogoutWrapper>
                <CustomImgWithMargin src="icons/logout.png" />
                <CustomPargraf>  Logout </CustomPargraf>
            </LogoutWrapper>

        </ExpandedWrapper>
    )
};
