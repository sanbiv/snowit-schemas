import couponSchema from './types/coupon/schema';
import couponUiSchema from './types/coupon/uiSchema';
import experienceSchema from './types/experience/schema';
import experienceUiSchema from './types/experience/uiSchema';
import insuranceSchema from './types/insurance/schema';
import insuranceUiSchema from './types/insurance/uiSchema';
import rentalSchema from './types/rental/schema';
import rentalUiSchema from './types/rental/uiSchema';
import skipassSchema from './types/skipass/schema';
import skipassUiSchema from './types/skipass/uiSchema';
import snowitcardSchema from './types/snowitcard/schema';
import snowitcardUiSchema from './types/snowitcard/uiSchema';
import bundleSchema from './types/bundle/schema';
import bundleUiSchema from './types/bundle/uiSchema';
import lessonSchema from './types/lesson/schema';
import lessonUiSchema from './types/lesson/uiSchema';
import foodSchema from './types/food/schema';
import foodUiSchema from './types/food/uiSchema';
import parkingSchema from './types/parking/schema';
import parkingUiSchema from './types/parking/uiSchema';
import bundleFamilySchema from './types/bundle/family/schema';
import bundleFamilyUiSchema from './types/bundle/family/uiSchema';
import rentalBikeSchema from './types/rental/bike/schema';
import rentalBikeUiSchema from './types/rental/bike/uiSchema';
import hotelSchema from './types/hotel/schema';
import hotelUiSchema from './types/hotel/uiSchema';

export default {
  coupon: { schema: couponSchema, uiSchema: couponUiSchema },
  experience: { schema: experienceSchema, uiSchema: experienceUiSchema },
  insurance: { schema: insuranceSchema, uiSchema: insuranceUiSchema },
  rental: { schema: rentalSchema, uiSchema: rentalUiSchema },
  skipass: { schema: skipassSchema, uiSchema: skipassUiSchema },
  snowitcard: { schema: snowitcardSchema, uiSchema: snowitcardUiSchema },
  bundle: { schema: bundleSchema, uiSchema: bundleUiSchema },
  lesson: { schema: lessonSchema, uiSchema: lessonUiSchema },
  food: { schema: foodSchema, uiSchema: foodUiSchema },
  parking: { schema: parkingSchema, uiSchema: parkingUiSchema },
  'bundle:family-pack': {
    schema: bundleFamilySchema,
    uiSchema: bundleFamilyUiSchema,
  },
  'rental:bike': {
    schema: rentalBikeSchema,
    uiSchema: rentalBikeUiSchema,
  },
  hotel: { schema: hotelSchema, uiSchema: hotelUiSchema },
};
