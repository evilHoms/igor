import { FC } from 'react';

import s from './style.module.scss';

const Code: FC = ({ children }) => {
    return <pre className={s.code}>{children}</pre>;
};

export default Code;
