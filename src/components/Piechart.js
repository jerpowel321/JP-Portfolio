import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import Container from '@material-ui/core/Container'
const data = {
	labels: [
        'Swim',
		'Cook',
        'Ski',
        'Travel',
        'Games',
        'Karaoke',
        'Glamp',
        'Read',
        'Softball'
	],
	datasets: [{
		data: [20, 15, 5, 20, 15,10,5,5, 5],
		backgroundColor: [
		'#42a5f5',
		'#ffa726',
        '#9ccc65',
        '#26c6da',
        '#7e57c2',
        '#ef5350',
        '#26a69a',
        '#5c6bc0',
        '#ff7043'
		],
		hoverBackgroundColor: [
		'#90caf9',
		'#ffcc80',
        '#c5e1a5',
        '#80deea',
        '#b39ddb',
        '#ef9a9a',
        '#80cbc4',
        '#9fa8da',
        '#ffab91'
		]
	}]
};

export default class Barchart extends React.Component{
  render() {
    return (
        <Container maxWidth="sm">
       <div>
       <h3>Hobbies</h3>
        <Doughnut data={data} />
       </div>
        </Container>
    );
  }
};