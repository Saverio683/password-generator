import React from 'react';
import generateOptions from '../../Functions/OptionsGenerator';

const Options = ({lengthChange, onCheck}) => {
	return (
		<div className='w-60 br2 center bg-light-gray shadow'>
			<h2 className='customize pa3 mb0'>Customize your password</h2>
			<hr className='mh3 mt0'/>
			<div className='inline-flex'>
				<label className='ma2 pa2 pr0'>
					<span className="f4">Password length</span>
					<input type='number' className='ml1' min="1" max="50" onInput={lengthChange}></input> 
				</label> 
				{generateOptions('Lowercase', 'Numbers', 'Uppercase', 'Symbols', onCheck)}			
			</div>
		</div>
	);
}

export default Options;