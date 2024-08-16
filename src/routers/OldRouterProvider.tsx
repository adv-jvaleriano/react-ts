import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import NewsPage from '../pages/HomePage/NewsPage/NewsPage';
import FriendsPage from '../pages/HomePage/FriendsPage/FriendsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ContextPage from '../pages/ContextPage/ContextPage';

const OldRouterProvider = () => {

  const hasPermission: boolean = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route index element={<NewsPage />} />
          <Route path='friends' element={<FriendsPage />} />
        </Route>
        {
          hasPermission && <Route path='context' element={<ContextPage />} />
        }
        <Route path='error/:code' element={<ErrorPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default OldRouterProvider;
