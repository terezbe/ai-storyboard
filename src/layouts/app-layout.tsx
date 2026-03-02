import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/header';

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
