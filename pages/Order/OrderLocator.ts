export const OrderLocator ={

    HEAD_openOrder:'//a[@class="subOrder inlineBlock active"]',
    HEAD_PendingOrder:'//a[@class="subOrder inlineBlock"][normalize-space()="Pending Order"]',
    HEAD_RiwayatTransaksi:'//a[contains(@class,"subOrder inlineBlock")][normalize-space()="Riwayat Transaksi"]',
    LINE_OpenOrder:'/html/body/div[10]/div[2]/div[2]/div[8]/div/div/div[4]/div/div[1]',
    LINE_PendingOrder:'//*[text()="Belum Ada Pending Order"]',
    LINE_RiwayatTransaksi:'//*[text()="Belum Ada Riwayat Transaksi"]',
    BTN_Order :'//*[@id="batasAtas"]/div[2]/a[3]/div[3]/span'
    
}
