import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

// https://app-hrsei-api.herokuapp.com/api/recastly/videos

const searchYouTube = (query = '', callback) => {
  // TODO
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      videoEmbeddable: true,
      part: 'snippet',
      type: 'video'
    },
    success: function(data) {
      callback(data);
    },
    error: function(error) {
      console.error('Recast.ly: Failed to fetch messages', error);
    }
  });

  // fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&q=${query}&maxResults=10`).then((response) => response.json()
  //   .then((data) => {
  //     callback(data.items);
  //   }).catch((error) => {
  //     console.error('Recast.ly: Failed to fetch messages', error);
  //   });

};

export default searchYouTube;


