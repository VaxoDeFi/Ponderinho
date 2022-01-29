import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './layout/app';
import Academy from './layout/academy';
import Wallet from './layout/search/wallet';
import Home from './layout/home';
import NotFound from './layout/notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css';

function Root() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="academy" element={<Academy />}>
              <Route path=":academyId" element={<Academy />} />
            </Route>
            <Route path="wallet" element={<Wallet />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default Root;
