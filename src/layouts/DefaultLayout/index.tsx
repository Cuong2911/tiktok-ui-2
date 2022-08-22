// library
import classNames from 'classnames/bind';
// scss, constants,..
import styles from './DefaultLayout.module.scss';
// components
import { Header, Sidebar } from '~/layouts/components';

const cx = classNames.bind(styles);

interface Props {
    children: JSX.Element | JSX.Element[];
}

function DefaultLayout(props: Props) {
    const { children } = props;
    return (
        <>
            <div className={cx('page')}>
                <Header />
                <div className={cx('body-wrapper')}>
                    <div className={cx('body-container')}>
                        <Sidebar />
                        <div className={cx('body-content')}>{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;
