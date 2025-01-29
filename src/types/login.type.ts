export type LoginPhone = {
    phone: number;
};

export type LoginPhoneVerify = {
    phone:number
    code:string,
    series_document?: string,
    date_of_birth?: Date,
    address?:string,
    fullname?:string
};

