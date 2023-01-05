const VideoPlayer = ({ video }) => {
  const [autoplay, setAutoplay] = React.useState('Off');

  const handleToggle = () => {
    autoplay === 'Off' ? setAutoplay('On') : setAutoplay('Off');
  };

  if (video.id) {
    return (
      <div className="video-player">
        <button className="toggle" onClick={handleToggle}>Autoplay {autoplay}</button>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}${autoplay === 'On' && '?autoplay=1'}`} allow='autoplay' allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{video.snippet.title}</h3>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="video-player">Please wait...</div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
