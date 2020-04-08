import moment from 'moment';
import { Timestamp } from './firestore'

export type Moment = moment.Moment;

export type DurationUM = 'hours' | 'hour' | 'days' | 'day' | 'number';

export type AllValidDates = string | Date | null | undefined | number | Timestamp | Moment;