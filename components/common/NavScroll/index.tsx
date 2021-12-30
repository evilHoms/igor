import { FC, useEffect } from 'react';
import { Link, scroller } from 'react-scroll';
import { ReactSVG } from 'react-svg';
import Icon from '../Icon';
import IconNames from '../Icon/constants/icon-names';
import s from './style.module.scss';

interface IProps {
    links: string[];
}

const NavScroll: FC<IProps> = ({ links }) => {
    let prevLink: string | null = null;
    let nextLink: string | null = null;
    let wheelScrolled = 0;
    let isScrolling = false;

    const handleSetActive = (to: string) => {
        const currentIndex = links.findIndex((link) => link === to);

        if (currentIndex > 0) {
            prevLink = links[currentIndex - 1];
        }

        if (currentIndex < links.length - 1) {
            nextLink = links[currentIndex + 1];
        }
    };

    const handleWheel = (e: WheelEvent) => {
        if (isScrolling) {
            wheelScrolled = 0;
            return;
        }

        const scrollThreshold = 3;

        if (e.deltaY > 0 && wheelScrolled < scrollThreshold) {
            wheelScrolled = wheelScrolled >= 0 ? wheelScrolled + 1 : 0;
        } else if (e.deltaY < 0 && Math.abs(wheelScrolled) < scrollThreshold) {
            wheelScrolled = wheelScrolled <= 0 ? wheelScrolled - 1 : 0;
        }

        if (Math.abs(wheelScrolled) >= scrollThreshold) {
            isScrolling = true;
            setTimeout(() => (isScrolling = false), 900);

            const scrollLink = wheelScrolled > 0 ? nextLink : prevLink;

            scroller.scrollTo(scrollLink, {
                duration: 500,
                smooth: true,
            });

            handleSetActive(scrollLink);
            wheelScrolled = 0;
        }
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.addEventListener('wheel', handleWheel);

        return () => {
            document.body.style.overflow = null;
            window.removeEventListener('wheel', handleWheel);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={s.navScroll}>
            <ReactSVG className={s.svgBg} src="/static/images/common/nav-bar-bg.svg" />
            {links.map((link, index) => (
                <Link
                    style={{ marginLeft: index * 3 + 'px' }}
                    className={s.link}
                    activeClass={s.activeLink}
                    to={link}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={handleSetActive}
                    key={link}
                >
                    <Icon name={IconNames.Dot} />
                </Link>
            ))}
        </div>
    );
};

export default NavScroll;
