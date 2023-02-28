import { elementState } from '../recoil'
import { useRecoilValue } from 'recoil'
import { renderElement } from '../functions'

const RendererElement = ({ _key, nodeId }) => {

  const node = useRecoilValue(elementState(nodeId))

  let elementProps;
  if(node){
    const { __typename, ...props } = node.props
    elementProps = props
  }
  
  return(
    node ?
      renderElement({
        type: node.type,
        key: _key,
        props: elementProps,
        content: node.content,
        children: node.children
      })
    : null
  )

}

export default RendererElement