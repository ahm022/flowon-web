import { QueriesService } from './../../services/queries.service';
import { GraphqlService } from './../../services/graphql.service';
import { GeneralService } from './../../services/general.service';
import { Component, OnInit } from '@angular/core';
import { mapSearchUserToItem } from 'src/app/services/mapping-helper';
import * as _ from 'lodash';
@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {
  categories = JSON.parse(localStorage.getItem('categories')).slice(0,3);
  loadMore
  users: [];
  cursor: any;
  isloaded;
  constructor( private generalservice: GeneralService, private graphqlService : GraphqlService, private queries: QueriesService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  viewAllCategories() {
    this.generalservice.navigateTo('filter-pages/by-category')
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
        ).map((x: any) => mapSearchUserToItem(x)).slice(0,3);

        this.cursor = results.cmsTemplate2.queries.cmsTemplate2_Users.cursor;
      })
      .finally(() => {
        this.isloaded = false;
      });
  }

  viewAllUsers() {
    this.generalservice.navigateTo('filter-pages/by-users')
  }
}
