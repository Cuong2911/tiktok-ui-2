import classNames from 'classnames/bind';

import styles from './HeaderOnlyLayout.module.scss';

import { Header } from '~/components/Layout/components';

const cx = classNames.bind(styles);

interface Props {
    children: JSX.Element | JSX.Element[];
}

function HeaderOnlyLayout(props: Props) {
    const { children } = props;
    return (
        <>
            <Header />
            <div>{children}</div>
        </>
    );
}

export default HeaderOnlyLayout;
