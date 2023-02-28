import RendererElement from "./rendererElement"

const Renderer = ({ nodes }) => {
    
    return(
        <div className="adz-split-renderer">
            {nodes.length !== 0 ?
                nodes.map((node, i) => {
                    return <RendererElement key={i} _key={i} nodeId={node.id} />
                })
            : 
                <div className="adz-init-renderer-element">
                    Create Your First Element In The Editor
                </div>
            }
        </div>
    )
}

export default Renderer