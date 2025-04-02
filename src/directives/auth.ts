/**
 * 全局权限指令
 * 用于细粒度控制组件权限
 * @Example v-auth="'admin'"
 */
import type { App, Directive, DirectiveBinding } from 'vue'

// 这里可以根据实际需求修改权限判断逻辑
function checkPermission(permission: string): boolean {
  // 示例：从localStorage中获取用户权限列表
  const userPermissions = JSON.parse(localStorage.getItem('permissions') || '[]')
  return userPermissions.includes(permission)
}

function isAuth(el: Element, binding: DirectiveBinding<any>) {
  const value = binding.value
  if (!value)
    return

  if (!checkPermission(value)) {
    el.parentNode?.removeChild(el)
  }
}

function mounted(el: Element, binding: DirectiveBinding<any>) {
  isAuth(el, binding)
}

const authDirective: Directive = {
  mounted,
}

export function setupAuthDirective(app: App) {
  app.directive('auth', authDirective)
}

export default authDirective
