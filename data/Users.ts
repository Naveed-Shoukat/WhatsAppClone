const users = [
  {
    id: 'u0',
    name: 'Naveed Shoukat',
    imageUri:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aspect-of-the-orquideorama-center-of-exposition-of-flowers-news-photo-1643042932.jpg?crop=1xw:1xh;center,top&resize=980:*',
    // status: 'Hello there, I am using FXWhatsApp',
  },
  {
    id: 'u1',
    name: 'Vadim',
    imageUri:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/botanical-gardens-puerto-vallarta-royalty-free-image-1643041119.jpg?crop=1xw:1xh;center,top&resize=980:*',
    // status: 'Hello there, how are you',
  },
  {
    id: 'u2',
    name: 'Lukas',
    imageUri:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mauritius-botanical-garden-1592525033.jpg?crop=1xw:1xh;center,top&resize=980:*',
  },
  {
    id: 'u3',
    name: 'Daniil',
    imageUri:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/powerscourt-estate-enniskerry-ireland-1592521349.jpg?crop=1xw:1xh;center,top&resize=980:*',
  },
  {
    id: 'u4',
    name: 'Alex',
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg?20161214102202',
  },
  {
    id: 'u5',
    name: 'Vlad',
    imageUri:
      'https://media.gettyimages.com/photos/elon-musk-multi-millionaire-rocket-scientist-tesla-and-space-x-and-picture-id872508664?k=20&m=872508664&s=612x612&w=0&h=W9_Kp5TOlxbAgB_st3TOO5gWV9eBp25Eq1d7aIqYi6Y=',
  },
  {
    id: 'u6',
    name: 'Elon Musk',
    imageUri:
      'https://media.gettyimages.com/photos/will-smith-accepts-the-actor-in-a-leading-role-award-for-king-richard-picture-id1388090436?k=20&m=1388090436&s=612x612&w=0&h=-aMG-TBqf7hVDJPy_JMPue38OAwYJWI-o_Xt-QkF7R4=',
  },
  {
    id: 'u7',
    name: 'Adrian',
    imageUri:
      'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
  },
  {
    id: 'u8',
    name: 'Borja',
    imageUri:
      'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
  },
  {
    id: 'u9',
    name: 'Mom',
    imageUri:
      'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
  },
  {
    id: 'u10',
    name: 'Angelina Jolie',
    imageUri:
      'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
  },

  {
    id: 'u11',
    name: 'Vadim',
    imageUri:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/botanical-gardens-puerto-vallarta-royalty-free-image-1643041119.jpg?crop=1xw:1xh;center,top&resize=980:*',
    // status: 'Hello there, how are you',
  },
  {
    id: 'u12',
    name: 'Lukas',
    imageUri:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mauritius-botanical-garden-1592525033.jpg?crop=1xw:1xh;center,top&resize=980:*',
  },
  {
    id: 'u13',
    name: 'Daniil',
    imageUri:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/powerscourt-estate-enniskerry-ireland-1592521349.jpg?crop=1xw:1xh;center,top&resize=980:*',
  },
  {
    id: 'u14',
    name: 'Alex',
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg?20161214102202',
  },
  {
    id: 'u15',
    name: 'Vlad',
    imageUri:
      'https://media.gettyimages.com/photos/elon-musk-multi-millionaire-rocket-scientist-tesla-and-space-x-and-picture-id872508664?k=20&m=872508664&s=612x612&w=0&h=W9_Kp5TOlxbAgB_st3TOO5gWV9eBp25Eq1d7aIqYi6Y=',
  },
  {
    id: 'u16',
    name: 'Elon Musk',
    imageUri:
      'https://media.gettyimages.com/photos/will-smith-accepts-the-actor-in-a-leading-role-award-for-king-richard-picture-id1388090436?k=20&m=1388090436&s=612x612&w=0&h=-aMG-TBqf7hVDJPy_JMPue38OAwYJWI-o_Xt-QkF7R4=',
  },
  {
    id: 'u17',
    name: 'Adrian',
    imageUri:
      'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
  },
  {
    id: 'u18',
    name: 'Borja',
    imageUri:
      'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
  },
  {
    id: 'u19',
    name: 'Mom',
    imageUri:
      'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
  },
  {
    id: 'u20',
    name: 'Angelina Jolie',
    imageUri:
      'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
  },
  {
    id: 'u21',
    name: 'Naveed Shoukat',
    imageUri:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aspect-of-the-orquideorama-center-of-exposition-of-flowers-news-photo-1643042932.jpg?crop=1xw:1xh;center,top&resize=980:*',
    // status: 'Hello there, I am using FXWhatsApp',
  },
];

export default users;
