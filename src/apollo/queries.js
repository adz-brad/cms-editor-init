import { gql } from '@apollo/client';

export const getAllElements = gql`
query GetAllElements {
  getAllElements {
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

export const getElementsByParent = gql`
query GetElementsByParent($parent: String) {
  getElementsByParent(parent: $parent) {
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

export const getElementById = gql`
query GetElementById($id: String) {
  getElementById(id: $id) {
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