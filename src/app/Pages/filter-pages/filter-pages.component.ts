import { GeneralService } from './../../services/general.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { GraphqlService } from 'src/app/services/graphql.service';
import { mapPageFilterCategoryToItem, mapPageFilterToItem, mapPageToItem, mapSearchUserToItem } from 'src/app/services/mapping-helper';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-filter-pages',
  templateUrl: './filter-pages.component.html',
  styleUrls: ['./filter-pages.component.scss']
})
export class FilterPagesComponent implements OnInit {
  categories = JSON.parse(localStorage.getItem('categories'));
  users: [];
  cursor: any;
  isloaded;
  isPagesloaded
  filterType
  pages = []
  filterId;
  selectedIndex;
  constructor( private generalservice: GeneralService, private graphqlService : GraphqlService, private queries: QueriesService, private activeRoute:ActivatedRoute) {}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((res)=>{
      this.filterType = res.type
      this.filterId = res.id
      this.selectedIndex = +res.index
    })
    this.getUsers()
    if(this.filterId && this.filterType === "by-category") {
      this.getPageByCategory(this.filterId, this.selectedIndex)
    }if(this.filterId && this.filterType === "by-users"){
      this.getPageByUsers(this.filterId, this.selectedIndex)
    }
    
  }
  getPageByCategory(id, i) {
    this.selectedIndex = i;
    this.isPagesloaded = true;
    this.graphqlService
      .getGraphQL(this.queries.getPagesByCategories, {category:id})
      .then((results) => {
        console.log(results);
        this.pages = _.get(
          results,
          'cmsTemplate2.queries.cmsTemplate2_PostsByCategoty.items',
          []
        ).map((x: any) => mapPageFilterCategoryToItem(x));
      })
      .finally(() => {
        console.log(this.pages);
        this.isPagesloaded = false;
      });
  }
  gotToHomePage() {
    this.generalservice.navigateTo('home')
  }
  getUsers() {
    this.isloaded = true;
    this.graphqlService
      .getGraphQL(this.queries.users, false)
      .then((results) => {
        console.log(results);
        this.users = _.get(
          results,
          'cmsTemplate2.queries.cmsTemplate2_Users.items',
          []
        ).map((x: any) => mapSearchUserToItem(x));

        this.cursor = results.cmsTemplate2.queries.cmsTemplate2_Users.cursor;
      })
      .finally(() => {
        this.isloaded = false;
      });
  }
  getPageByUsers(id, i ) {
    this.selectedIndex = i
    this.isPagesloaded = true;
    this.graphqlService
      .getGraphQL(this.queries.getPagesByUser, {id:id})
      .then((results) => {
        console.log(results);
        this.pages = _.get(
          results,
          'system.entities.user.queries.cmsTemplate2_Posts.items',
          []
        ).map((x: any) => mapPageFilterToItem(x));
      })
      .finally(() => {
        console.log(this.pages);
        this.isPagesloaded = false;
      });
  }
}
