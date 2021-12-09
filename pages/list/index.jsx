import Link from 'next/link';
import style from './style.module.scss';

export default function List() {
    return (
        <div className={style.main}>
            Some list
            <Link href="/">
                <a>Home</a>
            </Link>
            <div className={style.test}>
                test
            </div>
        </div>
    )
}