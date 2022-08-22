// library
import classNames from 'classnames/bind';
import { BsCheckCircleFill } from 'react-icons/bs';
// scss, constants,..
import { ISearchResult } from '~/models/searchResults';
import styles from './AccountItem.module.scss';
// component

const cx = classNames.bind(styles);

interface Props {
    account: ISearchResult;
}

function AccountItem(props: Props) {
    const { account } = props;

    return (
        <a href={`@${account.nickname}`}>
            <div className={cx('wrapper')}>
                <img className={cx('avatar')} src={account.avatar} alt="avatar" />
                <div className={cx('info')}>
                    <div className={cx('title')}>
                        <div className={cx('user')}>{account.full_name}</div>
                        {account.tick && <BsCheckCircleFill className={cx('check')} />}
                    </div>
                    <div className={cx('desc')}>@{account.nickname}</div>
                </div>
            </div>
        </a>
    );
}

export default AccountItem;
