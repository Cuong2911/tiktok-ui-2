// library
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiOutlineMore } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// scss,constants,...
import styles from './Header.module.scss';
import { user1 } from './constants';
import images from '~/assets/images';
// components
import Button from '~/components/Button';
import { Menu, Notification } from '~/components/Popper';
import Search from '../Search';

const cx = classNames.bind(styles);

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

    const [showNoti, setShowNoti] = useState(false);
    const onHideNoti = () => {
        setShowNoti(false);
    };

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
                        <Search />
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
                                    {showNoti ? (
                                        <Notification onHideNoti={onHideNoti}>
                                            <div className={cx('icon-wrap')} onClick={() => setShowNoti(!showNoti)}>
                                                <img
                                                    src={images.mailBoxActiveIcon}
                                                    alt="mail"
                                                    className={cx('mailbox-icon')}
                                                />
                                            </div>
                                        </Notification>
                                    ) : (
                                        <Tippy content="Hộp thư">
                                            <div className={cx('icon-wrap')} onClick={() => setShowNoti(!showNoti)}>
                                                <img
                                                    src={images.mailBoxIcon}
                                                    alt="mail"
                                                    className={cx('mailbox-icon')}
                                                />
                                                <sup className={cx('sup-badge')}>2</sup>
                                            </div>
                                        </Tippy>
                                    )}
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
