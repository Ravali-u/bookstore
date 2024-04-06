import React from 'react';

function SearchBar({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for books..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;