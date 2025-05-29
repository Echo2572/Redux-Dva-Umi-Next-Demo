import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

// 模拟博客文章数据
const articles = [
  {
    id: 1,
    title: 'React 18 新特性深度解析',
    excerpt: '本文深入探讨了 React 18 带来的并发渲染、自动批处理等新特性，以及如何在项目中应用这些新特性来提升用户体验。',
    author: '张开发',
    avatar: 'https://picsum.photos/id/1005/200/200',
    date: '2025-05-20',
    tags: ['React', '前端框架', 'JavaScript'],
    views: 1245,
    likes: 236,
    comments: 42,
  },
  {
    id: 2,
    title: 'TypeScript 高级类型实战指南',
    excerpt: 'TypeScript 的高级类型系统是其强大的特性之一，本文通过实际案例展示如何使用交叉类型、联合类型、映射类型等高级特性来构建类型安全的大型应用。',
    author: '李类型',
    avatar: 'https://picsum.photos/id/1012/200/200',
    date: '2025-05-15',
    tags: ['TypeScript', '前端', '类型系统'],
    views: 987,
    likes: 189,
    comments: 31,
  },
  {
    id: 3,
    title: '微前端架构设计与实践',
    excerpt: '随着前端应用规模的不断扩大，微前端架构成为了解决复杂应用开发和维护的有效方案。本文分享了微前端架构的设计思路、技术选型以及实际落地经验。',
    author: '王架构',
    avatar: 'https://picsum.photos/id/1025/200/200',
    date: '2025-05-10',
    tags: ['微前端', '架构', '前端工程化'],
    views: 876,
    likes: 156,
    comments: 27,
  },
  {
    id: 4,
    title: 'CSS Grid 与 Flexbox 布局实战对比',
    excerpt: 'CSS Grid 和 Flexbox 是现代前端布局的两大神器，本文通过实际案例对比了这两种布局方式的适用场景、优势和局限性，帮助开发者选择最合适的布局方案。',
    author: '陈样式',
    avatar: 'https://picsum.photos/id/1074/200/200',
    date: '2025-05-05',
    tags: ['CSS', '布局', '前端'],
    views: 765,
    likes: 132,
    comments: 24,
  },
];

const IndexPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>技术博客</h1>
        <p>探索前端技术的无限可能</p>
      </header>

      <main className={styles.main}>
        {articles.map((article) => (
          <article key={article.id} className={styles.article}>
            <h2 className={styles.title}>
              {article.title}
            </h2>

            <div className={styles.metadata}>
              <img src={article.avatar} alt={article.author} className={styles.avatar} />
              <div>
                <span className={styles.author}>{article.author}</span>
                <span className={styles.date}>{article.date}</span>
              </div>
            </div>

            <p className={styles.excerpt}>{article.excerpt}</p>

            <div className={styles.tags}>
              {article.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <div className={styles.stats}>
              <span><i className="fa fa-eye"></i> {article.views}</span>
              <span><i className="fa fa-heart"></i> {article.likes}</span>
              <span><i className="fa fa-comment"></i> {article.comments}</span>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default IndexPage;  