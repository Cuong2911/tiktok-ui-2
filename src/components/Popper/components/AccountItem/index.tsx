import classNames from 'classnames/bind';
import { BsCheckCircleFill } from 'react-icons/bs';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="" alt="avatar" />
            <div className={cx('info')}>
                <div className={cx('title')}>
                    <div className={cx('user')}>cuong</div>
                    <BsCheckCircleFill className={cx('check')} />
                </div>
                <div className={cx('desc')}>hoang cuong</div>
            </div>
        </div>
    );
}

export default AccountItem;
