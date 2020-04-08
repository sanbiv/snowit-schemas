import { Dictionary, EnumDictionary } from '../types/utils';
import { Discipline, SessionStatus, SessionTrackMotion, SessionTrackActivities} from '../types/sessions';

export const DISCIPLINES: Discipline[] = ['ski', 'snowboard', 'bob', 'crossCountry', 'skiMountaineering', 'snowshoes', 'telemark', 'skating', 'bike'];
export const DISCIPLINE_ALIASES: Dictionary<Discipline> = {
  sci: 'ski',
  cross_country: 'crossCountry',
  crosscountry: 'crossCountry',
  ski_mountaineering: 'skiMountaineering',
  skimountaineering: 'skiMountaineering'
};
export const DEFAULT_DISCIPLINE: Discipline = 'ski';

export const SESSION_STATUSES: SessionStatus[] = [
  'start',
  'active',
  'pause',
  'closed'
];

export const TRACK_MOTION: SessionTrackMotion[] = [
  'stationary', 'moving'
];
export const TRACK_ACTIVITIES: SessionTrackActivities[] = [
  'still', 'in_vehicle', 'on_bicycle', 'on_foot', 'running', 'walking'
];


// Parametri utilizzati per il calcolo delle kCal
export const DEFAULT_PAL = 7;
export const DISCIPLINE_PAL: EnumDictionary<Discipline, number> = { // PAL -> kCal/h (media, dato vecchio)
  ski: 7, // 550, // SCI COMPETITIVO E' 9!!
  snowboard: 4.299999999999999, // (alpino 4.3, competitivo 8) - 500,
  crossCountry: 6.7999999999999998, // 950, // MOLTO DIFFERENTE IN PROPORZIONE! sci di fondo
  snowshoes: 7.7000000000000002, // 580, // ciaspole / racchette da neve
  skating: 5.5, // Generale 5.5, competitivo 9 - 500, // pattinaggio
  bob: 5, // 450,
  skiMountaineering: 7, // 650, // sci alpinismo (una specie di scalata)
  telemark: 7, // 600 - NON TROVATO IN LISTA lascio come sci, sono molto simili come sport
  bike: 8.5
};