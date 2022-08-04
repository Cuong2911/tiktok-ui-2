import React from 'react';

import { Header, Sidebar } from '~/components/Layout/components';

interface Props {
    children: JSX.Element | JSX.Element[];
}

function DefaultLayout(props: Props) {
    const { children } = props;
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;
