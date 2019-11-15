// const HOTEL_NAME = 'Resort Hotel';
// const STARS = 5;
// const STATUS = 'LUX';
// const ROOM_NUMBERS = 100;

// let hotel = ['Resort Hotel',5, 'LUX', 100];
// let h = [5, 6, 7, 8, 9];

// // create
// const HOTEL = {
//   name: 'Resort Hotel',
//   stars: 5,
//   status: 'LUX',
//   capacity: 100,
//   personal: ['Bob', 'Bender', 'Homer'],
// };

// const milk = {
//   name: 'Milk',
//   price: 5,
//   currency:'UAH'
// }

// const coffee = {
//   name: 'Americano',
//   price: 20,
//   currency: 'UAH',
//   hasMilk: false,
//   size: 'medium',
//   topings: [
//     {
//       name: 'Chocolate',
//       price: 2,
//       currency:'UAH'
//     },
//     milk],
// }
// console.log(coffee);
// coffee.discount = 20;
// coffee.price = 50;

// console.log(`${coffee.price} ${coffee.currency}`);
// console.log(coffee['name']);
// let variable = 'size';
// console.log(coffee[variable]); 
// console.log(coffee.variable);


// console.log(h);
// console.log(HOTEL);

// const coffee = {
//     name: 'Late',
//     price: 3,
//     size: 'Medium',
//     sort: 'Arabica',
//     isMilk: true,
//     calories: 135,
//     coffeine: true,
//     sirop: ['caramel', 'chocolate', 'cherry'],
// };

// function getData(key) {
//   return coffee[key];
// }
// console.log(getData('name'));
// console.log(getData('price'));
// console.log(getData('sort'));



// let user = {
//     id: 7851485214521452,
//     private: {
//         login: 'user256',
//         email: 'user@.com',
//         tel: '15-98-78-96-45',
//         'credit-card': 789654565214562,
//         password: '78fefd4521df411',
//     },
//     public: {
//         name: 'Bob',
//         age: 52,
//         gender: 'female',
//         surname: 'Dou',
//         photos: ['https//sdfksdjfskj', 'https//sdfksdjfskj', 'https//sdfksdjfskj', 'https//sdfksdjfskj'],
//         subscribers: 560,
//         likes: 1500,
//     },
// };


// console.log(user['id']);
// console.log(user.id);
// console.log(user['private']['tel']);
// console.log(user.private.tel);

// get

// const HOTEL = {
//   name: 'Resort Hotel',
//   stars: 5,
//   status: 'LUX',
//   capacity: 100,
//   personal: ['Bob', 'Bender', 'Homer'],
// };
// let key = 'status'
// console.log(HOTEL.name);
// console.log(HOTEL.personal);
// console.log(HOTEL.stars);
// console.log(HOTEL[key]);
// console.log(HOTEL.key);

// add new 

// HOTEL.manager = 'Chack Noris';
// HOTEL.stars = 10;
// delete HOTEL.personal;
// console.log(HOTEL);

// let name = "Resort Hotel";
// let stars = 5;

// const hotel = {
//     name: name,
//     stars: stars,
// };

// const hotel = {
//   name,
//   stars,
// }
// let manager = 'Chack';
// hotel.manager = manager;
// console.log(hotel);
// console.log(hotel.manager);

// add update delete 

// const hotel = {
//     name: "Resort Hotel",
//     stars: '5',
//     capacity: 100,
//   };

//   hotel.manager = 'Chack Noris';
//   hotel.stars = 6;

//   console.log(hotel);

// delete hotel.capacity;
// console.log(hotel);

//   delete hotel.capacity;
//   hotel.freeRooms = 25;
//   let userChoise = prompt('Enter numbers amount');
//   hotel.freeRooms = hotel.freeRooms - userChoise; 
// // //
//   delete hotel.stars;
//   delete hotel['capacity'];
//   hotel.stars = 4;
// console.log( hotel );
// own property
// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     pool: {
//       volume: '50m',
//       temp: '25C',
//     }
//   };


// let hasStars = hotel.hasOwnProperty('pool');
// let hasCort = hotel.hasOwnProperty('cort');
// let hasPool = 'pool' in hotel;
// let hasCort = 'cort' in hotel;
// // // //
// console.log(hasCort); // false
// console.log(hasStars); // true
// console.log(hasPool); // true
// // hotel.pool = true;
// console.log(hotel);


// methods

// const BMW = {
//   wheels: 4,
//   color: 'red',
//   year: 2018,
//   model: 'X5',
//   fullComplect: false,
//   move: function() {
//     console.log('I`m move');
//   },
//   stop() {
//     console.log('Stoped');
//   },
//   // getColor: () => console.log(BMW.color),
//  }

//  BMW.move();
//  BMW.stop();
//  console.log('a');
//  console.log(console);

//  BMW.move();
//  BMW.stop();
//  console.log(object);
// BMW.getColor();

// let a = 5;
// let b = a;
// a = 10;
// console.log(a);
// console.log(b);

// let obj = {
//   name: 'Bob'
// }

// let obj2 = obj
// obj.name = 'Mick',
// obj2.age = 14;
// console.log(obj)
// console.log(obj2)

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,

//   // getName: function () {
//   //   return hotel.name;
//   // },

//   getName() {
//     return hotel.name;
//   },

//   // getStars: () => hotel.stars,

//   changeCapacity(value) {
//     hotel.capacity += value;
//   },
//   createAddres(value) {
//     hotel.address = value
//   }
// };

// hotel.getName()
// hotel.changeCapacity(200);
// hotel.createAddres('Kyiv');

// console.log(hotel);


// console.log(hotel.getName());
// hotel.changeCapacity(200)
// console.log(hotel);
// hotel.createAddres('Bali');
// console.log(hotel);


// hotel.changeCapacity(200);
// hotel.capacity = 500;
// console.log ( hotel.capacity ); // 200
// hotel.createKey('Kyiv');
// console.log(hotel);
// hotel.createKey('Lviv');
// hotel.street = 'sflksdflsd';

// let a = 5;
// let b = a;
// a = 10;
// console.log(a);
// console.log(b);
// const obj1 = {
//     name: "chack",
// };
// let obj2 = obj1;
// obj1.age = 50;
// console.log(obj1);
// console.log(obj2);

// let arr = [1,2,3];
// console.log(arr);

// let a = 5;
// console.log(a);
// let b = a;
// console.log(b);
// a = 10;
// console.log(a, b);
//
// let obj1 = {
//     name: "chack",
// };
// // console.log(obj1);
// let obj2 = obj1;
// console.log(obj2);
// obj1.name = 'Norris';
// console.log('1',obj1);
// console.log('2',obj2);
// console.log(obj1 === obj2);

// for in

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
// console.log(hotel);

//   for (let item in hotel) {
//     if(hotel.hasOwnProperty(item)) {
//       console.log(hotel[item]);
//     }  
//   }


// let result = {
//   albums: {
//     entities: {
//       '1321': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/trapbeatsnew_100_jpg.jpg',
//         description: 'Pure Fire!\r\n\r\nThis fresh mixtape of hard-hitting Trap instrumentals just dropped, featuring an unstoppable crew of beat makers. Full of attitude, a pinch of darkness, and plenty of bass, these beats will take your productions to the next level.\r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/trap-beats">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>\r\n\r\n',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/trapbeatsnew_250_jpg.jpg',
//         title: 'Trap Beats    ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-06-15T11:30:02',
//           name: 'Trap Beats',
//           unpublishedAlbumCount: 0,
//           id: 940
//         },
//         titleNumber: '   ',
//         created: '2018-06-15T11:38:33',
//         published: true,
//         trackCount: 15,
//         tracks: [{
//             s3TrackId: '203916',
//             title: 'Karats'
//           },
//           {
//             s3TrackId: '205151',
//             title: 'Flex'
//           },
//           {
//             s3TrackId: '203323',
//             title: 'Cracked'
//           },
//           {
//             s3TrackId: '205452',
//             title: 'GridWorld'
//           },
//           {
//             s3TrackId: '205092',
//             title: 'Wraith'
//           },
//           {
//             s3TrackId: '205831',
//             title: 'Miami Work'
//           },
//           {
//             s3TrackId: '205439',
//             title: 'Gold'
//           },
//           {
//             s3TrackId: '203940',
//             title: 'Medici'
//           },
//           {
//             s3TrackId: '203532',
//             title: 'Rhinestones'
//           },
//           {
//             s3TrackId: '203835',
//             title: 'Clickbait'
//           },
//           {
//             s3TrackId: '205260',
//             title: 'Reality Check'
//           },
//           {
//             s3TrackId: '202865',
//             title: 'Dunno Nuttin'
//           },
//           {
//             s3TrackId: '205079',
//             title: 'Walk'
//           },
//           {
//             s3TrackId: '166485',
//             title: 'Godly'
//           },
//           {
//             s3TrackId: '205423',
//             title: 'Endgame'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-07-24T09:47:06',
//         creator: 'SEpZb-7M0k',
//         id: 1321,
//         categories: [{
//             id: 49,
//             name: 'Hip hop'
//           },
//           {
//             id: 58,
//             name: 'Urban'
//           }
//         ],
//         descriptionExcerpt: 'Pure Fire!'
//       },
//       '1342': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/i_am_better_off_feat_lakesha_nugent_100x100.jpg',
//         description: 'Introducing Wildson!\r\n\r\nThe long-awaited single \'I Am Better Off\' is finally here. A feelgood track with beautiful Soulful vocals and an empowering message.\r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/Wildson_BetterOff">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>\r\n\r\n ',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/i_am_better_off_feat_lakesha_nugent_250x250.jpg',
//         title: 'Wildson - I Am Better Off      ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-07-23T10:30:37',
//           name: 'Wildson - I Am Better Off',
//           unpublishedAlbumCount: 0,
//           id: 963
//         },
//         titleNumber: '     ',
//         created: '2018-07-23T10:31:19',
//         published: true,
//         trackCount: 2,
//         tracks: [{
//             s3TrackId: '205169',
//             title: 'I Am Better Off'
//           },
//           {
//             s3TrackId: '205164',
//             title: 'I Am Better Off (Instrumental Version)'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-07-23T10:50:09',
//         creator: 'SETsxRhLO',
//         id: 1342,
//         categories: [{
//             id: 31,
//             name: 'Pop'
//           },
//           {
//             id: 56,
//             name: 'Soul & RnB'
//           },
//           {
//             id: 76,
//             name: 'Artist Releases'
//           }
//         ],
//         descriptionExcerpt: 'Introducing Wildson!'
//       },
//       '1344': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/lofidelity_100x100.jpg',
//         description: 'Harmonic Distortion\r\n\r\nThis beat tape has that perfectly imperfect aesthetic that makes for a laid back, silky smooth lo-fi listening experience. ',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/lofidelity_250x250.jpg',
//         title: 'LoFidelity     ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-07-25T09:56:03',
//           name: 'LoFidelity',
//           unpublishedAlbumCount: 0,
//           id: 964
//         },
//         titleNumber: '    ',
//         created: '2018-07-25T09:59:26',
//         published: true,
//         trackCount: 12,
//         tracks: [{
//             s3TrackId: '207069',
//             title: 'Palm Trees'
//           },
//           {
//             s3TrackId: '207398',
//             title: 'Leaves'
//           },
//           {
//             s3TrackId: '206899',
//             title: 'Slipping Away'
//           },
//           {
//             s3TrackId: '207120',
//             title: 'Summer Is Here'
//           },
//           {
//             s3TrackId: '203555',
//             title: 'Shinigami'
//           },
//           {
//             s3TrackId: '206593',
//             title: 'Empty Road'
//           },
//           {
//             s3TrackId: '206420',
//             title: 'Neopolitin'
//           },
//           {
//             s3TrackId: '206909',
//             title: 'Still Here Waiting'
//           },
//           {
//             s3TrackId: '207267',
//             title: 'Odyssey'
//           },
//           {
//             s3TrackId: '206984',
//             title: 'Depths'
//           },
//           {
//             s3TrackId: '206603',
//             title: 'Float'
//           },
//           {
//             s3TrackId: '205897',
//             title: 'The Rain Is Sad'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-07-25T11:46:16',
//         creator: 'SETsxRhLO',
//         id: 1344,
//         categories: [{
//             id: 13,
//             name: 'Moods'
//           },
//           {
//             id: 49,
//             name: 'Hip hop'
//           }
//         ],
//         descriptionExcerpt: 'Harmonic Distortion'
//       },
//       '1345': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/Pili%27s_picks_tree100x100.jpg',
//         description: 'Curated for Andre Pilli \r\n\r\nEnjoy this mixtape of Future Bass, Beats and Ambient Chill tracks inspired by and curated for the videos of Andre Pilli.\r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/pillispicks">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/Pili%27s_picks_tree250x250.jpg',
//         title: 'Pilli\'s Picks     ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-07-31T10:00:01',
//           name: 'Pilli\'s Picks',
//           unpublishedAlbumCount: 0,
//           id: 965
//         },
//         titleNumber: '    ',
//         created: '2018-07-31T10:01:27',
//         published: true,
//         trackCount: 10,
//         tracks: [{
//             s3TrackId: '206384',
//             title: 'LBL'
//           },
//           {
//             s3TrackId: '205473',
//             title: 'Ice Cream Social'
//           },
//           {
//             s3TrackId: '203507',
//             title: 'Pashunfruit'
//           },
//           {
//             s3TrackId: '156449',
//             title: 'Supine'
//           },
//           {
//             s3TrackId: '205014',
//             title: 'Paycheck'
//           },
//           {
//             s3TrackId: '98155',
//             title: 'Piece Of Streets'
//           },
//           {
//             s3TrackId: '203911',
//             title: 'JuiceBox'
//           },
//           {
//             s3TrackId: '161402',
//             title: 'Ganja'
//           },
//           {
//             s3TrackId: '201703',
//             title: 'Dark Taupe'
//           },
//           {
//             s3TrackId: '203935',
//             title: 'Lucid Dreaming'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-07-31T10:52:16',
//         creator: 'SETsxRhLO',
//         id: 1345,
//         categories: [{
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 40,
//             name: 'Ambient & Atmospheric'
//           },
//           {
//             id: 49,
//             name: 'Hip hop'
//           },
//           {
//             id: 73,
//             name: 'Creator\'s Corner'
//           }
//         ],
//         descriptionExcerpt: 'Curated for Andre Pilli \r\n\r\n'
//       },
//       '1346': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/velvee_body_of_water100x100.jpg',
//         description: 'New single from Velee! \r\n\r\n\'Body Of Water\' is the new single from Velee. Modern pop with both a vibrant and a dreamy club vibe with vocals by Vicki Vox. The single\'s other track, \'Candy Land\', is sung by Frigga. \r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/SKcEG">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/velvee_body_of_water250x250.jpg ',
//         title: 'Velee - Body Of Water     ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-08-06T14:45:07',
//           name: 'Velee - Body Of Water',
//           unpublishedAlbumCount: 0,
//           id: 966
//         },
//         titleNumber: '    ',
//         created: '2018-08-06T14:45:42',
//         published: true,
//         trackCount: 2,
//         tracks: [{
//             s3TrackId: '206965',
//             title: 'Body Of Water'
//           },
//           {
//             s3TrackId: '204362',
//             title: 'Candy Land'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-06T14:58:29',
//         creator: 'SEpZb-7M0k',
//         id: 1346,
//         categories: [{
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 31,
//             name: 'Pop'
//           },
//           {
//             id: 76,
//             name: 'Artist Releases'
//           }
//         ],
//         descriptionExcerpt: 'New single from Velee!'
//       },
//       '1347': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/travelvlog_100.jpg',
//         description: 'Take A Trip!\r\n\r\nThis collection of curated tracks will take you on a trip across the globe. The album contains amazing instrumental tracks to accompany you on your journey and ready to be used in your Travel Vlog.',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/travelvlog_250.jpg ',
//         title: 'Travel Vlog      ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-08-08T10:08:39',
//           name: 'Travel Vlog',
//           unpublishedAlbumCount: 0,
//           id: 967
//         },
//         titleNumber: '     ',
//         created: '2018-08-08T10:09:27',
//         published: true,
//         trackCount: 12,
//         tracks: [{
//             s3TrackId: '207430',
//             title: 'Parallax'
//           },
//           {
//             s3TrackId: '207644',
//             title: 'Night Drive'
//           },
//           {
//             s3TrackId: '207382',
//             title: 'Eastern Love'
//           },
//           {
//             s3TrackId: '205160',
//             title: 'Future Vibes'
//           },
//           {
//             s3TrackId: '207272',
//             title: 'Parallel Universe'
//           },
//           {
//             s3TrackId: '203433',
//             title: 'Kolaramma Road'
//           },
//           {
//             s3TrackId: '207345',
//             title: 'Vegas'
//           },
//           {
//             s3TrackId: '164185',
//             title: 'Lux'
//           },
//           {
//             s3TrackId: '203541',
//             title: 'Seona'
//           },
//           {
//             s3TrackId: '207585',
//             title: 'Golden Rules'
//           },
//           {
//             s3TrackId: '207634',
//             title: 'Namibia'
//           },
//           {
//             s3TrackId: '205790',
//             title: 'Day Glo'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-08T10:35:10',
//         creator: 'SEpZb-7M0k',
//         id: 1347,
//         categories: [{
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 30,
//             name: 'World'
//           },
//           {
//             id: 40,
//             name: 'Ambient & Atmospheric'
//           },
//           {
//             id: 50,
//             name: 'Leisure & Lifestyle'
//           },
//           {
//             id: 65,
//             name: 'YouTube / Online Creators'
//           },
//           {
//             id: 68,
//             name: 'YouTube: Vlog'
//           }
//         ],
//         descriptionExcerpt: 'Take A Trip!'
//       },
//       '1348': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/playlist_focus_beats_100.jpg',
//         description: 'Stay Cool \r\n\r\nBeat that stress with chill hip-hop vibes.\r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/Focus_Beats_Playlist">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/playlist_focus_beats_250.jpg',
//         title: 'Focus Beats     ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-05-09T09:35:40',
//           name: 'Focus Beats',
//           unpublishedAlbumCount: 0,
//           id: 915
//         },
//         titleNumber: '    ',
//         created: '2018-08-09T11:18:42',
//         published: true,
//         trackCount: 20,
//         tracks: [{
//             s3TrackId: '205732',
//             title: 'Willow Trees'
//           },
//           {
//             s3TrackId: '201682',
//             title: 'Coffee And Unicorns'
//           },
//           {
//             s3TrackId: '203333',
//             title: 'Easy Feet'
//           },
//           {
//             s3TrackId: '170831',
//             title: 'Before Chill'
//           },
//           {
//             s3TrackId: '202032',
//             title: 'I Need This'
//           },
//           {
//             s3TrackId: '201868',
//             title: 'Rainy Sunday'
//           },
//           {
//             s3TrackId: '203849',
//             title: 'Daffodils'
//           },
//           {
//             s3TrackId: '203555',
//             title: 'Shinigami'
//           },
//           {
//             s3TrackId: '165243',
//             title: 'Sunday Spelunking'
//           },
//           {
//             s3TrackId: '204225',
//             title: 'The Writer'
//           },
//           {
//             s3TrackId: '205841',
//             title: 'NEAR'
//           },
//           {
//             s3TrackId: '166455',
//             title: 'Time Keeps Moving On'
//           },
//           {
//             s3TrackId: '205040',
//             title: 'Snow Cap'
//           },
//           {
//             s3TrackId: '167499',
//             title: 'Dot The I\'s And Cross The T\'s'
//           },
//           {
//             s3TrackId: '202580',
//             title: 'Shokawa'
//           },
//           {
//             s3TrackId: '170892',
//             title: 'Midnight Vibe'
//           },
//           {
//             s3TrackId: '203016',
//             title: 'Blue Hills'
//           },
//           {
//             s3TrackId: '202358',
//             title: 'Cambodia Rain'
//           },
//           {
//             s3TrackId: '165140',
//             title: 'Linen'
//           },
//           {
//             s3TrackId: '202134',
//             title: 'Teahouse Event'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-09T11:20:33',
//         creator: 'SEpZb-7M0k',
//         id: 1348,
//         categories: [{
//             id: 40,
//             name: 'Ambient & Atmospheric'
//           },
//           {
//             id: 49,
//             name: 'Hip hop'
//           }
//         ],
//         descriptionExcerpt: 'Stay Cool '
//       },
//       '1349': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/Inutilismo-Soundtrack_100.jpg ',
//         description: 'Curated for Lucas Inutilismo!\r\n\r\n<a target="_blank" href="http://share.epidemicsound.com/LucasLindo">Music</a> inspired by and curated for the videos of Lucas Inutilismo.\r\n\r\n<a target="_blank" href="https://www.youtube.com/channel/UCdTWvzwNIeZxSNZ_oWvnBbQ">Check him out here!</a>\r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/InutSndtrk">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/Inutilismo-Soundtrack_250.jpg ',
//         title: 'Inutilismo Soundtrack      ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-08-09T14:36:59',
//           name: 'Inutilismo Soundtrack',
//           unpublishedAlbumCount: 0,
//           id: 968
//         },
//         titleNumber: '     ',
//         created: '2018-08-09T14:38:07',
//         published: true,
//         trackCount: 15,
//         tracks: [{
//             s3TrackId: '204008',
//             title: 'Snow Day'
//           },
//           {
//             s3TrackId: '165732',
//             title: 'The Space Between Us'
//           },
//           {
//             s3TrackId: '203100',
//             title: 'Limitless'
//           },
//           {
//             s3TrackId: '203284',
//             title: 'Bathtub'
//           },
//           {
//             s3TrackId: '169618',
//             title: 'Silent Memories'
//           },
//           {
//             s3TrackId: '170972',
//             title: 'Aventura'
//           },
//           {
//             s3TrackId: '203849',
//             title: 'Daffodils'
//           },
//           {
//             s3TrackId: '161402',
//             title: 'Ganja'
//           },
//           {
//             s3TrackId: '203911',
//             title: 'JuiceBox'
//           },
//           {
//             s3TrackId: '203443',
//             title: 'Mantis'
//           },
//           {
//             s3TrackId: '98155',
//             title: 'Piece Of Streets'
//           },
//           {
//             s3TrackId: '152961',
//             title: 'Delicate Transitions'
//           },
//           {
//             s3TrackId: '201703',
//             title: 'Dark Taupe'
//           },
//           {
//             s3TrackId: '206994',
//             title: 'For Jack'
//           },
//           {
//             s3TrackId: '157406',
//             title: 'By The Lake In The Evening'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-10T08:54:42',
//         creator: 'SEpZb-7M0k',
//         id: 1349,
//         categories: [{
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 40,
//             name: 'Ambient & Atmospheric'
//           },
//           {
//             id: 49,
//             name: 'Hip hop'
//           },
//           {
//             id: 65,
//             name: 'YouTube / Online Creators'
//           }
//         ],
//         descriptionExcerpt: 'Curated for Lucas Inutilismo!'
//       },
//       '1350': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/queen_of_hearts_100.jpg ',
//         description: 'Debut album by Velvet Moon!\r\n\r\nVelvet Moon is an acoustic-pop duo from Sweden - comprising singer-songwriter, Sandra Bjurman, and producer, Stefan Örn. In July 2018, they released their debut album, Queen of Hearts. This captivating album features nine folk-influenced, acoustic-pop tracks that all epitomize the duo’s sharp sense for melody and production.\r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/QOH_Velvet_Moon">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/queen_of_hearts_250.jpg ',
//         title: 'Velvet Moon - Queen Of Hearts     ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-08-10T13:49:53',
//           name: 'Velvet Moon - Queen Of Hearts',
//           unpublishedAlbumCount: 0,
//           id: 969
//         },
//         titleNumber: '    ',
//         created: '2018-08-10T13:50:48',
//         published: true,
//         trackCount: 9,
//         tracks: [{
//             s3TrackId: '206148',
//             title: 'Pretender'
//           },
//           {
//             s3TrackId: '206157',
//             title: 'Queen Of Hearts'
//           },
//           {
//             s3TrackId: '207016',
//             title: 'Good Man'
//           },
//           {
//             s3TrackId: '206021',
//             title: 'Confetti'
//           },
//           {
//             s3TrackId: '205761',
//             title: 'Always Sister'
//           },
//           {
//             s3TrackId: '206030',
//             title: 'Dear Moon'
//           },
//           {
//             s3TrackId: '206275',
//             title: 'Blush'
//           },
//           {
//             s3TrackId: '205929',
//             title: 'Viva La Vida'
//           },
//           {
//             s3TrackId: '205518',
//             title: 'Love Story'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-13T10:28:31',
//         creator: 'SEpZb-7M0k',
//         id: 1350,
//         categories: [{
//             id: 31,
//             name: 'Pop'
//           },
//           {
//             id: 59,
//             name: 'Vocals'
//           },
//           {
//             id: 63,
//             name: 'Acoustic'
//           },
//           {
//             id: 76,
//             name: 'Artist Releases'
//           }
//         ],
//         descriptionExcerpt: 'Debut album by Velvet Moon!'
//       },
//       '1351': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/dreampop_100.jpg ',
//         description: 'Deep In A Dream! \r\n\r\nThis album has a collection of shimmering and dreamy contemporary Pop tracks that includes sprinkles of Beats, House, Electro and Indie Pop. \r\n',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/dreampop_250.jpg ',
//         title: 'Dream Pop    ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2012-09-03T11:11:51',
//           name: 'Dream Pop',
//           unpublishedAlbumCount: 1,
//           id: 71
//         },
//         titleNumber: '   ',
//         created: '2018-08-14T11:10:39',
//         published: true,
//         trackCount: 12,
//         tracks: [{
//             s3TrackId: '204610',
//             title: 'All We\'ve Been Dreaming Of'
//           },
//           {
//             s3TrackId: '206384',
//             title: 'LBL'
//           },
//           {
//             s3TrackId: '207312',
//             title: 'Reversed Beginning'
//           },
//           {
//             s3TrackId: '206965',
//             title: 'Body Of Water'
//           },
//           {
//             s3TrackId: '208197',
//             title: 'Irresistible'
//           },
//           {
//             s3TrackId: '206884',
//             title: 'Release Me'
//           },
//           {
//             s3TrackId: '207767',
//             title: 'I\'m The Only One You Want (Young Community Remix)'
//           },
//           {
//             s3TrackId: '208233',
//             title: 'Like Water'
//           },
//           {
//             s3TrackId: '206220',
//             title: 'Turn It Turn Up'
//           },
//           {
//             s3TrackId: '206294',
//             title: 'Chasing A Dream'
//           },
//           {
//             s3TrackId: '206365',
//             title: 'I Never Really Said It Out Loud'
//           },
//           {
//             s3TrackId: '204733',
//             title: 'Magic Field'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-14T11:22:34',
//         creator: 'SEpZb-7M0k',
//         id: 1351,
//         categories: [{
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 31,
//             name: 'Pop'
//           },
//           {
//             id: 40,
//             name: 'Ambient & Atmospheric'
//           }
//         ],
//         descriptionExcerpt: 'Deep In A Dream! '
//       },
//       '1352': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/lbl_100.jpg',
//         description: 'New music from Cospe!\r\n\r\nSince 2016, Cospe has produced and released a number of extremely popular singles and EPs. In spite of this, she is, like her fans, constantly looking forward to her next work.\r\n\r\n<i>"As a musician, just like a painter, I make a piece of art and then move on to the next one".</i> - Cospe\r\n\r\nNow, she’s back with her new piece of art, namely LBL that consists of her distinctive brand of electronic beats. \r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/Cospe_LBL">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/lbl_250.jpg ',
//         title: 'Cospe - LBL    ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-08-14T12:21:13',
//           name: 'Cospe - LBL',
//           unpublishedAlbumCount: 0,
//           id: 971
//         },
//         titleNumber: '   ',
//         created: '2018-08-14T12:22:47',
//         published: true,
//         trackCount: 4,
//         tracks: [{
//             s3TrackId: '206384',
//             title: 'LBL'
//           },
//           {
//             s3TrackId: '206294',
//             title: 'Chasing A Dream'
//           },
//           {
//             s3TrackId: '206492',
//             title: 'So Fresh'
//           },
//           {
//             s3TrackId: '206558',
//             title: 'Your Wave'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-15T09:05:45',
//         creator: 'SEpZb-7M0k',
//         id: 1352,
//         categories: [{
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 76,
//             name: 'Artist Releases'
//           }
//         ],
//         descriptionExcerpt: 'New music from Cospe!'
//       },
//       '1353': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/work_that_body_100x100.jpg ',
//         description: 'No pain no gain with these uptempo tracks!\r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/Work_That_Body_Playlist">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/work_that_body_250x250.jpg ',
//         title: 'Work That Body     ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-08-16T08:57:29',
//           name: 'Work That Body',
//           unpublishedAlbumCount: 0,
//           id: 972
//         },
//         titleNumber: '    ',
//         created: '2018-08-16T08:59:01',
//         published: true,
//         trackCount: 20,
//         tracks: [{
//             s3TrackId: '154769',
//             title: 'Take Cover'
//           },
//           {
//             s3TrackId: '166183',
//             title: 'Kraken'
//           },
//           {
//             s3TrackId: '204483',
//             title: 'No Sugar Coated Love'
//           },
//           {
//             s3TrackId: '146757',
//             title: 'The Sooner The Better'
//           },
//           {
//             s3TrackId: '204323',
//             title: 'Way Way Back'
//           },
//           {
//             s3TrackId: '140225',
//             title: 'Unleash My Halo'
//           },
//           {
//             s3TrackId: '158774',
//             title: 'Kermode'
//           },
//           {
//             s3TrackId: '105042',
//             title: 'Black Coffee'
//           },
//           {
//             s3TrackId: '203007',
//             title: 'Be Free With Me (Chez Remix)'
//           },
//           {
//             s3TrackId: '202918',
//             title: 'Run Till Dawn'
//           },
//           {
//             s3TrackId: '148183',
//             title: 'Short Life'
//           },
//           {
//             s3TrackId: '146858',
//             title: 'Space Palace'
//           },
//           {
//             s3TrackId: '204352',
//             title: 'Back For Love'
//           },
//           {
//             s3TrackId: '202100',
//             title: 'Raise The Flag'
//           },
//           {
//             s3TrackId: '150084',
//             title: 'Pure Gold'
//           },
//           {
//             s3TrackId: '148292',
//             title: 'Whatever Man'
//           },
//           {
//             s3TrackId: '175133',
//             title: 'Don\'t Let The Dance Die'
//           },
//           {
//             s3TrackId: '154365',
//             title: 'Fall'
//           },
//           {
//             s3TrackId: '146403',
//             title: 'Body Work'
//           },
//           {
//             s3TrackId: '154745',
//             title: 'Flavors'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-16T09:07:20',
//         creator: 'SEpZb-7M0k',
//         id: 1353,
//         categories: [{
//             id: 22,
//             name: 'Sports'
//           },
//           {
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 50,
//             name: 'Leisure & Lifestyle'
//           },
//           {
//             id: 51,
//             name: 'Motivational & Inspiring'
//           }
//         ],
//         descriptionExcerpt: 'No pain no gain with these uptempo tracks!'
//       },
//       '1355': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/ultimate_remixes_vol6_100.jpg',
//         description: 'Ultimate Remixes Vol 6\r\n\r\nA collection of our recently remixed tracks featuring Electro, Beats and House!',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/ultimate_remixes_vol6_250.jpg ',
//         title: 'The Ultimate Remixes Vol 6',
//         series: {
//           publishedAlbumCount: 6,
//           created: '2015-05-28T15:53:55',
//           name: 'The Ultimate Remixes',
//           unpublishedAlbumCount: 0,
//           id: 392
//         },
//         titleNumber: 'Vol 6',
//         created: '2018-08-17T16:50:44',
//         published: true,
//         trackCount: 12,
//         tracks: [{
//             s3TrackId: '208291',
//             title: 'Some Air (SLCT Remix)'
//           },
//           {
//             s3TrackId: '208838',
//             title: 'Stay For Now (Hallman Remix)'
//           },
//           {
//             s3TrackId: '208361',
//             title: 'You Really Got Me (Young Community Remix)'
//           },
//           {
//             s3TrackId: '204453',
//             title: 'Messed It Up (Chez Remix)'
//           },
//           {
//             s3TrackId: '206487',
//             title: 'Sleeping In My Head (Manta Circle Remix)'
//           },
//           {
//             s3TrackId: '205075',
//             title: 'Ur Karma (SLCT Remix)'
//           },
//           {
//             s3TrackId: '206135',
//             title: 'Picture Of You (oomiee Remix)'
//           },
//           {
//             s3TrackId: '204693',
//             title: 'In And Out Of Love (Tigerblood Jewel Remix)'
//           },
//           {
//             s3TrackId: '207851',
//             title: 'Say We\'re Sorry (Hallman Remix)'
//           },
//           {
//             s3TrackId: '207909',
//             title: 'All The Time We Need (SLCT Remix)'
//           },
//           {
//             s3TrackId: '207050',
//             title: 'No Sugar Coated Love (SLCT Remix)'
//           },
//           {
//             s3TrackId: '207882',
//             title: 'We\'re Dynamite (Hallman Remix)'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-17T16:53:56',
//         creator: 'SEpZb-7M0k',
//         id: 1355,
//         categories: [{
//           id: 25,
//           name: 'Electronica & Dance'
//         }],
//         descriptionExcerpt: 'Ultimate Remixes Vol 6'
//       },
//       '1358': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/candy_floss_100.jpg',
//         description: 'Introducing the new EP!\r\n\r\n’Candy Floss’ is the new seven-track EP by Push N’ Glide. Filled with attitude and bouncy bass beats. Trap tracks perfect for commercials and other projects.\r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/Candy_Floss_PNG">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/candy_floss_250.jpg ',
//         title: 'Push N\' Glide - Candy Floss    ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-08-20T09:42:09',
//           name: 'Push N\' Glide - Candy Floss',
//           unpublishedAlbumCount: 0,
//           id: 974
//         },
//         titleNumber: '   ',
//         created: '2018-08-20T09:48:51',
//         published: true,
//         trackCount: 7,
//         tracks: [{
//             s3TrackId: '205785',
//             title: 'Candy Floss'
//           },
//           {
//             s3TrackId: '206530',
//             title: 'U Cray'
//           },
//           {
//             s3TrackId: '206784',
//             title: 'Compton Daydream'
//           },
//           {
//             s3TrackId: '206544',
//             title: 'Where U Gon Be'
//           },
//           {
//             s3TrackId: '205820',
//             title: 'Is All U'
//           },
//           {
//             s3TrackId: '206324',
//             title: 'Dr Drizzle'
//           },
//           {
//             s3TrackId: '206342',
//             title: 'G Going South'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-20T12:20:38',
//         creator: 'SEpZb-7M0k',
//         id: 1358,
//         categories: [{
//             id: 49,
//             name: 'Hip hop'
//           },
//           {
//             id: 76,
//             name: 'Artist Releases'
//           }
//         ],
//         descriptionExcerpt: 'Introducing the new EP!'
//       },
//       '1359': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/now_trendingv2_100x100.jpg ',
//         description: 'What\'s Hot Right Now\r\n\r\nEnjoy this taste of what\'s trending worldwide right now. Hand-picked by our team of music curators. Updated regularly, so watch this space!',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/now_trendingv2_250x250.jpg',
//         title: 'Now Trending    ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-05-18T15:34:25',
//           name: 'Now Trending',
//           unpublishedAlbumCount: 0,
//           id: 923
//         },
//         titleNumber: '   ',
//         created: '2018-08-21T11:44:09',
//         published: true,
//         trackCount: 15,
//         tracks: [{
//             s3TrackId: '205053',
//             title: 'Starfields'
//           },
//           {
//             s3TrackId: '206384',
//             title: 'LBL'
//           },
//           {
//             s3TrackId: '207430',
//             title: 'Parallax'
//           },
//           {
//             s3TrackId: '208564',
//             title: 'Somewhere Somehow'
//           },
//           {
//             s3TrackId: '206487',
//             title: 'Sleeping In My Head (Manta Circle Remix)'
//           },
//           {
//             s3TrackId: '207923',
//             title: 'Bonita'
//           },
//           {
//             s3TrackId: '206994',
//             title: 'For Jack'
//           },
//           {
//             s3TrackId: '207345',
//             title: 'Vegas'
//           },
//           {
//             s3TrackId: '204922',
//             title: 'Firebirds'
//           },
//           {
//             s3TrackId: '205160',
//             title: 'Future Vibes'
//           },
//           {
//             s3TrackId: '205356',
//             title: 'Black Lies'
//           },
//           {
//             s3TrackId: '204483',
//             title: 'No Sugar Coated Love'
//           },
//           {
//             s3TrackId: '206468',
//             title: 'Salty'
//           },
//           {
//             s3TrackId: '205169',
//             title: 'I Am Better Off'
//           },
//           {
//             s3TrackId: '202987',
//             title: 'A Fighting Chance'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-21T11:47:08',
//         creator: 'SEpZb-7M0k',
//         id: 1359,
//         categories: [{
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 49,
//             name: 'Hip hop'
//           },
//           {
//             id: 56,
//             name: 'Soul & RnB'
//           }
//         ],
//         descriptionExcerpt: 'What\'s Hot Right Now'
//       },
//       '1360': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/fitness_beats_100.jpg ',
//         description: 'Get In Shape!\r\n\r\nGet in shape with these pulse boosting House, Electro and Pop tracks. Handpicked for your fitness videos and with BPMs well suited for workout.',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/fitness_beats_250.jpg ',
//         title: 'Fitness Beats    ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-08-22T11:09:25',
//           name: 'Fitness Beats',
//           unpublishedAlbumCount: 0,
//           id: 975
//         },
//         titleNumber: '   ',
//         created: '2018-08-22T11:10:38',
//         published: true,
//         trackCount: 12,
//         tracks: [{
//             s3TrackId: '208344',
//             title: 'The Winner'
//           },
//           {
//             s3TrackId: '209091',
//             title: 'Shot Away'
//           },
//           {
//             s3TrackId: '207994',
//             title: 'Lies (Killrude Remix)'
//           },
//           {
//             s3TrackId: '207508',
//             title: 'Unbroken'
//           },
//           {
//             s3TrackId: '206747',
//             title: 'Better Came Along'
//           },
//           {
//             s3TrackId: '208052',
//             title: 'Stormy Weather (Manta Circle Remix)'
//           },
//           {
//             s3TrackId: '208899',
//             title: 'Anywhere You Go'
//           },
//           {
//             s3TrackId: '208615',
//             title: 'No Sugar Coated Love (Squiid Remix)'
//           },
//           {
//             s3TrackId: '207882',
//             title: 'We\'re Dynamite (Hallman Remix)'
//           },
//           {
//             s3TrackId: '206941',
//             title: 'Wild'
//           },
//           {
//             s3TrackId: '208025',
//             title: 'Remember Our Story'
//           },
//           {
//             s3TrackId: '206553',
//             title: 'White Flag'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-22T11:39:03',
//         creator: 'SEpZb-7M0k',
//         id: 1360,
//         categories: [{
//             id: 21,
//             name: 'Pace'
//           },
//           {
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 50,
//             name: 'Leisure & Lifestyle'
//           },
//           {
//             id: 51,
//             name: 'Motivational & Inspiring'
//           }
//         ],
//         descriptionExcerpt: 'Get In Shape!'
//       },
//       '1361': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/beatsbycaue100x100.jpg',
//         description: 'Enjoy this mixtape of dreamy Trap Beats curated by Caue Moura for his fans and videos.',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/beatsbycaue250x250.jpg',
//         title: 'Beats By Caue     ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-08-23T10:55:20',
//           name: 'Beats By Caue',
//           unpublishedAlbumCount: 0,
//           id: 976
//         },
//         titleNumber: '    ',
//         created: '2018-08-23T11:03:42',
//         published: true,
//         trackCount: 15,
//         tracks: [{
//             s3TrackId: '203016',
//             title: 'Blue Hills'
//           },
//           {
//             s3TrackId: '205939',
//             title: 'Welcome To Miami'
//           },
//           {
//             s3TrackId: '206784',
//             title: 'Compton Daydream'
//           },
//           {
//             s3TrackId: '203963',
//             title: 'New Game Old'
//           },
//           {
//             s3TrackId: '173959',
//             title: 'Clips'
//           },
//           {
//             s3TrackId: '203835',
//             title: 'Clickbait'
//           },
//           {
//             s3TrackId: '205141',
//             title: 'Engaged'
//           },
//           {
//             s3TrackId: '205240',
//             title: 'Paco'
//           },
//           {
//             s3TrackId: '202913',
//             title: 'Need You Gurl'
//           },
//           {
//             s3TrackId: '205732',
//             title: 'Willow Trees'
//           },
//           {
//             s3TrackId: '203532',
//             title: 'Rhinestones'
//           },
//           {
//             s3TrackId: '203859',
//             title: 'Fast Life'
//           },
//           {
//             s3TrackId: '203352',
//             title: 'Goin Strait'
//           },
//           {
//             s3TrackId: '203911',
//             title: 'JuiceBox'
//           },
//           {
//             s3TrackId: '205260',
//             title: 'Reality Check'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-23T11:13:18',
//         creator: 'SEpZb-7M0k',
//         id: 1361,
//         categories: [{
//             id: 49,
//             name: 'Hip hop'
//           },
//           {
//             id: 65,
//             name: 'YouTube / Online Creators'
//           },
//           {
//             id: 73,
//             name: 'Creator\'s Corner'
//           }
//         ],
//         descriptionExcerpt: 'Enjoy this mixtape of dreamy Trap Beats curated by Caue Moura for his fans and videos.'
//       },
//       '1362': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/playlist_trending_pop_100.jpg',
//         description: 'This is what\'s popping right now!\r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/Trending_Pop_Playlist">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/playlist_trending_pop_250.jpg',
//         title: 'Trending Pop          ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-05-11T10:24:39',
//           name: 'Trending Pop',
//           unpublishedAlbumCount: 0,
//           id: 916
//         },
//         titleNumber: '         ',
//         created: '2018-08-24T11:27:52',
//         published: true,
//         trackCount: 20,
//         tracks: [{
//             s3TrackId: '205169',
//             title: 'I Am Better Off'
//           },
//           {
//             s3TrackId: '204483',
//             title: 'No Sugar Coated Love'
//           },
//           {
//             s3TrackId: '166649',
//             title: 'The Night Is Young'
//           },
//           {
//             s3TrackId: '168240',
//             title: 'I Met You In The Summer'
//           },
//           {
//             s3TrackId: '205297',
//             title: 'We\'re Out Of Time'
//           },
//           {
//             s3TrackId: '165090',
//             title: 'Catching Fire'
//           },
//           {
//             s3TrackId: '206965',
//             title: 'Body Of Water'
//           },
//           {
//             s3TrackId: '205356',
//             title: 'Black Lies'
//           },
//           {
//             s3TrackId: '203830',
//             title: 'Call On Me'
//           },
//           {
//             s3TrackId: '201877',
//             title: 'Red Lights'
//           },
//           {
//             s3TrackId: '205075',
//             title: 'Ur Karma (SLCT Remix)'
//           },
//           {
//             s3TrackId: '203935',
//             title: 'Lucid Dreaming'
//           },
//           {
//             s3TrackId: '162523',
//             title: 'Name Tag'
//           },
//           {
//             s3TrackId: '203025',
//             title: 'Brand New (Helium)'
//           },
//           {
//             s3TrackId: '162400',
//             title: 'Why Don\'t We'
//           },
//           {
//             s3TrackId: '202954',
//             title: 'Teenage Dream'
//           },
//           {
//             s3TrackId: '203741',
//             title: 'Incredible'
//           },
//           {
//             s3TrackId: '175133',
//             title: 'Don\'t Let The Dance Die'
//           },
//           {
//             s3TrackId: '204965',
//             title: 'I\'m On My Way Now'
//           },
//           {
//             s3TrackId: '170822',
//             title: '9 To 5'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-24T11:31:37',
//         creator: 'SEpZb-7M0k',
//         id: 1362,
//         categories: [{
//             id: 31,
//             name: 'Pop'
//           },
//           {
//             id: 65,
//             name: 'YouTube / Online Creators'
//           }
//         ],
//         descriptionExcerpt: 'This is what\'s popping right now!\r\n'
//       },
//       '1363': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/Starfields100x100.jpg ',
//         description: 'New music from Hallman!\r\n\r\nThe new single \'Starfields\' from Hallman is pure good times and good vibes! Flawless Tropical House that is both uplifting and vibrant. \r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/Hallman_Starfields">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/Starfields250x250.jpg ',
//         title: 'Hallman - Starfields    ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-08-27T11:07:20',
//           name: 'Hallman - Starfields',
//           unpublishedAlbumCount: 0,
//           id: 977
//         },
//         titleNumber: '   ',
//         created: '2018-08-27T11:08:50',
//         published: true,
//         trackCount: 2,
//         tracks: [{
//             s3TrackId: '205053',
//             title: 'Starfields'
//           },
//           {
//             s3TrackId: '204906',
//             title: 'Been So Long'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-27T11:27:52',
//         creator: 'SEpZb-7M0k',
//         id: 1363,
//         categories: [{
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 76,
//             name: 'Artist Releases'
//           }
//         ],
//         descriptionExcerpt: 'New music from Hallman!'
//       },
//       '1364': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/holidayseason_100.png',
//         description: 'It\'s Holiday Season!\r\n\r\nJump-start your holiday productions with these blissful vocal tracks. Perfect for everybody wanting to soundtrack Christmas with timeless Soul, comforting Acoustics and smooth Jazz.',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/holidayseason_250.png ',
//         title: 'Holiday Season    ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-08-28T11:20:46',
//           name: 'Holiday Season',
//           unpublishedAlbumCount: 0,
//           id: 978
//         },
//         titleNumber: '   ',
//         created: '2018-08-28T11:21:23',
//         published: true,
//         tracks: [{
//             seriesId: 0,
//             s3TrackId: '206765',
//             genres: [
//               '2010s Pop',
//               'Christmas'
//             ],
//             added: '2018-06-26',
//             longGenres: [
//               'Pop.2010s Pop',
//               'Special Occasions.Christmas'
//             ],
//             tags: [
//               'uplifting',
//               'positive',
//               'feelgood',
//               'holidays',
//               'steady',
//               'driving',
//               'lyrics',
//               'female vocals',
//               'lead vocals',
//               'ism'
//             ],
//             composerName: 'Loving Caliber',
//             bpm: 134,
//             featuredArtist: 'Mia Pfirrman',
//             length: 173,
//             longMoods: [
//               'Moods.Happy',
//               'Moods.Euphoric'
//             ],
//             featuredArtistSlug: 'mia-pfirrman',
//             energyLevel: 'High',
//             title: 'Christmas In My Heart',
//             composerSlug: 'loving-caliber',
//             featuredArtistName: 'Mia Pfirrman',
//             hasVocals: true,
//             moods: [
//               'Happy',
//               'Euphoric'
//             ]
//           },
//           {
//             seriesId: 0,
//             s3TrackId: '208524',
//             genres: [
//               'Christmas',
//               'Smooth Jazz'
//             ],
//             added: '2018-08-09',
//             longGenres: [
//               'Special Occasions.Christmas',
//               'Jazz.Smooth Jazz'
//             ],
//             tags: [
//               'acoustic',
//               'strings',
//               'soft',
//               'winter',
//               'snow',
//               'night',
//               'ballad',
//               'holiday',
//               'smooth',
//               'male vocals',
//               'lead vocals',
//               'ism',
//               'lyrics'
//             ],
//             composerName: 'Martin Landh',
//             bpm: 75,
//             artistName: 'Slowfly',
//             artistSlug: '962',
//             length: 224,
//             longMoods: [
//               'Moods.Relaxing',
//               'Moods.Peaceful'
//             ],
//             featuredArtistSlug: 'revel-day',
//             energyLevel: 'Low',
//             title: 'Promised Land',
//             composerSlug: 'martin-landh',
//             artist: 'Slowfly',
//             featuredArtistName: 'Revel Day',
//             hasVocals: true,
//             featuredArtist: 'Revel Day',
//             moods: [
//               'Relaxing',
//               'Peaceful'
//             ]
//           },
//           {
//             seriesId: 0,
//             s3TrackId: '208711',
//             genres: 'Christmas',
//             added: '2018-08-13',
//             longGenres: 'Special Occasions.Christmas',
//             tags: [
//               'ism',
//               'female vocals',
//               'lead vocals',
//               'ballad',
//               'sentimental',
//               'sweet ',
//               'warm',
//               'soulful'
//             ],
//             composerName: 'Anders Lystell',
//             bpm: 104,
//             artistName: 'Loving Caliber',
//             artistSlug: 'loving-caliber',
//             length: 164,
//             longMoods: [
//               'Moods.Relaxing',
//               'Moods.Romantic'
//             ],
//             featuredArtistSlug: '1006',
//             energyLevel: 'Low',
//             title: 'I\'m Coming Home For Christmas',
//             composerSlug: 'anders-lystell',
//             artist: 'Loving Caliber',
//             featuredArtistName: 'LaKesha Nugent',
//             hasVocals: true,
//             featuredArtist: 'LaKesha Nugent',
//             moods: [
//               'Relaxing',
//               'Romantic'
//             ]
//           },
//           {
//             seriesId: 0,
//             s3TrackId: '208472',
//             genres: 'Motown & Old School RnB',
//             added: '2018-08-09',
//             longGenres: 'Rnb & Soul.Motown & Old School RnB',
//             tags: [
//               'lyrics',
//               'ism',
//               'love',
//               'cozy',
//               'holiday',
//               'christmas',
//               'motown',
//               'bass',
//               'guitar',
//               'female vocals',
//               'male vocals',
//               'duet'
//             ],
//             composerName: 'Flickering',
//             bpm: 90,
//             artistName: 'Flickering',
//             artistSlug: 'flickering-flickering',
//             length: 236,
//             longMoods: [
//               'Moods.Happy',
//               'Moods.Relaxing'
//             ],
//             featuredArtistSlug: 'g-curtis',
//             energyLevel: 'Medium',
//             title: 'Jingle With Me',
//             composerSlug: 'flickering-flickering',
//             artist: 'Flickering',
//             featuredArtistName: 'G Curtis',
//             hasVocals: true,
//             featuredArtist: 'G Curtis',
//             moods: [
//               'Happy',
//               'Relaxing'
//             ]
//           },
//           {
//             seriesId: 0,
//             s3TrackId: '208174',
//             genres: 'Christmas',
//             added: '2018-08-02',
//             longGenres: 'Special Occasions.Christmas',
//             tags: [
//               'ism',
//               'hq',
//               'electric guitars',
//               'lead vocals',
//               'male vocals',
//               'solo guitar',
//               'lyrics',
//               'relaxing',
//               'warm',
//               'holiday',
//               'feelgood'
//             ],
//             composerName: 'Johan Glössner',
//             bpm: 90,
//             artistName: 'Wildson',
//             artistSlug: 'wildson',
//             length: 237,
//             longMoods: [
//               'Moods.Hopeful',
//               'Movement.Elegant'
//             ],
//             featuredArtistSlug: 'sture-zetterberg',
//             energyLevel: 'Medium',
//             title: 'I Will Be Home For You',
//             composerSlug: 'johan-glossner',
//             artist: 'Wildson',
//             featuredArtistName: 'Sture Zetterberg',
//             hasVocals: true,
//             featuredArtist: 'Sture Zetterberg',
//             moods: [
//               'Hopeful',
//               'Elegant'
//             ]
//           },
//           {
//             seriesId: 0,
//             s3TrackId: '207102',
//             genres: [
//               'Christmas',
//               'Smooth Jazz'
//             ],
//             added: '2018-07-02',
//             longGenres: [
//               'Special Occasions.Christmas',
//               'Jazz.Smooth Jazz'
//             ],
//             tags: [
//               'winter',
//               'snow',
//               'holiday',
//               'strings',
//               'love',
//               'family',
//               'cozy',
//               'smooth',
//               'positive',
//               'memories',
//               'ism',
//               'lead vocals',
//               'male vocals',
//               'lyrics'
//             ],
//             composerName: 'Martin Landh',
//             bpm: 70,
//             artistName: 'Slowfly',
//             artistSlug: '962',
//             length: 202,
//             longMoods: [
//               'Moods.Relaxing',
//               'Moods.Romantic'
//             ],
//             featuredArtistSlug: 'revel-day',
//             energyLevel: 'Low',
//             title: 'Silver White',
//             composerSlug: 'martin-landh',
//             artist: 'Slowfly',
//             featuredArtistName: 'Revel Day',
//             hasVocals: true,
//             featuredArtist: 'Revel Day',
//             moods: [
//               'Relaxing',
//               'Romantic'
//             ]
//           },
//           {
//             seriesId: 0,
//             s3TrackId: '208693',
//             genres: 'Christmas',
//             added: '2018-08-13',
//             longGenres: 'Special Occasions.Christmas',
//             tags: [
//               'ism',
//               'lead vocals',
//               'male vocals',
//               'soul',
//               'acoustic guitars',
//               'ballad',
//               'warm',
//               'comforting',
//               'sentimental'
//             ],
//             composerName: 'Johan Glössner',
//             bpm: 69,
//             artistName: 'Wildson',
//             artistSlug: 'wildson',
//             length: 180,
//             longMoods: [
//               'Moods.Hopeful',
//               'Movement.Elegant'
//             ],
//             featuredArtistSlug: 'david-manuel',
//             energyLevel: 'Medium',
//             title: 'I Will Be Missing You',
//             composerSlug: 'johan-glossner',
//             artist: 'Wildson',
//             featuredArtistName: 'David Manuel',
//             hasVocals: true,
//             featuredArtist: 'David Manuel',
//             moods: [
//               'Hopeful',
//               'Elegant'
//             ]
//           },
//           {
//             seriesId: 0,
//             s3TrackId: '207970',
//             genres: [
//               '1970s Rock',
//               'Christmas'
//             ],
//             added: '2018-07-30',
//             longGenres: [
//               'Rock.1970s Rock',
//               'Special Occasions.Christmas'
//             ],
//             tags: [
//               'win',
//               'running',
//               'feelgood',
//               'exciting',
//               'ism',
//               'lyrics',
//               'lead vocals',
//               'driving',
//               'male vocals',
//               'december',
//               'joy',
//               'anticipation',
//               'church bells'
//             ],
//             composerName: 'Martin Carlberg',
//             bpm: 182,
//             artistName: 'Martin Carlberg',
//             artistSlug: 'martin-carlberg',
//             length: 223,
//             longMoods: [
//               'Moods.Happy',
//               'Moods.Euphoric'
//             ],
//             featuredArtistSlug: 'red-revision',
//             energyLevel: 'High',
//             title: 'It\'s Christmas Day',
//             composerSlug: 'martin-carlberg',
//             artist: 'Martin Carlberg',
//             featuredArtistName: 'Red Revision',
//             hasVocals: true,
//             featuredArtist: 'Red Revision',
//             moods: [
//               'Happy',
//               'Euphoric'
//             ]
//           },
//           {
//             seriesId: 0,
//             s3TrackId: '208206',
//             genres: [
//               'Soul',
//               'Christmas'
//             ],
//             added: '2018-08-02',
//             longGenres: [
//               'Rnb & Soul.Soul',
//               'Special Occasions.Christmas'
//             ],
//             tags: [
//               'male vocals',
//               'romance',
//               'jingle bells',
//               'glockenspiel',
//               'drums',
//               'falling in love',
//               'december',
//               'ism',
//               'lead vocals',
//               'ballad',
//               'warm',
//               'lyrics'
//             ],
//             composerName: 'Martin Carlberg',
//             bpm: 85,
//             artistName: 'Martin Carlberg',
//             artistSlug: 'martin-carlberg',
//             length: 196,
//             longMoods: [
//               'Moods.Dreamy',
//               'Moods.Euphoric'
//             ],
//             featuredArtistSlug: 'revel-day',
//             energyLevel: 'Medium',
//             title: 'Just Like These Snowflakes',
//             composerSlug: 'martin-carlberg',
//             artist: 'Martin Carlberg',
//             featuredArtistName: 'Revel Day',
//             hasVocals: true,
//             featuredArtist: 'Revel Day',
//             moods: [
//               'Dreamy',
//               'Euphoric'
//             ]
//           },
//           {
//             seriesId: 0,
//             s3TrackId: '207979',
//             genres: 'Motown & Old School RnB',
//             added: '2018-07-30',
//             longGenres: 'Rnb & Soul.Motown & Old School RnB',
//             tags: [
//               'guitar',
//               'holiday',
//               'piano',
//               'sleigh bells',
//               'male vocals',
//               'lead vocals',
//               'lyrics',
//               'ism',
//               'ballad',
//               'warm'
//             ],
//             composerName: 'Flickering',
//             bpm: 90,
//             artistName: 'Flickering',
//             artistSlug: 'flickering-flickering',
//             length: 201,
//             longMoods: 'Moods.Peaceful',
//             featuredArtistSlug: 'g-curtis',
//             energyLevel: 'Medium',
//             title: 'Keep Me Up All Night',
//             composerSlug: 'flickering-flickering',
//             artist: 'Flickering',
//             featuredArtistName: 'G Curtis',
//             hasVocals: true,
//             featuredArtist: 'G Curtis',
//             moods: 'Peaceful'
//           },
//           {
//             seriesId: 0,
//             s3TrackId: '208876',
//             genres: 'Christmas',
//             added: '2018-08-13',
//             longGenres: 'Special Occasions.Christmas',
//             tags: [
//               'ism',
//               'lead vocals',
//               'female vocals',
//               'lyrics',
//               'cute',
//               'ukulele',
//               'love',
//               'relationship',
//               'holiday'
//             ],
//             composerName: 'Anders Lystell',
//             bpm: 78,
//             artistName: 'Loving Caliber',
//             artistSlug: 'loving-caliber',
//             length: 180,
//             longMoods: [
//               'Moods.Happy',
//               'Moods.Romantic'
//             ],
//             featuredArtistSlug: 'megan-tibbits',
//             energyLevel: 'Medium',
//             title: 'Tomorrow It Is Christmas',
//             composerSlug: 'anders-lystell',
//             artist: 'Loving Caliber',
//             featuredArtistName: 'Megan Tibbits',
//             hasVocals: true,
//             featuredArtist: 'Megan Tibbits',
//             moods: [
//               'Happy',
//               'Romantic'
//             ]
//           },
//           {
//             seriesId: 0,
//             s3TrackId: '206826',
//             genres: 'Christmas',
//             added: '2018-06-26',
//             longGenres: 'Special Occasions.Christmas',
//             tags: [
//               'ism',
//               'lead vocals',
//               'female vocals',
//               'lyrics',
//               'ballad',
//               'feelgood',
//               'warm',
//               'holidays',
//               'laid back',
//               'sweet',
//               'cozy'
//             ],
//             composerName: 'Anders Lystell',
//             bpm: 78,
//             artistName: 'Loving Caliber',
//             artistSlug: 'loving-caliber',
//             length: 191,
//             longMoods: [
//               'Moods.Relaxing',
//               'Moods.Romantic'
//             ],
//             featuredArtistSlug: 'emmi-emmi',
//             energyLevel: 'Medium',
//             title: 'Kissing Under The Mistletoe',
//             composerSlug: 'anders-lystell',
//             artist: 'Loving Caliber',
//             featuredArtistName: 'Emmi',
//             hasVocals: true,
//             featuredArtist: 'Emmi',
//             moods: [
//               'Relaxing',
//               'Romantic'
//             ]
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         categories: [{
//             id: 29,
//             name: 'Seasonal'
//           },
//           {
//             id: 57,
//             name: 'Special Occasions'
//           },
//           {
//             id: 59,
//             name: 'Vocals'
//           }
//         ],
//         lastModified: '2018-08-28T11:41:07',
//         similar: [{
//             coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/Nothing_But_Hits100x100.jpg',
//             description: 'Fresh chart style vocals!\r\n\r\nI dare you not to tap your foot along to these tunes.\r\n\r\n',
//             coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/Nothing_But_Hits250x250.jpg',
//             title: 'Nothing But Hits   ',
//             lastModified: '2017-05-11T13:52:37',
//             titleNumber: '  ',
//             created: '2017-05-11T13:34:12',
//             tracks: [{
//                 s3TrackId: '159464',
//                 title: 'Turn The Page'
//               },
//               {
//                 s3TrackId: '159311',
//                 title: 'Eyes On Me'
//               },
//               {
//                 s3TrackId: '159343',
//                 title: 'I Am Falling For You'
//               },
//               {
//                 s3TrackId: '158573',
//                 title: 'Lies'
//               },
//               {
//                 s3TrackId: '157717',
//                 title: 'I Can\'t Get Enough'
//               },
//               {
//                 s3TrackId: '159455',
//                 title: 'Tough Love'
//               },
//               {
//                 s3TrackId: '159505',
//                 title: 'Young'
//               },
//               {
//                 s3TrackId: '159030',
//                 title: 'Heart Pound'
//               },
//               {
//                 s3TrackId: '159113',
//                 title: 'More Than 9 To 5'
//               },
//               {
//                 s3TrackId: '158600',
//                 title: 'We Can'
//               }
//             ],
//             spotifyUrl: '',
//             audioMixUrl: '',
//             published: true,
//             creator: 'SEpHmG-kTO',
//             id: 1038,
//             categories: [{
//                 id: 31,
//                 name: 'Pop'
//               },
//               {
//                 id: 59,
//                 name: 'Vocals'
//               },
//               {
//                 id: 65,
//                 name: 'YouTube / Online Creators'
//               }
//             ],
//             descriptionExcerpt: 'Fresh chart style vocals!'
//           },
//           {
//             coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/winter_wonderland_01.png',
//             description: 'Feelgood and festive. \r\n\r\nSprinkle some magic into your life with these bright and enchanting tunes. The perfect soundtrack to a happy winter\'s day!',
//             coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/winter_wonderland_01.png',
//             title: 'Winter Wonderland 01',
//             lastModified: '2014-12-04T11:36:47',
//             titleNumber: '01',
//             created: '2014-11-19T16:12:44',
//             tracks: [{
//                 s3TrackId: '79213',
//                 title: 'Dreams Of Happyville 7'
//               },
//               {
//                 s3TrackId: '72659',
//                 title: 'Nordic Characters 4'
//               },
//               {
//                 s3TrackId: '95699',
//                 title: 'The Tip Toe Quest 4'
//               },
//               {
//                 s3TrackId: '75163',
//                 title: 'Christmas Morning 02'
//               },
//               {
//                 s3TrackId: '75101',
//                 title: '1970s Cinema Era 5'
//               },
//               {
//                 s3TrackId: '72939',
//                 title: 'Nordic Characters 1'
//               },
//               {
//                 s3TrackId: '78750',
//                 title: 'Liqueur 2'
//               },
//               {
//                 s3TrackId: '80404',
//                 title: 'Winter Moods 4'
//               },
//               {
//                 s3TrackId: '89516',
//                 title: 'Italian Winter Rain 1'
//               },
//               {
//                 s3TrackId: '30950',
//                 title: 'Winter Waltz 1'
//               },
//               {
//                 s3TrackId: '80414',
//                 title: 'Winter Moods'
//               }
//             ],
//             spotifyUrl: '',
//             audioMixUrl: '',
//             published: true,
//             creator: 'Cissi',
//             id: 560,
//             categories: [{
//               id: 29,
//               name: 'Seasonal'
//             }],
//             descriptionExcerpt: 'Feelgood and festive. '
//           },
//           {
//             coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/coming_on_christmas%20%281%29.png',
//             description: 'So cozy and so snowy!\r\n\r\nReturning Visitor is our latest Christmas group addition!\r\n\r\nArtist: Returning Visitor\r\nReleased: 2016/11/23',
//             coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/coming_on_christmas.png',
//             title: 'Returning Visitors - Coming on Christmas  ',
//             lastModified: '2016-11-29T10:15:06',
//             titleNumber: ' ',
//             created: '2016-11-23T13:20:00',
//             tracks: [{
//                 s3TrackId: '155489',
//                 title: 'Snowed In'
//               },
//               {
//                 s3TrackId: '155460',
//                 title: 'Santa\'s Sleigh Ride'
//               },
//               {
//                 s3TrackId: '155316',
//                 title: 'It\'s Coming On Christmas'
//               },
//               {
//                 s3TrackId: '155455',
//                 title: 'Santa\'s Coming Home To Me'
//               }
//             ],
//             spotifyUrl: '',
//             audioMixUrl: '',
//             published: true,
//             creator: 'SEXzCnGBU',
//             id: 815,
//             categories: [{
//               id: 29,
//               name: 'Seasonal'
//             }],
//             descriptionExcerpt: 'So cozy and so snowy!'
//           },
//           {
//             coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/queen_of_hearts_100.jpg ',
//             description: 'Debut album by Velvet Moon!\r\n\r\nVelvet Moon is an acoustic-pop duo from Sweden - comprising singer-songwriter, Sandra Bjurman, and producer, Stefan Örn. In July 2018, they released their debut album, Queen of Hearts. This captivating album features nine folk-influenced, acoustic-pop tracks that all epitomize the duo’s sharp sense for melody and production.\r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/QOH_Velvet_Moon">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>',
//             coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/queen_of_hearts_250.jpg ',
//             title: 'Velvet Moon - Queen Of Hearts     ',
//             lastModified: '2018-08-13T10:28:31',
//             titleNumber: '    ',
//             created: '2018-08-10T13:50:48',
//             tracks: [{
//                 s3TrackId: '206148',
//                 title: 'Pretender'
//               },
//               {
//                 s3TrackId: '206157',
//                 title: 'Queen Of Hearts'
//               },
//               {
//                 s3TrackId: '207016',
//                 title: 'Good Man'
//               },
//               {
//                 s3TrackId: '206021',
//                 title: 'Confetti'
//               },
//               {
//                 s3TrackId: '205761',
//                 title: 'Always Sister'
//               },
//               {
//                 s3TrackId: '206030',
//                 title: 'Dear Moon'
//               },
//               {
//                 s3TrackId: '206275',
//                 title: 'Blush'
//               },
//               {
//                 s3TrackId: '205929',
//                 title: 'Viva La Vida'
//               },
//               {
//                 s3TrackId: '205518',
//                 title: 'Love Story'
//               }
//             ],
//             spotifyUrl: '',
//             audioMixUrl: '',
//             published: true,
//             creator: 'SEpZb-7M0k',
//             id: 1350,
//             categories: [{
//                 id: 31,
//                 name: 'Pop'
//               },
//               {
//                 id: 59,
//                 name: 'Vocals'
//               },
//               {
//                 id: 63,
//                 name: 'Acoustic'
//               },
//               {
//                 id: 76,
//                 name: 'Artist Releases'
//               }
//             ],
//             descriptionExcerpt: 'Debut album by Velvet Moon!'
//           }
//         ],
//         creator: 'SEpZb-7M0k',
//         id: 1364,
//         _from_search: true,
//         descriptionExcerpt: 'It\'s Holiday Season!'
//       },
//       '1365': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/Pianounderscore_100.jpg ',
//         description: 'Lift your storytelling to a new level!\r\n\r\nThese hand-picked instrumental and piano-based tracks will lift your storytelling to a new level. In this album, you will discover beautiful and emotive solo piano, classical piano and ambient tracks.',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/Pianounderscore_250.jpg ',
//         title: 'Piano Underscores      ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-08-29T11:44:07',
//           name: 'Piano Underscores',
//           unpublishedAlbumCount: 0,
//           id: 979
//         },
//         titleNumber: '     ',
//         created: '2018-08-29T13:15:49',
//         published: true,
//         trackCount: 12,
//         tracks: [{
//             s3TrackId: '207655',
//             title: 'Prelude'
//           },
//           {
//             s3TrackId: '209537',
//             title: 'So Others May Live'
//           },
//           {
//             s3TrackId: '208005',
//             title: 'Misericorde'
//           },
//           {
//             s3TrackId: '204353',
//             title: 'Blood Orange'
//           },
//           {
//             s3TrackId: '207935',
//             title: 'Eternum Nocturne'
//           },
//           {
//             s3TrackId: '207958',
//             title: 'Il Reste Du Temps'
//           },
//           {
//             s3TrackId: '209329',
//             title: 'Generations To Come'
//           },
//           {
//             s3TrackId: '206578',
//             title: 'Ava'
//           },
//           {
//             s3TrackId: '209272',
//             title: 'Deep In Thought'
//           },
//           {
//             s3TrackId: '207980',
//             title: 'La Fille Sans Larmes'
//           },
//           {
//             s3TrackId: '206865',
//             title: 'Parcel Of Silence'
//           },
//           {
//             s3TrackId: '206994',
//             title: 'For Jack'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-29T13:25:36',
//         creator: 'SEpZb-7M0k',
//         id: 1365,
//         categories: [{
//             id: 23,
//             name: 'Sparse'
//           },
//           {
//             id: 24,
//             name: 'Classical'
//           },
//           {
//             id: 63,
//             name: 'Acoustic'
//           }
//         ],
//         descriptionExcerpt: 'Lift your storytelling to a new level!'
//       },
//       '1367': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/lvly_madwoman_100.jpg',
//         description: 'Introducing The New EP Mad Woman\r\n\r\nOur wonder woman Lvly is back with a collection of Electro Pop tracks this time with a hint of indie, featuring the standout hit Mad Woman.\r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/MR5Pe">Love these tracks? Click here to find them on Spotify</a>',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/lvly_madwoman_250.jpg',
//         title: 'Lvly - Mad Woman         ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-08-31T13:00:44',
//           name: 'Lvly - Mad Woman',
//           unpublishedAlbumCount: 0,
//           id: 980
//         },
//         titleNumber: '        ',
//         created: '2018-08-31T13:08:14',
//         published: true,
//         trackCount: 5,
//         tracks: [{
//             s3TrackId: '205214',
//             title: 'Mad Woman'
//           },
//           {
//             s3TrackId: '206093',
//             title: 'Looking For A Lover'
//           },
//           {
//             s3TrackId: '206117',
//             title: 'My Bare Bones'
//           },
//           {
//             s3TrackId: '205568',
//             title: 'On The Clock'
//           },
//           {
//             s3TrackId: '206941',
//             title: 'Wild'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-08-31T13:15:53',
//         creator: 'SETsxRhLO',
//         id: 1367,
//         categories: [{
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 31,
//             name: 'Pop'
//           },
//           {
//             id: 76,
//             name: 'Artist Releases'
//           }
//         ],
//         descriptionExcerpt: 'Introducing The New EP Mad Woman'
//       },
//       '1368': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/ava_kasperschills_100.jpg',
//         description: 'Introducing Kasper Schill!\r\n\r\nBliss out to Kasper Schill\'s latest EP \'Ava\' a delicate and beautiful trio of nostalgic piano pieces. \r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/ks_ava">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>\r\n\r\n',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/ava_kasperschills_250.jpg',
//         title: 'Kasper Schill - Ava    ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-09-03T10:51:05',
//           name: 'Kasper Schill - Ava',
//           unpublishedAlbumCount: 0,
//           id: 981
//         },
//         titleNumber: '   ',
//         created: '2018-09-03T10:51:34',
//         published: true,
//         trackCount: 3,
//         tracks: [{
//             s3TrackId: '206578',
//             title: 'Ava'
//           },
//           {
//             s3TrackId: '206647',
//             title: 'Quiet Steps'
//           },
//           {
//             s3TrackId: '206705',
//             title: 'Towards Silence'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-09-03T13:33:33',
//         creator: 'SETsxRhLO',
//         id: 1368,
//         categories: [{
//           id: 76,
//           name: 'Artist Releases'
//         }],
//         descriptionExcerpt: 'Introducing Kasper Schill!'
//       },
//       '1369': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/Hdbeendope100x100.jpg',
//         description: 'Introducing HDBeenDope!\r\n\r\nPresenting, straight from Brooklyn, the debut rap release from HDBeenDope, \'For The Record\', a hard-hitting vocal Trap track that means business.\r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/HDBeenDope_FTR">Love these tracks? Click here to find them on Spotify</a>\r\n',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/Hdbeendope250x250.jpg',
//         title: 'HDBeenDope - For The Record          ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-09-04T10:04:14',
//           name: 'HDBeenDope - For The Record',
//           unpublishedAlbumCount: 0,
//           id: 982
//         },
//         titleNumber: '         ',
//         created: '2018-09-04T10:07:01',
//         published: true,
//         trackCount: 3,
//         tracks: [{
//             s3TrackId: '208955',
//             title: 'For The Record'
//           },
//           {
//             s3TrackId: '208950',
//             title: 'For The Record (Clean Version)'
//           },
//           {
//             s3TrackId: '208959',
//             title: 'For The Record (Instrumental Version)'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-09-04T14:07:42',
//         creator: 'SETsxRhLO',
//         id: 1369,
//         categories: [{
//             id: 49,
//             name: 'Hip hop'
//           },
//           {
//             id: 76,
//             name: 'Artist Releases'
//           }
//         ],
//         descriptionExcerpt: 'Introducing HDBeenDope!'
//       }
//     },
//     overview: {
//       albums: []
//     },
//     albumsPage: {
//       albums: [
//         1369,
//         1368,
//         1367,
//         1365,
//         1364,
//         1363,
//         1362,
//         1361,
//         1360,
//         1359,
//         1358,
//         1355,
//         1353,
//         1352,
//         1351,
//         1350,
//         1349,
//         1348,
//         1347,
//         1346,
//         1345,
//         1344,
//         1321,
//         1342
//       ],
//       categories: [
//         63,
//         62,
//         72,
//         40,
//         76,
//         71,
//         32,
//         24,
//         74,
//         39,
//         35,
//         73,
//         70,
//         69,
//         45,
//         60,
//         19,
//         42,
//         43,
//         44,
//         25,
//         46,
//         47,
//         27,
//         26,
//         48,
//         49,
//         33,
//         28,
//         50,
//         13,
//         51,
//         41,
//         52,
//         53,
//         21,
//         75,
//         31,
//         54,
//         17,
//         36,
//         10,
//         55,
//         29,
//         56,
//         38,
//         23,
//         57,
//         22,
//         64,
//         61,
//         34,
//         58,
//         59,
//         30,
//         65,
//         67,
//         66,
//         68
//       ],
//       totalPages: 29,
//       page: 1
//     },
//     categories: {
//       '10': {
//         id: 10,
//         name: 'Rock'
//       },
//       '13': {
//         id: 13,
//         name: 'Moods'
//       },
//       '17': {
//         id: 17,
//         name: 'Quirky & Comedy'
//       },
//       '19': {
//         id: 19,
//         name: 'Documentary'
//       },
//       '21': {
//         id: 21,
//         name: 'Pace'
//       },
//       '22': {
//         id: 22,
//         name: 'Sports'
//       },
//       '23': {
//         id: 23,
//         name: 'Sparse'
//       },
//       '24': {
//         id: 24,
//         name: 'Classical'
//       },
//       '25': {
//         id: 25,
//         name: 'Electronica & Dance'
//       },
//       '26': {
//         id: 26,
//         name: 'Funk'
//       },
//       '27': {
//         id: 27,
//         name: 'Eras'
//       },
//       '28': {
//         id: 28,
//         name: 'Latin'
//       },
//       '29': {
//         id: 29,
//         name: 'Seasonal'
//       },
//       '30': {
//         id: 30,
//         name: 'World'
//       },
//       '31': {
//         id: 31,
//         name: 'Pop'
//       },
//       '32': {
//         id: 32,
//         name: 'Children'
//       },
//       '33': {
//         id: 33,
//         name: 'Jazz'
//       },
//       '34': {
//         id: 34,
//         name: 'Technology & Sci-fi'
//       },
//       '35': {
//         id: 35,
//         name: 'Country'
//       },
//       '36': {
//         id: 36,
//         name: 'Retro & Nostalgia'
//       },
//       '38': {
//         id: 38,
//         name: 'Sound Effects'
//       },
//       '39': {
//         id: 39,
//         name: 'Corporate'
//       },
//       '40': {
//         id: 40,
//         name: 'Ambient & Atmospheric'
//       },
//       '41': {
//         id: 41,
//         name: 'Mystery & Suspense'
//       },
//       '42': {
//         id: 42,
//         name: 'Drama'
//       },
//       '43': {
//         id: 43,
//         name: 'Drones'
//       },
//       '44': {
//         id: 44,
//         name: 'Easy listening'
//       },
//       '45': {
//         id: 45,
//         name: 'Dance (traditional)'
//       },
//       '46': {
//         id: 46,
//         name: 'Entertainment'
//       },
//       '47': {
//         id: 47,
//         name: 'Epic'
//       },
//       '48': {
//         id: 48,
//         name: 'Grooves'
//       },
//       '49': {
//         id: 49,
//         name: 'Hip hop'
//       },
//       '50': {
//         id: 50,
//         name: 'Leisure & Lifestyle'
//       },
//       '51': {
//         id: 51,
//         name: 'Motivational & Inspiring'
//       },
//       '52': {
//         id: 52,
//         name: 'Nature'
//       },
//       '53': {
//         id: 53,
//         name: 'Orchestral'
//       },
//       '54': {
//         id: 54,
//         name: 'Promos and Trailers'
//       },
//       '55': {
//         id: 55,
//         name: 'Romance'
//       },
//       '56': {
//         id: 56,
//         name: 'Soul & RnB'
//       },
//       '57': {
//         id: 57,
//         name: 'Special Occasions'
//       },
//       '58': {
//         id: 58,
//         name: 'Urban'
//       },
//       '59': {
//         id: 59,
//         name: 'Vocals'
//       },
//       '60': {
//         id: 60,
//         name: 'Day & Night'
//       },
//       '61': {
//         id: 61,
//         name: 'Supernatural & Horror'
//       },
//       '62': {
//         id: 62,
//         name: 'Action & Adventure'
//       },
//       '63': {
//         id: 63,
//         name: 'Acoustic'
//       },
//       '64': {
//         id: 64,
//         name: 'Stings'
//       },
//       '65': {
//         id: 65,
//         name: 'YouTube / Online Creators'
//       },
//       '66': {
//         id: 66,
//         name: 'YouTube: Gaming'
//       },
//       '67': {
//         id: 67,
//         name: 'YouTube: Entertainment'
//       },
//       '68': {
//         id: 68,
//         name: 'YouTube: Vlog'
//       },
//       '69': {
//         id: 69,
//         name: 'Curated: Get Started'
//       },
//       '70': {
//         id: 70,
//         name: 'Curated: Get Going'
//       },
//       '71': {
//         id: 71,
//         name: 'Broadcasting'
//       },
//       '72': {
//         id: 72,
//         name: 'Advertising'
//       },
//       '73': {
//         id: 73,
//         name: 'Creator\'s Corner'
//       },
//       '74': {
//         id: 74,
//         name: 'Composers In Focus'
//       },
//       '75': {
//         id: 75,
//         name: 'Podcast'
//       },
//       '76': {
//         id: 76,
//         name: 'Artist Releases'
//       }
//     }
//   },
//   cart: 0,
//   config: {
//     mediaUrl: 'https://d34qmkt8w5wll9.cloudfront.net/player/4.1.2/'
//   },
//   content: {
//     featuredSlider: null
//   },
//   cueSheet: {
//     generateCueSheet: {},
//     createCueSheet: {},
//     getCueSheets: {}
//   },
//   home: {
//     news: []
//   },
//   featureToggle: {
//     showSubscriptionSignUp: false,
//     newAddToCartModal: false,
//     newTrackShopPricingSection: false,
//     newAccountManagement: false,
//     newLicenseModel: false
//   },
//   modal: {
//     content: null,
//     eventData: {}
//   },
//   myMusic: {
//     visibility: false,
//     isFetching: false,
//     isCreating: false,
//     createdPlaylist: null,
//     isAddingTracksToPlaylist: false,
//     isCopyingEntriesToPlaylist: false,
//     isCreatingPlaylist: false,
//     updateMyMusic: false,
//     updatedPlaylistId: null,
//     isRemovingEntryFromPlaylist: false,
//     isRemovingEntriesFromPlaylist: false,
//     data: null,
//     error: null,
//     newProjectNameInput: '',
//     selectedTracks: {
//       playlistId: null,
//       ids: []
//     },
//     redirectUrlParams: {
//       projectId: null,
//       playlistId: null
//     },
//     playlistsByStreamingIds: {},
//     commercialReleasesStreamingIds: []
//   },
//   playQueue: {
//     legacyTracklistSelector: null,
//     queue: [
//       '206765',
//       '208524',
//       '208711',
//       '208472',
//       '208174',
//       '207102',
//       '208693',
//       '207970',
//       '208206',
//       '207979',
//       '208876',
//       '206826'
//     ],
//     cursor: 1,
//     context: '/albums/album/1364'
//   },
//   player: {
//     trackURL: 'https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Christmas In My Heart/ES_Christmas In My Heart.mp3',
//     trackWaveformJSON: {
//       sample_rate: 44100,
//       samples_per_pixel: 4795,
//       bits: 8,
//       length: 1601,
//       data: [
//         0,
//         0,
//         -1,
//         1,
//         -124,
//         117,
//         -106,
//         109,
//         -78,
//         54,
//         -45,
//         50,
//         -54,
//         66,
//         -98,
//         75,
//         -101,
//         78,
//         -115,
//         116,
//         -90,
//         69,
//         -90,
//         51,
//         -65,
//         47,
//         -70,
//         47,
//         -112,
//         108,
//         -87,
//         49,
//         -88,
//         50,
//         -92,
//         74,
//         -115,
//         118,
//         -107,
//         109,
//         -90,
//         79,
//         -78,
//         53,
//         -70,
//         36,
//         -72,
//         53,
//         -65,
//         34,
//         -125,
//         115,
//         -109,
//         93,
//         -81,
//         56,
//         -65,
//         54,
//         -82,
//         62,
//         -92,
//         78,
//         -116,
//         116,
//         -44,
//         42,
//         -98,
//         76,
//         -91,
//         68,
//         -120,
//         118,
//         -113,
//         85,
//         -61,
//         54,
//         -58,
//         40,
//         -65,
//         51,
//         -72,
//         73,
//         -69,
//         97,
//         -120,
//         117,
//         -108,
//         107,
//         -81,
//         65,
//         -45,
//         46,
//         -25,
//         32,
//         -110,
//         109,
//         -54,
//         40,
//         -14,
//         15,
//         -63,
//         65,
//         -119,
//         117,
//         -114,
//         106,
//         -46,
//         46,
//         -52,
//         62,
//         -45,
//         34,
//         -40,
//         42,
//         -23,
//         18,
//         -117,
//         114,
//         -119,
//         107,
//         -99,
//         94,
//         -85,
//         70,
//         -69,
//         87,
//         -94,
//         95,
//         -101,
//         110,
//         -58,
//         77,
//         -99,
//         99,
//         -113,
//         105,
//         -115,
//         119,
//         -112,
//         78,
//         -59,
//         66,
//         -87,
//         68,
//         -82,
//         51,
//         -78,
//         55,
//         -106,
//         110,
//         -122,
//         119,
//         -110,
//         74,
//         -77,
//         54,
//         -30,
//         31,
//         -38,
//         30,
//         -117,
//         111,
//         -38,
//         40,
//         -10,
//         11,
//         -58,
//         62,
//         -116,
//         114,
//         -104,
//         117,
//         -65,
//         73,
//         -58,
//         63,
//         -93,
//         48,
//         -99,
//         65,
//         -93,
//         41,
//         -120,
//         118,
//         -105,
//         91,
//         -79,
//         69,
//         -72,
//         60,
//         -66,
//         67,
//         -109,
//         104,
//         -93,
//         97,
//         -96,
//         80,
//         -81,
//         54,
//         -117,
//         94,
//         -126,
//         120,
//         -86,
//         94,
//         -52,
//         48,
//         -37,
//         42,
//         -44,
//         43,
//         -35,
//         31,
//         -106,
//         108,
//         -118,
//         121,
//         -107,
//         83,
//         -49,
//         46,
//         -35,
//         47,
//         -111,
//         103,
//         -116,
//         116,
//         -97,
//         75,
//         -57,
//         42,
//         -54,
//         70,
//         -123,
//         119,
//         -102,
//         96,
//         -35,
//         55,
//         -54,
//         62,
//         -18,
//         18,
//         -29,
//         28,
//         -10,
//         10,
//         -113,
//         117,
//         -105,
//         100,
//         -58,
//         55,
//         -47,
//         39,
//         -42,
//         33,
//         -107,
//         113,
//         -47,
//         63,
//         -17,
//         21,
//         -19,
//         17,
//         -97,
//         81,
//         -117,
//         120,
//         -109,
//         103,
//         -88,
//         87,
//         -78,
//         82,
//         -66,
//         60,
//         -80,
//         71,
//         -117,
//         114,
//         -109,
//         116,
//         -108,
//         112,
//         -69,
//         66,
//         -83,
//         51,
//         -79,
//         61,
//         -98,
//         110,
//         -94,
//         66,
//         -86,
//         58,
//         -83,
//         60,
//         -121,
//         118,
//         -109,
//         105,
//         -83,
//         64,
//         -73,
//         80,
//         -59,
//         47,
//         -67,
//         57,
//         -41,
//         28,
//         -120,
//         120,
//         -90,
//         99,
//         -57,
//         73,
//         -75,
//         93,
//         -62,
//         57,
//         -98,
//         109,
//         -107,
//         85,
//         -85,
//         62,
//         -45,
//         43,
//         -117,
//         97,
//         -121,
//         119,
//         -106,
//         78,
//         -81,
//         47,
//         -85,
//         55,
//         -98,
//         76,
//         -60,
//         48,
//         -114,
//         115,
//         -123,
//         120,
//         -114,
//         89,
//         -101,
//         85,
//         -93,
//         76,
//         -91,
//         65,
//         -111,
//         97,
//         -83,
//         81,
//         -92,
//         89,
//         -103,
//         65,
//         -119,
//         119,
//         -112,
//         88,
//         -37,
//         33,
//         -51,
//         63,
//         -37,
//         42,
//         -50,
//         48,
//         -36,
//         38,
//         -119,
//         120,
//         -112,
//         93,
//         -107,
//         98,
//         -83,
//         90,
//         -57,
//         84,
//         -119,
//         112,
//         -79,
//         75,
//         -54,
//         45,
//         -92,
//         76,
//         -109,
//         99,
//         -121,
//         116,
//         -112,
//         87,
//         -83,
//         63,
//         -92,
//         77,
//         -101,
//         78,
//         -97,
//         81,
//         -112,
//         121,
//         -116,
//         107,
//         -83,
//         74,
//         -26,
//         22,
//         -14,
//         10,
//         -9,
//         6,
//         -109,
//         105,
//         -37,
//         28,
//         -56,
//         66,
//         -21,
//         17,
//         -115,
//         118,
//         -93,
//         84,
//         -54,
//         63,
//         -32,
//         25,
//         -90,
//         49,
//         -81,
//         68,
//         -60,
//         55,
//         -108,
//         114,
//         -89,
//         87,
//         -61,
//         55,
//         -75,
//         53,
//         -84,
//         55,
//         -108,
//         120,
//         -73,
//         69,
//         -78,
//         62,
//         -90,
//         52,
//         -118,
//         126,
//         -119,
//         125,
//         -102,
//         82,
//         -51,
//         56,
//         -44,
//         47,
//         -48,
//         54,
//         -34,
//         46,
//         -118,
//         115,
//         -115,
//         106,
//         -74,
//         68,
//         -29,
//         22,
//         -84,
//         57,
//         -110,
//         100,
//         -113,
//         115,
//         -81,
//         107,
//         -62,
//         72,
//         -30,
//         25,
//         -115,
//         121,
//         -84,
//         103,
//         -63,
//         57,
//         -21,
//         35,
//         -24,
//         26,
//         -30,
//         28,
//         -15,
//         16,
//         -115,
//         115,
//         -111,
//         97,
//         -57,
//         62,
//         -45,
//         37,
//         -76,
//         74,
//         -105,
//         108,
//         -86,
//         82,
//         -113,
//         99,
//         -104,
//         93,
//         -88,
//         88,
//         -110,
//         103,
//         -83,
//         70,
//         -62,
//         53,
//         -65,
//         46,
//         -69,
//         79,
//         -76,
//         64,
//         -96,
//         84,
//         -98,
//         84,
//         -86,
//         63,
//         -73,
//         38,
//         -33,
//         33,
//         -78,
//         65,
//         -79,
//         61,
//         -53,
//         60,
//         -50,
//         44,
//         -83,
//         98,
//         -102,
//         86,
//         -79,
//         76,
//         -59,
//         62,
//         -99,
//         97,
//         -115,
//         82,
//         -99,
//         65,
//         -90,
//         75,
//         -74,
//         60,
//         -82,
//         89,
//         -99,
//         79,
//         -86,
//         83,
//         -97,
//         86,
//         -92,
//         66,
//         -94,
//         86,
//         -72,
//         59,
//         -82,
//         73,
//         -126,
//         121,
//         -115,
//         115,
//         -77,
//         80,
//         -42,
//         40,
//         -84,
//         89,
//         -115,
//         102,
//         -103,
//         73,
//         -119,
//         119,
//         -103,
//         103,
//         -113,
//         107,
//         -104,
//         86,
//         -108,
//         63,
//         -93,
//         110,
//         -122,
//         112,
//         -43,
//         44,
//         -51,
//         52,
//         -58,
//         58,
//         -111,
//         120,
//         -92,
//         88,
//         -61,
//         45,
//         -61,
//         50,
//         -96,
//         92,
//         -91,
//         77,
//         -112,
//         104,
//         -122,
//         121,
//         -77,
//         87,
//         -110,
//         117,
//         -101,
//         89,
//         -113,
//         95,
//         -126,
//         118,
//         -89,
//         94,
//         -95,
//         116,
//         -106,
//         102,
//         -109,
//         115,
//         -109,
//         117,
//         -79,
//         79,
//         -28,
//         38,
//         -114,
//         103,
//         -104,
//         104,
//         -96,
//         77,
//         -116,
//         113,
//         -99,
//         116,
//         -99,
//         109,
//         -112,
//         101,
//         -96,
//         75,
//         -126,
//         127,
//         -111,
//         127,
//         -85,
//         86,
//         -111,
//         95,
//         -100,
//         87,
//         -123,
//         119,
//         -120,
//         95,
//         -95,
//         79,
//         -94,
//         64,
//         -98,
//         91,
//         -99,
//         85,
//         -123,
//         103,
//         -115,
//         118,
//         -107,
//         97,
//         -120,
//         112,
//         -100,
//         97,
//         -107,
//         111,
//         -114,
//         115,
//         -114,
//         106,
//         -103,
//         97,
//         -114,
//         100,
//         -119,
//         114,
//         -95,
//         106,
//         -67,
//         64,
//         -47,
//         45,
//         -101,
//         92,
//         -119,
//         98,
//         -100,
//         79,
//         -117,
//         114,
//         -116,
//         102,
//         -115,
//         98,
//         -107,
//         100,
//         -85,
//         67,
//         -127,
//         108,
//         -97,
//         122,
//         -108,
//         81,
//         -105,
//         78,
//         -104,
//         115,
//         -114,
//         116,
//         -72,
//         85,
//         -81,
//         72,
//         -81,
//         75,
//         -87,
//         81,
//         -97,
//         60,
//         -115,
//         114,
//         -118,
//         117,
//         -90,
//         107,
//         -99,
//         103,
//         -83,
//         94,
//         -82,
//         93,
//         -118,
//         119,
//         -106,
//         112,
//         -97,
//         75,
//         -113,
//         95,
//         -114,
//         116,
//         -114,
//         101,
//         -100,
//         91,
//         -109,
//         101,
//         -118,
//         95,
//         -110,
//         116,
//         -103,
//         101,
//         -116,
//         119,
//         -116,
//         113,
//         -116,
//         108,
//         -116,
//         90,
//         -105,
//         72,
//         -104,
//         112,
//         -100,
//         115,
//         -65,
//         53,
//         -112,
//         109,
//         -114,
//         115,
//         -117,
//         114,
//         -109,
//         112,
//         -100,
//         92,
//         -28,
//         32,
//         -104,
//         100,
//         -104,
//         106,
//         -117,
//         120,
//         -118,
//         119,
//         -104,
//         94,
//         -113,
//         82,
//         -103,
//         90,
//         -109,
//         110,
//         -115,
//         119,
//         -108,
//         101,
//         -114,
//         101,
//         -121,
//         96,
//         -118,
//         116,
//         -100,
//         95,
//         -64,
//         65,
//         -32,
//         34,
//         -107,
//         109,
//         -115,
//         102,
//         -96,
//         105,
//         -124,
//         120,
//         -105,
//         99,
//         -112,
//         88,
//         -102,
//         80,
//         -113,
//         71,
//         -109,
//         113,
//         -106,
//         109,
//         -64,
//         55,
//         -102,
//         82,
//         -106,
//         112,
//         -121,
//         122,
//         -85,
//         88,
//         -62,
//         47,
//         -87,
//         85,
//         -113,
//         110,
//         -112,
//         75,
//         -117,
//         115,
//         -109,
//         116,
//         -93,
//         103,
//         -94,
//         97,
//         -110,
//         101,
//         -107,
//         98,
//         -111,
//         112,
//         -103,
//         111,
//         -108,
//         118,
//         -112,
//         99,
//         -126,
//         115,
//         -91,
//         100,
//         -48,
//         59,
//         -39,
//         37,
//         -115,
//         104,
//         -104,
//         95,
//         -64,
//         57,
//         -127,
//         120,
//         -96,
//         85,
//         -102,
//         87,
//         -95,
//         87,
//         -96,
//         76,
//         -114,
//         118,
//         -120,
//         98,
//         -69,
//         71,
//         -115,
//         103,
//         -120,
//         117,
//         -121,
//         117,
//         -117,
//         103,
//         -104,
//         60,
//         -101,
//         62,
//         -97,
//         88,
//         -90,
//         90,
//         -119,
//         116,
//         -119,
//         116,
//         -113,
//         109,
//         -112,
//         97,
//         -111,
//         107,
//         -119,
//         100,
//         -113,
//         113,
//         -100,
//         109,
//         -93,
//         94,
//         -109,
//         96,
//         -118,
//         116,
//         -92,
//         92,
//         -53,
//         48,
//         -34,
//         28,
//         -98,
//         98,
//         -116,
//         107,
//         -88,
//         81,
//         -127,
//         126,
//         -107,
//         97,
//         -115,
//         112,
//         -114,
//         105,
//         -78,
//         65,
//         -121,
//         115,
//         -110,
//         112,
//         -100,
//         97,
//         -95,
//         85,
//         -117,
//         116,
//         -116,
//         114,
//         -80,
//         78,
//         -86,
//         72,
//         -89,
//         88,
//         -81,
//         107,
//         -87,
//         59,
//         -127,
//         110,
//         -106,
//         114,
//         -106,
//         119,
//         -80,
//         89,
//         -70,
//         91,
//         -69,
//         93,
//         -115,
//         117,
//         -110,
//         114,
//         -65,
//         87,
//         -115,
//         103,
//         -112,
//         115,
//         -118,
//         106,
//         -111,
//         82,
//         -100,
//         85,
//         -111,
//         102,
//         -108,
//         94,
//         -114,
//         87,
//         -117,
//         116,
//         -107,
//         101,
//         -104,
//         92,
//         -111,
//         84,
//         -119,
//         91,
//         -117,
//         127,
//         -109,
//         111,
//         -73,
//         80,
//         -70,
//         58,
//         -113,
//         107,
//         -112,
//         111,
//         -90,
//         65,
//         -27,
//         30,
//         -77,
//         63,
//         -88,
//         103,
//         -48,
//         43,
//         -115,
//         112,
//         -109,
//         97,
//         -97,
//         82,
//         -62,
//         58,
//         -53,
//         55,
//         -54,
//         46,
//         -116,
//         118,
//         -43,
//         42,
//         -66,
//         38,
//         -58,
//         51,
//         -114,
//         120,
//         -118,
//         116,
//         -72,
//         66,
//         -60,
//         52,
//         -53,
//         41,
//         -55,
//         64,
//         -55,
//         58,
//         -115,
//         112,
//         -94,
//         107,
//         -77,
//         59,
//         -74,
//         38,
//         -63,
//         37,
//         -113,
//         114,
//         -58,
//         48,
//         -77,
//         54,
//         -73,
//         89,
//         -124,
//         121,
//         -115,
//         122,
//         -97,
//         77,
//         -94,
//         60,
//         -102,
//         98,
//         -42,
//         41,
//         -117,
//         100,
//         -117,
//         117,
//         -110,
//         102,
//         -81,
//         75,
//         -62,
//         57,
//         -63,
//         50,
//         -75,
//         96,
//         -113,
//         100,
//         -58,
//         47,
//         -40,
//         47,
//         -66,
//         67,
//         -122,
//         122,
//         -109,
//         99,
//         -75,
//         87,
//         -86,
//         67,
//         -93,
//         63,
//         -66,
//         59,
//         -113,
//         113,
//         -117,
//         115,
//         -110,
//         103,
//         -79,
//         70,
//         -75,
//         72,
//         -75,
//         80,
//         -104,
//         106,
//         -85,
//         71,
//         -62,
//         73,
//         -63,
//         63,
//         -118,
//         112,
//         -114,
//         110,
//         -51,
//         50,
//         -41,
//         66,
//         -33,
//         26,
//         -31,
//         34,
//         -33,
//         27,
//         -118,
//         113,
//         -108,
//         109,
//         -86,
//         77,
//         -96,
//         84,
//         -80,
//         61,
//         -116,
//         109,
//         -108,
//         105,
//         -49,
//         47,
//         -111,
//         64,
//         -116,
//         100,
//         -114,
//         117,
//         -93,
//         86,
//         -62,
//         64,
//         -60,
//         52,
//         -74,
//         67,
//         -74,
//         79,
//         -125,
//         108,
//         -125,
//         116,
//         -113,
//         98,
//         -69,
//         70,
//         -73,
//         47,
//         -63,
//         51,
//         -114,
//         112,
//         -61,
//         44,
//         -64,
//         67,
//         -96,
//         95,
//         -113,
//         119,
//         -94,
//         111,
//         -73,
//         90,
//         -46,
//         68,
//         -71,
//         54,
//         -84,
//         60,
//         -73,
//         53,
//         -117,
//         115,
//         -110,
//         104,
//         -65,
//         86,
//         -61,
//         62,
//         -74,
//         92,
//         -106,
//         119,
//         -108,
//         119,
//         -74,
//         76,
//         -70,
//         69,
//         -65,
//         79,
//         -127,
//         120,
//         -87,
//         107,
//         -55,
//         59,
//         -42,
//         47,
//         -41,
//         43,
//         -25,
//         24,
//         -120,
//         109,
//         -116,
//         118,
//         -76,
//         87,
//         -20,
//         19,
//         -27,
//         27,
//         -117,
//         106,
//         -121,
//         121,
//         -95,
//         83,
//         -57,
//         52,
//         -107,
//         75,
//         -116,
//         116,
//         -110,
//         103,
//         -90,
//         68,
//         -64,
//         65,
//         -65,
//         43,
//         -71,
//         38,
//         -68,
//         38,
//         -116,
//         113,
//         -103,
//         99,
//         -98,
//         64,
//         -85,
//         55,
//         -92,
//         61,
//         -118,
//         93,
//         -100,
//         100,
//         -79,
//         36,
//         -56,
//         39,
//         -93,
//         82,
//         -119,
//         117,
//         -96,
//         113,
//         -64,
//         70,
//         -85,
//         85,
//         -99,
//         87,
//         -92,
//         72,
//         -109,
//         114,
//         -117,
//         114,
//         -112,
//         97,
//         -96,
//         75,
//         -77,
//         57,
//         -113,
//         76,
//         -94,
//         107,
//         -112,
//         79,
//         -104,
//         55,
//         -79,
//         86,
//         -117,
//         122,
//         -117,
//         112,
//         -83,
//         85,
//         -60,
//         69,
//         -84,
//         59,
//         -96,
//         74,
//         -87,
//         80,
//         -114,
//         114,
//         -105,
//         102,
//         -111,
//         77,
//         -98,
//         61,
//         -119,
//         73,
//         -120,
//         114,
//         -123,
//         90,
//         -100,
//         84,
//         -100,
//         70,
//         -106,
//         83,
//         -122,
//         118,
//         -88,
//         70,
//         -37,
//         57,
//         -39,
//         28,
//         -116,
//         109,
//         -103,
//         77,
//         -113,
//         119,
//         -118,
//         116,
//         -90,
//         75,
//         -96,
//         88,
//         -95,
//         79,
//         -87,
//         66,
//         -110,
//         100,
//         -83,
//         72,
//         -63,
//         73,
//         -82,
//         82,
//         -121,
//         119,
//         -121,
//         102,
//         -96,
//         55,
//         -89,
//         80,
//         -82,
//         57,
//         -103,
//         85,
//         -98,
//         71,
//         -122,
//         118,
//         -91,
//         88,
//         -95,
//         73,
//         -77,
//         64,
//         -101,
//         75,
//         -108,
//         104,
//         -116,
//         87,
//         -88,
//         74,
//         -46,
//         51,
//         -109,
//         103,
//         -118,
//         118,
//         -111,
//         86,
//         -73,
//         85,
//         -70,
//         54,
//         -102,
//         71,
//         -62,
//         54,
//         -111,
//         124,
//         -116,
//         112,
//         -75,
//         56,
//         -46,
//         45,
//         -35,
//         39,
//         -56,
//         61,
//         -106,
//         114,
//         -82,
//         57,
//         -65,
//         80,
//         -63,
//         57,
//         -112,
//         115,
//         -94,
//         86,
//         -58,
//         61,
//         -58,
//         45,
//         -35,
//         34,
//         -32,
//         30,
//         -22,
//         17,
//         -119,
//         112,
//         -103,
//         99,
//         -118,
//         99,
//         -71,
//         92,
//         -101,
//         88,
//         -97,
//         109,
//         -85,
//         91,
//         -84,
//         95,
//         -113,
//         115,
//         -110,
//         111,
//         -116,
//         119,
//         -97,
//         107,
//         -80,
//         69,
//         -88,
//         67,
//         -103,
//         74,
//         -104,
//         66,
//         -115,
//         120,
//         -116,
//         115,
//         -94,
//         98,
//         -79,
//         62,
//         -89,
//         88,
//         -117,
//         109,
//         -125,
//         109,
//         -109,
//         102,
//         -106,
//         99,
//         -89,
//         69,
//         -113,
//         117,
//         -103,
//         111,
//         -78,
//         61,
//         -79,
//         55,
//         -80,
//         56,
//         -60,
//         53,
//         -11,
//         15,
//         -112,
//         117,
//         -91,
//         81,
//         -60,
//         52,
//         -42,
//         37,
//         -81,
//         85,
//         -103,
//         104,
//         -76,
//         77,
//         -108,
//         92,
//         -77,
//         80,
//         -78,
//         89,
//         -117,
//         114,
//         -57,
//         58,
//         -61,
//         70,
//         -72,
//         62,
//         -71,
//         66,
//         -58,
//         54,
//         -91,
//         72,
//         -103,
//         70,
//         -75,
//         48,
//         -58,
//         37,
//         -19,
//         23,
//         -67,
//         42,
//         -72,
//         65,
//         -54,
//         51,
//         -33,
//         35,
//         -92,
//         85,
//         -98,
//         95,
//         -65,
//         58,
//         -45,
//         41,
//         -106,
//         79,
//         -98,
//         81,
//         -94,
//         86,
//         -89,
//         81,
//         -87,
//         60,
//         -78,
//         78,
//         -75,
//         82,
//         -90,
//         78,
//         -97,
//         73,
//         -101,
//         99,
//         -113,
//         109,
//         -92,
//         92,
//         -83,
//         80,
//         -118,
//         120,
//         -121,
//         122,
//         -93,
//         81,
//         -47,
//         53,
//         -84,
//         83,
//         -112,
//         99,
//         -107,
//         68,
//         -119,
//         122,
//         -100,
//         106,
//         -115,
//         122,
//         -117,
//         100,
//         -96,
//         76,
//         -85,
//         98,
//         -118,
//         118,
//         -67,
//         51,
//         -45,
//         39,
//         -64,
//         62,
//         -111,
//         116,
//         -94,
//         97,
//         -75,
//         51,
//         -67,
//         66,
//         -91,
//         82,
//         -66,
//         69,
//         -96,
//         84,
//         -120,
//         119,
//         -93,
//         87,
//         -104,
//         112,
//         -93,
//         85,
//         -104,
//         89,
//         -114,
//         120,
//         -112,
//         94,
//         -87,
//         107,
//         -93,
//         94,
//         -118,
//         118,
//         -102,
//         123,
//         -79,
//         88,
//         -34,
//         39,
//         -93,
//         89,
//         -114,
//         113,
//         -96,
//         84,
//         -113,
//         119,
//         -106,
//         108,
//         -108,
//         103,
//         -111,
//         98,
//         -95,
//         87,
//         -112,
//         105,
//         -108,
//         123,
//         -88,
//         75,
//         -109,
//         103,
//         -106,
//         92,
//         -124,
//         116,
//         -114,
//         109,
//         -88,
//         65,
//         -89,
//         64,
//         -112,
//         92,
//         -110,
//         87,
//         -104,
//         109,
//         -117,
//         114,
//         -111,
//         99,
//         -110,
//         108,
//         -107,
//         112,
//         -117,
//         102,
//         -113,
//         123,
//         -114,
//         103,
//         -108,
//         89,
//         -101,
//         89,
//         -108,
//         120,
//         -106,
//         102,
//         -65,
//         70,
//         -42,
//         40,
//         -115,
//         97,
//         -116,
//         108,
//         -111,
//         82,
//         -118,
//         124,
//         -110,
//         105,
//         -103,
//         97,
//         -114,
//         108,
//         -76,
//         68,
//         -115,
//         103,
//         -108,
//         110,
//         -112,
//         79,
//         -100,
//         84,
//         -72,
//         75,
//         -115,
//         115,
//         -80,
//         82,
//         -75,
//         86,
//         -81,
//         80,
//         -88,
//         93,
//         -93,
//         55,
//         -111,
//         115,
//         -121,
//         119,
//         -99,
//         103,
//         -98,
//         90,
//         -83,
//         99,
//         -91,
//         102,
//         -123,
//         119,
//         -114,
//         117,
//         -83,
//         99,
//         -109,
//         100,
//         -116,
//         115,
//         -111,
//         111,
//         -105,
//         102,
//         -101,
//         90,
//         -104,
//         104,
//         -111,
//         99,
//         -109,
//         91,
//         -117,
//         117,
//         -112,
//         104,
//         -109,
//         120,
//         -117,
//         95,
//         -102,
//         90,
//         -107,
//         107,
//         -108,
//         119,
//         -60,
//         59,
//         -112,
//         106,
//         -109,
//         108,
//         -116,
//         116,
//         -106,
//         116,
//         -116,
//         97,
//         -33,
//         30,
//         -102,
//         104,
//         -112,
//         95,
//         -122,
//         116,
//         -121,
//         125,
//         -112,
//         121,
//         -115,
//         87,
//         -108,
//         97,
//         -106,
//         105,
//         -111,
//         114,
//         -104,
//         102,
//         -113,
//         116,
//         -116,
//         118,
//         -115,
//         126,
//         -110,
//         112,
//         -81,
//         65,
//         -36,
//         39,
//         -107,
//         122,
//         -117,
//         93,
//         -111,
//         108,
//         -122,
//         117,
//         -106,
//         99,
//         -120,
//         89,
//         -115,
//         84,
//         -114,
//         88,
//         -108,
//         113,
//         -123,
//         107,
//         -68,
//         56,
//         -93,
//         74,
//         -103,
//         114,
//         -121,
//         117,
//         -104,
//         85,
//         -67,
//         50,
//         -59,
//         86,
//         -100,
//         95,
//         -114,
//         70,
//         -119,
//         116,
//         -118,
//         117,
//         -92,
//         107,
//         -109,
//         104,
//         -94,
//         97,
//         -106,
//         100,
//         -108,
//         117,
//         -94,
//         106,
//         -115,
//         104,
//         -112,
//         113,
//         -122,
//         117,
//         -90,
//         93,
//         -46,
//         70,
//         -30,
//         34,
//         -111,
//         105,
//         -113,
//         79,
//         -54,
//         69,
//         -112,
//         113,
//         -114,
//         83,
//         -108,
//         101,
//         -94,
//         86,
//         -96,
//         73,
//         -119,
//         111,
//         -103,
//         97,
//         -69,
//         65,
//         -95,
//         94,
//         -114,
//         122,
//         -118,
//         116,
//         -119,
//         98,
//         -106,
//         72,
//         -103,
//         58,
//         -99,
//         87,
//         -73,
//         73,
//         -125,
//         109,
//         -120,
//         119,
//         -108,
//         104,
//         -105,
//         98,
//         -103,
//         95,
//         -103,
//         100,
//         -116,
//         127,
//         -99,
//         103,
//         -104,
//         104,
//         -94,
//         104,
//         -111,
//         114,
//         -99,
//         99,
//         -85,
//         69,
//         -38,
//         41,
//         -96,
//         99,
//         -110,
//         103,
//         -95,
//         92,
//         -123,
//         127,
//         -91,
//         93,
//         -122,
//         99,
//         -118,
//         85,
//         -83,
//         59,
//         -105,
//         108,
//         -110,
//         115,
//         -103,
//         96,
//         -103,
//         83,
//         -104,
//         117,
//         -113,
//         114,
//         -66,
//         81,
//         -68,
//         63,
//         -88,
//         85,
//         -88,
//         88,
//         -76,
//         63,
//         -114,
//         111,
//         -120,
//         122,
//         -115,
//         118,
//         -72,
//         92,
//         -56,
//         94,
//         -71,
//         88,
//         -112,
//         118,
//         -108,
//         111,
//         -70,
//         83,
//         -108,
//         105,
//         -120,
//         115,
//         -107,
//         120,
//         -110,
//         87,
//         -114,
//         90,
//         -119,
//         101,
//         -109,
//         109,
//         -107,
//         92,
//         -123,
//         115,
//         -110,
//         100,
//         -114,
//         99,
//         -117,
//         102,
//         -107,
//         115,
//         -114,
//         116,
//         -116,
//         114,
//         -94,
//         115,
//         -70,
//         63,
//         -117,
//         115,
//         -122,
//         120,
//         -82,
//         103,
//         -21,
//         40,
//         -60,
//         62,
//         -95,
//         74,
//         -48,
//         38,
//         -113,
//         109,
//         -103,
//         113,
//         -101,
//         72,
//         -68,
//         52,
//         -83,
//         79,
//         -109,
//         93,
//         -117,
//         118,
//         -74,
//         49,
//         -29,
//         31,
//         -39,
//         39,
//         -113,
//         110,
//         -82,
//         55,
//         -79,
//         50,
//         -32,
//         23,
//         -78,
//         78,
//         -79,
//         63,
//         -73,
//         56,
//         -105,
//         109,
//         -58,
//         45,
//         -67,
//         56,
//         -68,
//         61,
//         -72,
//         64,
//         -114,
//         122,
//         -73,
//         77,
//         -39,
//         39,
//         -44,
//         36,
//         -79,
//         78,
//         -66,
//         77,
//         -8,
//         11,
//         -9,
//         11,
//         -72,
//         67,
//         -61,
//         82,
//         -43,
//         38,
//         -104,
//         105,
//         -100,
//         74,
//         -18,
//         17,
//         -15,
//         10,
//         -71,
//         51,
//         -78,
//         55,
//         -102,
//         101,
//         -52,
//         35,
//         -81,
//         81,
//         -61,
//         54,
//         -110,
//         118,
//         -77,
//         55,
//         -51,
//         44,
//         -28,
//         26,
//         -82,
//         80,
//         -64,
//         56,
//         -59,
//         52,
//         -105,
//         103,
//         -73,
//         58,
//         -69,
//         50,
//         -87,
//         36,
//         -34,
//         28,
//         -107,
//         117,
//         -109,
//         100,
//         -89,
//         81,
//         -77,
//         84,
//         -78,
//         86,
//         -80,
//         69,
//         -78,
//         49,
//         -63,
//         49,
//         -64,
//         77,
//         -64,
//         57,
//         -11,
//         11,
//         -100,
//         97,
//         -68,
//         88,
//         -25,
//         25,
//         -17,
//         19,
//         -63,
//         62,
//         -79,
//         62,
//         -111,
//         102,
//         -86,
//         75,
//         -78,
//         80,
//         -65,
//         69,
//         -105,
//         105,
//         -92,
//         86,
//         -93,
//         99,
//         -84,
//         68,
//         -86,
//         92,
//         -96,
//         85,
//         -76,
//         66,
//         -94,
//         96,
//         -86,
//         69,
//         -97,
//         73,
//         -109,
//         81,
//         -94,
//         75,
//         -95,
//         98,
//         -68,
//         62,
//         -26,
//         26,
//         -23,
//         21,
//         -112,
//         94,
//         -116,
//         90,
//         -96,
//         71,
//         -82,
//         54,
//         -102,
//         86,
//         -107,
//         71,
//         -40,
//         32,
//         -101,
//         93,
//         -69,
//         72,
//         -55,
//         40,
//         -54,
//         48,
//         -66,
//         76,
//         -98,
//         86,
//         -108,
//         110,
//         -100,
//         69,
//         -82,
//         75,
//         -66,
//         75,
//         -121,
//         122,
//         -97,
//         95,
//         -107,
//         71,
//         -86,
//         58,
//         -77,
//         85,
//         -65,
//         49,
//         -72,
//         62,
//         -109,
//         97,
//         -91,
//         73,
//         -91,
//         68,
//         -107,
//         70,
//         -97,
//         64,
//         -100,
//         109,
//         -90,
//         60,
//         -67,
//         70,
//         -54,
//         50,
//         -114,
//         115,
//         -88,
//         73,
//         -80,
//         72,
//         -96,
//         96,
//         -94,
//         95,
//         -86,
//         74,
//         -63,
//         47,
//         -110,
//         96,
//         -101,
//         78,
//         -79,
//         77,
//         -74,
//         78,
//         -52,
//         59,
//         -92,
//         88,
//         -109,
//         97,
//         -82,
//         66,
//         -81,
//         58,
//         -79,
//         66,
//         -107,
//         110,
//         -79,
//         85,
//         -88,
//         75,
//         -94,
//         59,
//         -97,
//         93,
//         -67,
//         98,
//         -120,
//         99,
//         -117,
//         98,
//         -86,
//         82,
//         -88,
//         76,
//         -112,
//         76,
//         -86,
//         70,
//         -119,
//         100,
//         -56,
//         59,
//         -30,
//         27,
//         -34,
//         26,
//         -111,
//         101,
//         -99,
//         84,
//         -99,
//         72,
//         -75,
//         60,
//         -84,
//         98,
//         -93,
//         75,
//         -70,
//         51,
//         -106,
//         106,
//         -68,
//         58,
//         -81,
//         57,
//         -98,
//         82,
//         -86,
//         59,
//         -90,
//         76,
//         -111,
//         90,
//         -52,
//         46,
//         -55,
//         46,
//         -92,
//         81,
//         -79,
//         57,
//         -96,
//         78,
//         -82,
//         97,
//         -97,
//         91,
//         -92,
//         100,
//         -113,
//         93,
//         -94,
//         77,
//         -85,
//         62,
//         -89,
//         73,
//         -99,
//         93,
//         -97,
//         87,
//         -80,
//         66,
//         -46,
//         45,
//         -96,
//         75,
//         -83,
//         54,
//         -56,
//         45,
//         -69,
//         73,
//         -85,
//         71,
//         -57,
//         62,
//         -98,
//         80,
//         -95,
//         84,
//         -95,
//         82,
//         -74,
//         71,
//         -75,
//         63,
//         -110,
//         91,
//         -88,
//         78,
//         -92,
//         66,
//         -101,
//         104,
//         -106,
//         87,
//         -105,
//         94,
//         -109,
//         104,
//         -103,
//         101,
//         -115,
//         118,
//         -117,
//         120,
//         -112,
//         89,
//         -77,
//         63,
//         -86,
//         82,
//         -121,
//         116,
//         -96,
//         87,
//         -124,
//         117,
//         -119,
//         121,
//         -117,
//         108,
//         -117,
//         91,
//         -107,
//         69,
//         -67,
//         54,
//         -122,
//         114,
//         -96,
//         80,
//         -94,
//         61,
//         -97,
//         82,
//         -114,
//         111,
//         -104,
//         104,
//         -90,
//         57,
//         -68,
//         53,
//         -124,
//         116,
//         -84,
//         103,
//         -68,
//         78,
//         -121,
//         123,
//         -93,
//         96,
//         -103,
//         118,
//         -115,
//         108,
//         -118,
//         106,
//         -112,
//         114,
//         -99,
//         109,
//         -101,
//         122,
//         -116,
//         105,
//         -108,
//         117,
//         -116,
//         114,
//         -78,
//         108,
//         -55,
//         70,
//         -85,
//         83,
//         -113,
//         122,
//         -107,
//         104,
//         -116,
//         114,
//         -112,
//         119,
//         -111,
//         97,
//         -107,
//         106,
//         -110,
//         69,
//         -86,
//         83,
//         -127,
//         124,
//         -94,
//         96,
//         -104,
//         85,
//         -116,
//         97,
//         -124,
//         120,
//         -116,
//         106,
//         -93,
//         70,
//         -105,
//         64,
//         -105,
//         111,
//         -96,
//         90,
//         -105,
//         86,
//         -120,
//         115,
//         -109,
//         109,
//         -117,
//         108,
//         -104,
//         110,
//         -121,
//         117,
//         -111,
//         108,
//         -109,
//         120,
//         -104,
//         100,
//         -116,
//         119,
//         -117,
//         108,
//         -115,
//         124,
//         -97,
//         90,
//         -73,
//         62,
//         -117,
//         108,
//         -114,
//         115,
//         -115,
//         94,
//         -121,
//         120,
//         -117,
//         119,
//         -116,
//         115,
//         -105,
//         113,
//         -110,
//         99,
//         -83,
//         76,
//         -120,
//         107,
//         -116,
//         97,
//         -118,
//         84,
//         -78,
//         73,
//         -111,
//         114,
//         -98,
//         78,
//         -62,
//         73,
//         -71,
//         78,
//         -109,
//         117,
//         -95,
//         75,
//         -92,
//         62,
//         -122,
//         115,
//         -111,
//         111,
//         -93,
//         85,
//         -90,
//         102,
//         -87,
//         105,
//         -101,
//         110,
//         -116,
//         116,
//         -83,
//         81,
//         -118,
//         100,
//         -116,
//         113,
//         -113,
//         117,
//         -107,
//         96,
//         -117,
//         102,
//         -109,
//         107,
//         -122,
//         116,
//         -110,
//         92,
//         -116,
//         115,
//         -112,
//         119,
//         -110,
//         114,
//         -118,
//         106,
//         -107,
//         84,
//         -66,
//         54,
//         -115,
//         113,
//         -66,
//         59,
//         -114,
//         98,
//         -123,
//         97,
//         -119,
//         125,
//         -119,
//         111,
//         -104,
//         103,
//         -58,
//         76,
//         -104,
//         117,
//         -116,
//         109,
//         -119,
//         98,
//         -123,
//         127,
//         -107,
//         109,
//         -122,
//         98,
//         -116,
//         104,
//         -112,
//         109,
//         -121,
//         122,
//         -119,
//         119,
//         -114,
//         115,
//         -112,
//         117,
//         -118,
//         123,
//         -114,
//         112,
//         -100,
//         94,
//         -33,
//         38,
//         -95,
//         109,
//         -107,
//         116,
//         -116,
//         105,
//         -124,
//         118,
//         -108,
//         107,
//         -119,
//         94,
//         -119,
//         74,
//         -115,
//         79,
//         -113,
//         87,
//         -124,
//         127,
//         -70,
//         76,
//         -105,
//         63,
//         -63,
//         55,
//         -118,
//         113,
//         -111,
//         109,
//         -65,
//         56,
//         -61,
//         56,
//         -116,
//         98,
//         -98,
//         77,
//         -104,
//         81,
//         -123,
//         119,
//         -101,
//         108,
//         -108,
//         107,
//         -112,
//         108,
//         -101,
//         106,
//         -109,
//         118,
//         -107,
//         110,
//         -104,
//         110,
//         -118,
//         101,
//         -124,
//         113,
//         -105,
//         114,
//         -101,
//         72,
//         -60,
//         56,
//         -111,
//         123,
//         -104,
//         107,
//         -79,
//         96,
//         -116,
//         119,
//         -105,
//         104,
//         -109,
//         84,
//         -100,
//         73,
//         -90,
//         70,
//         -111,
//         89,
//         -121,
//         113,
//         -75,
//         77,
//         -79,
//         85,
//         -104,
//         101,
//         -119,
//         122,
//         -115,
//         113,
//         -104,
//         77,
//         -102,
//         66,
//         -97,
//         97,
//         -93,
//         92,
//         -102,
//         106,
//         -124,
//         115,
//         -112,
//         111,
//         -104,
//         103,
//         -115,
//         104,
//         -119,
//         111,
//         -108,
//         115,
//         -100,
//         109,
//         -104,
//         98,
//         -120,
//         115,
//         -121,
//         120,
//         -109,
//         118,
//         -81,
//         93,
//         -68,
//         66,
//         -114,
//         113,
//         -110,
//         118,
//         -98,
//         87,
//         -120,
//         126,
//         -100,
//         98,
//         -125,
//         98,
//         -114,
//         96,
//         -124,
//         86,
//         -98,
//         104,
//         -105,
//         118,
//         -105,
//         92,
//         -73,
//         61,
//         -86,
//         78,
//         -113,
//         114,
//         -81,
//         88,
//         -65,
//         75,
//         -87,
//         99,
//         -113,
//         114,
//         -90,
//         65,
//         -110,
//         117,
//         -118,
//         116,
//         -115,
//         123,
//         -75,
//         75,
//         -83,
//         101,
//         -76,
//         95,
//         -111,
//         127,
//         -109,
//         107,
//         -73,
//         81,
//         -99,
//         109,
//         -118,
//         119,
//         -108,
//         95,
//         -114,
//         107,
//         -114,
//         71,
//         -114,
//         112,
//         -127,
//         101,
//         -103,
//         93,
//         -120,
//         120,
//         -113,
//         105,
//         -102,
//         99,
//         -111,
//         89,
//         -113,
//         87,
//         -113,
//         115,
//         -124,
//         107,
//         -98,
//         85,
//         -69,
//         76,
//         -68,
//         104,
//         -114,
//         122,
//         -89,
//         90,
//         -32,
//         42,
//         -20,
//         23,
//         -110,
//         111,
//         -53,
//         41,
//         -115,
//         110,
//         -116,
//         117,
//         -97,
//         83,
//         -69,
//         68,
//         -57,
//         49,
//         -48,
//         41,
//         -119,
//         111,
//         -69,
//         68,
//         -34,
//         35,
//         -26,
//         28,
//         -21,
//         18,
//         -8,
//         7,
//         -2,
//         3,
//         -1,
//         1,
//         -1,
//         1,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0
//       ]
//     },
//     shouldBePlaying: false,
//     isLoadingMetadata: false,
//     metadataErrorMessage: '',
//     trackMetadata: {
//       track: {
//         seriesId: 0,
//         trackId20SecondTrailer: '0',
//         allTrackIds: '206765 206761 206762 206763 206764',
//         genreSort: '2010s Pop',
//         hasMelodyStem: true,
//         hasInstrumentsStem: true,
//         moodSort: 'Happy',
//         trackId40SecondTrailer: '0',
//         has40SecondTrailerVersion: false,
//         trackType: 'full',
//         genres: [
//           '2010s Pop',
//           'Christmas'
//         ],
//         hasVocals: true,
//         longGenres: [
//           'Pop.2010s Pop',
//           'Special Occasions.Christmas'
//         ],
//         title: 'Christmas In My Heart',
//         trackId30SecondTrailer: '0',
//         composerName: 'Loving Caliber',
//         featuredArtistSlug: 'mia-pfirrman',
//         energyLevel: 'High',
//         hasBassStem: true,
//         added: '2018-06-26',
//         drumsStreamingTrackId: '206762',
//         tags: [
//           'uplifting',
//           'positive',
//           'feelgood',
//           'holidays',
//           'steady',
//           'driving',
//           'lyrics',
//           'female vocals',
//           'lead vocals',
//           'ism'
//         ],
//         has60SecondTrailerVersion: false,
//         melodyStreamingTrackId: '206764',
//         series_name: '',
//         fatherGenres: [
//           'Pop',
//           'Special Occasions'
//         ],
//         titleSort: 'Christmas In My Heart',
//         moods: [
//           'Happy',
//           'Euphoric'
//         ],
//         original_title: '',
//         trackId60SecondTrailer: '0',
//         albums: {
//           url: '/albums/album/1364/',
//           cover: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/holidayseason_100.png',
//           album_summary: 'Holiday Season    |https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/holidayseason_100.png|/albums/album/1364/',
//           categories: [
//             'Seasonal',
//             'Special Occasions',
//             'Vocals'
//           ],
//           title: 'Holiday Season    '
//         },
//         composerSlug: 'loving-caliber',
//         featuredArtistName: 'Mia Pfirrman',
//         instrumentsStreamingTrackId: '206763',
//         s3TrackId: '206765',
//         has20SecondTrailerVersion: false,
//         dbPrimaryKey: 96774,
//         hasDrumsStem: true,
//         has30SecondTrailerVersion: false,
//         bpm: 134,
//         fatherMoods: [
//           'Moods',
//           'Moods'
//         ],
//         length: 173,
//         longMoods: [
//           'Moods.Happy',
//           'Moods.Euphoric'
//         ],
//         bpmSort: 134,
//         featuredArtist: 'Mia Pfirrman',
//         bassStreamingTrackId: '206761',
//         fullmixTrackId: '206765',
//         energySort: 'High'
//       },
//       track_url: 'https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Christmas In My Heart/ES_Christmas In My Heart.mp3'
//     },
//     trackEnded: false,
//     audioErrorMessage: '',
//     context: '/albums/album/1364'
//   },
//   playlists: {
//     playlistsBySlug: {},
//     entries: {}
//   },
//   search: {
//     error: null,
//     albumsByTerm: {},
//     tracksByTerm: {},
//     sfxByTerm: {}
//   },
//   tracks: {
//     entities: {},
//     isRowExpanded: false
//   },
//   trackshop: {
//     companyName: {
//       value: '',
//       error: ''
//     },
//     contactPerson: {
//       value: '',
//       error: ''
//     },
//     productionName: {
//       value: '',
//       error: ''
//     },
//     vatNumber: {
//       value: '',
//       error: ''
//     },
//     address: {
//       value: '',
//       error: ''
//     },
//     city: {
//       value: '',
//       error: ''
//     },
//     zip: {
//       value: '',
//       error: ''
//     },
//     cart: {
//       tracks: [],
//       displayPrice: '',
//       invoiceDisplayPrice: '',
//       discount: {
//         discountPercent: 0,
//         discountAmount: '',
//         slug: '',
//         error: ''
//       },
//       isVatRemoved: false
//     }
//   },
//   sfx: {
//     entities: {}
//   },
//   subscriptions: {
//     youtubeChannel: null,
//     subscriptionPlan: null,
//     subscriptionPlans: null
//   },
//   ui: {
//     isPlayerOpen: true,
//     width: 1366
//   },
//   user: {
//     userName: '21675154cf194f42ab798cdde7be70d7',
//     countryName: 'Ukraine',
//     message: {},
//     currency: 'EUR',
//     vatRate: 0,
//     vatValid: false,
//     addressValid: false,
//     isAnonymous: true,
//     countryAlpha2: 'UA',
//     euCountry: false,
//     prices: {
//       nationalOnline: '449',
//       standard: '99',
//       socialMedia: '129',
//       standardSfx: '0.99'
//     }
//   },
//   pricing: {
//     subscription: {
//       starter: '€13',
//       pro: '€27',
//       epic: '€125'
//     },
//     standard: '€99',
//     advertisingPrice: {}
//   }
// }
// let count = 0;
// for(let key in result) {
//   if(result.hasOwnProperty(key)){
//     count +=1;
//   }
// }

// console.log(count);


// for (let key in hotel) { 
//   console.log(`${hotel[key]}`);
// }

// for (let key in hotel) { 
//   console.log(`${key}: ${hotel[key]}`);
// }

//   function objLength(obj) {
//     let count = 0;
//     for (let key in obj) {
//       if(obj.hasOwnProperty(key)) {
//         console.log(`${key}: ${hotel[key]}`);
//         count +=1;
//       }
//     }
//     return count;
//   }
// console.log(objLength(hotel));

// for (let key in hotel) { 
//   if (hotel.hasOwnProperty(key)) {
//     console.log(`${key}: ${hotel[key]}`);
//   }
// }

// let hotel = {
//   name: '7 Days',
//   stars: 4,
//   rooms: 150,
// }
// console.log(hotel);
// for (let key in hotel) {
//   if(hotel.hasOwnProperty(key)) {
//     console.log(`${key}: ${hotel[key]}`);
//   }
// }



// for (const key in hotel) {
//     console.log(hotel[key]);
//   }

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
// };
// // console.log(hotel);
// for (const key in hotel) {
//     let hasKey = hotel.hasOwnProperty(key);
//     if (hasKey) {
//       console.log('Value: ', hotel[key]);
//     }
//   }
// // console.log(hotel);

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
// // //
// const keys = Object.keys(hotel);
// const values = Object.values(hotel);
// const entries = Object.entries(hotel);
// console.log(keys);
// console.log(values);
// console.log(entries);

let defaultSetting = {
  ff: 'TMR',
  fsz: 16,
  color: '#000',
  bgc: '#fff'
}

let userSetting = {
  ff: 'Arial',
  fsz: 14,
 
}

let copy = {
  ...userSetting
}

let copy2 = Object.assign({},userSetting);

// let setting = Object.assign({},defaultSetting,userSetting);

// console.log(defaultSetting);

// let setting = {
//   ...defaultSetting,
//   ...userSetting,
// }

// // assign
// let user = {
//   name: 'Bob',
//   age: 45,
//   isHappy: true,
// }
// let user2 = Object.assign({}, user);
// user.age = 40;
// console.log(user2);
// console.log(user);

// const first = {name: 'Tony'};
// const last = {lastName: 'Stark'};

// Object.assign(first, last);

// let user2 = Object.assign({}, user, {name: 's', age: 68, color: 'yellow'});
// user.age = 50;
// console.log(user);
// console.log(user2);

//
// const first = {name: 'Tony'};
// const last = {lastName: 'Stark'};
// // //
// Object.assign(first, last);
// // const copy = Object.assign({}, first, last);
// console.log(person);
// // //
// console.log(first);
// console.log(last);
// console.log(copy);
// // console.log(person === first);

// const a = Object.assign({foo: 0}, {bar: 1}, {baz: 2});
// console.log(a);
//
// const a = Object.assign({foo: 0}, {foo: 1}, {foo: 2});
// console.log(a);

// const obj = {person: 'Thor Odinson'};
// const clone = Object.assign({}, obj);
// clone.wearpon = 'hammer';
// console.log(clone);
// console.log(obj);

// const defaultSettings = {
//     name: "Mango",
//     age: 2,
//     status: "happy",
//     isActive: false,
//     isAdmin: false,
//   };
//
// const updatedSettings = {
//   age: 3,
//   status: "cheerful",
//   isActive: true,
// };
//
// Object.assign(defaultSettings, updatedSettings);
//
//   console.log(defaultSettings);
// ...
// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};
// // //
// const c = Object.assign({}, a, b);
// // console.log(c); // {x: 0, y: 2, z: 3}

// const c = {
//   ...a, // x: 0, y:2, z: 3, d:2000
//   ...b,
//   d: 2000,
// };


// const c = {
//   ...b, 
//   ...a,
//   w: 5,
// }

// const c = {
//     ...b,
//     ...a,
//     // a, b
//     // x: 0,
//     // y: 2,
//     // z: 3,
//     //b, a
//     // x: 1,
//     // z: 3,
//     //y: 2
// };
// console.log(c);
//
//
// let state = {
//   a: 5,
//   b: 6,
//   c: 7,
// };
//
// let d = {};
// let newState = {
//     ...state,
//     c:8,
// };

// console.log(newState);

// dest

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
// // let name = hotel.name;
// // let stars = hotel.stars;
// // let capacity = hotel.capacity;

// const { name, stars ,capacity, status } = hotel;

// console.log(name);
// console.log(status);

//   // Объявим переменные и присвоим им значения из объекта


// const hotel = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 100,
// };
// //
// const {name = "hotel", stars = 3, status = "empty"} = hotel;
//
// console.log(name);
// console.log(stars);
// console.log(status);

// dest in func

// let dog = {
//     name: 'Mango',
//     age: 5,
//     isHappy: true,
// };

// function showObjVal(obj) {
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.isHappy);
// }

// showObjVal(dog);

// function showObjVal({name, age, isHappy}) {
//     console.log(name);
//     console.log(age);
//     console.log(isHappy);
//     // return `dog name is ${name} age is ${age} happy ${isHappy}`;
// }
// //
// showObjVal(dog);


// // let {name, stars, status} = hotel;
//
// // dest arr
// let strNum = ['one', 'two', 'three'];
// // console.log(strNum[0],strNum[1],strNum[2]);
// let [a, b, c, d] = strNum;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let numb = [5, 10, 20];

// function showArrVal(arr) {
//     console.log(arr[0]);
//     console.log(arr[1]);
//     console.log(arr[2]);
// }

// function showArrVal([a, b, c]) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// //
// //
// showArrVal(numb);


// spread and rest
//...
// // add the elements of an existing array into a new array
// let certsToAdd = ['Algorithms', 'Front End'];
// let certifications = ['Web Design',...certsToAdd,'Data Visualization', 'APIs', 'Information Security'];
// console.log(certifications);

// // pass elements of an array as arguments to a function
// function addThreeNumbers(x, y, z) {
//     console.log(x + y + z)
// }
//
// variant #1
// let salary = [100, 200, 500, 800];
// addThreeNumbers(salary[0],salary[1],salary[2]);
// variant #2
// let salary = [100, 200, 500, 800];
// let [a, b, c] = salary;
// addThreeNumbers(a, b, c)
// variant #3
// let salary = [100, 200, 500, 800];
// console.log(addThreeNumbers(...salary));
// console.log(addThreeNumbers(100, 200, 500, 800));

// // copy arrays
// let arr = [1, 2, 3];
// let arr2 = arr;
// let arr2 = arr.slice;

// let arr = [1, 2, 3];
// let arr2 = [...arr]; // like arr.slice()
// arr2.push(4);
// console.log(arr);
// console.log(arr2);
//
//
// // concatenate arrays
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// // let arr3 = arr1.concat(arr2);
// let arr3 = [...arr2,"BootCamp",...arr1];
// console.log(arr3);
// // console.log(arr1);
// //
//
// REST: condense multiple elements into an array
// function multiply(multiplier,...theArgs) {
//     console.log('multiplier', multiplier);
//     console.log('theArgs', theArgs);
// }
//
//  multiply(2, 1, 2, 3, 8, 9);


/*
  Напишите код, который, для объекта user, последовательно:
 - добавляет поле mood со значением 'happy'
 - заменяет значение hobby на 'javascript'
 - удаляет свойство premium
 - выводит содержимое объекта user
    циклом в формате ключ: значение
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
// };

/*
  Создайте функцию isObjectEmpty(obj), которая получает
  единственный аргумент obj - объект, и проверяет
  пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/

// Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
// ); // true
//
// console.log(
//     isObjectEmpty({a: 1})
// ); // false


// let isObjectEmpty = obj => Object.keys(obj).length === 0;

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

/*
  Напишите функцию countOwnProps(obj),
  считающую кол-во сообственных свойств в объекте.
  Функция возвращает количество свойств.
*/

// // Вызовы функции для проверки
// console.log(
//     countOwnProps({})
// ); // 0
//
// console.log(
//     countOwnProps({a: 1, b: 3, c: 'hello'})
// ); // 3

/*
  Напишите функцию countTotalSalary(salaries),
  считающую общую сумму запрплаты работников.

  Каждое поле объекта передаваемого в функцию,
  имеет вид "имя":"зарплата"

  Функция возвращает общую сумму зарплаты.
*/

// Вызовы функции для проверки
// 330

// function countTotalSalary(salary) {
//     let sum = Object.values(salary);
//     if (sum.length !== 0) {
//         let result = sum.reduce(function (current, next) {
//             return current + next
//         });
//         return result;
//     }
//     else {
//         return 0;
//     }
// }

// let countTotalSalary = salary => Object.values(salary).length !== 0 ? Object.values(salary).reduce((current, next) => current + next) :
//     0;
// console.log(
//     countTotalSalary({})
// ); // 0
//
// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80
//     })
// );

// const users = [
//     {name: 'Poly', age: 7, mood: 'happy'},
//     {name: 'Mango', age: 4, mood: 'blissful'},
//     {name: 'Ajax', age: 3, mood: 'tired'}
// ];

// function getAllPropValues(prop) {
//     let result = [];
//     if (prop in users[0]) {
//         for (let i = 0; i < users.length; i++) {
//             result.push(users[i][prop]);
//         }
//         return result;
//     } return result;
// };

// function getAllPropValues(prop) {
//     let result = [];
//     if (prop in users[0]) {
//         return users.map(function (obj) {
//             return obj[prop];
//         })
//     } return result;
// };

// function getAllPropValues(prop) {
//     let result = [];
//     if (prop in users[0]) {
//         return users.map(obj => obj[prop])
//     } return result;
// };

// function getAllPropValues(prop) {
//     return prop in users[0] ? users.map(obj => obj[prop]) : []
// };

// let getAllPropValues = prop => prop in users[0] ? users.map(obj => obj[prop]) : [];

// Вызовы функции для проверки
// console.log(
//     getAllPropValues('name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//     getAllPropValues('mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//     getAllPropValues('active')
// ); // []

/*
    1. Используя метод map, пройдите по массиву guests,
    и составьте новый массив, заменив значение
    поля isActive на противоположное.

    2. Напишите функцию setGuestState(guests, period), где
    guests - массив гостей, period - кол-во дней после
    которого считается что гость не активен.

    Если значение поля inactiveDays болше чем period,
    поставить для isActive значение false (если там еще не false)

    Если же значение inactiveDays меньше чем period,
    поставить для isActive значение true (если там еще не true)
*/

// const guests = [
//     {name: 'Mango', inactiveDays: 15, isActive: true},
//     {name: 'Poly', inactiveDays: 8, isActive: false},
//     {name: 'Ajax', inactiveDays: 32, isActive: false},
//     {name: 'Chelsey', inactiveDays: 85, isActive: true}
// ];
//
// let newArr = guests.map(function (item) {
//     return item.isActive === true ? item.isActive = false : item.isActive = true;
// })
//
// let setGuestState = (guests, period) => {
//     guests.map((element) =>
//         element.inactiveDays > period && element.inactiveDays !== false ?
//             element.isActive = false
//             :
//             element.isActive = true
//     )
//     return guests;
// }

// function setGuestState(p, 10)
// {
//
// }

// // Вызовы функции для проверки
// console.log(setGuestState(guests, 10)); // Объекты Mango, Ajax, Chelsey получит isActive false, а Poly наоборот true
// console.log(guests);
// console.log(setGuestState(guests, 20)); // Объекты Ajax, Chelsey получит isActive false, а Mango и Poly наоборот true
//
// console.log(setGuestState(guests, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
//

/*
  Напиште скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
// };
// let max = 0;
// let name = '';
// for (let key in tasksCompleted) {
//     if(tasksCompleted[key] > max) {
//         name = key;
//         max = tasksCompleted[key];
//     }
// }
// console.log(name)
//
// let values = Object.values(tasksCompleted);
// let users = Object.keys(tasksCompleted);
// // console.log(values);
// console.log(users);
// // console.log(Math.max(...values));
// // Math.max([29, 35, 1, 99]) // Math.max(values)
// // let maxTask = Math.max(29, 35, 1, 99); // Math.max(...values)
// let maxTask = Math.max(...values);
// let winnerIndex = values.indexOf(maxTask);
// let winner = users[winnerIndex];
// console.log(winner);

//