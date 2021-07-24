import '../App.css';
import About from './aboutContent'
import Video from './videoContent';
import CTA from './ctaContent';
import Divider from './dividerContent';

function CenterContent() {
  return (
    <div className="CenterContent">
      <About/>
      <Divider/>
      <Video/>
      <Divider/>
      <CTA/>
    </div>
  );
}

export default CenterContent;
