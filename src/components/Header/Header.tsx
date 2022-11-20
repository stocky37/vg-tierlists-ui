import {Container, Header as MantineHeader, Title} from '@mantine/core';

const Header = () => (
	<MantineHeader height={56}>
		<Container>
			<Title>Tier Lists</Title>
		</Container>
	</MantineHeader>
);

export default Header;
