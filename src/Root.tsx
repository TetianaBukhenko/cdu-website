import { Route, HashRouter as Router, Routes } from "react-router-dom";

import { App } from "./App";
import { Home } from './pages/Home';
import { NewsPage } from './pages/NewsPage';
import { NewsArticle } from './pages/NewsArticle/NewsArticle';
import { AboutUs } from "./pages/AboutUs";

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path='news' element={<NewsPage />}>
            <Route index element={<NewsPage />}/>
            <Route path=':newsId' element={<NewsArticle />} />
          </Route>

          <Route path="*" element={<p>Not Found</p>} />
        </Route>


      </Routes>
    </Router>
  );
};
