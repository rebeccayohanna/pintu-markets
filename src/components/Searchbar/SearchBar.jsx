import React, { useState, useEffect, useRef } from 'react';
import {ReactComponent as SearchLogo} from '../../assets/icons/search.svg';

function SearchBar({suggestions}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleInputClick = () => {
        setShowSuggestions(true);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setShowSuggestions(false);
    };

    return (
        <div className="flex px-4 sm:bg-gray-100 rounded-md items-center" ref={searchRef}>
            <SearchLogo />
            <input
                type="text"
                placeholder="Cari aset di Pintu..."
                value={searchTerm}
                onChange={handleInputChange}
                onClick={handleInputClick}
                className="sm:block hidden w-80 px-4 py-2 rounded-md border border-gray-100 bg-gray-100"
            />
            {showSuggestions && (
                <ul className="absolute z-10 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-md">
                    {suggestions
                        .filter((suggestion) => suggestion.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((suggestion) => (
                            <li
                                key={suggestion}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;
