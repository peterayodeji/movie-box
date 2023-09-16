import FacebookIcon from "../svg/fb.svg";
import InstagramIcon from "../svg/insta.svg";
import TwitterIcon from "../svg/twitter.svg";
import YoutubeIcon from "../svg/youtube.svg";

function Footer() {
  return (
    <div className="container footer">
      <div className="social">
        <img src={FacebookIcon} alt="facebook" />
        <img src={InstagramIcon} alt="facebook" />
        <img src={TwitterIcon} alt="facebook" />
        <img src={YoutubeIcon} alt="facebook" />
      </div>
      <div className="links">
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy &amp; Policy</a>
        <a href="#">Press Room</a>
      </div>
      <div className="copyright">© 2023 MovieBox by Loadedincoded</div>
    </div>
  );
}

export default Footer;
