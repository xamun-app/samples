
        import { NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { MaterialExampleModule } from './material.module';
        import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
        import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
        import { AppRoutingModule } from './app-routing.module';
        import { AuthorizeInterceptor } from './../api-authorization/authorize.interceptor';
        
        @NgModule({
          imports: [
            BrowserModule,
            BrowserAnimationsModule,
            HttpClientModule,
            AppRoutingModule,
            MaterialExampleModule,
          ],
          declarations: [AppComponent],
          providers: [
            HttpClient,
            { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
          ],
          bootstrap: [AppComponent],
        })
        export class AppModule {}