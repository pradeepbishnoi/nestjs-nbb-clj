import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const dynamicImport = async (packageName: string) =>
  new Function(`return import('${packageName}')`)();

// async function myLoadFile(file) {
//   const nbb = dynamicImport("nbb");
//   return nbb.loadFile(file);
// }

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      async useFactory() {
        // return new AppService((await dynamicImport('nbb')));
        return new AppService((await dynamicImport('nbb')).loadFile);
      },
    },
  ],
})
export class AppModule {}