import { FC } from 'react';
import Content from 'common/Content';
import s from './style.module.scss';

interface IProps {
    name: string
}

const Intro: FC<IProps> = ({ name }) => {
    return (
        <section id={name} className={s.intro}>
            <Content>
                Intro
            </Content>
        </section>
    );
}

export default Intro;
