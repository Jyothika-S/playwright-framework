import { ElementHandle, Page } from '@playwright/test';
import demoqaTestData from '../test-data/demoqaTestData.json'

const baseURL = process.env.BASEURL || "";
export class LoginPage{
    page: Page;
    username_textbox: ElementHandle; 
    password_textbox: ElementHandle;
    login_button: ElementHandle;

    constructor(page){
      this.page = page;
      this.username_textbox = page.getByPlaceholder('UserName');
      this.password_textbox = page.getByPlaceholder('Password');
      this.login_button = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage(){
      console.log('baseurl: ',baseURL )
      console.log('login url: ',baseURL + demoqaTestData.urls.login )
      await this.page.goto(baseURL+demoqaTestData.urls.login)
    }
    async login(username: string, password: string){
      await this.username_textbox.fill(username)
      await this.password_textbox.fill(password)
      await this.login_button.click()

  }  
}
