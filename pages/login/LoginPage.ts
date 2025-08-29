import { expect, Page } from '@playwright/test';
import { LoginLocators } from './LoginLocator';
// All fungsion for login page
export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/');
  }

//fungsion log in
   async login(email: string, password: string) {
    await this.page.click(LoginLocators.LogingHead);
    await this.page.fill(LoginLocators.usernameInput, email);
    await this.page.fill(LoginLocators.passwordInput, password);
    await this.page.click(LoginLocators.submitButton);
  }
  async LupaPWFungsional(){
    await this.page.click(LoginLocators.LogingHead);
    await this.page.click(LoginLocators.LINK_LupaPassword);

  }


 

async verifyTextLupaPW() {
    await expect(this.page.locator(LoginLocators.TEXT_LupaPassword)).toBeVisible();
  }

   private get errorMessage() {
    return this.page.locator('div[class="col-10"]');
  }

  async getErrorMessage(error : string) {
    await expect(this.errorMessage).toHaveText(error)
  }
}
