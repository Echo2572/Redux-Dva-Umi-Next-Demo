import React from 'react';
import { Outlet } from 'umi'; // 导入 Outlet 组件
import Navbar from '@/components/Navbar';
import '@/layouts/index.css';

export default function BasicLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <footer className="footer">© 2025 Umi 博客示例</footer>
    </div>
  );
}