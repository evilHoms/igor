import { FC } from 'react';
import s from './style.module.scss';

const RfController: FC = () => {
    return (
        <main className={s.main}>
            <h1>RF Controller</h1>

            <section>
                <h2>Description</h2>
                <article>
                    <p>
                        The purpose of the device to send radio signals with encoded data
                        from controls to any device, that listen it and can decode data format.
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

export default RfController;
