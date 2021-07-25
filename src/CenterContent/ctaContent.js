import '../App.css';

function CTA() {
  return (

    
    <div className="center-flex">
      <h1 id="contact">Contact</h1>
      <p>Please feel free to request a resume or request a dance</p>
      <a className="CTA-button" href="mailto:dylanpresents@gmail.com?subject=Resume Request!&body=Hey Dylan! Could I please get a copy of your resume?">Request a resume</a>
      <a className="CTA-button" target="_blank" href="https://giphy.com/search/dance">Request a dance</a>
    </div>
  );
}

export default CTA;
