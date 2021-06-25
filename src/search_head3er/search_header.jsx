import styles from './search_header.module.css';

import React, {useRef} from 'react';

const SearchHeader = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onClick = () => {
        handleSearch();
    };

    const onKeyPress = (event) => {
        if(event.key === 'Enter') {
            handleSearch();
        }
    }
    return (


        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="https://www.gstatic.com/youtube/img/branding/favicon/favicon_144x144.png" alt="apple pie" width="40px" height="40px"/>
                <h1 className={styles.title}>Youtube</h1>
            </div>
            
            <input ref={inputRef} className={styles.input} type="search" placeholder="search" onKeyPress={onKeyPress}></input>
            <button className={styles.button} type="submit" onClick={onClick}>
                <i className="fas fa-search"></i>
            </button>
        </header>
    )
};

export default SearchHeader;