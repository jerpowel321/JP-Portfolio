import React, { Component } from 'react'
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import 'typeface-roboto';

// const black = grey[900];
const white = grey[50];

class About extends Component {
	
	render() {

		return (
			<Container>
<div className="l" style={{color: white, paddingTop: "20px", paddingBottom: "20px"}}>
<Typography id="underlineText" variant="h4" align="center"  className="ib">
  About
</Typography>
<Typography align="left" variant="body1" style={{padding: "10px"}}>
My name is Jennifer Powell and I am a Full Stack Developer.

My background is in accounting where I have worked for the past 4 years in the bay area. I have worked at one of the Big Four Firms and am CPA licensed. Recently, I decided to pursue a career in tech. This change came from the realization that I wanted to work in a more creative environment and my desire to code only grew stronger with time, ever since I took my first coding course at UC Santa Cruz.

Recently, I completed UC Berkeley’s 12 week full-time immersive full-stack Web Development Coding Bootcamp. The course involves 600+ hours of in and out of class learning and project work using HTML/CSS/JavaScript, jQuery, Git, deployment across static and dynamic sites, Node, Express, React, Firebase, MongoDB, MySQL, and computer science fundamentals.

This bootcamp ignited my passion for programming. I love expanding and utilizing my knowledge base through building quality websites and applications. My curiosity to learn has enabled me to tackle challenges head on and identify problems before they become larger issues.

I'm excited to start my career in tech and learn more about programming! I am a positive and driven person who enjoys working collaboratively and excels in a fast pace environment. I'm looking for opportunities to grow my career where I can apply my skills.

Thank you for your time!
</Typography>
<a id="values"></a> 
</div>

</Container>


		)

	}
}

export default About