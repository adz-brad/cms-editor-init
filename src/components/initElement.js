import { useMutation } from '@apollo/client'
import { addElement } from '../apollo/mutations'

const InitElement = () => {

  const [ create, { loading, error, data } ] = useMutation(addElement)
 
    return(
      <button 
        className="adz-init-editor-element adz-button"
        onClick={() => create(
          {
            variables: {
              id: '5',
              parent: null,
              children: [],
              content: 'Test Div 5',
              type: 'div',
              props: {
                className: 'adz-div'
              }
            } 
          })}
    >
        Create Element
      </button>

    )

}

export default InitElement
