export interface PaginationOptions {
  page?: number | string;
  limit?: number | string;
  maxLimit?: number;
}

export interface PaginationResult {
  page: number;
  limit: number;
  skip: number;
}

export interface PaginatedResponse<T> {
  [key: string]: any;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const getPaginationParams = (options: PaginationOptions): PaginationResult => {
  const page = Math.max(1, parseInt(String(options.page || 1), 10) || 1);
  const maxLimit = options.maxLimit || 100;
  let limit = parseInt(String(options.limit || 20), 10) || 20;
  if (limit < 1) limit = 20;
  if (limit > maxLimit) limit = maxLimit;

  const skip = (page - 1) * limit;

  return { page, limit, skip };
};

export const buildPaginatedData = <T>(
  dataKey: string,
  items: T[],
  total: number,
  page: number,
  limit: number
) => {
  const totalPages = Math.ceil(total / limit) || (items.length > 0 ? 1 : 0);
  return {
    [dataKey]: items,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
  };
};
