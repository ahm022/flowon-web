import { BtnComponent } from './Components/btn/btn.component';
import { UserInfoComponent } from './Pages/user-info/user-info.component';

import { InputValidationErrorComponent } from "./Components/input-validation-error/input-validation-error.component";
import { CustomInputComponent } from "./Components/custom-input/custom-input.component";
import { CardComponent } from './Components/card/card.component';
import { PageHeaderComponent } from "./Components/page-header/page-header.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { GraphqlModule } from "./graphql/graphql.module";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './Pages/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    CustomInputComponent,
    InputValidationErrorComponent,
    CardComponent,
    UserInfoComponent,
    BtnComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphqlModule,
    ApolloModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
