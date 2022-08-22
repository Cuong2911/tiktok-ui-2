// library
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// scss,constants,..
import styles from './MenuItem.module.scss';
import { IMenuItem } from '../../Menu/constants';

const cx = classNames.bind(styles);

interface Props {
    item: IMenuItem;
    onClick?: () => void;
    borderTop?: boolean;
}

function MenuItem(props: Props) {
    const token = localStorage.getItem('tiktok-user');
    const user = token && JSON.parse(token);

    const { item, onClick, borderTop = false } = props;
    const Comp = item.title === 'Xem hồ sơ' || item.to ? Link : 'div';
    const path = user && item.title === 'Xem hồ sơ' ? user.id : item.to || '';

    return (
        <li className={cx('menu-item-wrap', { borderTop })} onClick={onClick}>
            <Comp to={path} className={cx('menu-item')}>
                {!!item.icon && <img src={item.icon} alt="" className={cx('menu-item-icon')} />}
                <span className={cx('menu-item-title')}>{item.title}</span>
            </Comp>
        </li>
    );
}

export default MenuItem;
