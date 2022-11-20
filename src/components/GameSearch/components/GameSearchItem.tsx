import {ComponentPropsWithoutRef, forwardRef} from 'react';
import {Avatar, Group, Text} from '@mantine/core';

interface ItemProps extends ComponentPropsWithoutRef<'div'> {
	image: string;
	label: string;
}

const GameSearchItem = forwardRef<HTMLDivElement, ItemProps>(
	({image, label, ...other}: ItemProps, ref) => (
		<div ref={ref} {...other}>
			<Group noWrap>
				<Avatar src={image} />
				<Text>{label}</Text>
			</Group>
		</div>
	)
);

GameSearchItem.displayName = 'GameSearchItem';

export default GameSearchItem;
