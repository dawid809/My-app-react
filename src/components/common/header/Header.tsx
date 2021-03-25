import React, {FC} from 'react';
import styled from 'styled-components';

import {LeftIcons} from './LeftIcons';
import {Search} from './Search';
import {RightIcons} from './RightIcons';

import {Wrapper} from '../../../styledHelpers/Components';
import {Colors} from '../../../styledHelpers/Colors';
import {fontSize} from '../../../styledHelpers/FontSizes';


const InnerWrapper = styled.div`
width: 1200px;
background: ${Colors.white};
`;

const RightIcones= styled.div``;

const InputWrapper = styled.div``;

export const Header : FC = () => { 

      return(
        <Wrapper>
          <InnerWrapper>
         <LeftIcons></LeftIcons>
          </InnerWrapper>
        <InputWrapper>
        <Search></Search>
        </InputWrapper>

        <RightIcons></RightIcons>
        </Wrapper>
        // <Wrapper>
        // <InnerWrapper>
        //   <LeftIcons></LeftIcons>
        //   <Search></Search>
        //   <RightIcons></RightIcons>
        //   </InnerWrapper>
        // </Wrapper>>
      );
};
