import './app.css';
import React, {useState, useEffect} from 'react';
import VideoList from './video_list/video_list';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

  fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=kr&key=AIzaSyDij5uthJaDftvlHUTuNPS6DKBARn9IbY0", requestOptions)
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
    return () => {
    }
  }, []);

  return (
    <VideoList videos={videos}></VideoList>
  );
}

export default App;
