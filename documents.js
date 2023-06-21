const events = [
    {
        type: 'event',
        uid: 18,
        name: 'Event1',
        tagline: 'Tagline for Event 1',
        schedule: new Date('2023-06-21T09:00:00Z'),
        description: 'Description for Event 1',
        files: { image: 'path/to/image1.jpg' },
        moderator: 'Moderator 1',
        category: 'Category 1',
        sub_category: 'Subcategory 1',
        rigor_rank: 5,
        attendees: [1, 2, 3]
      },
      {
        type: 'event',
        uid: 18,
        name: 'Event 2',
        tagline: 'Tagline for Event 2',
        schedule: new Date('2023-06-22T14:00:00Z'),
        description: 'Description for Event 2',
        files: { image: 'path/to/image2.jpg' },
        moderator: 'Moderator 2',
        category: 'Category 2',
        sub_category: 'Subcategory 2',
        rigor_rank: 4,
        attendees: [4, 5, 6]
      },
    {
      type: 'event',
      uid: 18,
      name: 'Event 3',
      tagline: 'Tagline for Event 3',
      schedule: new Date('2023-06-23T10:00:00Z'),
      description: 'Description for Event 3',
      files: { image: 'path/to/image3.jpg' },
      moderator: 'Moderator 3',
      category: 'Category 1',
      sub_category: 'Subcategory 1',
      rigor_rank: 4,
      attendees: [7, 8, 9]
    },
    {
      type: 'event',
      uid: 18,
      name: 'Event 4',
      tagline: 'Tagline for Event 4',
      schedule: new Date('2023-06-24T15:30:00Z'),
      description: 'Description for Event 4',
      files: { image: 'path/to/image4.jpg' },
      moderator: 'Moderator 4',
      category: 'Category 2',
      sub_category: 'Subcategory 2',
      rigor_rank: 3,
      attendees: [10, 11, 12]
    },
    {
      type: 'event',
      uid: 18,
      name: 'Event 5',
      tagline: 'Tagline for Event 5',
      schedule: new Date('2023-06-25T12:00:00Z'),
      description: 'Description for Event 5',
      files: { image: 'path/to/image5.jpg' },
      moderator: 'Moderator 5',
      category: 'Category 3',
      sub_category: 'Subcategory 3',
      rigor_rank: 4,
      attendees: [13, 14, 15]
    },
    {
      type: 'event',
      uid: 18,
      name: 'Event 6',
      tagline: 'Tagline for Event 6',
      schedule: new Date('2023-06-26T09:00:00Z'),
      description: 'Description for Event 6',
      files: { image: 'path/to/image6.jpg' },
      moderator: 'Moderator 6',
      category: 'Category 1',
      sub_category: 'Subcategory 1',
      rigor_rank: 5,
      attendees: [16, 17, 18]
    },
    {
      type: 'event',
      uid: 18,
      name: 'Event 7',
      tagline: 'Tagline for Event 7',
      schedule: new Date('2023-06-27T14:30:00Z'),
      description: 'Description for Event 7',
      files: { image: 'path/to/image7.jpg' },
      moderator: 'Moderator 7',
      category: 'Category 2',
      sub_category: 'Subcategory 2',
      rigor_rank: 4,
      attendees: [19, 20, 21]
    },
    {
      type: 'event',
      uid: 18,
      name: 'Event 8',
      tagline: 'Tagline for Event 8',
      schedule: new Date('2023-06-28T11:00:00Z'),
      description: 'Description for Event 8',
      files: { image: 'path/to/image8.jpg' },
      moderator: 'Moderator 8',
      category: 'Category 3',
      sub_category: 'Subcategory 3',
      rigor_rank: 3,
      attendees: [22, 23, 24]
    },
    {
      type: 'event',
      uid: 18,
      name: 'Event 9',
      tagline: 'Tagline for Event 9',
      schedule: new Date('2023-06-29T10:30:00Z'),
      description: 'Description for Event 9',
      files: { image: 'path/to/image9.jpg' },
      moderator: 'Moderator 9',
      category: 'Category 1',
      sub_category: 'Subcategory 1',
      rigor_rank: 4,
      attendees: [25, 26, 27]
    },
    {
      type: 'event',
      uid: 18,
      name: 'Event 10',
      tagline: 'Tagline for Event 10',
      schedule: new Date('2023-06-30T16:00:00Z'),
      description: 'Description for Event 10',
      files: { image: 'path/to/image10.jpg' },
      moderator: 'Moderator 10',
      category: 'Category 2',
      sub_category: 'Subcategory 2',
      rigor_rank: 5,
      attendees: [28, 29, 30]
    }
  ];


  // events.forEach((event)=>{
//     insertEvent("DBtech","documents",event);
//  });


