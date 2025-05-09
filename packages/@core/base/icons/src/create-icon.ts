import type { IconifyIcon } from '@iconify/vue';

import { defineComponent, h } from 'vue';

import { addIcon, Icon } from '@iconify/vue';

function createIconifyIcon(icon: string) {
  // eslint-disable-next-line vue/one-component-per-file
  return defineComponent({
    name: `Icon-${icon}`,
    setup(props, { attrs }) {
      return () => h(Icon, { icon, ...props, ...attrs });
    },
  });
}

/**
 * 创建离线图标
 * @param icon 图标名称 建议与iconify的名称保持一致
 * @param iconComponent 从@iconify/icon-xxx/xxx导入的图标
 * @returns IconComponent
 */
function createIconifyOfflineIcon(icon: string, iconComponent: IconifyIcon) {
  // eslint-disable-next-line vue/one-component-per-file
  return defineComponent({
    name: `Icon-${icon}`,
    setup(props, { attrs }) {
      addIcon(icon, iconComponent);
      return () => h(Icon, { icon, ...props, ...attrs });
    },
  });
}

export { createIconifyIcon, createIconifyOfflineIcon };
