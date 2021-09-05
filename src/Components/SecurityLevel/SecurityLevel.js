import React from 'react';

const SecurityLevel = ({password}) => {
	let level = undefined;
	let color = undefined;
	
	if(password.length <= 3) {
		level = 5;
		color = '#5D0000';
	} else if (password.length <=5) {
		level = 20;
		color = '#D10000';
	} else if (password.length <=7) {
		level = 40;
		color = '#E98700';
	} else if (password.length <=9) {
		level = 60;
		color = '#1FAC1F';
	} else {
		level = 100;
		color = '#006400'
	}

	const style = {
		opacity: 1,
		width: `${level}%`,
		backgroundColor: `${color}`
	}
	
	return (
		<div className="container mt2">
			<div className="bar" style={style}>
			</div>
		</div>
	)
}

export default SecurityLevel;