import moment from 'moment';
import { Timestamp } from './firestore';
export declare type Moment = moment.Moment;
export declare type AllValidDates = string | Date | null | undefined | number | Timestamp | Moment;
