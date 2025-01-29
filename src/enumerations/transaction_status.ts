export enum TransactionStatus {
    PENDING = "PENDING",
    CREATED = "CREATED",
    PAID = "PAID",
    CANCELED = "CANCELED"
}

export const TransactionStatusData = {
    [TransactionStatus.PENDING]: 'kutilmoqda',
    [TransactionStatus.CREATED]: 'yaratildan',
    [TransactionStatus.PAID]: 'to\'langan',
    [TransactionStatus.CANCELED]: 'bekor qilingan',
}