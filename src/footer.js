import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import nothingSus from './Assets/Nothing-suspicious.png'

function Footer() {
  return (
    <div className="Footer">
      <h2 className="footer-title">Check out some of Dylan's Awesome Work</h2>
      <div className="footer-link-box">
        <a
          className="social-links"
          target="_blank"
          href="https://www.imdb.com/name/nm5416900/?ref_=nv_sr_srsg_3"
          rel="noreferrer"
        >
          IMDB
        </a>
        <a
          className="social-links"
          target="_blank"
          href="https://www.instagram.com/risorgimentofilms/"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            alt="The instagram logo"
          />
        </a>
        <a
          className="social-links"
          target="_blank"
          href="http://"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            alt="The Twitter logo"
          />
        </a>
        <a
          className="social-links"
          target="_blank"
          href="https://www.instagram.com/nothingsuspicio.us/?hl=en"
          rel="noreferrer"
        >
          <img
            className="nothing-sus-logo"
            src={nothingSus}
            alt="The nothing suspicious logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;