import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineLoading3Quarters, AiFillCloseCircle } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';

import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from './AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

interface Isearch {
    input: string;
    loading: boolean;
    result: number[];
}

function Header() {
    const [search, setSearch] = useState<Isearch>({
        input: '',
        loading: false,
        result: [],
    });
    const setSearchInput = (value: string) => {
        setSearch((prev) => ({
            ...prev,
            input: value,
        }));
    };
    useEffect(() => {
        setTimeout(() => {
            setSearch((prev) => ({
                ...prev,
                result: [1, 2, 3],
            }));
        }, 1000);
    }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('container-left')}>
                        <Link to="/" className={cx('logo')}>
                            <img src={images.logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className={cx('container-center')}>
                        <div className={cx('search-wrapper')}>
                            <Tippy
                                visible={!!search.result.length}
                                interactive={true}
                                render={(attrs) => {
                                    return (
                                        <div className={cx('search-result-box')} tabIndex={-1} {...attrs}>
                                            <PopperWrapper>
                                                <h4 className={cx('search-result-label')}>Accounts</h4>
                                                <AccountItem />
                                                <AccountItem />
                                                <AccountItem />
                                            </PopperWrapper>
                                        </div>
                                    );
                                }}
                            >
                                <form className={cx('search-form')}>
                                    <input
                                        type="text"
                                        className={cx('search-input')}
                                        placeholder="Tìm kiếm tài khoản và video"
                                        value={search.input}
                                        onChange={(e) => {
                                            setSearchInput(e.target.value);
                                        }}
                                    />
                                    {search.input && (
                                        <div className={cx('search-input-icon')}>
                                            {search.loading ? (
                                                <AiOutlineLoading3Quarters />
                                            ) : (
                                                <AiFillCloseCircle
                                                    onClick={() => {
                                                        setSearchInput('');
                                                    }}
                                                />
                                            )}
                                        </div>
                                    )}
                                    <span className={cx('search-seperate')} />
                                    <button className={cx('search-btn')} onClick={(e) => e.preventDefault()}>
                                        <div className={cx('search-btn-icon')}>
                                            <AiOutlineSearch />
                                        </div>
                                    </button>
                                </form>
                            </Tippy>
                        </div>
                    </div>
                    <div className={cx('container-right')}>
                        <Button to="/upload" btn1>
                            <GrAdd />
                            <span>Tai len</span>
                        </Button>
                        <Button primary>Dang nhap</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
