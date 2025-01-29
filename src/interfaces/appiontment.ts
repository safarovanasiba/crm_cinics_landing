// import { AppointmentStatus, PaymentProvider, TransactionStatus } from "src/enumerations";
import { IBase } from "./base_interface";
import { IPatient } from "./patient";
import { IStaff } from "./staff";
import { IServices } from "./services";
import { IPriceList } from "./price_list";
import { PaymentProvider, TransactionStatus } from "../enumerations";

export interface IAppointment extends IBase {
    date: Date;
    // status: AppointmentStatus;     //enum
    price: number;
    discount: number;
    patient_id: string;

    patient: IPatient

    services: IAppointService[]
    transactions: ITransactions[]
}   


export interface IAppointService extends IBase {
    price: number;
    service_id: string;
    appointment_id: string;
    staff_id: string;
    price_id: string;

    staff: IStaff
    service: IServices
    price_list: IPriceList
    queue_list: IQueueList
}

export interface PaymentDto {
    discount: number;
    // provider: PaymentProvider;
    // status: TransactionStatus;
  }
  

  export interface IQueueList extends IBase {
    number: number;
    name: string;
    date: Date;
    appointment_id: string;
}

export interface ITransactions extends IBase {
    provider: PaymentProvider
    trans_id: string
    price: number
    prepare_id: any
    perform_time: any
    cancel_time: any
    reason: any
    state: number
    status: TransactionStatus
    user_id: string
    appointment_id: string
}