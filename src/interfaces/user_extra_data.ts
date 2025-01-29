import { Gender } from "../enumerations";

export interface IUserExtraData {
    pinfl:       number;
    document:    string;
    fullname:   string;
    birth_date:  Date;
    address:     string;
    nationality: string;
    gender: Gender;
}

export interface IUserExtraImage {
    success:      Boolean;
    photo:        string;
}

export interface IUserExtraImageType {
    contentType: string;
    photo:        string;
}


