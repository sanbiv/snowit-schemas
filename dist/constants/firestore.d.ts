import { EnumDictionary } from '../types/utils';
import { WhereAliasOperator, WhereFilterOp } from '../types/firestore';
export declare const VALID_OPERATORS: WhereAliasOperator[];
export declare const OP_TO_FIRESTORE_OPERATOR: EnumDictionary<WhereAliasOperator, WhereFilterOp>;
