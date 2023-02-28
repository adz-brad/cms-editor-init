import { atom, atomFamily, selectorFamily } from "recoil"

export const nodeState = atom({
    key: 'NodeState',
    default: {}
})

export const elementState = atomFamily({
    key: 'ElementState',
    default: selectorFamily({
        key: 'Element',
        get: id => ({ get }) => {
            return get(nodeState)[id]
        },
    })
})

export const parentState = atom({
    key: 'ParentState',
    default: {
        open: false,
        nodeId: null
    }
})

export const editNodeState = atom({
    key: 'EditNodeState',
    default:      {
        id: null,
        parent: null,
        children: null,
        content: null,
        type: null, 
        props: null
      },
})
