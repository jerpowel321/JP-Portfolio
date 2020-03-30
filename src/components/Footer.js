import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import grey from '@material-ui/core/colors/grey';

const black = grey[900];
const white = grey[50];

const Footer = () => {
    return(
        <BottomNavigation className="footer" style={{backgroundColor: black, height: "100px", bottom: "0", width: "100%"}}>
               <a href="https://github.com/jerpowel321" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-github hvr-grow" style={{color: white, paddingRight: "10px", paddingTop: "30px"}}></i></a> 
                <a href="https://www.linkedin.com/in/jenniferrpowell/" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-linkedin hvr-grow"style={{color: white, paddingRight: "10px", paddingTop: "30px"}}></i></a>
                <a href="https://www.dropbox.com/s/p4cxz05omtwpikc/JenniferPowell_Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf fa-2x ml hvr-grow nml" style={{color:white, paddingRight: "10px", paddingTop: "30px"}}></i></a>
                <a href="https://twitter.com/Jennpowpow" target="_blank" rel="noopener noreferrer"><i class="fab fa-2x fa-twitter hvr-grow" style={{color: white, paddingRight: "10px", paddingTop: "30px"}}></i></a>
        </BottomNavigation>
    )
}

export default Footer;