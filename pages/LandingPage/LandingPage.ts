import { expect, Page } from "@playwright/test";
import { LandingLocator } from "./LandingLocator";


export class LandingPage {
  constructor(private page: Page) {}

    async akunDemoFungsional() {
     await this.page.click(LandingLocator.buttonAkunDemoLanding);
     }

     async akunLiveFungsional(){
       await this.page.click(LandingLocator.buttonAkunLive);  
     }


  async verifyDemoTextBukaAkunMifxVisible() {
    await expect(this.page.locator(LandingLocator.TEXT_BukaAkunMifxDemo)).toBeVisible();
  }

  async verifyTextBukaLive() {
    await expect(this.page.locator(LandingLocator.TEXT_BukaAkunLive)).toBeVisible();
  }

  


}
