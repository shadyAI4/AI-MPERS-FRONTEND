export interface BaseEntity {
    id?: number;
    active?: boolean;
    createdAt?: string;
    deleted?: boolean;
    uid?: string;
    updatedAt?: string;
    updatedAtModified?: string;
    formattedCreatedAt?: string;
    [otherOptions: string]: any;
  }
  
  export interface BaseEntity_ {
    id?: number;
    uid?: string;
    active?: boolean;
    createdAt?: string;
    deleted?: boolean;
    formattedCreatedAt?: string;
    [otherOptions: string]: any;
  }
  
  export interface BaseResponse {
    data?: any;
    response?: {
      message?: string;
      code?: number;
      status?: boolean;
    };
    page?: {
      number?: number;
      hasNextPage?: boolean;
      hasPreviousPage?: boolean;
      nextPageNumber?: number;
      previousPageNumber?: number;
    }
    //Down for page responses Only
    content?: any[];
    totalElements?: number;
    totalPages?: number;
    size?: number;
    last?: boolean;
    first?: boolean;
    hasContent?: boolean;
  }
  