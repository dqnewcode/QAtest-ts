// export class LoginLocator {
//   constructor(private page: Page) {}

// get usernameInput() {
//     return this.page.locator('//input[@id="username"]'); }

//  get passwordInput() {
//     return this.page.locator('//input[@id="LiveTmp_password"]');
//  }

//  get submitButton() {
//     return this.page.locator('//input[@name="submit"]');
//   }

// }
export const LoginLocators = {
  usernameInput: '//input[@id="username"]',
  passwordInput: '//input[@id="LiveTmp_password"]',
  submitButton: '//input[@name="submit"]',
  errorMessage: 'div[class="col-10"]',
  LogingHead : '//a[normalize-space()="Log In"]',
  pageUrl: '/',
  LINK_LupaPassword :'//a[normalize-space()="Lupa Password?"]',
  TEXT_LupaPassword :'(//div[@class="colorBlack fontsize34 bold"])[1]'
};