import firestoreUtils from '../../../utils/firestore';
import { toMoment } from '../../../utils/dates';
import schema from './schema';

const formToDb = formData => {
  const data = firestoreUtils.formToDb(formData, null, { schema });
  if (data.user) {
    const birthday = data.user.birthday || data.user.birthdate;
    const birthdayMoment = birthday && toMoment(birthday);
    if (birthdayMoment && birthdayMoment.isValid()) {
      data.user.birthday = birthdayMoment.toDate();
      data.user.birthdayString = birthdayMoment.format('YYYY-MM-DD');
    } else {
      data.user.birthday = null;
      data.user.birthdayString = null;
    }
    data.user = firestoreUtils.replaceNil(data.user, null);
  }
  return data;
};

export default formToDb;
