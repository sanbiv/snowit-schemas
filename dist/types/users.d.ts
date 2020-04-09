import { DocumentData } from './firestore';
export declare type Sex = 'M' | 'F';
export declare type UserType = 'USER' | 'ADMIN' | 'DISTRICT';
export declare type ProfileType = 'beginner' | 'intermediate' | 'expert';
export interface Profile extends DocumentData {
    level?: ProfileType;
    name: string;
    sex: Sex | null;
    skibootsSize?: number | null;
    types: string[];
}
