import { parentState, editNodeState } from "../recoil"
import { useRecoilState } from "recoil"
import { getElementById } from "../apollo/queries"
import { useQuery } from '@apollo/client'
import { Loading } from "./ui"
import { useEffect } from "react"

const ParentEditor = () => {

  const [ state, setState ] = useRecoilState(parentState)

  const { loading, error, data } = useQuery(getElementById, { variables: { id: state.nodeId } })

  const [ editState, setEditState ] = useRecoilState(editNodeState)
  console.log(editState)

  useEffect(() => {
    if(data){
      setEditState(data.getElementById)
    }
  }, [ data ])

  if(state.open){

  return (

    <div className="adz-parent-editor-wrapper">
      { loading ? 
        <Loading />
      : error ? 
        'Error'
      : data ?
        <div className="adz-parent-editor-wrapper">

        </div>
      : null }
    </div>

  )
 }

}

export default ParentEditor