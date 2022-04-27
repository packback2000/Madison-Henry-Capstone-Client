import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PostList from "./PostList";
import './SearchPage.css';

const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [listDefault, setListDefault] = useState();
    const [list, setList] = useState();

    const fetchData = async() => {
        return await fetch('http://localhost:5051/posts')
        .then(response => response.json())
        .then(data => {
            setList(data)
            setListDefault(data)
        });
    }

    const updateInput = async (input) => {
        const filtered = listDefault.filter(list => {
            return list.body.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setList(filtered);
    }

    useEffect( () => {fetchData()},[]);

    return(
        <section className="search-section">
        <h1 className="search-header">Search Results</h1>
        <SearchBar 
        input= {input}
        onChange={updateInput}
        />
        <PostList 
        list={list}
        />
        </section>
    )
}
export default SearchPage;