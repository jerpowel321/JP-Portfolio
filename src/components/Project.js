import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Project = (props) => {
    return (
        <div >
            {props.project ? (
                <Card >
                    {/* <CardMedia style={{height:0, paddingTop: '56.25%'}}
                    image={props.project.fields.projectImage.fields.file.url}
                    title={props.project.fields.title}
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h6">
                            {props.project.fields.name}
                        </Typography>
                        <Typography component="p">
                            {props.project.fields.description}
                        </Typography>
                        <Typography variant="p" component="p">
                            {props.project.fields.skills != "undefined" ? (
                               
                                <p> <b style={{ display: "inline", paddingRight: "5px" }}>Skills: </b>
                                    {props.project.fields.skills.map(skill => (
                                        <p style={{ display: "inline", paddingRight: "5px" }} key={skill}>{skill}</p>
                                    ))
                                    }
                                </p>

                            ) : null
                            }
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href={props.project.fields.githubLink} target="_blank"><i className="fab fa-2x fa-github"></i></a>
                        {props.project.fields.deployedSite ? (
                            <a href={props.project.fields.deployedSite}><i className="fas fa-2x fa-rocket"></i></a>) : null
                        }
                    </CardActions>
                    <CardActions>

                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}

export default Project