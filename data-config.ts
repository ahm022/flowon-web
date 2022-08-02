export class data {
  // Pages
  static pageTableData = [
    {
      title: 'Title1',
      pageImage: 'https://picsum.photos/210/300',
      author: 'ali',
      slug: 'Slug example',
      category: 'News',
      lastMOdifiedBy: 'ali',
      lastMOdified: '20/06/2019',
      status: 'published',
      gated: 'No',
      readCount: '12',
      id: '1',
    },
    {
      title: 'Title2',
      pageImage: 'https://picsum.photos/220/300',
      author: 'simon',
      slug: 'Slug example',
      category: 'Food',
      lastMOdifiedBy: 'simon',
      lastMOdified: '11/05/2030',
      status: 'Draft',
      gated: 'No',
      readCount: '0',
      id: '2',
    },
    {
      title: 'Title3',
      pageImage: 'https://picsum.photos/230/300',
      author: 'simon',
      slug: 'Slug example',
      category: 'Food',
      lastMOdifiedBy: 'simon',
      lastMOdified: '11/05/2030',
      status: 'Draft',
      gated: 'No',
      readCount: '0',
      id: '3',
    },
  ];
  static statusPageOptions = [
    { name: 'Published', value: 'PUBLISHED' },
    { name: 'Draft', value: 'DRAFT' },
  ];
  static gatedPageOptions = [
    { name: 'Yes', value: true },
    { name: 'No', value: false },
  ];

  // Users
  static userTableData = [
    {
      name: 'Ali mahdi',
      email: 'alimahdi@gmail.com',
      role: '',
      numberOfPages: '12',
      id: '1',
    },
    {
      name: 'Simon',
      email: 'simon@gmail.com',
      role: '',
      numberOfPages: '12',
      id: '2',
    },
  ];
  static userStatus = [
    { name: 'Admin', value: 'Admin' },
    // { name: 'Editor', value: 'editor' },
    { name: 'Contributor', value: 'Contributor' },
  ];

  // Messages
  static messageData = [
    {
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
      from: 'ali mahdi',
      date: '05/06/2020',
      status: 'unread',
      isreaded: false,
      id: '1',
    },
    {
      message: 'This is message 2 ',
      from: 'simon khoury',
      date: '05/06/2020',
      status: 'unread',
      isreaded: false,
      id: '2',
    },
  ];

  //  Comments
  static commentsData = [
    {
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
      pagename: 'page 2',
      author: 'ali mahdi',
      date: '05/06/2020',
      status: 'hidden',
      isreaded: false,
      id: '1',
    },
    {
      comment: 'This is comment 2 ',
      pagename: 'page 1',
      author: 'simon khoury',
      date: '05/06/2020',
      status: 'pendingapproval',
      isreaded: false,
      id: '2',
    },
  ];
  static commentStatus = [
    { name: 'APPROVED', value: 'APPROVED' },
    { name: 'HIDDEN', value: 'HIDDEN' },
  ];

  // Gallery
  static galleryImageData = [
    {
      id: '1',
      src: 'https://picsum.photos/200/300',
      Size: '125 KB',
      Filename: 'image0002.jpg',
      Dimensions: '1200x800',
      UploadedOn: '12 August 2022 @ 13:56 ',
      UploadedBy: 'ali mahdi',
    },
    {
      id: '2',
      src: 'https://picsum.photos/600/300',
      Size: '125 KB',
      Filename: 'image0002.jpg',
      Dimensions: '1200x800',
      UploadedOn: '12 August 2022 @ 13:56 ',
      UploadedBy: 'Simon Khoury',
    },
    {
      id: '3',
      src: 'https://picsum.photos/500/300',
      Size: '125 KB',
      Filename: 'image0002.jpg',
      Dimensions: '1200x800',
      UploadedOn: '12 August 2022 @ 13:56 ',
      UploadedBy: 'Simon Khoury',
    },
    {
      id: '4',
      src: 'https://picsum.photos/540/300',
      Size: '125 KB',
      Filename: 'image0002.jpg',
      Dimensions: '1200x800',
      UploadedOn: '12 August 2022 @ 13:56 ',
      UploadedBy: 'Simon Khoury',
    },
    {
      id: '5',
      src: 'https://picsum.photos/530/300',
      Size: '125 KB',
      Filename: 'image0002.jpg',
      Dimensions: '1200x800',
      UploadedOn: '12 August 2022 @ 13:56 ',
      UploadedBy: 'Simon Khoury',
    },
    {
      id: '6',
      src: 'https://picsum.photos/510/300',
      Size: '125 KB',
      Filename: 'image0002.jpg',
      Dimensions: '1200x800',
      UploadedOn: '12 August 2022 @ 13:56 ',
      UploadedBy: 'Simon Khoury',
    },
    {
      id: '7',
      src: 'https://picsum.photos/520/300',
      Size: '125 KB',
      Filename: 'image0002.jpg',
      Dimensions: '1200x800',
      UploadedOn: '12 August 2022 @ 13:56 ',
      UploadedBy: 'Simon Khoury',
    },
    {
      id: '8',
      src: 'https://picsum.photos/500/301',
      Size: '125 KB',
      Filename: 'image0002.jpg',
      Dimensions: '1200x800',
      UploadedOn: '12 August 2022 @ 13:56 ',
      UploadedBy: 'Simon Khoury',
    },
    {
      id: '9',
      src: 'https://picsum.photos/500/302',
      Size: '125 KB',
      Filename: 'image0002.jpg',
      Dimensions: '1200x800',
      UploadedOn: '12 August 2022 @ 13:56 ',
      UploadedBy: 'Simon Khoury',
    },
    {
      id: '10',
      src: 'https://picsum.photos/501/300',
      Size: '125 KB',
      Filename: 'image0002.jpg',
      Dimensions: '1200x800',
      UploadedOn: '12 August 2022 @ 13:56 ',
      UploadedBy: 'Simon Khoury',
    },
  ];
  // layout
  static layoutBlockData = [
    {
      blockPageCount: '10',
      author: 'by category',
      content: 'content1',
      sorted: 'by date',
    },
    {
      blockPageCount: '5',
      author: 'All pages',
      content: 'content2',
      sorted: 'by date',
    },
  ];
  static Category = [
    { name: 'category 1', value: 'category 1' },
    { name: 'category 2', value: 'category 2' },
    { name: 'category 3', value: 'category 3' },
    { name: 'category 4', value: 'category 4' },
    { name: 'category 5', value: 'category 5' },
    { name: 'category 6', value: 'category 6' },
  ];
  static sortingOptions = [
    { name: 'By date', value: 'BY_DATE' },
    { name: 'Most Commented', value: 'MOST_COMMENTED' },
    { name: 'Most Read', value: 'MOST_READ' },
  ];
  static  sortingByOptions  = [
    { name: 'Ascending', value: 'ASCENDING' },
    { name: 'Descending', value: 'DESCENDING' },
  ];
  static contentSelectionOptions = [
    { name: 'Selected Pages', value: 'SELECTED_PAGES' },
    { name: ' By Categories', value: 'BY_CATEGORY' },
  ];
}

export class icons {
  static deleteIcon = '/assets/icons/delete.svg';
  static editIcon = '/assets/icons/edit-icon.svg';
  static sendMessageIcon = '/assets/icons/message-blue.svg';
  static closeIcon = '/assets/icons/close.svg';
  static loaderIcon = '/assets/icons/loader.svg';
  static avatar = '/assets/icons/avatar.svg';
  static notification = '/assets/icons/notification.svg';
  static plus = '/assets/icons/plus-icon.svg'
}
