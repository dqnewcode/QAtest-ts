import { Page } from "@playwright/test";
import { BerandaLocator } from "./BerandaLocator";




export class BerandaPage {
  constructor(private page: Page) {}

  
//wait nya belom
  async BerandaFungsionality(){
    await this.page.click(BerandaLocator.BTN_Beranda);
    await this.page.click(BerandaLocator.BTN_Deposit);
    await this.page.click(BerandaLocator.BTN_kembaliX);
    await this.page.click(BerandaLocator.BTN_TarikDana);
    //await new Promise(resolve => setTimeout(resolve, 3000));
    await this.page.click(BerandaLocator.BTN_Beranda);
    //await this.page.waitForTimeout(2000);
    await this.page.click(BerandaLocator.BTN_Overbook);
    await this.page.click(BerandaLocator.BTN_Beranda);
    await this.page.click(BerandaLocator.IMG_TradingSignal);
    await this.page.click(BerandaLocator.BTN_Beranda);
    await this.page.click(BerandaLocator.IMG_Produk);
    await this.page.click(BerandaLocator.BTN_Beranda);
    await this.page.click(BerandaLocator.IMG_Rewards);
    await this.page.click(BerandaLocator.BTN_Beranda);
    await this.page.click(BerandaLocator.IMG_TopMover);
    await this.page.click(BerandaLocator.BTN_Beranda);
    await this.page.click(BerandaLocator.IMG_Lainnya);
    await this.page.click(BerandaLocator.BTN_kembaliX);


  }


}