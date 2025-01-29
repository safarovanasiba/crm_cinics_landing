export enum AppointmentStatus {
    Expected = 'expected',
    Scheduled = 'scheduled',
    Completed = 'completed',
    Cancelled = 'cancelled',
    NoShow = 'no_show',
}


export const AppointmentStatusData = {
    [AppointmentStatus.Expected] : 'kutilyapti',
    [AppointmentStatus.Scheduled] : 'rejalashtirilgan',
    [AppointmentStatus.Completed] : 'bajarilgan',
    [AppointmentStatus.Cancelled] : 'bekor qilingan',
    [AppointmentStatus.NoShow] : 'ko\'rilmagan',
}
