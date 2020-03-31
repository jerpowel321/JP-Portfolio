import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Container from '@material-ui/core/Container'
import Footer from "../components/Footer"
import About from "../components/About"
import Values from "../components/Values"
import grey from '@material-ui/core/colors/grey';
import Achievement from "../components/Achievements"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Barchart from "../components/Barchart"
import Piechart from "../components/Piechart"

const black = grey[900];
const white = grey[50];

class AboutPage extends Component {


	render() {
		return (
			<div id="aboutPage">
				<NavBar />
				<div align="center" style={{ backgroundColor: black, paddingTop: "40px", margin: "0px" }}>
					<img display="block" width="200px" src="/images/me.jpeg" alt="My Portrait"></img>
					<About />
				</div>
				<Values />
				<div id="firstgradient">
				</div>
				<div className="achomplishmentSection" style={{ backgroundColor: black }}>
					<Container>
						<Grid container justify="center" style={{ display: "flex" }}>
							<Grid item xs={12} md={6} className="l" align="center">
							<i style={{ color: white, paddingRight: "10px" }} className="fas fa-2x fa-award"></i>
								<h1 className="ib" align="center" style={{ color: white }}> Accomplishments</h1>
								<Grid container align="left" >
									<Grid item xs={12} sm={6} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
										<Achievement
											txtcolor={white}
											bgcolor={black}
											label="Collage Graduate"
											icon="fas fa-2x fa-graduation-cap"
											description="Graduated from UC Santa Cruz a year early and received cum laude distinction."
										/>
									</Grid>
									<Grid item xs={12} sm={6} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
										<Achievement
											txtcolor={white}
											bgcolor={black}
											label="Coding Bootcamp"
											icon='fas fa-2x fa-code'
											description="Followed my passion for technology and interest in coding." />
									</Grid>
									<Grid item xs={12} sm={6} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
										<Achievement
											txtcolor={white}
											bgcolor={black}
											label="CPA Licensed"
											icon='fas fa-2x fa-calculator'
											description="Passed all four parts of the CPA Exam within two years of graduation." />
									</Grid>
									<Grid item xs={12} sm={6} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
										<Achievement
											txtcolor={white}
											bgcolor={black}
											label="Hackathon Winner"
											icon="fas fa-2x fa-trophy"
											description="Won third place out of twenty-two teams with our business idea FoodDrop." />
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} md={6} align="center" className='l'>
							<i className="fas fa-2x fa-university" style={{ color: white, paddingRight: "10px" }}></i>
								<h1 className="ib"  style={{ color: white }}> Education</h1>
								<Grid container style={{ color: white }} align="left">
									<Grid item xs={12} style={{ padding: "20px" }}>
										<Typography variant="h6">
											UC BERKELEY EXTENSION
								</Typography>
										<Typography variant="subtitle1">
											2019 Certificate in Full-stack Web Development San Francisco, CA
								</Typography>
										<Typography variant="body1">
											Completed intensive full stack web development program focused on gaining technical programming skills in the latest coding platforms as a Full-Stack Web Developer.
								</Typography>
									</Grid>
									<Grid item xs={12} style={{ padding: "20px" }}>
										<Typography variant="h6">
											UC SANTA CRUZ
								</Typography>
										<Typography variant="subtitle1">
											2015 Bachelor of Arts in Business Management Economics Santa Cruz, CA
								</Typography>
										<Typography variant="body1">
											Accounting Emphasis, Cum Laude Distinction • University of London at Queen Mary, Study Abroad.
								</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Container>
				</div>

				<div id="secondgradient"></div>
				<div id="chartArea" style={{ backgroundColor: white}}>
				<Container style={{ display: "flex", justifyContent: "center" , backgroundColor: white}}>
					<Grid container justify="center" style={{ display: "flex" }}>
						<Grid item xs={12} sm={6} >
							<Barchart />
						</Grid>
						<Grid item xs={12} sm={6}>
							<Piechart />
						</Grid>
					</Grid>
					</Container>
				</div>
				
						<Footer />
			</div >
		);
	}

};

export default (AboutPage);
