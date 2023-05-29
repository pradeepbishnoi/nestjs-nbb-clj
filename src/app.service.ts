import { Injectable } from '@nestjs/common';
// import type { loadFile } from 'nbb';
// const { someData } = loadFile('./hello.cljs');

@Injectable()
export class AppService {
  constructor(private loadFile: any) {}

  async getHello(): Promise<string> {
    console.log("Is this file loaded");
    const hello = (await this.loadFile("./src/hello.cljs"));
    console.log("What is hello? `$hello`", hello);
    return hello.someData();
    // return 'Hello World!';
  }
}
