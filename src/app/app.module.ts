import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarExo1Component } from './components/toolbar-exo1/toolbar-exo1.component';
import { ButtonExo1Component } from './components/button-exo1/button-exo1.component';
import { Exo1Component } from './components/exo1/exo1.component';
import { Exo2Component } from './components/exo2/exo2.component';
import { FbHeaderComponent } from './components/fb-header/fb-header.component';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { FbHeaderBaseComponent } from './components/fb-header-base/fb-header-base.component';
import { ContenuComponent } from './components/contenu/contenu.component';
import { Div1Component } from './components/div1/div1.component';
import { Div2Component } from './components/div2/div2.component';
import { FooterComponent } from './components/footer/footer.component';
import { Footer1Component } from './components/footer1/footer1.component';
import { Footer2Component } from './components/footer2/footer2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarExo1Component,
    ButtonExo1Component,
    Exo1Component,
    Exo2Component,
    FbHeaderComponent,
    Form1Component,
    Form2Component,
    FbHeaderBaseComponent,
    ContenuComponent,
    Div1Component,
    Div2Component,
    FooterComponent,
    Footer1Component,
    Footer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
