import { FC } from 'react';
import s from './style.module.scss';

const Page: FC = ({ children }) => {
    return (
        <div className={s.container}>
            { children }
        </div>
    );
};

export default Page;