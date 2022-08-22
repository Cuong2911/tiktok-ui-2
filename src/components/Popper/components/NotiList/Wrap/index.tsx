// library
import classNames from 'classnames/bind';
// scss, constants,..
import styles from './Wrap.module.scss';

const cx = classNames.bind(styles);

function Wrap({ children }: { children: JSX.Element | JSX.Element[] }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrap;
