import { useEffect, useState, FC } from 'react';
import classNames from 'classnames';
import Link, { ILink } from '../Link';
import s from './style.module.scss';

 const Header: FC = () => {
    const [isOnTop, setIsOnTop] = useState<boolean>(true);
    const [currentLink, setCurrentLink] = useState<string>('');

    const links: ILink[] = [{
        name: 'Homepage',
        to: '/',
    }, {
        name: 'My DIY Doc',
        to: '/my-diy-doc',
    }, {
        name: 'test3',
        to: '/test3',
    }];

    const handleDocumentScroll = () => {
        if (window.scrollY > 0) {
            setIsOnTop(false);
        } else {
            setIsOnTop(true);
        }
    };
    
    const handleMount = () => {
        handleDocumentScroll();
        document.addEventListener('scroll', handleDocumentScroll);

        const link = links.reverse().find(link => new RegExp(link.to).test(window.location.href));
        link && setCurrentLink(link.name);
    
        return () => {
            document.removeEventListener('scroll', handleDocumentScroll);
        }
    };

    useEffect(() => handleMount(), []);

    return (
        <header className={classNames({
            [s.commonHeader]: true,
            [s.withBg]: !isOnTop,
        })}>
            <div className={s.expandedHeader}>
                <div className={s.left}>
                    <div className={s.logo}>
                        Some cool logo
                    </div>
                </div>

                <div className={s.right}>
                    <ul className={s.links}>
                        { links.map((link, index) => (
                            <li key={index} className={link.name === currentLink ? s.hiddenLink : null}>
                                <Link link={link} onClick={ () => setCurrentLink(link.name) } />
                            </li>    
                        )) }
                    </ul>
                </div>
            </div>

            <div className={s.smallHeader}>
                <div className={s.left}>
                    <div className={s.logo}>
                        IG<span className={s.support}>O</span>R
                    </div>
                </div>

                <div className={s.right}>
                    <div className={s.currentLink}>
                        { currentLink }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
