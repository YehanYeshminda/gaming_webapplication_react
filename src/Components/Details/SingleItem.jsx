import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SingleItem = () => {
	const params = useParams();

	const [data, setData] = useState(null);
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'a49b89ab05msh2298f1c9ad62e02p18eddcjsn87b4e0935a55',
			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		},
	};

	const getData = () => {
		fetch(
			`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params.id}`,
			options
		)
			.then((response) => response.json())
			.then((response) => setData(response))
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		getData();
	}, [params.searchName]);

	if (!data) return 'loading....';

	return (
		<div className="max-w-7xl max-auto mt-10">
			<div className="">
				{data && (
					<div className="flex">
						<div className="flex-1">
							<h1>Game Title : {data.title}</h1>
						</div>
						<div className="max-w-4xl mx-auto flex-[3]">
							<div className="">
								<img src={data.thumbnail} className="w-full" alt="" />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SingleItem;
