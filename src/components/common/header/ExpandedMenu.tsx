import React, {FC} from 'react';
import styled from 'styled-components';

import {Colors} from '../../../styledHelpers/Colors';

const ExpandedWrapper = styled.div`
position: absolute;
min-width: 250px;
min-height:100px;
background: white;
border: 1px solid ${Colors.gray};
z-index:1;
padding:10px;
`;

const AccountWraper = styled.div`
border-top: 1px solid ${Colors.gray};
`;

const ProfileWrapper = styled.div`
padding:5px;
`;

export const ExpandedMenu : FC = () => {
    return(
    <ExpandedWrapper>
        <div>
            <img src="icons/entities.png" /> Corporate
            <img src="icons/arrow-down.png" /> 
        </div>
        <input type="text" placeholder="Filter ..."/>

         <p>Platfom</p>

         <div>
            <img src="icons/house.png" /> Home
        </div>

        <div>
            <img src="icons/publications.png" /> Publications
        </div>

        <div>
            <img src="icons/people.png" /> People
        </div>

        <div>
            <img src="icons/entities2.png" /> Entities
        </div>

        <div>
            <img src="icons/administration.png" /> Administration
        </div>

        <p>Workspaces</p>

        <div>
            <img src="icons/house.png" /> Client contract
        </div>

        <div>
            <img src="icons/house.png" /> Supplier contract
        </div>

        <div>
            <img src="icons/entities.png" /> Corporate
        </div>

        <div>
            <img src="icons/house.png" /> Group Norms
        </div>

        <div>
            <img src="icons/house.png" /> Real estate contracts
        </div>

    <AccountWraper>
        <p>Account</p>
        <ProfileWrapper>
        <div>
            <img src="icons/people.png" /> 
            Name 
            See profile
        </div>
        </ProfileWrapper>
        <div>
            <img src="icons/privacy.png" /> Privacy
        </div>

        <div>
            <img src="icons/settings.png" /> Settings
        </div>
    </AccountWraper>

    </ExpandedWrapper>
    )
};
    