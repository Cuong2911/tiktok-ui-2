// library
import classNames from 'classnames/bind';
// scss, consstants, ..
import styles from './HeaderOnlyLayout.module.scss';
// components
import { Header } from '~/layouts/components';

const cx = classNames.bind(styles);

interface Props {
    children: JSX.Element | JSX.Element[];
}

function HeaderOnlyLayout(props: Props) {
    const { children } = props;
    return (
        <>
            <Header />
            <div className={cx('body-wrapper')}>{children}</div>
        </>
    );
}

export default HeaderOnlyLayout;
