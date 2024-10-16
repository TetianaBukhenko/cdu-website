import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { App } from './App';
import { Home } from './pages/Home';
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const NewsArticle = lazy(() => import('./pages/NewsArticle/NewsArticle'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
import { NewsContainer } from './pages/NewsContainer';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { lazy, Suspense } from 'react';
import { LoadingPage } from './pages/LoadingPage/LoadingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { RequireAuth } from './pages/RequireAuth/RequireAuth';
import { Admin } from './pages/Admin/Admin';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary';
import { ErrorPage } from './pages/ErrorPage';

export const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="news" element={<NewsContainer />}>
                <Route index element={<NewsPage />} />
                <Route path=":newsId" element={<NewsArticle />} />
              </Route>
              <Route path="reports" element={<NewsContainer />}>
                <Route index element={<NewsPage />} />
                <Route path=":newsId" element={<NewsArticle />} />
              </Route>

              {/* <Route path="admin" element={<RequireAuth />}>
                  <Route index element={<Admin />} />

                </Route> */}

              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route path="admin" element={<Admin />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};
