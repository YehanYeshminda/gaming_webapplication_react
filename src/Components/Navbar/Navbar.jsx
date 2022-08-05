import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="flex justify-between h-20 bg-slate-100 items-center text-lg">
			<ul className="flex mx-8">
				<li className="mx-10">
					<Link to="/">Games</Link>
				</li>
				<li className="mx-10">Platform</li>
			</ul>
			<ul className="flex mx-8">
				<li className="mx-10">Sort-Games</li>
			</ul>
		</div>
	);
};

export default Navbar;
