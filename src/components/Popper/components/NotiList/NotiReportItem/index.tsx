// library
import classNames from 'classnames/bind';
// scss, constants,..
import styles from './NotiReportItem.module.scss';
// components
import Wrap from '../Wrap';

const cx = classNames.bind(styles);

interface Props {
    title?: string;
    subTitle?: string;
    timeStamp: string;
    img?: string;
}

function NotiReportItem(props: Props) {
    const { timeStamp, title = 'Báo cáo:', subTitle = 'Xem trạng thái báo cáo của bạn.', img } = props;
    return (
        <Wrap>
            <div className={cx('flag')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="32" height="32">
                    <path
                        fill="#161823"
                        fillRule="evenodd"
                        d="M16.58 6.023c-2.175-1.546-4.752-1.507-6.651-1.157a14.519 14.519 0 00-3.097.948 8.763 8.763 0 00-.252.116l-.016.008-.006.003-.004.001A1 1 0 006 6.838v20.495c0 .369.298.667.667.667h.666A.667.667 0 008 27.333v-8.247l.233-.09c.515-.19 1.236-.42 2.059-.57 1.674-.31 3.597-.27 5.129.819 2.174 1.546 4.751 1.506 6.65 1.156a14.515 14.515 0 003.097-.948 8.48 8.48 0 00.253-.116l.015-.007h.001l.005-.003.003-.002A1 1 0 0026 18.43V6.838a1 1 0 00-1.444-.896h-.001l-.006.003a3.144 3.144 0 01-.186.085 12.52 12.52 0 01-2.654.812c-1.675.309-3.598.27-5.13-.82zm-6.288.81c1.674-.308 3.597-.269 5.129.82 2.174 1.546 4.751 1.506 6.65 1.156a14.358 14.358 0 001.929-.5v9.464a12.486 12.486 0 01-2.292.661c-1.674.309-3.597.27-5.129-.82-2.174-1.545-4.751-1.506-6.65-1.156a14.35 14.35 0 00-1.929.5V7.495l.233-.09c.515-.19 1.236-.42 2.059-.57z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </div>
            <div className={cx('content')}>
                <span className={cx('title')}>
                    {title}
                    <span className={cx('sub-title')}>
                        {subTitle}
                        <span className={cx('time-stamp')}>{timeStamp}</span>
                    </span>
                </span>
            </div>
            {!img ? (
                <div className={cx('arrow')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 16" width="16" height="16">
                        <path
                            fill="#161823"
                            fillOpacity="0.5"
                            fillRule="evenodd"
                            d="M12.305 7.529L6.874 2.098a.333.333 0 00-.472 0l-.471.471a.333.333 0 000 .471L10.891 8l-4.96 4.96a.333.333 0 000 .471l.471.471c.13.13.342.13.472 0l5.43-5.43a.667.667 0 000-.943z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            ) : (
                <div className={cx('img-wrap')}>
                    <img src={img} alt="anh" className={cx('img')} />
                </div>
            )}
        </Wrap>
    );
}

export default NotiReportItem;
