/* tslint:disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO-8601 compliant DateTime Scalar */
  DateTime: any;
};

export type BooleanArgument = {
  isNull?: Maybe<Scalars['Boolean']>;
  equal?: Maybe<Scalars['Boolean']>;
};

export type DateArgument = {
  isNull?: Maybe<Scalars['Boolean']>;
  equal?: Maybe<Scalars['DateTime']>;
  greaterThan?: Maybe<Scalars['DateTime']>;
  greaterThanEqual?: Maybe<Scalars['DateTime']>;
  lessThan?: Maybe<Scalars['DateTime']>;
  lessThanEqual?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateRange>;
};

export type DateRange = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};

export type IdArgument = {
  in?: Maybe<Array<Scalars['String']>>;
  equal?: Maybe<Scalars['String']>;
  isNull?: Maybe<Scalars['Boolean']>;
};

export type KogitoMetadata = {
  __typename?: 'KogitoMetadata';
  lastUpdate: Scalars['DateTime'];
  processInstances?: Maybe<Array<Maybe<ProcessInstanceMeta>>>;
  userTasks?: Maybe<Array<Maybe<UserTaskInstanceMeta>>>;
};

export type KogitoMetadataArgument = {
  lastUpdate?: Maybe<DateArgument>;
  processInstances?: Maybe<ProcessInstanceMetaArgument>;
  userTasks?: Maybe<UserTaskInstanceMetaArgument>;
};

export type KogitoMetadataOrderBy = {
  lastUpdate?: Maybe<OrderBy>;
};

export type NodeInstance = {
  __typename?: 'NodeInstance';
  id: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  enter: Scalars['DateTime'];
  exit?: Maybe<Scalars['DateTime']>;
  definitionId: Scalars['String'];
  nodeId: Scalars['String'];
};

export type NodeInstanceArgument = {
  id?: Maybe<IdArgument>;
  name?: Maybe<StringArgument>;
  definitionId?: Maybe<StringArgument>;
  nodeId?: Maybe<StringArgument>;
  type?: Maybe<StringArgument>;
  enter?: Maybe<DateArgument>;
  exit?: Maybe<DateArgument>;
};

export type NumericArgument = {
  in?: Maybe<Array<Scalars['Int']>>;
  isNull?: Maybe<Scalars['Boolean']>;
  equal?: Maybe<Scalars['Int']>;
  greaterThan?: Maybe<Scalars['Int']>;
  greaterThanEqual?: Maybe<Scalars['Int']>;
  lessThan?: Maybe<Scalars['Int']>;
  lessThanEqual?: Maybe<Scalars['Int']>;
  between?: Maybe<NumericRange>;
};

export type NumericRange = {
  from: Scalars['Int'];
  to: Scalars['Int'];
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Pagination = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ProcessInstance = {
  __typename?: 'ProcessInstance';
  id: Scalars['String'];
  processId: Scalars['String'];
  processName?: Maybe<Scalars['String']>;
  parentProcessInstanceId?: Maybe<Scalars['String']>;
  rootProcessInstanceId?: Maybe<Scalars['String']>;
  rootProcessId?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['String']>>;
  state: ProcessInstanceState;
  endpoint: Scalars['String'];
  nodes: Array<NodeInstance>;
  variables?: Maybe<Scalars['String']>;
  start: Scalars['DateTime'];
  end?: Maybe<Scalars['DateTime']>;
  childProcessInstanceId?: Maybe<Array<Scalars['String']>>;
  error?: Maybe<ProcessInstanceError>;
  addons?: Maybe<Array<Scalars['String']>>;
  lastUpdate: Scalars['DateTime'];
};

export type ProcessInstanceArgument = {
  and?: Maybe<Array<ProcessInstanceArgument>>;
  or?: Maybe<Array<ProcessInstanceArgument>>;
  id?: Maybe<IdArgument>;
  processId?: Maybe<StringArgument>;
  processName?: Maybe<StringArgument>;
  parentProcessInstanceId?: Maybe<IdArgument>;
  rootProcessInstanceId?: Maybe<IdArgument>;
  rootProcessId?: Maybe<StringArgument>;
  state?: Maybe<ProcessInstanceStateArgument>;
  error?: Maybe<ProcessInstanceErrorArgument>;
  nodes?: Maybe<NodeInstanceArgument>;
  endpoint?: Maybe<StringArgument>;
  roles?: Maybe<StringArrayArgument>;
  start?: Maybe<DateArgument>;
  end?: Maybe<DateArgument>;
  addons?: Maybe<StringArrayArgument>;
  lastUpdate?: Maybe<DateArgument>;
};

export type ProcessInstanceError = {
  __typename?: 'ProcessInstanceError';
  nodeDefinitionId: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type ProcessInstanceErrorArgument = {
  nodeDefinitionId?: Maybe<StringArgument>;
  message?: Maybe<StringArgument>;
};

export type ProcessInstanceErrorOrderBy = {
  nodeDefinitionId?: Maybe<OrderBy>;
  message?: Maybe<OrderBy>;
};

export type ProcessInstanceMeta = {
  __typename?: 'ProcessInstanceMeta';
  id: Scalars['String'];
  processId: Scalars['String'];
  processName?: Maybe<Scalars['String']>;
  parentProcessInstanceId?: Maybe<Scalars['String']>;
  rootProcessInstanceId?: Maybe<Scalars['String']>;
  rootProcessId?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['String']>>;
  state: ProcessInstanceState;
  endpoint: Scalars['String'];
  start: Scalars['DateTime'];
  end?: Maybe<Scalars['DateTime']>;
  lastUpdate: Scalars['DateTime'];
};

export type ProcessInstanceMetaArgument = {
  id?: Maybe<IdArgument>;
  processId?: Maybe<StringArgument>;
  processName?: Maybe<StringArgument>;
  parentProcessInstanceId?: Maybe<IdArgument>;
  rootProcessInstanceId?: Maybe<IdArgument>;
  rootProcessId?: Maybe<StringArgument>;
  state?: Maybe<ProcessInstanceStateArgument>;
  endpoint?: Maybe<StringArgument>;
  roles?: Maybe<StringArrayArgument>;
  start?: Maybe<DateArgument>;
  end?: Maybe<DateArgument>;
};

export type ProcessInstanceOrderBy = {
  processId?: Maybe<OrderBy>;
  processName?: Maybe<OrderBy>;
  rootProcessId?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  start?: Maybe<OrderBy>;
  end?: Maybe<OrderBy>;
  error?: Maybe<ProcessInstanceErrorOrderBy>;
  lastUpdate?: Maybe<OrderBy>;
};

export enum ProcessInstanceState {
  Pending = 'PENDING',
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Aborted = 'ABORTED',
  Suspended = 'SUSPENDED',
  Error = 'ERROR'
}

export type ProcessInstanceStateArgument = {
  equal?: Maybe<ProcessInstanceState>;
  in?: Maybe<Array<Maybe<ProcessInstanceState>>>;
};

export type Query = {
  __typename?: 'Query';
  ProcessInstances?: Maybe<Array<Maybe<ProcessInstance>>>;
  UserTaskInstances?: Maybe<Array<Maybe<UserTaskInstance>>>;
};

export type QueryProcessInstancesArgs = {
  where?: Maybe<ProcessInstanceArgument>;
  orderBy?: Maybe<ProcessInstanceOrderBy>;
  pagination?: Maybe<Pagination>;
};

export type QueryUserTaskInstancesArgs = {
  where?: Maybe<UserTaskInstanceArgument>;
  orderBy?: Maybe<UserTaskInstanceOrderBy>;
  pagination?: Maybe<Pagination>;
};

export type StringArgument = {
  in?: Maybe<Array<Scalars['String']>>;
  like?: Maybe<Scalars['String']>;
  isNull?: Maybe<Scalars['Boolean']>;
  equal?: Maybe<Scalars['String']>;
};

export type StringArrayArgument = {
  contains?: Maybe<Scalars['String']>;
  containsAll?: Maybe<Array<Scalars['String']>>;
  containsAny?: Maybe<Array<Scalars['String']>>;
  isNull?: Maybe<Scalars['Boolean']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  ProcessInstanceAdded: ProcessInstance;
  ProcessInstanceUpdated: ProcessInstance;
  UserTaskInstanceAdded: UserTaskInstance;
  UserTaskInstanceUpdated: UserTaskInstance;
};

export type UserTaskInstance = {
  __typename?: 'UserTaskInstance';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  processInstanceId: Scalars['String'];
  processId: Scalars['String'];
  rootProcessInstanceId?: Maybe<Scalars['String']>;
  rootProcessId?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  actualOwner?: Maybe<Scalars['String']>;
  adminGroups?: Maybe<Array<Scalars['String']>>;
  adminUsers?: Maybe<Array<Scalars['String']>>;
  completed?: Maybe<Scalars['DateTime']>;
  started: Scalars['DateTime'];
  excludedUsers?: Maybe<Array<Scalars['String']>>;
  potentialGroups?: Maybe<Array<Scalars['String']>>;
  potentialUsers?: Maybe<Array<Scalars['String']>>;
  inputs?: Maybe<Scalars['String']>;
  outputs?: Maybe<Scalars['String']>;
  referenceName?: Maybe<Scalars['String']>;
  lastUpdate: Scalars['DateTime'];
};

export type UserTaskInstanceArgument = {
  and?: Maybe<Array<UserTaskInstanceArgument>>;
  or?: Maybe<Array<UserTaskInstanceArgument>>;
  state?: Maybe<StringArgument>;
  id?: Maybe<IdArgument>;
  description?: Maybe<StringArgument>;
  name?: Maybe<StringArgument>;
  priority?: Maybe<StringArgument>;
  processInstanceId?: Maybe<IdArgument>;
  actualOwner?: Maybe<StringArgument>;
  potentialUsers?: Maybe<StringArrayArgument>;
  potentialGroups?: Maybe<StringArrayArgument>;
  excludedUsers?: Maybe<StringArrayArgument>;
  adminGroups?: Maybe<StringArrayArgument>;
  adminUsers?: Maybe<StringArrayArgument>;
  completed?: Maybe<DateArgument>;
  started?: Maybe<DateArgument>;
  referenceName?: Maybe<StringArgument>;
  lastUpdate?: Maybe<DateArgument>;
};

export type UserTaskInstanceMeta = {
  __typename?: 'UserTaskInstanceMeta';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  processInstanceId: Scalars['String'];
  state: Scalars['String'];
  actualOwner?: Maybe<Scalars['String']>;
  adminGroups?: Maybe<Array<Scalars['String']>>;
  adminUsers?: Maybe<Array<Scalars['String']>>;
  completed?: Maybe<Scalars['DateTime']>;
  started: Scalars['DateTime'];
  excludedUsers?: Maybe<Array<Scalars['String']>>;
  potentialGroups?: Maybe<Array<Scalars['String']>>;
  potentialUsers?: Maybe<Array<Scalars['String']>>;
  referenceName?: Maybe<Scalars['String']>;
  lastUpdate: Scalars['DateTime'];
};

export type UserTaskInstanceMetaArgument = {
  state?: Maybe<StringArgument>;
  id?: Maybe<IdArgument>;
  description?: Maybe<StringArgument>;
  name?: Maybe<StringArgument>;
  priority?: Maybe<StringArgument>;
  processInstanceId?: Maybe<IdArgument>;
  actualOwner?: Maybe<StringArgument>;
  potentialUsers?: Maybe<StringArrayArgument>;
  potentialGroups?: Maybe<StringArrayArgument>;
  excludedUsers?: Maybe<StringArrayArgument>;
  adminGroups?: Maybe<StringArrayArgument>;
  adminUsers?: Maybe<StringArrayArgument>;
  completed?: Maybe<DateArgument>;
  started?: Maybe<DateArgument>;
  referenceName?: Maybe<StringArgument>;
};

export type UserTaskInstanceOrderBy = {
  state?: Maybe<OrderBy>;
  actualOwner?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  priority?: Maybe<OrderBy>;
  completed?: Maybe<OrderBy>;
  started?: Maybe<OrderBy>;
  referenceName?: Maybe<OrderBy>;
  lastUpdate?: Maybe<OrderBy>;
};

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior
 * in ways field arguments will not suffice, such as conditionally including or
 * skipping a field. Directives provide this by describing additional information
 * to the executor.
 */
export type __Directive = {
  __typename?: '__Directive';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  locations: Array<__DirectiveLocation>;
  args: Array<__InputValue>;
};

/**
 * A Directive can be adjacent to many parts of the GraphQL language, a
 * __DirectiveLocation describes one such possible adjacencies.
 */
export enum __DirectiveLocation {
  /** Location adjacent to a query operation. */
  Query = 'QUERY',
  /** Location adjacent to a mutation operation. */
  Mutation = 'MUTATION',
  /** Location adjacent to a subscription operation. */
  Subscription = 'SUBSCRIPTION',
  /** Location adjacent to a field. */
  Field = 'FIELD',
  /** Location adjacent to a fragment definition. */
  FragmentDefinition = 'FRAGMENT_DEFINITION',
  /** Location adjacent to a fragment spread. */
  FragmentSpread = 'FRAGMENT_SPREAD',
  /** Location adjacent to an inline fragment. */
  InlineFragment = 'INLINE_FRAGMENT',
  /** Location adjacent to a variable definition. */
  VariableDefinition = 'VARIABLE_DEFINITION',
  /** Location adjacent to a schema definition. */
  Schema = 'SCHEMA',
  /** Location adjacent to a scalar definition. */
  Scalar = 'SCALAR',
  /** Location adjacent to an object type definition. */
  Object = 'OBJECT',
  /** Location adjacent to a field definition. */
  FieldDefinition = 'FIELD_DEFINITION',
  /** Location adjacent to an argument definition. */
  ArgumentDefinition = 'ARGUMENT_DEFINITION',
  /** Location adjacent to an interface definition. */
  Interface = 'INTERFACE',
  /** Location adjacent to a union definition. */
  Union = 'UNION',
  /** Location adjacent to an enum definition. */
  Enum = 'ENUM',
  /** Location adjacent to an enum value definition. */
  EnumValue = 'ENUM_VALUE',
  /** Location adjacent to an input object type definition. */
  InputObject = 'INPUT_OBJECT',
  /** Location adjacent to an input object field definition. */
  InputFieldDefinition = 'INPUT_FIELD_DEFINITION'
}

/**
 * One possible value for a given Enum. Enum values are unique values, not a
 * placeholder for a string or numeric value. However an Enum value is returned in
 * a JSON response as a string.
 */
export type __EnumValue = {
  __typename?: '__EnumValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/**
 * Object and Interface types are described by a list of Fields, each of which has
 * a name, potentially a list of arguments, and a return type.
 */
export type __Field = {
  __typename?: '__Field';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/**
 * Arguments provided to Fields or Directives and the input fields of an
 * InputObject are represented as Input Values which describe their type and
 * optionally a default value.
 */
export type __InputValue = {
  __typename?: '__InputValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']>;
};

/**
 * A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all
 * available types and directives on the server, as well as the entry points for
 * query, mutation, and subscription operations.
 */
export type __Schema = {
  __typename?: '__Schema';
  /** A list of all types supported by this server. */
  types: Array<__Type>;
  /** The type that query operations will be rooted at. */
  queryType: __Type;
  /** If this server supports mutation, the type that mutation operations will be rooted at. */
  mutationType?: Maybe<__Type>;
  /** If this server support subscription, the type that subscription operations will be rooted at. */
  subscriptionType?: Maybe<__Type>;
  /** A list of all directives supported by this server. */
  directives: Array<__Directive>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of
 * types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that
 * type. Scalar types provide no information beyond a name and description, while
 * Enum types provide their values. Object and Interface types provide the fields
 * they describe. Abstract types, Union and Interface, provide the Object types
 * possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  __typename?: '__Type';
  kind: __TypeKind;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of
 * types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that
 * type. Scalar types provide no information beyond a name and description, while
 * Enum types provide their values. Object and Interface types provide the fields
 * they describe. Abstract types, Union and Interface, provide the Object types
 * possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of
 * types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that
 * type. Scalar types provide no information beyond a name and description, while
 * Enum types provide their values. Object and Interface types provide the fields
 * they describe. Abstract types, Union and Interface, provide the Object types
 * possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields` and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL'
}

export type GetProcessInstancesQueryVariables = {
  state?: Maybe<Array<ProcessInstanceState>>;
};

export type GetProcessInstancesQuery = { __typename?: 'Query' } & {
  ProcessInstances: Maybe<
    Array<
      Maybe<
        { __typename?: 'ProcessInstance' } & Pick<
          ProcessInstance,
          | 'id'
          | 'processId'
          | 'processName'
          | 'parentProcessInstanceId'
          | 'roles'
          | 'state'
          | 'start'
          | 'lastUpdate'
          | 'addons'
          | 'endpoint'
        > & {
            error: Maybe<
              { __typename?: 'ProcessInstanceError' } & Pick<
                ProcessInstanceError,
                'nodeDefinitionId' | 'message'
              >
            >;
          }
      >
    >
  >;
};

export type GetChildInstancesQueryVariables = {
  instanceId?: Maybe<Scalars['String']>;
};

export type GetChildInstancesQuery = { __typename?: 'Query' } & {
  ProcessInstances: Maybe<
    Array<
      Maybe<
        { __typename?: 'ProcessInstance' } & Pick<
          ProcessInstance,
          | 'id'
          | 'processId'
          | 'processName'
          | 'parentProcessInstanceId'
          | 'rootProcessInstanceId'
          | 'roles'
          | 'state'
          | 'start'
          | 'lastUpdate'
          | 'endpoint'
          | 'addons'
        > & {
            error: Maybe<
              { __typename?: 'ProcessInstanceError' } & Pick<
                ProcessInstanceError,
                'nodeDefinitionId' | 'message'
              >
            >;
          }
      >
    >
  >;
};

export type GetProcessInstanceByIdQueryVariables = {
  id?: Maybe<Scalars['String']>;
};

export type GetProcessInstanceByIdQuery = { __typename?: 'Query' } & {
  ProcessInstances: Maybe<
    Array<
      Maybe<
        { __typename?: 'ProcessInstance' } & Pick<
          ProcessInstance,
          | 'id'
          | 'processId'
          | 'processName'
          | 'parentProcessInstanceId'
          | 'roles'
          | 'variables'
          | 'state'
          | 'start'
          | 'lastUpdate'
          | 'end'
          | 'endpoint'
          | 'childProcessInstanceId'
        > & {
            nodes: Array<
              { __typename?: 'NodeInstance' } & Pick<
                NodeInstance,
                'id' | 'name' | 'type' | 'enter' | 'exit'
              >
            >;
          }
      >
    >
  >;
};

export type GetPickerQueryVariables = {
  columnPickerType: Scalars['String'];
};

export type GetPickerQuery = { __typename?: 'Query' } & {
  __type: Maybe<
    { __typename?: '__Type' } & Pick<__Type, 'name'> & {
        fields: Maybe<
          Array<
            { __typename?: '__Field' } & Pick<__Field, 'name'> & {
                type: { __typename?: '__Type' } & Pick<
                  __Type,
                  'name' | 'kind'
                > & {
                    fields: Maybe<
                      Array<
                        { __typename?: '__Field' } & Pick<__Field, 'name'> & {
                            type: { __typename?: '__Type' } & Pick<
                              __Type,
                              'name' | 'kind'
                            >;
                          }
                      >
                    >;
                  };
              }
          >
        >;
      }
  >;
};

export type GetQueryTypesQueryVariables = {};

export type GetQueryTypesQuery = { __typename?: 'Query' } & {
  __schema: { __typename?: '__Schema' } & {
    queryType: Array<
      { __typename?: '__Type' } & Pick<__Type, 'name' | 'kind'> & {
          fields: Maybe<
            Array<
              { __typename?: '__Field' } & Pick<__Field, 'name'> & {
                  type: { __typename?: '__Type' } & Pick<
                    __Type,
                    'name' | 'kind'
                  >;
                }
            >
          >;
          inputFields: Maybe<
            Array<
              { __typename?: '__InputValue' } & Pick<__InputValue, 'name'> & {
                  type: { __typename?: '__Type' } & Pick<
                    __Type,
                    'name' | 'kind'
                  >;
                }
            >
          >;
        }
    >;
  };
};

export type GetQueryQueryVariables = {};

export type GetQueryQuery = { __typename?: 'Query' } & {
  __type: Maybe<
    { __typename?: '__Type' } & Pick<__Type, 'name'> & {
        fields: Maybe<
          Array<
            { __typename?: '__Field' } & Pick<__Field, 'name'> & {
                args: Array<
                  { __typename?: '__InputValue' } & Pick<
                    __InputValue,
                    'name'
                  > & {
                      type: { __typename?: '__Type' } & Pick<
                        __Type,
                        'kind' | 'name'
                      >;
                    }
                >;
                type: { __typename?: '__Type' } & {
                  ofType: Maybe<
                    { __typename?: '__Type' } & Pick<__Type, 'name'>
                  >;
                };
              }
          >
        >;
      }
  >;
};

export type GetSchemaQueryVariables = {
  currentQuery: Scalars['String'];
};

export type GetSchemaQuery = { __typename?: 'Query' } & {
  __type: Maybe<
    { __typename?: '__Type' } & Pick<__Type, 'name'> & {
        inputFields: Maybe<
          Array<
            { __typename?: '__InputValue' } & Pick<__InputValue, 'name'> & {
                type: { __typename?: '__Type' } & Pick<
                  __Type,
                  'name' | 'kind'
                > & {
                    inputFields: Maybe<
                      Array<
                        { __typename?: '__InputValue' } & Pick<
                          __InputValue,
                          'name'
                        > & {
                            type: { __typename?: '__Type' } & Pick<
                              __Type,
                              'name'
                            >;
                          }
                      >
                    >;
                  };
              }
          >
        >;
      }
  >;
};

export type GetTypesQueryVariables = {
  currentArgument: Scalars['String'];
};

export type GetTypesQuery = { __typename?: 'Query' } & {
  __type: Maybe<
    { __typename?: '__Type' } & Pick<__Type, 'name'> & {
        inputFields: Maybe<
          Array<
            { __typename?: '__InputValue' } & Pick<__InputValue, 'name'> & {
                type: { __typename?: '__Type' } & Pick<__Type, 'name' | 'kind'>;
              }
          >
        >;
      }
  >;
};

export const GetProcessInstancesDocument = gql`
  query getProcessInstances($state: [ProcessInstanceState!]) {
    ProcessInstances(
      where: {
        parentProcessInstanceId: { isNull: true }
        state: { in: $state }
      }
    ) {
      id
      processId
      processName
      parentProcessInstanceId
      roles
      state
      start
      lastUpdate
      addons
      endpoint
      error {
        nodeDefinitionId
        message
      }
    }
  }
`;

/**
 * __useGetProcessInstancesQuery__
 *
 * To run a query within a React component, call `useGetProcessInstancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProcessInstancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProcessInstancesQuery({
 *   variables: {
 *      state: // value for 'state'
 *   },
 * });
 */
export function useGetProcessInstancesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetProcessInstancesQuery,
    GetProcessInstancesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetProcessInstancesQuery,
    GetProcessInstancesQueryVariables
  >(GetProcessInstancesDocument, baseOptions);
}
export function useGetProcessInstancesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetProcessInstancesQuery,
    GetProcessInstancesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetProcessInstancesQuery,
    GetProcessInstancesQueryVariables
  >(GetProcessInstancesDocument, baseOptions);
}
export type GetProcessInstancesQueryHookResult = ReturnType<
  typeof useGetProcessInstancesQuery
>;
export type GetProcessInstancesLazyQueryHookResult = ReturnType<
  typeof useGetProcessInstancesLazyQuery
>;
export type GetProcessInstancesQueryResult = ApolloReactCommon.QueryResult<
  GetProcessInstancesQuery,
  GetProcessInstancesQueryVariables
>;
export const GetChildInstancesDocument = gql`
  query getChildInstances($instanceId: String) {
    ProcessInstances(
      where: { parentProcessInstanceId: { equal: $instanceId } }
    ) {
      id
      processId
      processName
      parentProcessInstanceId
      rootProcessInstanceId
      roles
      state
      start
      lastUpdate
      endpoint
      addons
      error {
        nodeDefinitionId
        message
      }
    }
  }
`;

/**
 * __useGetChildInstancesQuery__
 *
 * To run a query within a React component, call `useGetChildInstancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChildInstancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChildInstancesQuery({
 *   variables: {
 *      instanceId: // value for 'instanceId'
 *   },
 * });
 */
export function useGetChildInstancesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetChildInstancesQuery,
    GetChildInstancesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetChildInstancesQuery,
    GetChildInstancesQueryVariables
  >(GetChildInstancesDocument, baseOptions);
}
export function useGetChildInstancesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetChildInstancesQuery,
    GetChildInstancesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetChildInstancesQuery,
    GetChildInstancesQueryVariables
  >(GetChildInstancesDocument, baseOptions);
}
export type GetChildInstancesQueryHookResult = ReturnType<
  typeof useGetChildInstancesQuery
>;
export type GetChildInstancesLazyQueryHookResult = ReturnType<
  typeof useGetChildInstancesLazyQuery
>;
export type GetChildInstancesQueryResult = ApolloReactCommon.QueryResult<
  GetChildInstancesQuery,
  GetChildInstancesQueryVariables
>;
export const GetProcessInstanceByIdDocument = gql`
  query getProcessInstanceById($id: String) {
    ProcessInstances(where: { id: { equal: $id } }) {
      id
      processId
      processName
      parentProcessInstanceId
      roles
      variables
      state
      start
      lastUpdate
      end
      endpoint
      childProcessInstanceId
      nodes {
        id
        name
        type
        enter
        exit
      }
    }
  }
`;

/**
 * __useGetProcessInstanceByIdQuery__
 *
 * To run a query within a React component, call `useGetProcessInstanceByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProcessInstanceByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProcessInstanceByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProcessInstanceByIdQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetProcessInstanceByIdQuery,
    GetProcessInstanceByIdQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetProcessInstanceByIdQuery,
    GetProcessInstanceByIdQueryVariables
  >(GetProcessInstanceByIdDocument, baseOptions);
}
export function useGetProcessInstanceByIdLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetProcessInstanceByIdQuery,
    GetProcessInstanceByIdQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetProcessInstanceByIdQuery,
    GetProcessInstanceByIdQueryVariables
  >(GetProcessInstanceByIdDocument, baseOptions);
}
export type GetProcessInstanceByIdQueryHookResult = ReturnType<
  typeof useGetProcessInstanceByIdQuery
>;
export type GetProcessInstanceByIdLazyQueryHookResult = ReturnType<
  typeof useGetProcessInstanceByIdLazyQuery
>;
export type GetProcessInstanceByIdQueryResult = ApolloReactCommon.QueryResult<
  GetProcessInstanceByIdQuery,
  GetProcessInstanceByIdQueryVariables
>;
export const GetPickerDocument = gql`
  query getPicker($columnPickerType: String!) {
    __type(name: $columnPickerType) {
      name
      fields {
        name
        type {
          name
          kind
          fields {
            name
            type {
              name
              kind
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetPickerQuery__
 *
 * To run a query within a React component, call `useGetPickerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPickerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPickerQuery({
 *   variables: {
 *      columnPickerType: // value for 'columnPickerType'
 *   },
 * });
 */
export function useGetPickerQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPickerQuery,
    GetPickerQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetPickerQuery, GetPickerQueryVariables>(
    GetPickerDocument,
    baseOptions
  );
}
export function useGetPickerLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPickerQuery,
    GetPickerQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetPickerQuery, GetPickerQueryVariables>(
    GetPickerDocument,
    baseOptions
  );
}
export type GetPickerQueryHookResult = ReturnType<typeof useGetPickerQuery>;
export type GetPickerLazyQueryHookResult = ReturnType<
  typeof useGetPickerLazyQuery
>;
export type GetPickerQueryResult = ApolloReactCommon.QueryResult<
  GetPickerQuery,
  GetPickerQueryVariables
>;
export const GetQueryTypesDocument = gql`
  query getQueryTypes {
    __schema {
      queryType: types {
        name
        kind
        fields {
          name
          type {
            name
            kind
          }
        }
        inputFields {
          name
          type {
            name
            kind
          }
        }
      }
    }
  }
`;

/**
 * __useGetQueryTypesQuery__
 *
 * To run a query within a React component, call `useGetQueryTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQueryTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQueryTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQueryTypesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetQueryTypesQuery,
    GetQueryTypesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetQueryTypesQuery,
    GetQueryTypesQueryVariables
  >(GetQueryTypesDocument, baseOptions);
}
export function useGetQueryTypesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetQueryTypesQuery,
    GetQueryTypesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetQueryTypesQuery,
    GetQueryTypesQueryVariables
  >(GetQueryTypesDocument, baseOptions);
}
export type GetQueryTypesQueryHookResult = ReturnType<
  typeof useGetQueryTypesQuery
>;
export type GetQueryTypesLazyQueryHookResult = ReturnType<
  typeof useGetQueryTypesLazyQuery
>;
export type GetQueryTypesQueryResult = ApolloReactCommon.QueryResult<
  GetQueryTypesQuery,
  GetQueryTypesQueryVariables
>;
export const GetQueryDocument = gql`
  query getQuery {
    __type(name: "Query") {
      name
      fields {
        name
        args {
          name
          type {
            kind
            name
          }
        }
        type {
          ofType {
            name
          }
        }
      }
    }
  }
`;

/**
 * __useGetQueryQuery__
 *
 * To run a query within a React component, call `useGetQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetQueryQuery,
    GetQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetQueryQuery, GetQueryQueryVariables>(
    GetQueryDocument,
    baseOptions
  );
}
export function useGetQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetQueryQuery,
    GetQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetQueryQuery, GetQueryQueryVariables>(
    GetQueryDocument,
    baseOptions
  );
}
export type GetQueryQueryHookResult = ReturnType<typeof useGetQueryQuery>;
export type GetQueryLazyQueryHookResult = ReturnType<
  typeof useGetQueryLazyQuery
>;
export type GetQueryQueryResult = ApolloReactCommon.QueryResult<
  GetQueryQuery,
  GetQueryQueryVariables
>;
export const GetSchemaDocument = gql`
  query getSchema($currentQuery: String!) {
    __type(name: $currentQuery) {
      name
      inputFields {
        name
        type {
          name
          kind
          inputFields {
            name
            type {
              name
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetSchemaQuery__
 *
 * To run a query within a React component, call `useGetSchemaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSchemaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSchemaQuery({
 *   variables: {
 *      currentQuery: // value for 'currentQuery'
 *   },
 * });
 */
export function useGetSchemaQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetSchemaQuery,
    GetSchemaQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetSchemaQuery, GetSchemaQueryVariables>(
    GetSchemaDocument,
    baseOptions
  );
}
export function useGetSchemaLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetSchemaQuery,
    GetSchemaQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetSchemaQuery, GetSchemaQueryVariables>(
    GetSchemaDocument,
    baseOptions
  );
}
export type GetSchemaQueryHookResult = ReturnType<typeof useGetSchemaQuery>;
export type GetSchemaLazyQueryHookResult = ReturnType<
  typeof useGetSchemaLazyQuery
>;
export type GetSchemaQueryResult = ApolloReactCommon.QueryResult<
  GetSchemaQuery,
  GetSchemaQueryVariables
>;
export const GetTypesDocument = gql`
  query getTypes($currentArgument: String!) {
    __type(name: $currentArgument) {
      name
      inputFields {
        name
        type {
          name
          kind
        }
      }
    }
  }
`;

/**
 * __useGetTypesQuery__
 *
 * To run a query within a React component, call `useGetTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTypesQuery({
 *   variables: {
 *      currentArgument: // value for 'currentArgument'
 *   },
 * });
 */
export function useGetTypesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetTypesQuery,
    GetTypesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetTypesQuery, GetTypesQueryVariables>(
    GetTypesDocument,
    baseOptions
  );
}
export function useGetTypesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetTypesQuery,
    GetTypesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetTypesQuery, GetTypesQueryVariables>(
    GetTypesDocument,
    baseOptions
  );
}
export type GetTypesQueryHookResult = ReturnType<typeof useGetTypesQuery>;
export type GetTypesLazyQueryHookResult = ReturnType<
  typeof useGetTypesLazyQuery
>;
export type GetTypesQueryResult = ApolloReactCommon.QueryResult<
  GetTypesQuery,
  GetTypesQueryVariables
>;
