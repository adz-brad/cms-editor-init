import { gql } from '@apollo/client';

export const addElement = gql`
mutation AddElement($id: String, $parent: String, $children: [String], $content: String, $type: String, $props: PropsInput) {
  addElement(id: $id, parent: $parent, children: $children, content: $content, type: $type, props: $props) {
    id
    parent
    children
    content
    type
    props {
      className
    }
  }
}
`;