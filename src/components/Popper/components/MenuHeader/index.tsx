import classNames from 'classnames/bind';
import { IoChevronBackSharp } from 'react-icons/io5';

import styles from './MenuHeader.module.scss';

const cx = classNames.bind(styles);

interface Props {
    title: string;
    onBack: () => void;
}
function MenuHeader(props: Props) {
    const { title, onBack } = props;
    return (
        <header className={cx('wrap')}>
            <IoChevronBackSharp className={cx('icon')} onClick={onBack} />
            <span className={cx('title')}>{title}</span>
        </header>
    );
}

export default MenuHeader;
