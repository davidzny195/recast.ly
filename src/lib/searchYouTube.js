import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

const searchYouTube = (query = '', callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      videoEmbeddable: true,
      part: 'snippet',
      type: 'video',
      maxResults: 10
    },
    success: console.log('success'),
    error: callback || function(error) {
      console.error('Recast.ly: Failed to fetch messages', error);
    }
  });
};

export default searchYouTube;
