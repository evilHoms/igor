import { FC } from 'react';
import s from './style.module.scss';
import Link from 'common/Link';

const MyDiyPage: FC = () => {
    const links = [{
        name: 'Arduino',
        to: '/my-diy-doc/arduino'
    }, {
        name: 'Radio module nrf24l01',
        to: '/my-diy-doc/nrf24'
    }];

    return (
        <main className={s.main}>
            <h1>My DIY doc</h1>
            <ul>
                { links.map(link => <li><Link link={ link } /></li>) }
            </ul>
        </main>
    );
}

export default MyDiyPage;