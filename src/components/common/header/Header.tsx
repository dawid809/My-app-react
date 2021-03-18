import React, {FC} from 'react';
import {LeftIcons} from './LeftIcons';
import {Search} from './Search';
import {RightIcons} from './RightIcons';


export const Header : FC = () => { 
      return(
        <div className="header">
          <LeftIcons></LeftIcons>
          <Search></Search>
          <RightIcons></RightIcons>
    </div>
      );
}
