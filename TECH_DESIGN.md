# 🛠️ 技术设计文档 (Tech Design)

## 1. 技术栈选型 (Tech Stack)
- **核心框架**: React 18 + TypeScript + Vite (构建工具)
- **样式方案**: Tailwind CSS (原子化 CSS，响应式设计)
- **动画交互**: Framer Motion (用于 Hero 入场动画和卡片 Hover 效果)
- **图标库**: Lucide React (轻量级 SVG 图标)
- **包管理器**: npm 或 pnpm

## 2. 项目目录结构 (Project Structure)
src/
├── assets/          # 存放静态资源 (头像, 项目截图)
├── components/      # UI 组件
│   ├── Navbar.tsx   # 导航栏 (包含移动端菜单逻辑)
│   ├── Hero.tsx     # 首屏自我介绍
│   ├── About.tsx    # 关于我 + 技能云
│   ├── Projects.tsx # 项目展示 (核心)
│   ├── Contact.tsx  # 页脚/联系方式
│   └── Section.tsx  # 通用布局容器 (用于统一边距)
├── data/            # 静态数据文件
│   ├── projects.ts  # 项目列表数据
│   └── social.ts    # 社交链接数据
├── types/           # TypeScript 类型定义 (关键!)
│   └── index.ts     # 定义 Project, SocialLink 等接口
├── App.tsx          # 主入口 (组合所有 Section)
└── main.tsx         # 渲染入口 (引入全局 CSS)

## 3. 数据模型设计 (Data Models)
> 这是一个 TypeScript 项目，必须严格遵循以下接口定义。

```typescript
// src/types/index.ts

export interface Project {
  id: number;
  title: string;
  description: string; // 简短描述
  techStack: string[]; // 技术栈标签，如 ["React", "Python"]
  githubLink: string;  // 源码链接
  demoLink?: string;   // 演示链接 (可选)
  image: string;       // 图片路径
}

export interface SocialLink {
  id: number;
  platform: string; // e.g., "GitHub"
  url: string;
  icon: string;     // 对应 Lucide 图标的名称
}