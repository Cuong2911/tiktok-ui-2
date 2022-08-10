import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './SearchResult.module.scss';

import { Wrapper, AccountItem } from '~/components/Popper/components';

const cx = classNames.bind(styles);

interface Props {
    children: any;
    visible?: boolean;
}

function SearchResult(props: Props) {
    const { children, visible } = props;
    return (
        <Tippy
            visible={visible}
            interactive={true}
            render={(attrs) => {
                return (
                    <div className={cx('search-result-box')} tabIndex={-1} {...attrs}>
                        <Wrapper>
                            <h4 className={cx('search-result-label')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </Wrapper>
                    </div>
                );
            }}
        >
            {children}
        </Tippy>
    );
}

export default SearchResult;
