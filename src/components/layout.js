import Menu from './menu'
import Editor from "./editor"
import Renderer from "./renderer"
import { useQuery } from '@apollo/client';
import { normalize } from '../functions';
import { getElementsByParent } from '../apollo/queries';
import { nodeState } from '../recoil';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Loading } from './ui';

const Layout = () => {

    const { loading, error, data } = useQuery(getElementsByParent, { variables: { parent: null }, pollInterval: 500 }) 
    const setNodes = useSetRecoilState(nodeState)
    

    useEffect(() => {
        if(data){
            const nodes = normalize(data.getElementsByParent, 'id')
            setNodes(nodes)
        }
    }, [ data, setNodes ])

    if(loading) {
        return <Loading />
    }

    if(error) {
        return 'Error'
    }

    if(data) {
 
        const parentNodes = data.getElementsByParent

        return (
            <div className="adz-live-editor">
                <Menu />
                <div className="adz-split-wrapper">
                    <Editor nodes={parentNodes} />
                    <Renderer  nodes={parentNodes} />
                </div>
            </div>
        )
    }
}

export default Layout