# QAtest-ts

Automation testing project using **Playwright** with **TypeScript**.

## 📦 Tech Stack

* [Playwright](https://playwright.dev/) - End-to-end testing framework
* [TypeScript](https://www.typescriptlang.org/) - Type safety
* [ts-node](https://typestrong.org/ts-node/) - Run TypeScript directly
* Node.js (>=18) required

## 📂 Project Structure

```
.
├── pages/                # Page Object Models (POM)
├── tests/                # Test cases
├── playwright.config.ts  # Playwright configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project metadata & scripts
```

## 🚀 Installation

```bash
# Install dependencies
npm install
```

## ▶️ Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test
npx playwright test tests/example.spec.ts

# Run tests with UI mode
npx playwright test --ui
```

## ⚙️ Configuration

* Update test settings in [`playwright.config.ts`](./playwright.config.ts).
* TypeScript settings in [`tsconfig.json`](./tsconfig.json).

## 📊 Reports

Playwright generates:

* HTML report:

  ```bash
  npx playwright show-report
  ```

## 📜 License

This project is licensed under the ISC License.
