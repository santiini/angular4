import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// 导入 FormsModule --- NgModule属于这里;
import { FormsModule } from '@angular/forms';  //NgModel lives here
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
// http请求相关；
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// 组件;
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './HeroDetail/index.component';
import { TitleComponent } from './title/index.component';
import { HeroesComponent } from './HeroesComponent/index.component';
import { DashboardComponent } from './dashboard/index.component';
import { HeroSearchComponent } from './HeroSearch/index.component';

// 指令;
import { HighlightDirective } from './highlight.directive';

// 服务;
import { HeroService } from './hero.service';

// 路由；
import { AppRoutingModule } from './app-route.module';


// Angular 路由;
//  RouterModule.forRoot([
//   {
//     path: 'heros',
//     component: HeroesComponent
//   }
// ])

// Angular 模块能帮你把应用组织成多个内聚的功能块。
// 1.Angular 模块是带有 @NgModule 装饰器函数的类。
// 2.@NgModule接收一个元数据对象，该对象告诉 Angular 如何编译和运行模块代码。
// 它标记出该模块拥有的组件、指令和管道， 并把它们的一部分公开出去，以便外部组件使用它们。 它可以向应用的依赖注入器中添加服务提供商。
// 3.在创建更多组件的过程中，逐步将它们添加到declarations中。
// 4.你将会学习如何创建其他两种类 — 指令和管道 — 它们也必须被添加到declarations数组。
// 5. 只有*可以声明的 — 组件、指令和管道 — 属于declarations数组。 不要将其他类型的类添加到declarations中，例如NgModule类, 服务类，模型类。
@NgModule({
  // 声明的组件 -- 应用的唯一组件
  // tips: 1.每个组件都必须在一个（且只有一个）Angular模块中声明。
  // 2.通常，declarations数组包含应用中属于该模块的组件、管道和指令的列表。
  // 组件在被其它组件引用之前必须先在一个模块中声明过。 这个模块只声明了两个组件：AppComponent 和 HeroDetailComponent。
  declarations: [
    // 组件;
    AppComponent,
    HeroDetailComponent,
    TitleComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    // 指令;
    HighlightDirective
  ],
  // 倒入的模块;
  // imports数组中应该只有NgModule类。不要放置其它类型的类。
  imports: [
    BrowserModule,  // 这个和每个在浏览器中运行应用都需要它。
    FormsModule,
    // 路由规则；
    // RouterModule.forRoot([
    //   {
    //     path: 'heros',
    //     component: HeroesComponent
    //   }, {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    //   }
    // ])

    // http模块;
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  // 服务提供商;
  providers: [
    HeroService
  ],
  // 通过引导根AppModule来启动应用。 在启动过程中，其中一步是创建列在bootstrap数组的组件， 并将它们每一个都插入到浏览器的DOM中。
  // 虽然你可以将多个组件树插入到宿主页面，但并不普遍。 大多数应用只有一个组件树，它们引导单一根组件 。
  bootstrap: [AppComponent]
})
// AppModule是应用的根模块;
export class AppModule { }
