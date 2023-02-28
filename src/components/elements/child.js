import { IoMdMove, IoMdOpen } from 'react-icons/io'
import { useSetRecoilState } from 'recoil'
import { parentState } from '../../recoil'

const Child = ({ _key, nodeId }) => {

    const setState = useSetRecoilState(parentState)

    return (
        <li _key={_key} className="adz-editor-item">
            {nodeId}
            <div className="flex flex-row items-center ml-auto p-2">
                <IoMdOpen className="text-xl ml-2" onClick={() => setState({ open:true, nodeId: nodeId })}/>
                <IoMdMove className="text-xl ml-2" />
            </div>
        </li>
    )
}

export default Child


/// CREATE NAVIGATOR BAR TO GO BACK/FORTH/SAVE/UNDO/ETC

/// BUILD EDITOR WINDOW AS LIST RENDERED BY PARENT ID, OPENING CHILD RE-RENDERS LIST WITH CHILD AS PARENT!