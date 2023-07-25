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
        description: '使用视频作为文字的背景效果'
      },
      {
        title: '旋转边框',
        path: '/rotate-border',
        key: 'css-style__rotate-border',
        description: '旋转边框'
      },
      {
        title: '扩散头像',
        path: '/diffuse-avatar',
        key: 'css-style__diffuse-avatar',
        description: '头像扩散效果'
      },
      {
        title: '透明描边文字',
        path: '/transparent-stroke-text',
        key: 'css-style__transparent-stroke-text',
        description: '透明描边文字'
      },
    ]
  },
]