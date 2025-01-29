import { IBase } from "./base_interface";
import { IServices } from "./services";

export interface IRoom extends IBase{
    type_id:     number;
    room_name:   string;
    is_occupied: boolean;
    image?:   string;
    descr?:   string;
    is_public: boolean;
    parent_id:   string;

    service: IServices[]
}   