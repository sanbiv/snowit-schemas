import keys from 'lodash/keys';

const DISCIPLINE_LEVELS = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  expert: 'Esperto',
};

const DISCIPLINES = {
  snowboard: 'Snowboard',
  ski: 'Sci',
};

const POLICIES_OBJECT = {
  communication: 'Comunicazioni promozionali',
  privacy: 'Accettazione privacy',
  profiling: 'Profilazione',
  thirdPartiesCommunication: 'Comunicazioni promozionali terze parti',
  thirdParties: 'Terze parti',
};
const POLICIES = keys(POLICIES_OBJECT);

export { DISCIPLINES, DISCIPLINE_LEVELS, POLICIES, POLICIES_OBJECT };
export default {
  DISCIPLINES,
  DISCIPLINE_LEVELS,
  POLICIES,
};
