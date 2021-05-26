import React, {FC, useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Colors } from '../../styledHelpers/Colors';

import { getUsers } from '../../actions/usersActions';
import { GET_USERS } from '../../actions/actionTypes/userTypes';
import { getPhotos } from '../../actions/photosActions';
import { GET_PHOTOS } from '../../actions/actionTypes/photoTypes';
import { getPosts } from '../../actions/postsActions';
import { GET_POSTS } from '../../actions/actionTypes/postTypes';

import{ useSelector} from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotosReducer } from '../../reducers/photosReducer';
import { IPostsReducer } from '../../reducers/postsReducer';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetPosts = ReturnType<typeof getPosts>

const PublicationsWrapper = styled.div`
display: flex;
height: 250px;
margin: 0.5% 5%;
border: 1px solid ${Colors.gray};
border-radius: 5px;
position: relative;
`;

const BigPhoto = styled.img`
min-width: 250px;
height: 100%;
overflow: hidden;
`;

const OnPhotoContainer = styled.div`
height: 100%;
width: 250px;
position: relative;
`;

const ContentContainer = styled.div`
width:100%;
height:50%;
position: absolute;
z-index:6;
bottom: -30px;
margin: 0 5px;
`;

const LatestPublicationsWrapper = styled.div`
height: 100%;
position: relative;
display: flex;
flex-direction: column;
margin: 10px;
`;

const SinglePublication = styled.a`
display: flex;
width:100%;
color: white;
margin: 0 5px;
`;

const ContentContainer2 = styled.div`
z-index:5;
display: flex;
margin: 5px;
`;

const DateAndUserContainer = styled.div`
font-size: 12px;
display: flex;
align-items: center;
align-self: flex-start;
color: black;
margin: 5px;
`;

const Date = styled.h6`
color: white;
`;

const UserPhoto = styled.img`
border-radius: 50%;
width: 17px;
height: 17px;
margin: 0 5px;
`;

const TitleText = styled.h2`
margin: 2px 5px;
font-weight: bold;
`;

const LinkText = styled.h3`
color: blue;
margin: 0 5px;
`; 

const SmallPhoto = styled.img`
max-height: 55px;
max-width: 55px;
`;

export const LatestPublications: FC = () => {

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch<GetUsers>(getUsers())
      dispatch<GetPhotos>(getPhotos())
      dispatch<GetPosts>(getPosts())
  }, []);

  const {usersList, photosList, postsList} = useSelector<IState, IUsersReducer & IPhotosReducer & IPostsReducer>(globalState => ({
    ...globalState.users,
    ...globalState.photos,
    ...globalState.posts
}));

    return (
        <PublicationsWrapper>
            <OnPhotoContainer>
            <BigPhoto src={photosList[111]?.url} alt="Jakieś tam zdjęcie"/>
                <ContentContainer>
                  <SinglePublication>
                    {postsList[2]?.title}
                  </SinglePublication>
                  <DateAndUserContainer>
                    <Date>
                    7.07.2012 
                    </Date>
                    <UserPhoto src={photosList[131]?.url}/>
                    <Date>
                    {usersList[4]?.name}
                    </Date>
                  </DateAndUserContainer>
                </ContentContainer>
          </OnPhotoContainer>

          <LatestPublicationsWrapper>
          <TitleText>Latest publications</TitleText>
          <ContentContainer2>
          <SmallPhoto src={photosList[111]?.url} alt="Jakieś tam zdjęcie"/>
            <div style= {{display: "flex", flexDirection: "column"}}>
            <SinglePublication style= {{color: "black"}}>
                    {postsList[2]?.title}
                  </SinglePublication>
                  <DateAndUserContainer>
                    <Date style= {{color: "black"}}>
                    7.07.2012 
                    </Date>
                    <UserPhoto src={photosList[131]?.url}/>
                    <Date style= {{color: "black"}}>
                    {usersList[4]?.name}
                    </Date>
                  </DateAndUserContainer>
            </div>
              </ContentContainer2>

              <ContentContainer2>
          <SmallPhoto src={photosList[111]?.url} alt="Jakieś tam zdjęcie"/>
            <div style= {{display: "flex", flexDirection: "column"}}>
            <SinglePublication style= {{color: "black"}}>
                    {postsList[2]?.title}
                  </SinglePublication>
                  <DateAndUserContainer>
                    <Date style= {{color: "black"}}>
                    7.07.2012 
                    </Date>
                    <UserPhoto src={photosList[131]?.url}/>
                    <Date style= {{color: "black"}}>
                    {usersList[4]?.name}
                    </Date>
                  </DateAndUserContainer>
            </div>
              </ContentContainer2>

              
              <ContentContainer2>
          <SmallPhoto src={photosList[111]?.url} alt="Jakieś tam zdjęcie"/>
            <div style= {{display: "flex", flexDirection: "column"}}>
            <SinglePublication style= {{color: "black"}}>
                    {postsList[2]?.title}
                  </SinglePublication>
                  <DateAndUserContainer>
                    <Date style= {{color: "black"}}>
                    7.07.2012 
                    </Date>
                    <UserPhoto src={photosList[131]?.url}/>
                    <Date style= {{color: "black"}}>
                    {usersList[4]?.name}
                    </Date>
                  </DateAndUserContainer>
            </div>
              </ContentContainer2>
              <LinkText>See more publications</LinkText> 
          </LatestPublicationsWrapper>
        </PublicationsWrapper>
    );
  };