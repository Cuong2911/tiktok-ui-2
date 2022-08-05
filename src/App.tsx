import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { pubLicRoutes } from '~/routes';

function App() {
    return (
        <Router>
            {pubLicRoutes.map((route, index) => {
                const btn = route.path || 'home';
                return (
                    <button key={index} style={{ textDecoration: 'none' }}>
                        <Link to={route.path}>{btn}</Link>
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
                <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
