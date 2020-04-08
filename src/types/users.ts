import { DocumentData } from './firestore'

export type Sex = 'M' | 'F';
export type UserType = 'USER' | 'ADMIN' | 'DISTRICT';

export type ProfileType = 'beginner' | 'intermediate' | 'expert';

export interface Profile extends DocumentData {
  level?: ProfileType;
  name: string;
  sex: Sex | null;
  skibootsSize?: number | null;
  types: string[];
}