import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import loginData from '../test-data/loginData.json';

//Page Obj Model
test('login test', async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoLoginPage()
    await login.login(loginData.username, loginData.password)

  });