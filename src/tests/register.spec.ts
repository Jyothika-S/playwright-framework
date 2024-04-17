import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/registerPage';

test('Register page', async ({ page }) => {
    test.setTimeout(40000);
    const register = new RegisterPage(page);
    await register.gotoRegisterPage()
    await register.register('tom', 'smith', 'tom', 'Tomsmith12!' )
});
