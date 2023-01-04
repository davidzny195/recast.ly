import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

const App = () => {
  const [currentVideo, setVideo] = React.useState(exampleVideoData[0]);
  const [currentList, setList] = React.useState(exampleVideoData);

  const handleVideoChange = event => {
    let title = event.target.innerText;
    let video = exampleVideoData.find((data) => data.snippet.title === title);
    setVideo(video);
    // setVideo(event.target.value);
  };

  const test = () => {
    console.log(searchYoutube('hello'));
  };


  return (
    <div>
      <nav className="navbar">
        <Search />
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={currentList} onSelect={handleVideoChange} />
        </div>
        <button onClick={test}>Click</button>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
