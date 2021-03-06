import { ADD_COMPONENT, UPDATE_COMPONENT_SUCC, SET_CUR_COMPONENT_ID, UPDATE_PREVIEW_STATUS } from '../constants'

const initialState = {
  componentList: [],
  curComponentID: null,
  previewStatus: false
}

export default (state = initialState, { type, payload = {} }) => {
  const newState = JSON.parse(JSON.stringify(state))
  const { style, antdProps, events, animations } = payload
  const index = newState.componentList.findIndex(component => component.id === newState.curComponentID)
  switch (type) {
    case ADD_COMPONENT:
      newState.componentList.push(payload.component)
      return newState
    case SET_CUR_COMPONENT_ID:
      newState.curComponentID = payload.id
      return newState
    case UPDATE_PREVIEW_STATUS:
      newState.previewStatus = payload.status
      newState.curComponentID = null
      return newState
    case UPDATE_COMPONENT_SUCC:
      style && newState.curComponentID && (newState.componentList[index].style = Object.assign({}, newState.componentList[index].style, style))
      antdProps && newState.curComponentID && (newState.componentList[index].antdProps = Object.assign({}, newState.componentList[index].antdProps, antdProps))
      events && newState.curComponentID && (newState.componentList[index].events = Object.assign({}, newState.componentList[index].events, events))
      animations && newState.curComponentID && (newState.componentList[index].animations = animations)
      return newState
    default:
      return state
  }
}
