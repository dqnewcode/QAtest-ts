// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   testDir: './tests', // <-- make sure this folder name is correct!
//   use: {
//     headless: false,
//     viewport: { width: 1280, height: 720 },
//     screenshot: 'only-on-failure',
//     video: 'retain-on-failure', //retain-on-failure on
//     baseURL: 'https://app.eklipse.gg/',
//   },
//   reporter: [['html', { open: 'never' }]], // <-- ✅ enables HTML report
// });

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: false,
    viewport: null,  // <-- Set null untuk menggunakan ukuran window maksimal
    launchOptions: {
      args: ["--start-maximized"], // <-- Membuka browser dalam mode maximized
      slowMo: 1000, // <-- (Opsional) Memperlambat eksekusi untuk debugging
    },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',//on , 
    baseURL: 'https://mifx.com/clientarea/trade-now',
  },
  reporter: [['html', { open: 'never' }]],
});