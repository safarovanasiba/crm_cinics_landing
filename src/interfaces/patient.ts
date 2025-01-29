import { IAppointment, IAppointService } from "./appiontment";
import { IBase } from "./base_interface";
import { IStaff } from "./staff";

export interface IPatient extends IBase {
    image: string;
    fullname: string;
    gender: string;
    pinfl: string;
    series_document: string;
    nationality: string;
    phone: number;
    email: string;
    address: string;
    date_of_birth: Date;
    bios: string;
    // blood_group: BloodGroup;
}

export interface IPatientHistory extends IBase {
    name: string
    descr: string
    date: string
    appointment_id: any
    patient_id: string

    appointment: IAppointService
    patient: IPatient
    staff: IStaff
}
  