import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>Copyright © 2023</p>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contactUs">Contact Us</Link></li>
        <li><Link to="/payments">Payments</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;