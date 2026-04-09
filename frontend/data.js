const DATA = {
  zones: { Central:2196, Other:1048, South:328, North:285, East:229, West:185 },
  zone_colors: { Central:'#f7c948', South:'#3dd68c', North:'#6eb5ff', East:'#ff6b6b', West:'#b48eff', Other:'#6b7592' },

  route_types: {
    'Special':          { count:1570, color:'#6eb5ff' },
    'Ordinary':         { count:1244, color:'#f7c948' },
    'Ordinary Variant': { count:1106, color:'#3dd68c' },
    'Express':          { count:244,  color:'#b48eff' },
    'Volvo':            { count:49,   color:'#ff9f43' },
    'Vajra':            { count:40,   color:'#ff6b6b' },
    'Airport':          { count:18,   color:'#a8e063' }
  },

  top_hubs: [
    { name:'Kempegowda Bus Station',     routes:1028 },
    { name:'Krishnarajendra Market',      routes:1004 },
    { name:'Shivajinagar Bus Station',    routes:418  },
    { name:'Banashankari Bus Station',    routes:89   },
    { name:'Kadugodi',                    routes:86   },
    { name:'BANASHANKARI TTMC',           routes:76   },
    { name:'Kengeri TTMC',                routes:62   },
    { name:'Yelahanka',                   routes:61   },
    { name:'ITPL',                        routes:54   },
    { name:'Electronic City Wipro Gate',  routes:53   },
    { name:'Central Silk Board',          routes:52   },
    { name:'Hosakote Bus Stand',          routes:49   }
  ],

  clusters: [
    { id:0, size:2054, label:'Peripheral Special Routes',  color:'#6eb5ff',
      top_zone:'Other',   top_type:'Special',          avg_name_len:36.4,
      desc:'Routes with hyphenated IDs connecting outer suburbs. Lower hub frequency, geographically spread.',
      samples:['Raghavendra Colony TR Mill - Yeshwanthpura Railway Station','Kengeri TTMC - Chikkabanavara','BM English School - Halasur'] },
    { id:1, size:1261, label:'Central Ordinary Routes',    color:'#f7c948',
      top_zone:'Central', top_type:'Ordinary',         avg_name_len:39.7,
      desc:'Standard numbered routes anchored at Kempegowda or KR Market. Backbone of the network.',
      samples:['Krishnarajendra Market - Kamanahalli','Kempegowda Bus Station - Sarjapura Bus Stand','Kempegowda Bus Station - Dodda Gubbi'] },
    { id:2, size:741,  label:'Central Variant Routes',     color:'#3dd68c',
      top_zone:'Central', top_type:'Ordinary Variant', avg_name_len:41.3,
      desc:'A/B/C/D suffix variants of main routes with slight detours into residential pockets.',
      samples:['JP Nagar 6th Phase - Kempegowda Bus Station','Jayanagar 5th Block - Kempegowda Bus Station','MICO Layout Checkpost - Kempegowda Bus Station'] },
    { id:3, size:215,  label:'Shivajinagar Corridor',      color:'#ff6b6b',
      top_zone:'Central', top_type:'Ordinary',         avg_name_len:42.7,
      desc:'Routes primarily originating from Shivajinagar Bus Station — a secondary hub cluster.',
      samples:['Shivajinagar Bus Station - Dodda Gubbi','Shivajinagar Bus Station - Yarappana Bande','Shivajinagar Bus Station - Jyothi Nagara'] }
  ],

  anomalies: [
    { route_id:'296K',  name:'Shivajinagar Bus Station - Yelahanka Satellite Town 5th Phase', zone:'North',   type:'Ordinary',  origin_freq:418 },
    { route_id:'324E',  name:'Krishnarajendra Market - Vijayanagar',                          zone:'West',    type:'Express',   origin_freq:1004 },
    { route_id:'210V',  name:'Banashankari Bus Station - Banashankari Bus Station',            zone:'South',   type:'Volvo',     origin_freq:89 },
    { route_id:'213V',  name:'Krishnarajendra Market - Harohalli',                            zone:'Central', type:'Volvo',     origin_freq:1004 },
    { route_id:'291E',  name:'Krishnarajendra Market - Ambedkar Medical College Shampura',    zone:'Central', type:'Express',   origin_freq:1004 },
    { route_id:'215F',  name:'Krishnarajendra Market - Kothnuru Kanakapura Road',             zone:'South',   type:'Ordinary',  origin_freq:1004 },
    { route_id:'217B',  name:'Krishnarajendra Market - Kengeri TTMC',                         zone:'West',    type:'Ordinary Variant', origin_freq:1004 },
    { route_id:'5',     name:'Jayanagar 5th Block - Kempegowda Bus Station',                  zone:'South',   type:'Ordinary Variant', origin_freq:1 }
  ],

  coverage: {
    High:        { count:312,  desc:'Served by 100+ routes' },
    Moderate:    { count:489,  desc:'Served by 20–99 routes' },
    Low:         { count:876,  desc:'Served by 5–19 routes'  },
    Underserved: { count:798,  desc:'Served by only 1 route' }
  },

  underserved_sample: [
    'BM English School','Jayanagara 5th Block','Marenahalli Bande',
    'MICO Layout Checkpost','Kempalingana Pura','Uganawadi',
    'Kempapura Agrahara','Depot 23','Mestripalya','Banasawadi Horamvu'
  ]
};