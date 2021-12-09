import { FC } from 'react';
import s from './style.module.scss';

const Home: FC = ({ children }) => {
    return (
        <main className={s.main}>
            { children }
        </main>
    );
}

export default Home;