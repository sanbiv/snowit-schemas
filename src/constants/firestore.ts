import { EnumDictionary } from '../types/utils'
import { WhereAliasOperator, WhereFilterOp } from '../types/firestore'

export const VALID_OPERATORS: WhereAliasOperator[] = ['lt', 'lte', 'eq', 'gte', 'gt'];
export const OP_TO_FIRESTORE_OPERATOR: EnumDictionary<WhereAliasOperator, WhereFilterOp> = {
  lt: '<',
  lte: '<=',
  eq: '==',
  gte: '>=',
  gt: '>'
};