import '../App.css';
import Sample from '../Assets/sample.mp4'

function Video() {
  return (
    <div className="center-flex">
      <video
        src={Sample}
        type="video"
        controls
        autoPlay
      />
    </div>
  );
}

export default Video;
