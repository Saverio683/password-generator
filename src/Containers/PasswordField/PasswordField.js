import React from 'react';

import copyIco from '../../Icons/copy.png';
import reloadIco from '../../Icons/reload.png';

const PasswordField = ({children, password, onCopy, onNewPassword}) => {
	return (
		<div className='w-60 br2 center mv5 shadow bg-light-gray'>
			<div className='inline-flex w-100 mv2'>
			<h2 className='ma0 pa3 pl4 dim' id='password'>{password}</h2>
				<div className='tooltip ml-auto pointer'>
					<img src={copyIco} alt='ico' width='20px' height='20px' onClick={onCopy}></img>
					<span className='tooltiptext'>Copy</span>
				</div>
				<div className='tooltip mh3 pointer '>
					<img src={reloadIco} alt='ico' width='20px' height='20px' onClick={onNewPassword}></img>
					<span className='tooltiptext'>Change</span>
				</div>				
			</div>
			{children}
		</div>
	);
}

export default PasswordField;