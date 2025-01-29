import { IBase } from "./base_interface";

export interface INews extends IBase{
    image:   string;
    title:   string;
    descr:   string;
    is_public: boolean;
    date:   Date;
}   