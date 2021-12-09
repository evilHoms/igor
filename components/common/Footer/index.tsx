import { FC } from 'react';
import Content from 'common/Content';
import s from './style.module.scss';

interface IProps {
    name: string
}

const Footer: FC<IProps> = ({ name }) => {
    return (
        <footer id={name} className={s.commonFooter}>
            <Content>
                footer
            </Content>
        </footer>
    );
}

export default Footer