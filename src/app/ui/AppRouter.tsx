


import LoginPage from 'pages/auth/login';
import ShortenerPage from 'pages/shortener';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks/reducer';
import { withNotifications } from 'shared/ui/theme/notification';

function App() {
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  return isAuth ? (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
     
      <Route path="/shortener" element={<ShortenerPage />} />
      <Route path="/*" element={<Navigate to="/shortener" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default withNotifications(App);
  