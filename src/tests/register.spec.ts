import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/registerPage';
import demoqaTestData from '../test-data/demoqaTestData.json'

test('Register page', async ({ page }) => {
    const register = new RegisterPage(page);
    await register.gotoRegisterPage()
    await register.register(demoqaTestData.fillValues.firstname, demoqaTestData.fillValues.lastname, demoqaTestData.fillValues.username, demoqaTestData.fillValues.password)
});
