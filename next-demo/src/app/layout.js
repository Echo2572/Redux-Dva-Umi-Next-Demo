// layout.js 不被显式导入, 而是框架自动识别
import './globals.css';
import { Inter } from 'next/font/google'; // 导入Inter字体

const inter = Inter({ subsets: ['latin'] }); // 实例化 Inter 字体，配置只加载拉丁字符集

export const metadata = {
  title: 'Shopping App',
  description: 'A simple shopping app for learning Next.js',
};

// 根布局组件, 接收子元素作为参数
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
