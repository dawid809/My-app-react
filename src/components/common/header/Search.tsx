import React, {FC} from 'react';


const spanStyles = {
  color: "#fff",
  borderColor: "#00f"
};

export const Search : FC = () => { 
    return(
      <div className="search">
     <input  style={spanStyles} type="text" placeholder="Search" />
     <img src="icons/search.png" alt=""/>
  </div>
    );
}