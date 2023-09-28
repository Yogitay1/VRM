import React from "react";
import tweet from '../images/tweet.jpg'
import insta from '../images/insta.jpg'
import gmail from '../images/gmail.jpg'

class Footer extends React.Component {
  render() {
    return (
      <footer id="footerId1" className="text-center mt-5 ">
        <p>
          <a href="/about.html" title="about us">
            {" "}
            Contact US
          </a>{" "}
          <br />
          <br />
          <a
            href="https://instagram.com/__un__expected__9?igshid=YmMyMTA2M2Y="
            target="_blank"
            title="instagram"
          >
            <img src={insta} alt="" width="25" height="25" />
          </a>
          &nbsp;
          <a
            href="https://twitter.com/@LGangasani1?lang=en"
            target="_blank"
            title="Twitter"
          >
            <img src={tweet} alt="" width="25" height="25" />
          </a>
          &nbsp;
          <a
            href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            target="_blank"
            title="Gmail"
          >
            <img src={gmail} alt="" width="25" height="25" />
          </a>
          <br />
          <br />
          <span title="mobile Number">
            <i className="fa fa-mobile" aria-hidden="true"></i> Helpline : +91
            7981697784
          </span>
          <br />
          <span title="Mail id">
            <i className="fa fa-envelope" aria-hidden="true"></i> Gmail Id :
            ovrms@gmail.com
          </span>
        </p>
      </footer>
    );
  }
}
export default Footer;