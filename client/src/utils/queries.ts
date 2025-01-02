import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      # array of savedBooks instead of thoughts here!
      savedBooks {
        bookId
        authors
        description
        title
        image
        # link
      }
    }
  }
`;
