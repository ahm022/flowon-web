import * as _ from 'lodash';



export function mapSearchUserToItem(user: any) {

    return {
        id: _.get(user.system_User, 'id', null),
        canaddAdmin : _.get(user.system_User.actions, 'cmsTemplate2_canaddAdmin', null),
        name: _.get(user.system_User.views.cmsTemplate2_All, 'firstName', '') + ' ' + _.get(user.system_User.views.cmsTemplate2_All, 'lastName', ''),
        email: _.get(user.system_User.views.cmsTemplate2_All, 'email', ''),
        position : _.get(user.system_User.views.cmsTemplate2_All, 'cmsTemplate2_position', '')
    }
}

export function mapPageToItem(post: any) {

  return {
      id: _.get(post.cmsTemplate2_post, 'id', null),
      author: _.get(post.cmsTemplate2_post.views.all.author.views.cmsTemplate2_All, 'firstName', '') + ' ' + _.get(post.cmsTemplate2_post.views.all.author.views.cmsTemplate2_All, 'lastName', ''),
      postTitle: _.get(post.cmsTemplate2_post.views.all, 'postTitle', ''),
      postDescription: _.get(post.cmsTemplate2_post.views.all, 'postDescription', ''),
      gated: _.get(post.cmsTemplate2_post.views.all, 'gated', ''),
      slug: _.get(post.cmsTemplate2_post.views.all, 'slug', ''),
      status: _.get(post.cmsTemplate2_post.views.all, 'status', ''),
      modifiedBy:_.get(post.cmsTemplate2_post.views.all, 'modifiedBy', ''),
      createdDate:_.get(post.cmsTemplate2_post.views.all, 'createdDate', ''),
      category: _.get(post.cmsTemplate2_post.views.all.category, 'name', ''),
      postImage: _.get(post.cmsTemplate2_post.views.all.postImage, 'imageUrl', ''),
      candeletePost: _.get(post.cmsTemplate2_post.actions, 'candeletePost', null),
      canchangePostStatus: _.get(post.cmsTemplate2_post.actions, 'canchangePostStatus', null),
  }
}

export function mapPagesToItem(pages: any) {
  return {
      id: _.get(pages.postPage, 'id', null),
      postTitle: _.get(pages.postPage.views.all, 'postTitle', ''),
  }
}

export function mapCategories(category: any) {
  return {
      value: _.get(category, 'categoryId', null),
      name: _.get(category, 'name', null),
  }
}
export function mapSearchLayoutToItem(block: any) {
    return {
        id: _.get(block.cmsTemplate2_Block, 'id', null),
        contentSelection: _.get(block.cmsTemplate2_Block.views.all, 'contentSelection', null),
        sortingBy: _.get(block.cmsTemplate2_Block.views.all, 'sortingBy', null),
        createdDate: _.get(block.cmsTemplate2_Block.views.all, 'createdDate', null),
        pageCount: _.get(block.cmsTemplate2_Block.views.all,'pageCount', null),
        sorting: _.get(block.cmsTemplate2_Block.views.all, 'sorting', null),
    }
  }
  export function mapBlockPostToItem(block: any) {
    return {
      id: _.get(block.cmsTemplate2_post, 'id', null),
      postTitle: _.get(block.cmsTemplate2_post.views.all, 'postTitle', ''),
      postImage: _.get(block.cmsTemplate2_post.views.all.postImage, 'imageUrl', ''),
    }
  }

  

export function mapCommentToItem(comment: any) {

  return {
      id: _.get(comment.cmsTemplate2_comment, 'id', null),
      candeleteComment: _.get(comment.cmsTemplate2_comment.actions, 'candeleteComment', null),
      canupdateCommentStatus: _.get(comment.cmsTemplate2_comment.actions, 'canupdateCommentStatus', null),
      commentText : _.get(comment.cmsTemplate2_comment.views.all, 'commentText', null),
      createdDate: _.get(comment.cmsTemplate2_comment.views.all, 'createdDate', null),
      status : _.get(comment.cmsTemplate2_comment.views.all, 'status', null),
      pageName : _.get(comment.cmsTemplate2_comment.views.all.post?.views.all, 'postTitle', null),
      pageId : _.get(comment.cmsTemplate2_comment.views.all.post, 'id', null),
      author: _.get(comment.cmsTemplate2_comment.views.all.author?.views.cmsTemplate2_All, 'firstName', null)+ ' ' + _.get(comment.cmsTemplate2_comment.views.all.author?.views.cmsTemplate2_All, 'lastName', null)
  }
}


export function mapMessageToItem(message: any) {

  return {
      id: _.get(message.cmsTemplate2_Message, 'id', null),
      messageText : _.get(message.cmsTemplate2_Message.views.all, 'text', null),
      createdDate : _.get(message.cmsTemplate2_Message.views.all, 'createdDate', null),
      status : _.get(message.cmsTemplate2_Message.views.all, 'status', null),
      sender : _.get(message.cmsTemplate2_Message.views.all.sender.views.cmsTemplate2_All, 'firstName', null) + ' ' + _.get(message.cmsTemplate2_Message.views.all.sender.views.cmsTemplate2_All, 'lastName', null)

  }
}


export function mapMediaToItem(post: any) {

  return {
      id: _.get(post.cmsTemplate2_mediaItem, 'id', null),
      imageUrl: _.get(post.cmsTemplate2_mediaItem.views.all.details, 'imageUrl', '')
  }
}

export function mapNotifications(not: any) {
  return {
      id: _.get(not.activity.post, 'id', null),
      message: _.get(not, 'message', null),
  }
}



