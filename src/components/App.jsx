import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

const App = () => {
  const [currentList, setList] = React.useState([]);
  const [currentVideo, setVideo] = React.useState({});

  const handleVideoChange = event => {
    let title = event.target.innerText;
    let video = currentList.find((data) => data.snippet.title === title);
    setVideo(video);
  };


  const generateYoutubeVideos = (query = 'Hack Reactor') => {
    searchYouTube(query, (data) => {
      if (data.length) {
        setList(data);
        setVideo(data[0]);
      }
    });
  };

  React.useEffect(() => {
    generateYoutubeVideos();
  }, []
  );

  return (
    <div>
      <nav className="navbar">
        <Search handleSearch={generateYoutubeVideos} />
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={currentList} onSelect={handleVideoChange} />
        </div>
      </div>
    </div>
  );
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
