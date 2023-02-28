
const Parent = ({ children, _key }) => {

    return(

        <div className="adz-editor-parent" key={_key}>
            {children}
        </div>
    )
}

export default Parent