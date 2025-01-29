import { Permission } from "../enumerations";
import { IBase } from "./base_interface";


export interface IRole extends IBase{
    name: string;

    permissions: Permission[]
}   
