import { FC } from 'react';
import s from './style.module.scss';

export interface ILinkedSection {
	href: string
}

const Content: FC = ({ children }) => {
    return (
        <div className={s.content}>
            { children }
        </div>
    );
}

export default Content;
