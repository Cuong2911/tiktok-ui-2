// library
import classNames from 'classnames/bind';
// scss, constants,..
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

interface Props {
    state: string;
    setState: (value: React.SetStateAction<string>) => void;
}
const notiTagStateItem = [
    { data: 'all', title: 'Tất cả' },
    { data: 'likes', title: 'Thích' },
    { data: 'comments', title: 'Bình luận' },
    { data: 'mentions', title: 'Nhắc đến' },
    { data: 'followers', title: 'Follower' },
];
function Header(props: Props) {
    const { state, setState } = props;
    return (
        <div className={cx('inbox-header')}>
            {state !== 'report' ? (
                <>
                    <h4 className={cx('header-title')}>Thông báo</h4>
                    <div className={cx('div-group')}>
                        {notiTagStateItem.map((item, index) => {
                            return (
                                <span
                                    key={index}
                                    onClick={() => setState(item.data)}
                                    className={cx('span-group', `${state === item.data ? 'active' : ''}`)}
                                >
                                    {item.title}
                                </span>
                            );
                        })}
                    </div>
                </>
            ) : (
                <h4 className={cx('header-title', 'pb-24')}>
                    <div className={cx('header-back')} onClick={() => setState('all')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
                            <path
                                fill="#161823"
                                fillRule="evenodd"
                                d="M4.123 12l7.586 7.586a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0L.94 13.061a1.5 1.5 0 010-2.122l8.647-8.646a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707L4.123 12z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    Báo cáo
                </h4>
            )}
        </div>
    );
}

export default Header;
