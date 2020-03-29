import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'
import Project from '../components/Project'
import { createClient } from "contentful";


const SPACE_ID = 'vhqqfqor19w8';
const ACCESS_TOKEN = 'M_1QrEX-9hG9P5CL65RKxRmqQRIgyaU2KXtmFHEDFIc';

// Initiate the connection to the backend
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    client.getEntries().then(({ items }) => {
      this.setState({ projects: items });
    });
  }

  render() {
    return (
      <div>
        <div>Hello</div>

				{/* this code below works */}
				{this.state.projects ? (
					<div>
						<Grid container spacing={10} style={{ padding: 24 }}>
							{this.state.projects.map(project => (
								<Grid key={project.fields.name} item xs={12} sm={6} lg={4} xl={3}>
									<div >{project.fields.name}</div>
								</Grid>
							))}
						</Grid>
					</div>
				) : "No project found"

				
				}
				{/* This code below doesnt work I think its issues with mapping. before the state has been updated  */}
				{/* {this.state.projects ? (
					<div>
						<TextField style={{ padding: 24 }}
							id="searchInput"
							playholder="Search for Projects"
							margin="normal"
							onChange={this.onSearchInputChange} />
						<Grid key={project.fields.name} container spacing={10} style={{ padding: 24 }}>
							{this.state.projects.map(project => (
								<Grid item xs={12} sm={6} lg={4} xl={3}>
									<Project  project={project} />
								</Grid>
							))}
						</Grid>
					</div>
				) : "No project found"

				
				}
				 */}
      </div>
    );
  }
}

export default App;

// =================================================================
// Ignore all code below
// const SPACE_ID = 'vhqqfqor19w8';
// const ACCESS_TOKEN = 'M_1QrEX-9hG9P5CL65RKxRmqQRIgyaU2KXtmFHEDFIc';

// // Initiate the connection to the backend

// const client = contentful.createClient({
// 	space: SPACE_ID,
// 	accessToken: ACCESS_TOKEN
// })


// class ProjectList extends Component {
// 	_isMounted = false;

// 	constructor(props) {
// 		super(props);
// 		state = {
// 			projects: [],
// 			searchString: ''
// 		}
// 	}

// 	componentDidMount(){
// 		this._isMounted = true;
// 		client.getEntries({
// 			content_type: 'project',
// 			query: this.state.searchString
// 		})
// 			.then(response => {
// 				if (this._isMounted){
// 					this.setState({
// 					projects: response.items
// 				})
// 				console.log(response)
// 			}
// 			})
// 			.catch((error) => {
// 				console.log("Error occrued while fetching data")
// 				console.log(error)
// 			})

// 			console.log(this.state)
// 	}

// 	componentWillUnmount(){
// 		this._isMounted = false
// 	}


// 	onSearchInputChange = (event) => {
// 		if (event.target.value) {
// 			this.setState({
// 				searchString: event.target.value
// 			})
// 		} else {
// 			this.setState({
// 				searchString: ''
// 			})
// 		}
// 		this.getProjects()
// 	}

// 	updatetheState(){
// 		this.setState({
// 			searchString:"eww"
// 		})
// 	}

// 	componentWillUnmount() {
// 		this._isMounted = false
// 	}
// 	render() {
// 		return (
// 			<div>
				
// 				{this.state.projects ? (
// 					<div>
// 						<TextField style={{ padding: 24 }}
// 							id="searchInput"
// 							playholder="Search for Projects"
// 							margin="normal"
// 							onChange={this.onSearchInputChange} />
// 						<Grid container spacing={10} style={{ padding: 24 }}>
// 							{this.state.projects.map(project => (
// 								<Grid item xs={12} sm={6} lg={4} xl={3}>
// 									<Project  project={project} />
// 								</Grid>
// 							))}
// 						</Grid>
// 					</div>
// 				) : "No project found"

				
// 				}
				
// 			</div>
// 		)
// 	}


// }

// export default ProjectList;