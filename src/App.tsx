import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import './scss/app.scss';

import { Home } from './pages/Home';
import { NotFoundBlock } from './components/NotFoundBlock';
import { MainLoyout } from './layouts/MainLayout';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart"*/ './pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza"*/ './pages/FullPizza'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLoyout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFoundBlock />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
