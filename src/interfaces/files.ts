import { IBase } from "./base_interface";

export interface IFiles extends IBase{
    files_type: string;
    files_by:   string;
    path:       string;
    name:       string;
    format:     string;
    size:       number;
    staff_id:   string;
    patient_id: string;
}