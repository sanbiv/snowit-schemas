import { Dictionary, SerializedError } from './utils';
import { DocumentData } from './firestore';
import { Product, ProductVariant } from './products';
export declare type Cart = DocumentData & {
    total: number;
    productsCount: number;
    rowsCount: number;
    validUntil: Date;
    discounts: CartDiscount[];
    originalTotal: number | null;
    discountAmount: number | null;
    invalid: boolean;
    lastUpdate: Date;
    userUID: string | null;
};
export declare type CartItem = Omit<Product, 'variants'> & {
    quantity: number;
    snowitcards: Dictionary<number>;
    externalProviderParams?: ExternalProviderParams | null;
    variant?: ProductVariant | null;
    parentProductData?: Partial<Product> | null;
};
export interface CartDiscount {
    amount: number;
    amountPerProduct: Dictionary<number>;
    validateItemDate: boolean;
    invalid: boolean;
    error?: null | SerializedError;
    invalidProducts?: InvalidDiscountProduct[];
    type: string;
    code: string;
    value: number;
    combinableWithProductDiscounts: boolean;
    minOrderValue?: number;
    minDiscountValue?: number;
    maxDiscountValue?: number;
}
export declare type ExternalProviderParams = Dictionary<number | string | boolean>;
export interface InvalidDiscountProduct {
    itemUID: string;
    error: SerializedError;
}