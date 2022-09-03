// library
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// scss, constants,...
import styles from './NotiCommentsItem.module.scss';
// componnents
import Wrap from '../Wrap';
import { INotiCommentItem } from '~/components/Popper/Notification/constants';

const cx = classNames.bind(styles);

interface Props {
    item: INotiCommentItem;
}

function NotiCommentsItem(props: Props) {
    const { item } = props;
    const { userCommented, timeStamp, comments, videos, imgVideo, urlVideo } = item;

    return (
        <Wrap>
            <div className={cx('avatar')}>
                <span className={cx('circle')}>
                    <img className={cx('img-avatar')} src={userCommented.avatar} alt="avatar" />
                </span>
            </div>
            <div className={cx('content')}>
                <p className={cx('title-text')}>
                    <Link className={cx('user-link')} to={'/@' + userCommented.userId}>
                        {userCommented.userId}
                    </Link>
                </p>
                <p className={cx('desc-text')}>
                    {!!comments && 'đã trả lời bình luận của bạn.'}
                    {!!videos && 'đã bình luận video của bạn.'}
                    {timeStamp}
                </p>
                <p className={cx('extra-text')}>
                    {!!comments && comments}
                    {!!videos && videos}
                </p>
            </div>
            <a href={urlVideo} className={cx('link-video-cover')}>
                <img src={imgVideo} alt="" className={cx('video-cover')} />
            </a>
        </Wrap>
    );
}

export default NotiCommentsItem;
