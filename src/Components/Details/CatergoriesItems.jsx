import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CatergoriesItems = () => {
	const params = useParams();

	const [data, setData] = useState(null);
	const [noCater, SetnoCater] = useState('');
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'a49b89ab05msh2298f1c9ad62e02p18eddcjsn87b4e0935a55',
			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		},
	};

	const getData = () => {
		fetch(
			`https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=${params.searchName}`,
			options
		)
			.then((response) => response.json())
			.then((response) => setData(response))
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		getData();
	}, [params.searchName]);

	if (!data) return 'Not an Valid Search Catergory!';

	return (
		<div className="grid grid-cols-3 gap-20 mt-10">
			{data &&
				data.map((ele) => {
					const {
						id,
						title,
						thumbnail,
						short_description,
						genre,
						platform,
						publisher,
						developer,
						release_date,
					} = ele;

					return (
						<Link key={id} to={`/Game/${id}`}>
							<div className="max-w-lg max-h-96 h-96 hover:scale-x-105 hover:scale-y-105 hover:ease-in-out hover:duration-200 hover:drop-shadow-2xl">
								<div className="">
									<img
										src={thumbnail}
										alt="unable to load in"
										className="max-h-60 w-full rounded-t-lg"
									/>
								</div>
								<div className="bg-slate-200 rounded-b-md max-h-48 h-48 px-2">
									<h1 className="text-2xl text-center pt-2">{title}</h1>
									<h3 className="text-1xl line-clamp-4 pt-2 text-center pb-2 max-h-28 h-28">
										{short_description}
									</h3>
									<div className="flex justify-around font-semibold">
										<h1>{genre}</h1>
										<h1>{platform}</h1>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
		</div>
	);
};

export default CatergoriesItems;
