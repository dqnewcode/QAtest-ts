import test from "playwright/test";
import { LoginPage } from "../pages/login/LoginPage";
import { Register } from "../pages/Register/Register";
import { RegisterLocator } from "../pages/Register/RegisterLocator";


test('input register form', async ({ page }) => {
  const register = new Register(page);
 await register.RegisterForm('anton','diqy@gmail.com','Jakartacerah2025/','Jakartacerah2025/','813632672801')

});
