export enum StaffType {
    Doctor = 'Doctor',
    Nurse = 'Nurse',
    Labarant = 'Labarant',
    Reseption = 'Reseption',
    Any = 'Any',
}

export const StaffTypeData = {
    [StaffType.Doctor]: 'vrach',
    [StaffType.Nurse]: 'hamshira',
    [StaffType.Labarant]: 'labarant',
    [StaffType.Reseption]: 'qabul bo\'limi',
    [StaffType.Any]: 'boshqa',
}
