import { To } from 'react-router-dom';

import images from '~/assets/images';

interface IMenuItem {
    icon?: any;
    title: string;
    to?: To;
    children?: IMenuList;
}
interface IMenuList {
    header?: string;
    list: IMenuItem[];
}
const menuItemList: IMenuList = {
    list: [
        {
            icon: images.languageIcon,
            title: 'Tiếng Việt',
            children: {
                header: 'Ngôn ngữ',
                list: [{ title: 'Tieng viet' }, { title: 'English' }, { title: 'China' }, { title: 'Francis' }],
            },
        },
        {
            icon: images.feedbackIcon,
            title: 'Phản hồi và trợ giúps',
            to: '/feedback',
        },
        {
            icon: images.keyboardShortcutsIcon,
            title: 'Phím tắt trên bàn phím',
        },
    ],
};

const menuUserItemList: IMenuItem[] = [
    {
        icon: images.userIcon,
        title: 'Xem hồ sơ',
    },
    {
        icon: images.tiktokCoinIcon,
        title: 'Nhận xu',
        to: '/coin?enter_from=web_main_nav',
    },
    {
        icon: images.settingIcon,
        title: 'Cài đặt',
        to: '/setting',
    },
];
const logoutItem: IMenuItem = {
    icon: images.userIcon,
    title: 'Đăng xuất',
};
export { menuItemList, menuUserItemList, logoutItem };
export type { IMenuList, IMenuItem };
