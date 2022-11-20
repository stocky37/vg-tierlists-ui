import {Text, Title} from '@mantine/core';

import GameSearch from 'components/GameSearch';
import useGames from 'hooks/api/useGames';

const Games = () => {
	const {isLoading, error, data, isFetching} = useGames();

	if (isLoading || error || isFetching || !data) {
		return <></>;
	}

	return (
		<>
			<Title>Games</Title>
			{data.map((game) => (
				<Text key={game.id}>{game.name}</Text>
			))}
			<GameSearch />
		</>
	);
};

export default Games;
