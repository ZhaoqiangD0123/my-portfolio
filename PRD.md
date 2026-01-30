# 📝 个人作品集网站 PRD 

## 1. 项目概述 (Project Overview)
**目标**：构建一个面向技术面试官/HR 的极简个人作品集网站。
**核心价值**：在 30 秒内展示我的技术栈、项目经验和代码能力。
**风格对标**：极简主义风格 (Minimalist)，强调内容层级和阅读体验。

## 2. 用户故事 (User Stories)
- **作为面试官**，我希望一进首页就能看到候选人的**核心技术栈**和**一句话自我介绍**，从而快速判断是否匹配岗位。
- **作为 HR**，我希望在移动端也能流畅查看项目，**不需要缩放屏幕**。
- **作为访客**，我希望能通过点击顶部的导航栏，**平滑滚动 (Smooth Scroll)** 跳转到页面的对应区域。

## 3. 功能模块详情 (Functional Requirements)

### 3.1 导航栏 (Navbar)
- **布局**：固定在页面顶部 (Sticky Top)。
- **内容**：
    - 左侧：Logo 或 名字首字母 (如 "ZY")。
    - 右侧链接：About (关于), Skills (技能), Projects (项目), Contact (联系)。
- **交互**：
    - 点击链接实现**平滑滚动**跳转到对应 Section。
    - 移动端自动折叠为汉堡菜单 (Hamburger Menu)。

### 3.2 英雄区域 (Hero Section)
- **布局**：全屏居中或左对齐 (视口高度 100vh)。
- **内容**：
    - **Pre-title**：例如 "Hi, my name is" (小号字体，高亮色)。
    - **Name**：你的名字 (超大号字体，如 4rem+)。
    - **Subtitle**：一句话定位，例如 "I build things for the web." (大号字体，灰色)。
    - **CTA 按钮**："Check out my work" (点击跳转到项目区)。

### 3.3 关于我 & 技能 (About & Skills)
- **布局**：双列布局 (左侧文字介绍，右侧技能云/头像)。
- **技能展示**：
    - 使用 **Tag (标签)** 形式展示，例如 `Python` `React` `Git` `FastAPI` `Pygame`。
    - 避免使用百分比进度条 (如 "Python 80%")。

### 3.4 项目展示 (Projects) - **核心重点**
- **数据结构**：使用 JSON 数组存储项目数据（方便后续修改）。
    - 字段建议：`id`, `title`, `description`, `techStack[]`, `githubLink`, `demoLink`, `image`.
- **卡片设计**：
    - **Hover 效果**：鼠标悬停时卡片轻微上浮，且有阴影加深。
    - **布局**：图片在左/上，描述在右/下。
    - **操作**：必须包含 GitHub 图标 (跳转源码) 和 外部链接图标 (跳转演示)。

### 3.5 页脚 (Footer)
- **内容**：版权信息 + 社交媒体图标 (GitHub, LinkedIn, Email)。
- **彩蛋**：Designed & Built by [Your Name]。

## 4. 设计规范 (Design System)
> **给 AI 的 CSS 指令**

- **色彩系统 (Color Palette)**：
    - **背景色**：`Slate-900` (深蓝黑) 或 `Zinc-950` (纯黑灰) —— *提供沉浸感*。
    - **文字色**：`Slate-300` (主要文字)，`Slate-500` (次要文字)。
    - **强调色 (Accent)**：`Teal-400` (青色) 或 `Emerald-400` (绿色) —— *用于链接和按钮高亮*。
- **字体 (Typography)**：
    - 标题：无衬线字体 (Inter / Roboto)。
    - **正文/代码**：等宽字体 (Fira Code / JetBrains Mono) —— *体现工程师身份*。
- **UI 质感**：
    - 适度使用 **Glassmorphism (毛玻璃效果)** 在导航栏。
    - 卡片圆角：`rounded-lg` 或 `rounded-xl`。

## 5. 技术栈建议 (Tech Stack)
- **框架**：React (Vite) 或 Next.js (如果不涉及服务端，Vite 更快)。
- **样式**：Tailwind CSS (AI 写 CSS 的神器，必选)。
- **图标库**：Lucide React 或 FontAwesome。
- **动画库**：Framer Motion (可选，用于平滑滚动和入场动画)。
- **部署**：Vercel (零配置上线)。