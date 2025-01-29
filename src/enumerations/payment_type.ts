export enum PaymentProvider {
    cash = 'cash',
    terminal = 'terminal',
    payme = "payme",
    click = "click",
    uzum = "uzum",
  }
  
  export const PaymentProviderData = {
    [PaymentProvider.cash] : 'naqt pul',
    [PaymentProvider.terminal] : 'terminal orqali',
    [PaymentProvider.payme] : 'payme to\'lov tizimi',
    [PaymentProvider.click] : 'click to\'lov tizimi',
    [PaymentProvider.uzum] : 'uzum to\'lov tizimi',
}