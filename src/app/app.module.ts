import { DeleteDialogComponent } from './Components/delete-dialog/delete-dialog.component';
import { PageDetailsComponent } from './Pages/page-details/page-details.component';
import { EmptyStateComponent } from './Components/empty-state/empty-state.component';
import { LoaderComponent } from './Components/loader/loader.component';
import { BtnComponent } from './Components/btn/btn.component';
import { UserInfoComponent } from './Pages/user-info/user-info.component';

import { InputValidationErrorComponent } from "./Components/input-validation-error/input-validation-error.component";
import { CustomInputComponent } from "./Components/custom-input/custom-input.component";
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
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { BlockComponent } from './Components/block/block.component';
import { RightMenuComponent } from './Components/right-menu/right-menu.component';
import { FilterPagesComponent } from './Pages/filter-pages/filter-pages.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CardSkeletonComponent } from './Components/card-skeleton/card-skeleton.component';
@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    CustomInputComponent,
    InputValidationErrorComponent,
    UserInfoComponent,
    BtnComponent,
    HomeComponent,
    NavBarComponent,
    BlockComponent,
    RightMenuComponent,
    FilterPagesComponent,
    LoaderComponent,
    EmptyStateComponent,
    PageDetailsComponent,
    DeleteDialogComponent,
    CardSkeletonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphqlModule,
    ApolloModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
