import styles from "./app.module.css";
import React, { useState, useEffect } from "react";
import VideoList from "./video_list/video_list";
import SearchHeader from "./search_head3er/search_header";

function App({youtube}) {
    const [videos, setVideos] = useState([]);

    const search = (query) => {
        youtube //
        .search(query) //
        .then(videos=>setVideos(videos))
    }

        

    useEffect(() => {
      youtube //
          .mostPopular() //
          .then((videos) => setVideos(videos));

    
    
    }, []);

    return (
        <div className={styles.app}>
            <SearchHeader onSearch={search}></SearchHeader>
            <VideoList videos={videos}></VideoList>
        </div>
    );
}

export default App;
