import { Component, OnInit } from '@angular/core';
import { GeneralService } from './../../services/general.service';
import { GraphqlService } from 'src/app/services/graphql.service';
import { mapPageFilterCategoryToItem, mapBlockPostToItem, mapSearchLayoutToItem, mapSearchUserToItem } from 'src/app/services/mapping-helper';
import { QueriesService } from 'src/app/services/queries.service';
import _ from 'lodash';
@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  Blocks: [];
  postsBlocks:[];
  cursor: any;
  isloaded;
  loadImage
  layoutId = "b7fa81cc-dce6-456e-bcd4-92423d1fbe83";
  showIndex:any;
  constructor(private graphqlService: GraphqlService, private queries:QueriesService,private generalservice: GeneralService) { }

  ngOnInit(): void {
    this.getBlocks();
  }

  getBlocks() {
    this.isloaded = true;
    const newLayoutId = this.layoutId.replace(/"/g, '');
    this.graphqlService
      .getGraphQL(this.queries.blocks, { layoutId : newLayoutId})
      .then((results) => {
        console.log(results);
        this.Blocks =  _.get(results, "cmsTemplate2.entities.layout.queries.blocks.items", []).map((x: any) => mapSearchLayoutToItem(x));
    
        this.cursor = results.cmsTemplate2.entities.layout.queries.blocks.cursor;
      })
      .finally(() => {
        this.isloaded = false;
      });
  }

  getPostOf(x,i) {
    this.loadImage = true
   this.showIndex = i;
   console.log("this.showIndex",this.showIndex)
    this.graphqlService.getGraphQL(this.queries.getPostByBlock, { blockId:x }).then((postData) => {
      this.postsBlocks =  _.get(postData, "cmsTemplate2.entities.block.queries.posts.items", []).map((x: any) => mapBlockPostToItem(x));

    }).finally(()=>{
      this.loadImage = false
    })
  }

  openPageDetails(item){
    console.log("item",item)
    this.generalservice.pageId = item.id;
    this.generalservice.navigateTo('/FlowCms/' + item.slug)
   
  }

}
