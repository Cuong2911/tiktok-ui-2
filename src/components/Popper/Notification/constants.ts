interface INotiReportItem {
    title: string;
    subTitle: string;
    timeStamp: string;
    img?: string;
}
const notiReportList: INotiReportItem[] = [
    {
        title: 'Video của Tiin.vn',
        subTitle: 'Tình trạng : Không vi phạm.',
        timeStamp: ' 7-2',
        img: 'https://s199.imacdn.com/ta/2019/04/12/c0e2e906100c23a1_3f7552883baf0d45_21724115550345866154671.jpg',
    },
];
interface INotiLikeItem {
    userLiked: {
        userId: string;
        avatar: string;
    }[];
    user: string;
    timeStamp: string;
    comments?: string;
    videos?: string;
    imgVideo: string;
    urlVideo: string;
}
const notiLikeList: INotiLikeItem[] = [
    {
        userLiked: [
            {
                userId: 'us3991',
                avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1639550280481793.jpeg?x-expires=1660273200&x-signature=uQ6%2F%2BfqvW8e8D956VrUYM5yHEzE%3D',
            },
            {
                userId: 'user557874138708461',
                avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/36c521a877a703587ddf6939463c37de~c5_100x100.jpeg?x-expires=1660273200&x-signature=3tp6d%2FuPDYucIjO%2F6a9kx1jkij0%3D',
            },
            {
                userId: 'baotranng2002',
                avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/36c521a877a703587ddf6939463c37de~c5_100x100.jpeg?x-expires=1660273200&x-signature=3tp6d%2FuPDYucIjO%2F6a9kx1jkij0%3D',
            },
        ],
        user: 'cuonsglk201',
        comments: 'sốc điện, quyền năng,tăng tốc pha, triệu hồi aerie cũng đc nha tôi thử hết rồi',
        imgVideo:
            'https://p9-sign-sg.tiktokcdn.com/obj/v0201/db05cf4fe58c4a2cacd27b416ca7a889_1591792010?x-expires=1660222800&x-signature=dcyEZc9iXhJUkbZShUBASqU8mCM%3D',
        urlVideo: '/@6820231149732185090/video/6836694603375119618',
        timeStamp: '2020-8-20',
    },
    {
        userLiked: [
            {
                userId: 'Hoavu31',
                avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1635197368093697.jpeg?x-expires=1660273200&x-signature=XZ96VfkvtQSpxU%2BLaqOkRNIQPL0%3D',
            },
        ],
        user: 'cuonglk201',
        videos: 'tôi vừa làm quả akali tăng tốc pha cũng khá ngon ông ạ, kda:24-2-18',
        imgVideo:
            'https://p9-sign-sg.tiktokcdn.com/obj/v0201/db05cf4fe58c4a2cacd27b416ca7a889_1591792010?x-expires=1660222800&x-signature=dcyEZc9iXhJUkbZShUBASqU8mCM%3D',
        urlVideo: '/@6820231149732185090/video/6836694603375119618',
        timeStamp: '2020-6-24',
    },
];
interface INotiCommentItem {
    userCommented: {
        userId: string;
        avatar: string;
    };
    timeStamp: string;
    comments?: string;
    videos?: string;
    imgVideo: string;
    urlVideo: string;
}
const notiCommentList: INotiCommentItem[] = [
    {
        userCommented: {
            userId: 'us3991',
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1639550280481793.jpeg?x-expires=1660273200&x-signature=uQ6%2F%2BfqvW8e8D956VrUYM5yHEzE%3D',
        },
        comments: 'sốc điện, quyền năng,tăng tốc pha, triệu hồi aerie cũng đc nha tôi thử hết rồi',
        imgVideo:
            'https://p9-sign-sg.tiktokcdn.com/obj/v0201/db05cf4fe58c4a2cacd27b416ca7a889_1591792010?x-expires=1660222800&x-signature=dcyEZc9iXhJUkbZShUBASqU8mCM%3D',
        urlVideo: '/@6820231149732185090/video/6836694603375119618',
        timeStamp: '2021-8-20',
    },
    {
        userCommented: {
            userId: 'Hoavu31',
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1635197368093697.jpeg?x-expires=1660273200&x-signature=XZ96VfkvtQSpxU%2BLaqOkRNIQPL0%3D',
        },
        videos: 'tôi vừa làm quả akali tăng tốc pha cũng khá ngon ông ạ, kda:24-2-18',
        imgVideo:
            'https://p9-sign-sg.tiktokcdn.com/obj/v0201/db05cf4fe58c4a2cacd27b416ca7a889_1591792010?x-expires=1660222800&x-signature=dcyEZc9iXhJUkbZShUBASqU8mCM%3D',
        urlVideo: '/@6820231149732185090/video/6836694603375119618',
        timeStamp: '2020-5-14',
    },
];
interface INotiMentionItem {
    userMentioned: {
        userId: string;
        avatar: string;
    };
    user: string;
    timeStamp: string;
    imgVideo: string;
    urlVideo: string;
}
const notiMentionList: INotiMentionItem[] = [
    {
        userMentioned: {
            userId: 'Baotrannnn254',
            avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d551dae554f4e45c01ec6ab768b37aee~c5_100x100.jpeg?x-expires=1660291200&x-signature=QQdRcWoyPSJ7SIjm%2BretmbJ%2FY%2Fs%3D',
        },
        user: 'cuonglk201',
        timeStamp: '2020-4-15',
        imgVideo:
            'https://p9-sign-sg.tiktokcdn.com/obj/v0201/db05cf4fe58c4a2cacd27b416ca7a889_1591792010?x-expires=1660222800&x-signature=dcyEZc9iXhJUkbZShUBASqU8mCM%3D',
        urlVideo: '/@6820231149732185090/video/6836694603375119618',
    },
];
interface INotiFollowerItem {
    userFollowered: {
        userId: string;
        avatar: string;
    };
    timeStamp: string;
}
const notiFollowerList: INotiFollowerItem[] = [
    {
        userFollowered: {
            userId: 'Baotrannnn254',
            avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d551dae554f4e45c01ec6ab768b37aee~c5_100x100.jpeg?x-expires=1660291200&x-signature=QQdRcWoyPSJ7SIjm%2BretmbJ%2FY%2Fs%3D',
        },
        timeStamp: '2020-5-12',
    },
    {
        userFollowered: {
            userId: 'nemcd47639zc07',
            avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ffa96ef36b60a062f84f67e590e95206~c5_100x100.jpeg?x-expires=1660381200&x-signature=sPtowpQtfe0W2nkPuRRNHiqqbnw%3D',
        },
        timeStamp: '2021-4-13',
    },
    {
        userFollowered: {
            userId: '2c0j7q5x954298',
            avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/625e459aae56470b197962b660f811bb~c5_100x100.jpeg?x-expires=1660291200&x-signature=UnFMHDe%2FFJgOmUipBO6dwHtnzik%3D',
        },
        timeStamp: '1-5',
    },
    {
        userFollowered: {
            userId: 'Baotrannnn254',
            avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d551dae554f4e45c01ec6ab768b37aee~c5_100x100.jpeg?x-expires=1660291200&x-signature=QQdRcWoyPSJ7SIjm%2BretmbJ%2FY%2Fs%3D',
        },
        timeStamp: '2020-5-12',
    },
    {
        userFollowered: {
            userId: 'nemcd47639zc07',
            avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ffa96ef36b60a062f84f67e590e95206~c5_100x100.jpeg?x-expires=1660381200&x-signature=sPtowpQtfe0W2nkPuRRNHiqqbnw%3D',
        },
        timeStamp: '2021-4-13',
    },
    {
        userFollowered: {
            userId: '2c0j7q5x954298',
            avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/625e459aae56470b197962b660f811bb~c5_100x100.jpeg?x-expires=1660291200&x-signature=UnFMHDe%2FFJgOmUipBO6dwHtnzik%3D',
        },
        timeStamp: '1-5',
    },
    {
        userFollowered: {
            userId: 'Baotrannnn254',
            avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d551dae554f4e45c01ec6ab768b37aee~c5_100x100.jpeg?x-expires=1660291200&x-signature=QQdRcWoyPSJ7SIjm%2BretmbJ%2FY%2Fs%3D',
        },
        timeStamp: '2020-5-12',
    },
    {
        userFollowered: {
            userId: 'nemcd47639zc07',
            avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ffa96ef36b60a062f84f67e590e95206~c5_100x100.jpeg?x-expires=1660381200&x-signature=sPtowpQtfe0W2nkPuRRNHiqqbnw%3D',
        },
        timeStamp: '2021-4-13',
    },
    {
        userFollowered: {
            userId: '2c0j7q5x954298',
            avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/625e459aae56470b197962b660f811bb~c5_100x100.jpeg?x-expires=1660291200&x-signature=UnFMHDe%2FFJgOmUipBO6dwHtnzik%3D',
        },
        timeStamp: '1-5',
    },
];
const allList = [
    {
        type: 'follow',
        index: 0,
    },
    {
        type: 'follow',
        index: 1,
    },
    {
        type: 'like',
        index: 0,
    },
    {
        type: 'follow',
        index: 2,
    },
    {
        type: 'comment',
        index: 0,
    },
    {
        type: 'follow',
        index: 3,
    },
    {
        type: 'comment',
        index: 1,
    },
    {
        type: 'follow',
        index: 4,
    },
    {
        type: 'follow',
        index: 5,
    },
    {
        type: 'like',
        index: 1,
    },
    {
        type: 'follow',
        index: 6,
    },
    {
        type: 'follow',
        index: 7,
    },
    {
        type: 'mention',
        index: 0,
    },
    {
        type: 'follow',
        index: 8,
    },
];

export type { INotiLikeItem, INotiCommentItem, INotiMentionItem, INotiFollowerItem };
export { notiReportList, notiLikeList, notiCommentList, notiMentionList, notiFollowerList, allList };
