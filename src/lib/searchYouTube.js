import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

// https://app-hrsei-api.herokuapp.com/api/recastly/videos

const searchYouTube = (query = '', successCallback, errorCallback) => {
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
      successCallback(data);
    },
    error: errorCallback || function(error) {
      console.error('Recast.ly: Failed to fetch messages', error);
    }
  });
};

export default searchYouTube;
