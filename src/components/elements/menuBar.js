import { IoMdMove, IoMdColorPalette } from 'react-icons/io'
import { IoTrashSharp, IoSettingsSharp } from 'react-icons/io5'

const MenuBar = ({ type, id }) => {
    return(
        <div className="adz-editor-menubar">
            <span className="adz-editor-menubar-title">{type}: {id}</span>
            <div className="adz-editor-menubar-buttons">
                <IoMdColorPalette 
                    className="adz-editor-menubar-item"
                />
                <IoSettingsSharp 
                    className="adz-editor-menubar-item"
                />
                <IoTrashSharp 
                    className="adz-editor-menubar-item"
                />
                <IoMdMove 
                    className="adz-editor-menubar-item"
                />
            </div>
        </div>
    )
}

export default MenuBar