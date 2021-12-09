import { FC } from 'react';
import s from './style.module.scss';
import loopVideo from './loop-video.mp4';

interface IProps {
    name: string
}

const Welcome: FC<IProps> = ({ name }) => {
    return (
        <section id={name} className={s.welcome}>
            <video className={s.background} muted autoPlay loop>
                <source src={loopVideo} type="video/mp4" />
            </video>
            <div className={s.message}>Welc<span className={s.support}>o</span>me</div>
        </section>
    );
}

export default Welcome;
