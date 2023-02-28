import EditorElement from './editorElement'
import InitElement from './initElement'
import ParentEditor from './parentEditor'
import { useRecoilValue } from 'recoil'
import { parentState } from '../recoil'


const Editor = ({ nodes }) => {

    const state = useRecoilValue(parentState)

    return(
        <div className="adz-split-editor">
            {state.open ?
                <ParentEditor />
            : 
                nodes.length !== 0 ?
                    nodes.map((node, i) => {
                        return <EditorElement key={i} _key={i} nodeId={node.id} />
                    })
                : 
                    <InitElement />
            }
        </div>
    )
}

export default Editor