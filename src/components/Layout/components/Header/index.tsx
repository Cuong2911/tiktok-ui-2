import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('container-left')}>
                        <Link to="#" className={cx('logo')}>
                            Logo
                        </Link>
                    </div>
                    <div className={cx('container-center')}>search</div>
                    <div className={cx('container-right')}>right</div>
                </div>
            </div>
        </>
    );
}

export default Header;
