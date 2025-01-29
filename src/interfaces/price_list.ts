import { IBase } from "./base_interface"

export interface IPriceList extends IBase{
    price: number
    start_date: Date
    end_date: Date
    service_id: string
}