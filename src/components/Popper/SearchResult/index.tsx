// library
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
// scss, constants,..
import styles from './SearchResult.module.scss';
import { ISearchResult } from '~/models/searchResults';
// components
import { Wrapper, AccountItem } from '~/components/Popper/components';

const cx = classNames.bind(styles);

interface Props {
    children: any;
    results: ISearchResult[];
    show?: boolean;
    handleHideResults?: () => void;
}

function SearchResult(props: Props) {
    const { children, results, show, handleHideResults } = props;

    return (
        <Tippy
            visible={show && !!results.length}
            interactive={true}
            onClickOutside={handleHideResults}
            render={(attrs) => {
                return (
                    <div className={cx('search-result-box')} tabIndex={-1} {...attrs}>
                        <Wrapper>
                            <h4 className={cx('search-result-label')}>Accounts</h4>
                            <ul>
                                {results.map((result, index) => {
                                    return <AccountItem key={index} account={result} />;
                                })}
                            </ul>
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
