import { FC } from 'react';
import s from './style.module.scss';

interface IProps {
    name: string
}

const Welcome: FC<IProps> = ({ name }) => {
    return (
        <section id={name} className={s.welcome}>
            <video className={s.background} muted autoPlay loop>
                <source src="/static/videos/loop-video.mp4" type="video/mp4" />
            </video>
            <div className={s.message}>Welc<span className={s.support}>o</span>me</div>
        </section>
    );
}

export default Welcome;
