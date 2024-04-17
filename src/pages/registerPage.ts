import { ElementHandle, Frame, Locator, Page } from '@playwright/test';
import demoqaTestData from '../test-data/demoqaTestData.json'

const baseURL = process.env.BASEURL || "";
export class RegisterPage{
    page: Page;
    firstname: ElementHandle;
    lastname: ElementHandle;
    username: ElementHandle;
    password: ElementHandle;
    // captcha: ElementHandle;
    captchalabel: ElementHandle;
    registerbtn: ElementHandle;
    dialog: ElementHandle;

    constructor(page){
        this.page = page;
        this.firstname = page.getByPlaceholder('First Name')
        this.lastname = page.getByPlaceholder('Last Name')
        this.username = page.getByPlaceholder('UserName')
        this.password = page.getByPlaceholder('Password')
        // this.captcha = page.frameLocator('iframe').getByLabel('I\'m not a robot')
        this.captchalabel = page.getByLabel('I\'m not a robot')
        this.dialog = page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
        this.registerbtn = page.getByRole('button', { name: 'Register' })

    }

    async gotoRegisterPage(){
        await this.page.goto(baseURL+demoqaTestData.urls.register)
    }

    async register(firstname:string, lastname:string, username:string, password:string){
        await this.firstname.fill(firstname)
        await this.lastname.fill(lastname)
        await this.username.fill(username)
        await this.password.fill(password)
        // await this.captcha.click()
        // await this.captchalabel.click()
        await this.registerbtn.click()
    }  
}