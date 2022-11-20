import {Select} from '@mantine/core';
import {useMatch} from '@tanstack/react-router';

import useGames from 'hooks/api/useGames';

import GameSearchItem from './components/GameSearchItem';

const GameSearch = () => {
	const {data: games, ...other} = useGames();
	const {navigate} = useMatch('/games/:slug');

	return (
		<Select
			placeholder="Search games"
			itemComponent={GameSearchItem}
			searchable
			data={
				games?.map((game) => ({
					value: game.id,
					label: game.name,
					image: game.image,
				})) || []
			}
			filter={(value, item) =>
				item.label?.toLowerCase()?.includes(value.toLowerCase().trim()) || false
			}
			onChange={(e) => {
				console.log('Changed');
				if (e != null) {
					navigate({
						params: {
							slug: e,
						},
					});
				}
			}}
		/>
	);
};

export default GameSearch;
