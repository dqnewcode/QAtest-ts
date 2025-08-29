import { expect, Page } from "@playwright/test";
import { OrderLocator } from "./OrderLocator";

export class OrderPage {
  constructor(private page: Page) {}

async OpenOrderfungsionalityopenorder(){
    await this.page.click(OrderLocator.BTN_Order);
    await this.page.click(OrderLocator.HEAD_openOrder);
  
}
async fungsionalityPendingOrder(){
    await this.page.click(OrderLocator.BTN_Order);
    await this.page.click(OrderLocator.HEAD_PendingOrder);
    
}

async fungsionalitRiwayatTransaksi(){
    await this.page.click(OrderLocator.BTN_Order);
    await this.page.click(OrderLocator.HEAD_RiwayatTransaksi);
    
}




//validation line
 async verifyLineOpenOrder() {
    await expect(this.page.locator(OrderLocator.LINE_OpenOrder)).toBeVisible();
  }

   async verifyPendingOrder() {
      await expect(this.page.locator(OrderLocator.LINE_PendingOrder)).toBeVisible();
    }
     async verifyLineRiwayatTransaksi() {
        await expect(this.page.locator(OrderLocator.LINE_RiwayatTransaksi)).toBeVisible();
      }
    
  

}