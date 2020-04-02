import firestoreUtils from '../../../utils/firestore';
// import { toMoment } from '../../../utils/dates';

const dbToForm = documentData => {
  let formData = firestoreUtils.dbToForm(documentData, {
    'user.birthday': 'date',
  });
  if (!formData.user) {
    formData.user = {};
  }
  // if (formData.user.birthday) {
  //   formData.user.birthday = toMoment(formData.user.birthday).format('YYYY-MM-DD');
  // }
  return formData;
};

export default dbToForm;
