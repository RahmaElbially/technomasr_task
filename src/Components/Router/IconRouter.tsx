import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../Loader/Loader';

const LazyLogin = React.lazy(() => import('../../Pages/Login'));
const LazyCart = React.lazy(() => import('../../Pages/Cart'));
const LazyFavourite = React.lazy(() => import('../../Pages/Favourite'));

const IconRouter = () => {
  return (
    <div>
       <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/user' element={<LazyLogin />} />
                <Route path='/cart' element={<LazyCart />} />
                <Route path='/fav' element={<LazyFavourite />} />
            </Routes>
        </Suspense>
    </div>
  )
}


export default IconRouter
