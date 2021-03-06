// 公共样式
export const commonStyle = {
  rotate: 0,
}

export const commonAttr = {
  animations: [],
  events: {
    eventType: 'link',
    content: ''
  },
  groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
  isLock: false, // 是否锁定组件
}

const COMPONENT_LIST = [
  {
    name: 'antd-button',
    label: '按钮',
    antdProps: {
      type: 'default',
      shape: 'default',
    },
    style: {
      width: 80,
      height: 32,
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: 0,
      color: 'rgba(0, 0, 0, 1)',
    },
  },
  {
    name: 'antd-card',
    label: '卡片',
    antdProps: {
    },
    style: {
      width: 250,
      height: 250,
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: 0
    },
  }
]

for (let i = 0, len = COMPONENT_LIST.length; i < len; i++) {
  const item = COMPONENT_LIST[i]
  item.style = { ...commonStyle, ...item.style }
  COMPONENT_LIST[i] = { ...commonAttr, ...item }
}

export default COMPONENT_LIST
