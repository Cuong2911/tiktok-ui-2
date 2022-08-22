// library
import classNames from 'classnames/bind';
// scss, constants,..
import styles from './Wrapper.module.scss';

const cx = classNames.bind(styles);

interface Props {
    children?: JSX.Element | JSX.Element[] | string;
}

function Wrapper(props: Props) {
    const { children } = props;
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
