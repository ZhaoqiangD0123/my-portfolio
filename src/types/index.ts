export interface Project {
  id: number
  title: string
  description: string // 简短描述
  techStack: string[] // 技术栈标签，如 ["React", "Python"]
  githubLink: string // 源码链接
  demoLink?: string // 演示链接 (可选)
  image: string // 图片路径
}

export interface SocialLink {
  id: number
  platform: string // e.g., "GitHub"
  url: string
  icon: string // 对应 Lucide 图标的名称
}

