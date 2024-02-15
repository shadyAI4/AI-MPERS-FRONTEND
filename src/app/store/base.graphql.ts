
export const baseGraphqlField_ = `
    id
    active
    uid
    createdAt
    updatedAt
    deleted
`;


export const basePageableGraphqlField = `
    number
    hasNextPage
    hasPreviousPage
    nextPageNumber
    previousPageNumber
`;

export const baseResponseGraphqlField = `
id
status
code
message
`;


export interface PageResult {
  number: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextPageNumber: number;
  previousPageNumber: number;
}

