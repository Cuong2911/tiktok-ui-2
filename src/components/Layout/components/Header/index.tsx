import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineLoading3Quarters, AiFillCloseCircle, AiOutlineMore } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import { user1 } from './constants';

import images from '~/assets/images';
import Button from '~/components/Button';
import { SearchResult, Menu } from '~/components/Popper';

const cx = classNames.bind(styles);

interface Isearch {
    input: string;
    loading: boolean;
    result: number[];
}

function Header() {
    const token = localStorage.getItem('tiktok-user');
    const [user, setUser] = useState(token && JSON.parse(token));

    const onLogin = () => {
        console.log('login');
        setUser(user1);
        localStorage.setItem('tiktok-user', JSON.stringify(user1));
    };
    const onLogout = () => {
        console.log('log out');
        setUser(null);
        localStorage.removeItem('tiktok-user');
    };

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
                            <SearchResult visible={!!search.result.length}>
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
                            </SearchResult>
                        </div>
                    </div>
                    <div className={cx('container-right')}>
                        <Button to="/upload" btn1>
                            <GrAdd />
                            <span>Tải lên</span>
                        </Button>
                        {!!user ? (
                            <>
                                <Button to="/messages" noSize>
                                    <Tippy content="Tin nhắn">
                                        <div className={cx('icon-wrap')}>
                                            <img
                                                src={images.messagesIcon}
                                                alt="message"
                                                className={cx('messages-icon')}
                                            />
                                        </div>
                                    </Tippy>
                                </Button>
                                <Button noSize>
                                    <Tippy content="Hộp thư">
                                        <div className={cx('icon-wrap')}>
                                            <img src={images.mailBoxIcon} alt="mail" className={cx('mailbox-icon')} />
                                            <sup className={cx('sup-badge')}>2</sup>
                                        </div>
                                    </Tippy>
                                </Button>
                                <Menu onLogout={onLogout}>
                                    <div className={cx('user')}>{<img src={user.avatar} alt="user" />}</div>
                                </Menu>
                            </>
                        ) : (
                            <>
                                <Button
                                    primary
                                    onClick={() => {
                                        onLogin();
                                    }}
                                >
                                    Đăng nhập
                                </Button>
                                <Menu>
                                    <div className={cx('seemore')}>
                                        <AiOutlineMore />
                                    </div>
                                </Menu>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
