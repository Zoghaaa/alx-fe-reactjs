// SearchBar.jsx
import React from 'react';
import useRecipeStore from '../recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 mb-4 w-full border rounded-md border-gray-300"
        />
    );
};

export default SearchBar;