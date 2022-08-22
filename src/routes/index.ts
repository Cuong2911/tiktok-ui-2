// layout
import { DefaultLayout, HeaderOnlyLayout } from '~/layouts';
// page
import { Home, Following, Upload, UserDetails } from '~/pages';

const pubLicRoutes = [
    {
        path: '',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: 'following',
        component: Following,
        layout: DefaultLayout,
    },
    {
        path: 'upload',
        component: Upload,
        layout: HeaderOnlyLayout,
    },
    {
        path: '@:nickname',
        component: UserDetails,
        layout: DefaultLayout,
    },
];
const privateRoutes = [{}];

export { pubLicRoutes, privateRoutes };
