import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { pubLicRoutes } from '~/routes';

function App() {
    return (
        <>
            <Router>
                {pubLicRoutes.map((route, index) => {
                    const btn = route.path === '/' ? 'home' : route.path.slice(1);
                    return (
                        <button key={index} style={{ textDecoration: 'none' }}>
                            <a href={route.path} style={{ textDecoration: 'none' }}>
                                {btn}
                            </a>
                        </button>
                    );
                })}
                <Routes>
                    {pubLicRoutes.map((route, index) => {
                        const Layout = route.layout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </>
    );
}

export default App;
