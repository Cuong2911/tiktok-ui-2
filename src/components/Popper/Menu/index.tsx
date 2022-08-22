// library
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
// scss, constants,..
import styles from './Menu.module.scss';
import { IMenuItem, IMenuList, logoutItem, menuItemList, menuUserItemList } from './constants';
// components
import { Wrapper, MenuItem, MenuHeader } from '~/components/Popper/components';

const cx = classNames.bind(styles);

interface Props {
    children: any;
    onLogout?: () => void;
}

function Menu(props: Props) {
    const token = localStorage.getItem('tiktok-user');
    const user = token && JSON.parse(token);

    const { children, onLogout } = props;
    const [history, setHistory] = useState<IMenuList[]>([menuItemList]);

    const current = history[history.length - 1];

    const renderMenuList = (listMenu: IMenuItem[]) => {
        return (
            <>
                {listMenu.map((item, index) => {
                    const child = item.children;
                    return (
                        <MenuItem
                            item={item}
                            key={index}
                            onClick={() => {
                                if (!!child) setHistory((prev) => [...prev, child]);
                            }}
                        />
                    );
                })}
            </>
        );
    };

    return (
        <>
            <Tippy
                delay={[200, 300]}
                interactive={true}
                placement="bottom-end"
                onHide={() => {
                    setHistory([menuItemList]);
                }}
                offset={[12, 4]}
                render={(attrs) => {
                    return (
                        <div className={cx('menu-box')} tabIndex={-1} {...attrs}>
                            <Wrapper>
                                <>
                                    {current.header && (
                                        <MenuHeader
                                            title={current.header}
                                            onBack={() => {
                                                setHistory((prev) => prev.slice(0, prev.length - 1));
                                            }}
                                        />
                                    )}
                                    <ul>
                                        {history.length === 1 && !!user && renderMenuList(menuUserItemList)}
                                        {renderMenuList(current.list)}
                                        {history.length === 1 && !!user && (
                                            <MenuItem item={logoutItem} borderTop onClick={onLogout} />
                                        )}
                                    </ul>
                                </>
                            </Wrapper>
                        </div>
                    );
                }}
            >
                {children}
            </Tippy>
        </>
    );
}

export default Menu;
