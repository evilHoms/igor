import { FC } from "react";
import NextLink from 'next/link';

export interface ILink {
    name: string;
    to: string;
};

interface IProps {
	link: ILink;
	onClick?: () => void;
}

const Link: FC<IProps> = ({ link, onClick }) => {
	return (
		<NextLink href={link.to}>
			<a onClick={ onClick }>{link.name}</a>
		</NextLink>
	)
}

export default Link;
