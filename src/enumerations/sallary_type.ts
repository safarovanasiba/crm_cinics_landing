export enum SallaryType{
    hour = 'hour',
    fixed = 'fixed',
    hour_percentage = 'hour_percentage',
    fixed_percentage = 'fixed_percentage',
}

export const SallaryTypeData = {
    [SallaryType.hour]: "ishlagan soatiga",
    [SallaryType.fixed]: "qatiy oylik",
    [SallaryType.hour_percentage]: "ishlagan soatiga va KPI",
    [SallaryType.fixed_percentage]: "qatiy oylik va KPI",
}