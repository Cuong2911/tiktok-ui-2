// library
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// scss, constants,..
import styles from './NotiLikesItem.module.scss';
// components
import Wrap from '../Wrap';
import { INotiLikeItem } from '~/components/Popper/Notification/constants';

const cx = classNames.bind(styles);

interface Props {
    item: INotiLikeItem;
}

function NotiLikesItem(props: Props) {
    const { item } = props;
    const { comments, videos, imgVideo, timeStamp, urlVideo, user, userLiked } = item;

    return (
        <Wrap>
            <div className={cx('avatar')}>
                <span className={cx('circle', 'first')}>
                    <img className={cx('img-avatar')} src={userLiked[0].avatar} alt="avatar" />
                </span>
                {userLiked[1] && (
                    <span className={cx('circle', 'second')}>
                        <img className={cx('img-avatar')} src={userLiked[1].avatar} alt="avatar" />
                    </span>
                )}
            </div>
            <div className={cx('content')}>
                <p className={cx('title-text')}>
                    {userLiked.map((user, index, arr) => {
                        const length = arr.length;
                        if (index + 1 === length && length > 2) return `và ${length - 2} người khác`;
                        if (index > 2) return ``;
                        return (
                            <Link className={cx('user-link')} key={index} to={user.userId}>
                                {index === 1 && ', '}
                                {`${user.userId}`}
                            </Link>
                        );
                    })}
                </p>
                <p className={cx('desc-text')}>
                    {!!comments && 'đã thích bình luận của bạn.'}
                    {!!videos && 'đã thích video của bạn.'}
                    {timeStamp}
                </p>
                <p className={cx('extra-text')}>
                    {user}:{!!comments && comments}
                    {!!videos && videos}
                </p>
            </div>
            <a href={urlVideo} className={cx('link-video-cover')}>
                <img src={imgVideo} alt="" className={cx('video-cover')} />
            </a>
        </Wrap>
    );
}

export default NotiLikesItem;
