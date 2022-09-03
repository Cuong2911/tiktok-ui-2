// library
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
// scss, constants,..
import styles from './NotiFollowersItem.module.scss';
import { INotiFollowerItem } from '~/components/Popper/Notification/constants';
// components
import Wrap from '../Wrap';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

interface Props {
    item: INotiFollowerItem;
}

function NotiFollowersItem(props: Props) {
    const [followState, setFollowState] = useState(false);
    const { item } = props;
    const { timeStamp, userFollowered } = item;

    return (
        <Wrap>
            <div className={cx('avatar')}>
                <span className={cx('circle')}>
                    <img className={cx('img-avatar')} src={userFollowered.avatar} alt="avatar" />
                </span>
            </div>
            <div className={cx('content')}>
                <p className={cx('title-text')}>
                    <Link className={cx('user-link')} to={'/@' + userFollowered.userId}>
                        {`${userFollowered.userId}`}
                    </Link>
                </p>
                <span className={cx('extra-text')}>
                    follow bạn.
                    {timeStamp}
                </span>
            </div>
            {followState ? (
                <Button to="#" btn1 small onClick={() => setFollowState(false)}>
                    Ban be
                </Button>
            ) : (
                <Button to="#" primary small onClick={() => setFollowState(true)}>
                    Follow lại
                </Button>
            )}
        </Wrap>
    );
}

export default NotiFollowersItem;
