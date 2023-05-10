import React, { useState } from "react";
import "../styles/HomeSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function HomeSearch({ searchTitle, setSearchTitle, searchTags,setSearchTags }) {
  const [search, setSearch] = useState("");
  const[tagsearch,setTagsearch]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTitle(search);
    setSearchTags(tagsearch)
  };

  const handleSearchControl = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (!e.target.value.length) {
      setSearchTitle("");
    }
  };
  const handleTagsearch = (e) => {
    e.preventDefault();
    setTagsearch(e.target.value);
    if (!e.target.value.length) {
      setSearchTags("");
    }
  };

  return (
    <div className="HomeSearch">
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="blogtitle">Search By Title</label>
          <input type="search" name="" id="" onChange={handleSearchControl} />
        </div>
        <div className="formGroup">
          <label htmlFor="blogtag">Search By Tags</label>
          <input type="search" name="" id="" onChange={handleTagsearch}/>
        </div>
        <div className="formGroup">
          <button>
            Search <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default HomeSearch;
