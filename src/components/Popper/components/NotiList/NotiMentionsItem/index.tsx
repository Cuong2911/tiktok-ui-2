// library
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// scss, constants, ...
import styles from './NotiMentionsItem.module.scss';
// components
import Wrap from '../Wrap';
import { INotiMentionItem } from '~/components/Popper/Notification/constants';

const cx = classNames.bind(styles);

interface Props {
    item: INotiMentionItem;
}

function NotiMentionsItem(props: Props) {
    const { item } = props;
    const { imgVideo, timeStamp, urlVideo, user, userMentioned } = item;

    return (
        <Wrap>
            <div className={cx('avatar')}>
                <span className={cx('circle')}>
                    <img className={cx('img-avatar')} src={userMentioned.avatar} alt="avatar" />
                </span>
            </div>
            <div className={cx('content')}>
                <p className={cx('title-text')}>
                    <Link className={cx('user-link')} to={userMentioned.userId}>
                        {`${userMentioned.userId}`}
                    </Link>
                </p>
                <p className={cx('desc-text')}>
                    đã nhắc đến bạn trong một bình luận: @{user}
                    <span className={cx('extra-text')}>{timeStamp}</span>
                </p>
            </div>
            <a href={urlVideo} className={cx('link-video-cover')}>
                <img src={imgVideo} alt="" className={cx('video-cover')} />
            </a>
        </Wrap>
    );
}

export default NotiMentionsItem;
