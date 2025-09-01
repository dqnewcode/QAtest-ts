import { expect, Page } from "@playwright/test";
import { PasarLocator } from "./PasarLocator";

export class PasarPage {
  constructor(private page: Page) {}


   async clickLoveButton(index: number = 1) {
    await this.page.click(PasarLocator.BTN_Love(index));}

async favoriteFungsional(){
await this.page.click(PasarLocator.BTN_Pasar)
await this.page.click(PasarLocator.HEAD_Favorite)

}

async favoriteFungsionalNegative(){
await this.page.click(PasarLocator.BTN_Pasar)
await this.clickLoveButton(2)
await this.page.click(PasarLocator.HEAD_Favorite)

}

async forexFungsional(){
await this.page.click(PasarLocator.BTN_Pasar)
await this.page.click(PasarLocator.HEAD_Forex)

}

async KomoditiFungsional(){
await this.page.click(PasarLocator.BTN_Pasar)
await this.page.click(PasarLocator.HEAD_Komoiti)

}

async IndexFungsional(){
await this.page.click(PasarLocator.BTN_Pasar)
await this.page.click(PasarLocator.HEAD_Index)

}





 async verifyLineFavoriteVisible() {
    await expect(this.page.locator(PasarLocator.LINE_favorite)).toBeVisible();
  }


}