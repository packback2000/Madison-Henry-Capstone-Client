import React from "react";

const SearchBar = ({input:keyword, onChange:setKeyword}) => {

    return (
        <div className="search-input__container">
      <input 
      className="search-input"
       value={keyword}
       placeholder={"search..."}
       onChange={(e) => setKeyword(e.target.value)}
      />
      </div>
    );
  }
  export default SearchBar