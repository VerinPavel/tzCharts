import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { PrivatRoute } from '@/app/providers/routing/PrivatRoute';

import { LoginPage } from '@/pages/LoginPage';
import { ForbiddenPage } from '@/pages/403Page/ui/403page';
import { NotFoundPage } from '@/pages/404Page';
import { DashboardPage } from '@/pages/DashboardPage';
import { LK } from '@/pages/LK/ui/LK';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/403" element={<ForbiddenPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivatRoute>
            <DashboardPage />
          </PrivatRoute>
        }
      />
      <Route
        path="/cabinet"
        element={
          <PrivatRoute>
            <LK />
          </PrivatRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export { AppRouter };
