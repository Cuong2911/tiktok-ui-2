// library
import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
// scss, constants,..
import styles from './Notification.module.scss';
// component
import Header from './Header';

import { onClickOutside } from '~/utils';
import Content from './Content';

const cx = classNames.bind(styles);

interface Props {
    children: JSX.Element | JSX.Element[];
    onHideNoti: () => void;
}

function Notification(props: Props) {
    const { children, onHideNoti } = props;

    const [notiTagState, setNotiTagState] = useState('all');

    const boxRef = useRef(null);
    onClickOutside(boxRef, onHideNoti);

    return (
        <>
            <div className={cx('wrapper')}>
                {children}
                <div className={cx('box')} ref={boxRef}>
                    <div className={cx('inbox')}>
                        <Header state={notiTagState} setState={setNotiTagState} />
                        <Content state={notiTagState} setState={setNotiTagState} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;
