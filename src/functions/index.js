import { createElement } from "react";
import RendererElement from "../components/rendererElement";

export const normalize = (arr, k) => {
    const ids = []
    const data = arr.reduce((prev, curr) => {
      prev[curr[k]] = curr
      ids.push(curr[k])
      return prev
    }, {});
    return data
}

export const revert = (obj) => {
  const arr = Object.values(obj)
  return arr
}

export const renderElement = (props) => {
    return createElement(
      props.type, { 
      key: props.key, 
      ...props.props 
    }, 
      props.children.length !== 0 ? 
        props.children.map((child, i) => {
          return(
            <div />
          )
        })
      : props.content
    )
}