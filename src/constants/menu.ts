export type IMenuItem = {
  title: string
  path: string
  key: string
  description: string
  children?: IMenuItem[]
}

export type IMenus = {
  title: string
  path: string
  key: string
  children: IMenuItem[]
}

export const menus: IMenus[] = [
  {
    title: 'CSS样式',
    path: '/css-style',
    key: 'css-style',
    children: [
      {
        title: '渐变文字',
        path: '/gradient-text',
        key: 'css-style__gradient-text',
        description: '使用CSS渐变实现的文字效果'
      },
      {
        title: '太极文字',
        path: '/taichi-text',
        key: 'css-style__taichi-text',
        description: '使用CSS渐变实现的太极文字效果'
      },
      {
        title: '视频背景文字',
        path: '/video-bg-text',
        key: 'css-style__video-bg-text',
        description: '使用CSS渐变实现的视频背景文字效果'
      },
    ]
  },
]