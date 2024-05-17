import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../Loader/Loader';

const LazyHomePage = React.lazy(() => import('../../Pages/Home'));
const LazyDepartments = React.lazy(() => import('../../Pages/Departments'));
const LazyCategories = React.lazy(() => import('../../Pages/Categories'));

const MainRouter: React.FC = () => {
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path='/' element={<LazyHomePage />} />
                    <Route path='/dep' element={<LazyDepartments />} />
                    <Route path='/cat' element={<LazyCategories />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default MainRouter;