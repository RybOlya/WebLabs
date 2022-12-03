import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import {
    SearchOutlined,
  } from "@ant-design/icons";
const SearchBar = ({ dwellings, setItem, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setItem(dwellings), setSearchResults(dwellings)

        const resultsArray = dwellings.filter(dwelling => dwelling.title.includes(e.target.value) || dwelling.description.includes(e.target.value))

        setSearchResults(resultsArray)
        setItem(resultsArray)
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    autocomplete="off"
                    onChange={handleSearchChange}
                />
                <button className="search__button">
                    <SearchOutlined />
                </button>
            </form>
        </header>
    )
}
export default SearchBar