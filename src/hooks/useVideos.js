import {useState, useEffect} from 'react';
import youtube from './../api/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        searchVideos(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const searchVideos = async term => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: 'video',
            key: 'AIzaSyCQdwIOK8xrDh-fUIumIlvAQTu3EPT5FqI'
          }
        });

        setVideos(response.data.items);
    };

    return [videos, searchVideos];
};

export default useVideos;