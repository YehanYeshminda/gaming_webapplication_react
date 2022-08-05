import { Link } from 'react-router-dom';

const CatergoriesHeader = () => {
	return (
		<div className="mt-3">
			<ul className="flex justify-between text-center">
				<Link to="/Catergory/shooter">
					<li className="bg-slate-500 rounded-3xl w-32 h-14 pt-4 font-semibold text-white">
						Shooter
					</li>
				</Link>
				<Link to="/Catergory/mmorpg">
					<li className="bg-slate-500 rounded-3xl w-32 h-14 pt-4 font-semibold text-white">
						MMORPG
					</li>
				</Link>
				<Link to="/Catergory/pvp">
					<li className="bg-slate-500 rounded-3xl w-32 h-14 pt-4 font-semibold text-white">
						pvp
					</li>
				</Link>
				<Link to="/Catergory/third-Person">
					<li className="bg-slate-500 rounded-3xl w-32 h-14 pt-4 font-semibold text-white">
						third-Person
					</li>
				</Link>
				<Link to="/Catergory/tank">
					<li className="bg-slate-500 rounded-3xl w-32 h-14 pt-4 font-semibold text-white">
						tank
					</li>
				</Link>
				<Link to="/Catergory/racing">
					<li className="bg-slate-500 rounded-3xl w-32 h-14 pt-4 font-semibold text-white">
						racing
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default CatergoriesHeader;
