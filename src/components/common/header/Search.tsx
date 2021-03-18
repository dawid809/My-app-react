import React, {FC} from 'react';

export const Search : FC = () => { 
    return(
      <div className="search">
     <input type="text" placeholder="Search" />
     <img src="icons/search.png" alt=""/>
  </div>
    );
}