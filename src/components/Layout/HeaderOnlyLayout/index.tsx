import React from 'react';

import { Header } from '~/components/Layout/components';

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
