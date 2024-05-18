import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../Loader/Loader';

const LazyHomePage = React.lazy(() => import('../../Pages/Home'));
const LazyDepartments = React.lazy(() => import('../../Pages/Departments'));
const LazyCategories = React.lazy(() => import('../../Pages/Categories'));
const LazyLogin = React.lazy(() => import('../../Pages/Login'));
const LazyCart = React.lazy(() => import('../../Pages/Cart'));
const LazyFavourite = React.lazy(() => import('../../Pages/Favourite'));
const LazyRegister = React.lazy(() => import('../../Pages/Register'));

const AppRouter: React.FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<LazyHomePage />} />
                <Route path='/dep' element={<LazyDepartments />} />
                <Route path='/cat' element={<LazyCategories />} />
                <Route path='/user' element={<LazyLogin />} />
                <Route path='/cart' element={<LazyCart />} />
                <Route path='/fav' element={<LazyFavourite />} />
                <Route path='/register' element={<LazyRegister />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;