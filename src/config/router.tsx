import {createBrowserRouter} from 'react-router-dom';
import {QueryClient, QueryFunction, QueryKey} from '@tanstack/react-query';

import {getGame} from 'api';
import Layout from 'components/Layout';
import {queryClient} from 'config';
import {Game, Home} from 'pages';

type QueryProps = {
	queryKey: QueryKey;
	queryFn: QueryFunction;
};

const queryLoader = (queryClient: QueryClient, q: QueryProps) => async () => {
	if (!queryClient.getQueryData(q.queryKey)) {
		await queryClient.fetchQuery(q.queryKey, q.queryFn);
	}
	return {q: q.queryKey};
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/:id',
				element: <Game />,
				loader: ({params}) => params.id && queryLoader(queryClient, getGame(params.id)),
			},
		],
	},
]);

export default router;
