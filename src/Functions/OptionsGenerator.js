import React from 'react';

const generateOptions = (name, name2, name3, name4, func) => {

	const container = (child1, child2, child3, child4) => 
		<div className='pa2'>
			{child1}
			{child2}
			{child3}
			{child4}
		</div>

	const element = (name, func) =>
		<label className='inline-flex ma2 f4'>
			<input type="checkbox" name={name} defaultChecked={true} onClick={func}></input>
			<span>{name}</span>
		</label>

	return (
		<div className='inline-flex'>
			{container(element(name, func), element(name2, func), element(name3, func), element(name4, func))}
		</div>
	)
}

export default generateOptions;