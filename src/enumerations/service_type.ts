export enum ServiceType {
  doctor = 'doctor',           // ko'rik
  laboratory = 'laboratory',    // analiz topshirish
  room = 'room',                // xona ga yotish
  surgery = 'surgery',          // jarrohlik amalyoti
}

export const ServiceTypeData = {
  [ServiceType.doctor]: 'doktor ko\'rigi',
  [ServiceType.laboratory]: 'laboratoriya ko\'rigi',
  [ServiceType.room]: 'xona uchun to\'lov',
  [ServiceType.surgery]: 'jarrohlik amalyoti',
}