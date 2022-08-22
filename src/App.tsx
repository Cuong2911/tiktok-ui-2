// library
import { Route, Routes } from 'react-router-dom';
// constants, css,..
import { pubLicRoutes } from '~/routes';

function App() {
    return (
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
    );
}

export default App;
