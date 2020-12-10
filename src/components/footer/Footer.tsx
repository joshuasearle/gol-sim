import React from 'react';
import Logo from '../../assets/GitHub-Mark-Light-32px.png';
import classes from '../../css/classes';

const Footer: React.FC = () => {
  return (
    <div className={classes.footer}>
      <p>See the source code on GitHub</p>
      <a href='https://github.com/joshuasearle/gol-sim'>
        <img src={Logo} alt='GitHub Logo'></img>
      </a>
    </div>
  );
};

export default Footer;
