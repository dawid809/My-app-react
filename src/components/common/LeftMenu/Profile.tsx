import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Colors } from '../../../styledHelpers/Colors';
import { CustomImg } from '../../../styledHelpers/Components';
import { CustomImageWithBorder } from '../../../styledHelpers/Components';
import { getUsers } from '../../../actions/usersActions';
import { GET_USERS } from '../../../actions/actionTypes/userTypes';
import { getPhotos } from '../../../actions/photosActions';
import { GET_PHOTOS } from '../../../actions/actionTypes/photoTypes';
import { getPosts } from '../../../actions/postsActions';
import { GET_POSTS } from '../../../actions/actionTypes/postTypes';
import { getComments } from '../../../actions/commentsActions';
import { GET_COMMENTS } from '../../../actions/actionTypes/commentTypes';
import { getAlbums } from '../../../actions/albumsActions';
import { GET_ALBUMS } from '../../../actions/actionTypes/albumTypes';

import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { IPhotosReducer } from '../../../reducers/photosReducer';
import { IPostsReducer } from '../../../reducers/postsReducer';
import { ICommentsReducer } from '../../../reducers/commentsReducers';
import { IAlbumsReducer } from '../../../reducers/albumsReducers';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetPosts = ReturnType<typeof getPosts>
type GetComments = ReturnType<typeof getComments>
type GetAlbums = ReturnType<typeof getAlbums>


const ProfileWrapper = styled.div`
box-shadow: -1px 2px 10px -1px #9E9696;
padding:20px 10px;
display: flex;
flex-direction:column;
border-radius: 5px;
`;

const NameText = styled.h2`
font-size: 1rem;
font-weight: 600;
color: ${Colors.blue};
text-align: center;
`;

const SubtitleText = styled.a`
font-size: 0.85rem;
font-weight:500;
margin: 5px;
align-self:center;
margin-left: 15px;
`;

const SmallText = styled.h4`
font-size: 0.8rem;
font-weight: 400;
color: ${Colors.gray};
text-align: center;
margin-top: 3px;
`;

const SubtitleWrapper = styled.div`
margin: 10px;
display:flex;
position:relative;
`;

const AboutMe = styled.div`
border-top: 1px solid lightgray;
margin-top: 10px;
display:flex;
flex-direction:column;
`;

const UserAvatar = styled.img`
align-self:center;
border-radius: 50%;
width: 28%;
height: 28%;
margin: 5px;
`;


export const Profile: FC = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetUsers>(getUsers())
        dispatch<GetPhotos>(getPhotos())
        dispatch<GetPosts>(getPosts())
        dispatch<GetComments>(getComments())
        dispatch<GetAlbums>(getAlbums())
    }, []);

    const { usersList, photosList, currentUser, postsList, commentsList, albumsList } = useSelector<IState, IUsersReducer & IPhotosReducer & IPostsReducer & ICommentsReducer & IAlbumsReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.posts,
        ...globalState.comments,
        ...globalState.albums
    }));

    return (
        <ProfileWrapper>
            {console.log({ usersList })}
            {console.log({ photosList })}
            {console.log({ postsList })}
            {console.log({ commentsList })}
            {console.log({ albumsList })}

            <UserAvatar src={photosList[0]?.url} alt="User photo" />
            <NameText>{usersList[0]?.name}</NameText>
            <SmallText>Job title -  {usersList[0]?.company.name}</SmallText>
            
            <AboutMe>

                <SubtitleWrapper>
                    <CustomImg src="icons/network.png" alt="Network" />
                    <SubtitleText>Your network</SubtitleText>
                    <CustomImageWithBorder src="icons/user-plus.png" alt="Add user" />
                </SubtitleWrapper>

                <SubtitleWrapper>
                    <CustomImg src="icons/publications.png" alt="Publications" />
                    <SubtitleText>Your publications</SubtitleText>
                    <CustomImageWithBorder src="icons/plus.png" alt="Icons" />
                </SubtitleWrapper>

            </AboutMe>
        </ProfileWrapper>
    );
};