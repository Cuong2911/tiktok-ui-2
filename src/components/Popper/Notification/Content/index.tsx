// library
import classNames from 'classnames/bind';
// scss,constants,..
import styles from './Content.module.scss';

import {
    notiCommentList,
    notiFollowerList,
    notiLikeList,
    notiMentionList,
    notiReportList,
    allList,
} from '../constants';
import {
    NotiCommentsItem,
    NotiFollowersItem,
    NotiLikesItem,
    NotiMentionsItem,
    NotiReportItem,
} from '~/components/Popper/components/NotiList';

const cx = classNames.bind(styles);

interface Props {
    state: string;
    setState: (value: React.SetStateAction<string>) => void;
}

function Content(props: Props) {
    const { state, setState } = props;
    return (
        <div className={cx('inbox-content-container')}>
            {state !== 'report' ? (
                <>
                    <p className={cx('time-title')}>Trước đây</p>
                    {/* report */}
                    {state === 'all' && (
                        <>
                            <div onClick={() => setState('report')}>
                                <NotiReportItem timeStamp={notiReportList[notiReportList.length - 1].timeStamp} />
                            </div>
                            {allList.map((item, index) => {
                                switch (item.type) {
                                    case 'like':
                                        return <NotiLikesItem key={index} item={notiLikeList[item.index]} />;
                                    case 'comment':
                                        return <NotiCommentsItem key={index} item={notiCommentList[item.index]} />;
                                    case 'mention':
                                        return <NotiMentionsItem key={index} item={notiMentionList[item.index]} />;
                                    case 'follow':
                                        return <NotiFollowersItem key={index} item={notiFollowerList[item.index]} />;
                                }
                            })}
                        </>
                    )}
                    {/* content */}
                    {state === 'likes' && (
                        <>
                            {notiLikeList.map((item, index) => {
                                return <NotiLikesItem key={index} item={item} />;
                            })}
                        </>
                    )}
                    {state === 'comments' && (
                        <>
                            {notiCommentList.map((item, index) => {
                                return <NotiCommentsItem key={index} item={item} />;
                            })}
                        </>
                    )}
                    {state === 'mentions' && (
                        <>
                            {notiMentionList.map((item, index) => {
                                return <NotiMentionsItem key={index} item={item} />;
                            })}
                        </>
                    )}
                    {state === 'followers' && (
                        <>
                            {notiFollowerList.map((item, index) => {
                                return <NotiFollowersItem key={index} item={item} />;
                            })}
                        </>
                    )}
                </>
            ) : (
                <>
                    {notiReportList.map((item, index) => {
                        return (
                            <NotiReportItem
                                key={index}
                                title={item.title}
                                subTitle={item.subTitle}
                                timeStamp={item.timeStamp}
                                img={item.img}
                            />
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default Content;
