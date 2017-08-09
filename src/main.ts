import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// 动态 (JiT) 编译创建浏览器平台，并引导上面提到的AppModule。
// 引导过程搭建运行环境，从模块的bootstrap数组中提出根AppComponent， 创建该组件的实例，并将其插入到组件selector标识的元素标签中。
platformBrowserDynamic().bootstrapModule(AppModule);
