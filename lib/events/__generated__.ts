/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * InNoHassle Events API
 * API of Events project in InNoHassle Ecosystem.
 * OpenAPI spec version: 0.1.0
 */
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axios-instance";

export type AuthGetDevTokenParams = {
  email?: string;
};

export type UsersHideGroupParams = {
  group_id: number;
  hide?: boolean;
};

export type UsersHideFavoriteParams = {
  group_id: number;
  hide?: boolean;
};

export type UsersDeleteFavoriteParams = {
  group_id: number;
};

/**
 * Represents a user instance from the database excluding sensitive information.
 */
export interface ViewUser {
  id: number;
  email: string;
  name?: string;
  status?: string;
  groups_association?: UserXGroupView[];
  favorites_association?: UserXGroupView[];
}

/**
 * Represents a group instance from the database excluding sensitive information.
 */
export interface ViewEventGroup {
  id: number;
  path: string;
  name?: string;
  type?: string;
}

export interface VersionInfo {
  title?: string;
  description?: string;
  version?: string;
}

export type ValidationErrorLocItem = string | number;

export interface ValidationError {
  loc: ValidationErrorLocItem[];
  msg: string;
  type: string;
}

/**
 * Represents a group instance from the database excluding sensitive information.
 */
export interface UserXGroupView {
  user_id: number;
  group: ViewEventGroup;
  hidden: boolean;
}

export type SchemasSchemas = { [key: string]: any };

/**
 * Represents a dictionary of all schemas.
 */
export interface Schemas {
  schemas: SchemasSchemas;
}

export interface ListOfFavorites {
  favorites: UserXGroupView[];
}

export interface HTTPValidationError {
  detail?: ValidationError[];
}

/**
 * Represents a group instance to be created.
 */
export interface CreateEventGroup {
  path: string;
  name?: string;
  type?: string;
}

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never;

/**
 * Get current user info if authenticated
 * @summary Get Me
 */
export const usersGetMe = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<ViewUser>(
    { url: `/users/me`, method: "get", signal },
    options
  );
};

export const getUsersGetMeQueryKey = () => [`/users/me`] as const;

export const getUsersGetMeQueryOptions = <
  TData = Awaited<ReturnType<typeof usersGetMe>>,
  TError = void
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof usersGetMe>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryOptions<Awaited<ReturnType<typeof usersGetMe>>, TError, TData> & {
  queryKey: QueryKey;
} => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersGetMeQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersGetMe>>> = ({
    signal,
  }) => usersGetMe(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type UsersGetMeQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersGetMe>>
>;
export type UsersGetMeQueryError = void;

/**
 * @summary Get Me
 */
export const useUsersGetMe = <
  TData = Awaited<ReturnType<typeof usersGetMe>>,
  TError = void
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof usersGetMe>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersGetMeQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Add favorite to current user
 * @summary Add Favorite
 */
export const usersAddFavorite = (
  createEventGroup: CreateEventGroup,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<ListOfFavorites>(
    {
      url: `/users/me/favorites`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: createEventGroup,
    },
    options
  );
};

export const getUsersAddFavoriteMutationOptions = <
  TError = void | HTTPValidationError,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersAddFavorite>>,
    TError,
    { data: CreateEventGroup },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersAddFavorite>>,
  TError,
  { data: CreateEventGroup },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersAddFavorite>>,
    { data: CreateEventGroup }
  > = (props) => {
    const { data } = props ?? {};

    return usersAddFavorite(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersAddFavoriteMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersAddFavorite>>
>;
export type UsersAddFavoriteMutationBody = CreateEventGroup;
export type UsersAddFavoriteMutationError = void | HTTPValidationError;

/**
 * @summary Add Favorite
 */
export const useUsersAddFavorite = <
  TError = void | HTTPValidationError,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersAddFavorite>>,
    TError,
    { data: CreateEventGroup },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getUsersAddFavoriteMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * Delete favorite from current user
 * @summary Delete Favorite
 */
export const usersDeleteFavorite = (
  params: UsersDeleteFavoriteParams,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<ListOfFavorites>(
    { url: `/users/me/favorites`, method: "delete", params },
    options
  );
};

export const getUsersDeleteFavoriteMutationOptions = <
  TError = void | HTTPValidationError,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersDeleteFavorite>>,
    TError,
    { params: UsersDeleteFavoriteParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersDeleteFavorite>>,
  TError,
  { params: UsersDeleteFavoriteParams },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersDeleteFavorite>>,
    { params: UsersDeleteFavoriteParams }
  > = (props) => {
    const { params } = props ?? {};

    return usersDeleteFavorite(params, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersDeleteFavoriteMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersDeleteFavorite>>
>;

export type UsersDeleteFavoriteMutationError = void | HTTPValidationError;

/**
 * @summary Delete Favorite
 */
export const useUsersDeleteFavorite = <
  TError = void | HTTPValidationError,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersDeleteFavorite>>,
    TError,
    { params: UsersDeleteFavoriteParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getUsersDeleteFavoriteMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * Hide favorite from current user
 * @summary Hide Favorite
 */
export const usersHideFavorite = (
  params: UsersHideFavoriteParams,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<ListOfFavorites>(
    { url: `/users/me/favorites/hide`, method: "post", params },
    options
  );
};

export const getUsersHideFavoriteMutationOptions = <
  TError = void | HTTPValidationError,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersHideFavorite>>,
    TError,
    { params: UsersHideFavoriteParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersHideFavorite>>,
  TError,
  { params: UsersHideFavoriteParams },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersHideFavorite>>,
    { params: UsersHideFavoriteParams }
  > = (props) => {
    const { params } = props ?? {};

    return usersHideFavorite(params, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersHideFavoriteMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersHideFavorite>>
>;

export type UsersHideFavoriteMutationError = void | HTTPValidationError;

/**
 * @summary Hide Favorite
 */
export const useUsersHideFavorite = <
  TError = void | HTTPValidationError,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersHideFavorite>>,
    TError,
    { params: UsersHideFavoriteParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getUsersHideFavoriteMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * Hide group from current user
 * @summary Hide Group
 */
export const usersHideGroup = (
  params: UsersHideGroupParams,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<ListOfFavorites>(
    { url: `/users/me/groups/hide`, method: "post", params },
    options
  );
};

export const getUsersHideGroupMutationOptions = <
  TError = void | HTTPValidationError,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersHideGroup>>,
    TError,
    { params: UsersHideGroupParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersHideGroup>>,
  TError,
  { params: UsersHideGroupParams },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersHideGroup>>,
    { params: UsersHideGroupParams }
  > = (props) => {
    const { params } = props ?? {};

    return usersHideGroup(params, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersHideGroupMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersHideGroup>>
>;

export type UsersHideGroupMutationError = void | HTTPValidationError;

/**
 * @summary Hide Group
 */
export const useUsersHideGroup = <
  TError = void | HTTPValidationError,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersHideGroup>>,
    TError,
    { params: UsersHideGroupParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getUsersHideGroupMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary Schemas
 */
export const systemSchemas = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<Schemas>(
    { url: `/schemas`, method: "get", signal },
    options
  );
};

export const getSystemSchemasQueryKey = () => [`/schemas`] as const;

export const getSystemSchemasQueryOptions = <
  TData = Awaited<ReturnType<typeof systemSchemas>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof systemSchemas>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryOptions<
  Awaited<ReturnType<typeof systemSchemas>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getSystemSchemasQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof systemSchemas>>> = ({
    signal,
  }) => systemSchemas(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type SystemSchemasQueryResult = NonNullable<
  Awaited<ReturnType<typeof systemSchemas>>
>;
export type SystemSchemasQueryError = unknown;

/**
 * @summary Schemas
 */
export const useSystemSchemas = <
  TData = Awaited<ReturnType<typeof systemSchemas>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof systemSchemas>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getSystemSchemasQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get Dev Token
 */
export const authGetDevToken = (
  params?: AuthGetDevTokenParams,
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<string>(
    { url: `/auth/dev/token`, method: "get", params, signal },
    options
  );
};

export const getAuthGetDevTokenQueryKey = (params?: AuthGetDevTokenParams) =>
  [`/auth/dev/token`, ...(params ? [params] : [])] as const;

export const getAuthGetDevTokenQueryOptions = <
  TData = Awaited<ReturnType<typeof authGetDevToken>>,
  TError = HTTPValidationError
>(
  params?: AuthGetDevTokenParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof authGetDevToken>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof axiosInstance>;
  }
): UseQueryOptions<
  Awaited<ReturnType<typeof authGetDevToken>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getAuthGetDevTokenQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof authGetDevToken>>> = ({
    signal,
  }) => authGetDevToken(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type AuthGetDevTokenQueryResult = NonNullable<
  Awaited<ReturnType<typeof authGetDevToken>>
>;
export type AuthGetDevTokenQueryError = HTTPValidationError;

/**
 * @summary Get Dev Token
 */
export const useAuthGetDevToken = <
  TData = Awaited<ReturnType<typeof authGetDevToken>>,
  TError = HTTPValidationError
>(
  params?: AuthGetDevTokenParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof authGetDevToken>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof axiosInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAuthGetDevTokenQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Version
 */
export const systemVersion = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<VersionInfo>(
    { url: `/`, method: "get", signal },
    options
  );
};

export const getSystemVersionQueryKey = () => [`/`] as const;

export const getSystemVersionQueryOptions = <
  TData = Awaited<ReturnType<typeof systemVersion>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof systemVersion>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryOptions<
  Awaited<ReturnType<typeof systemVersion>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getSystemVersionQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof systemVersion>>> = ({
    signal,
  }) => systemVersion(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type SystemVersionQueryResult = NonNullable<
  Awaited<ReturnType<typeof systemVersion>>
>;
export type SystemVersionQueryError = unknown;

/**
 * @summary Version
 */
export const useSystemVersion = <
  TData = Awaited<ReturnType<typeof systemVersion>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof systemVersion>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getSystemVersionQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};
