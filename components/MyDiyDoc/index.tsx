import { FC } from 'react';
import s from './style.module.scss';
import Link from 'common/Link';

const MyDiyPage: FC = () => {
    const moduleLinks = [
        {
            name: 'Arduino',
            to: '/my-diy-doc/arduino',
        },
        {
            name: 'Radio module nrf24l01',
            to: '/my-diy-doc/nrf24',
        },
    ];

    const projectLinks = [{
        name: 'rf_controller',
        to: '/my-diy-doc/rf-controller',
    }, {
        name: 'tank_rover',
        to: '/my-diy-doc/tank-rover',
    }];

    return (
        <main className={s.main}>
            <h1>My DIY doc</h1>
            <h2>Modules</h2>
            <ul>
                {moduleLinks.map((link) => (
                    <li key={link.name}>
                        <Link link={link} />
                    </li>
                ))}
            </ul>
            <h2>Projects</h2>
            <ul>
                {projectLinks.map((link) => (
                    <li key={link.name}>
                        <Link link={link} />
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default MyDiyPage;
