import { FC } from 'react';
import Content from 'common/Content';
import Chart from 'common/Chart';
import s from './style.module.scss';

interface IProps {
    name: string
}

const Description: FC<IProps> = ({ name }) => {
    return (
        <section id={name} className={s.description}>
            <Content>
                Description
                <div><Chart /></div>
                <div><Chart /></div>
            </Content>
        </section>
    );
}

export default Description;
