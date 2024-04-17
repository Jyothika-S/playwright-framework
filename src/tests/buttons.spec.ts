import { test } from '@playwright/test'
import { ButtonsPage } from '../pages/buttonsPage'

test('button tests', async ({ page }) => {
    const buttonsPage = new ButtonsPage(page);

    await buttonsPage.gotoButtonsPage()
    await buttonsPage.clickButtonsPage()

})