import { Page } from "@playwright/test";

export class GlobalUtils {
  constructor(private page: Page) {}

  // 1️⃣ Delay biasa (pause tertentu)
  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // 2️⃣ Tunggu elemen muncul
  async waitForSelector(selector: string, timeout: number = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  // 3️⃣ Tunggu kondisi custom
  async waitUntil(
    condition: () => Promise<boolean> | boolean,
    timeout: number = 5000,
    interval: number = 100
  ) {
    let elapsed = 0;
    return new Promise<void>(async (resolve, reject) => {
      const timer = setInterval(async () => {
        const result = await condition();
        if (result) {
          clearInterval(timer);
          resolve();
        } else if (elapsed >= timeout) {
          clearInterval(timer);
          reject("Timeout waiting for condition");
        }
        elapsed += interval;
      }, interval);
    });
  }

  // 4️⃣ Klik elemen dengan delay
  async clickWithDelay(selector: string, waitBefore: number = 1000) {
    await this.delay(waitBefore);
    await this.page.click(selector);
  }

  // 5️⃣ Input teks dengan delay
  async typeWithDelay(selector: string, text: string, waitBefore: number = 500) {
    await this.delay(waitBefore);
    await this.page.fill(selector, text);
  }

  // 6️⃣ Scroll ke elemen sebelum interaksi
  async scrollToAndClick(selector: string, waitBefore: number = 500) {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
    await this.delay(waitBefore);
    await this.page.click(selector);
  }
}
