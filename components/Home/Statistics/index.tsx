import { FC } from 'react';
import Content from 'common/Content';
import s from './style.module.scss';

interface IProps {
    name: string
}

const Statistics: FC<IProps> = ({ name }) => {
    return (
        <section id={name} className={s.statistics}>
            <Content>
                Statistics
            </Content>
        </section>
    );
}

export default Statistics;
