import type { IMenuItem } from '../constants/menu'

export function getMenuPath(menus: Omit<IMenuItem, 'description'>[], currentItem: IMenuItem, parentPath = ''): string {
  let fullPath = parentPath

  menus.forEach(menu => {
    if (menu === currentItem) {
      fullPath = `${parentPath}${currentItem.path}`;
    } else {
      if (menu.children) {
        fullPath = getMenuPath(menu.children!, currentItem, fullPath + menu.path);
      }
    }
  })
  return fullPath
}
