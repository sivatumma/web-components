import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIButtonComponent } from './uibutton/uibutton.component';

@NgModule({
  declarations: [
    AppComponent,
    UIButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [UIButtonComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector) {
    const webComponent = createCustomElement(UIButtonComponent, {injector});
    customElements.define('ui-button', webComponent);
  }

  ngDoBootstrap() {}
}
