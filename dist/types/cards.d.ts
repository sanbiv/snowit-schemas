export interface SnowitCard {
    uid: string;
    name: string;
    serialNumber?: string;
    userUID?: string | null;
    axessUID?: string;
    skidataUID?: string;
    email?: string | null;
    status?: string;
    phone?: string | null;
    pickup?: boolean;
    barcode?: boolean;
}
export declare type CardStatus = 'not-assigned' | 'pending' | 'warning' | 'valid' | 'rejected';
