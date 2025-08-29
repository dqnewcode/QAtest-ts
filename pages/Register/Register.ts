import { Page } from "playwright/test";
import { RegisterLocator } from "./RegisterLocator";





export class Register {
  constructor(private page: Page) {}

  async RegisterForm (nama:string,email:string,password:string,repass:string,noHp:string){
   await this.page.fill(RegisterLocator.FLD_Nama, nama);
   await this.page.fill(RegisterLocator.FLD_Email, email);
   await this.page.fill(RegisterLocator.FLD_Password, password);
   await this.page.fill(RegisterLocator.FLD_KetikUlang, repass);
   await this.page.fill(RegisterLocator.FLD_NoHandphoen, noHp);

  }









}