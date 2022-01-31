import { FC } from 'react';
import s from './style.module.scss';

const TankRover: FC = () => {
    return (
        <main className={s.main}>
            <h1>Tank Rover</h1>

            <section>
                <h2>Description</h2>
                <article>
                    <p>
                        The device is radio controlled 3d printed tank rover
                        It is controlled via nrf24l01 module. It recieves encoded
                        signals from controller, decode it and pass it to esc to
                        controll brushless motors.
                    </p>
                    <p>TODO some image</p>
                    <p>TODO data format</p>
                    <p>TODO connection example</p>
                    <p>TODO snippet example</p>
                    <p>TODO 3d files link</p>
                </article>
            </section>
        </main>
    );
};

export default TankRover;
