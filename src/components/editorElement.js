import { elementState } from '../recoil'
import { useRecoilState } from 'recoil'
import MenuBar from './elements/menuBar'
import { IoMdAddCircle } from 'react-icons/io'
import Parent from './elements/parent'
import Child from './elements/child'

const EditorElement = ({ _key, nodeId }) => {

  const [ state, setState ] = useRecoilState(elementState(nodeId))

    return(
      <Parent key={_key} _key={_key} >
        <MenuBar type={state ? state.type : null} id={nodeId} />
        <ul className="adz-editor-children">
          {state ?
            state.children ?
              state.children.length !== 0 ?
                state.children.map((child, i) => {
                  return <Child key={i} _key={i} nodeId={child} />
                })
              :
                null
            : null
          : null }
        </ul>
        <div className="adz-editor-item">
          <IoMdAddCircle className="adz-editor-item-icon" />
        </div>
      </Parent>

    )

}

export default EditorElement


/// How to best render editor elements?
/// List or grid?
/// Render parent as container with immediate children as list
/// OnSelect child, render in overlay as new parent with its children as list
/// OnSelect menu button, render modal to edit props for the parent div