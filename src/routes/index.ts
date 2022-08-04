// layout
import { DefaultLayout, HeaderOnlyLayout } from '~/components/Layout';
// page
import { Home, Following, Upload } from '~/pages';

const pubLicRoutes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/following',
        component: Following,
        layout: DefaultLayout,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnlyLayout,
    },
];
const privateRoutes = [{}];

export { pubLicRoutes, privateRoutes };
