var config = {
    style: 'mapbox://styles/rorynealon/ckurccwuw080j14mmwqdkp32a',
    accessToken: 'pk.eyJ1Ijoicm9yeW5lYWxvbiIsImEiOiJQSkZ2NU9nIn0.8i2jsHIQQBU4lDdv3emAbQ',
    showMarkers: false,
    theme: 'ym',
    use3dTerrain: true,
    title: 'GSAT 2021: YouthMappers Update',
    subtitle: 'Checking in on the YouthMappers Project',
    byline: '',
    footer: '© YouthMappers 2021',
    chapters: [
        {
            id: 'what-is-ym',
            alignment: 'left',
            title: 'What is YouthMappers?',
            //image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: 'YouthMappers is a consortium of student-led mapping chapters at universities around the world. YouthMappers organizes, collaborates, and implements mapping activities that respond to development and humanitarian assistance needs around the globe – creating and using spatial data and information that is made publicly available through open platforms like OpenStreetMap.',
            location: {
                center: [-88, 33],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'ym-chapters-hot',
                    opacity: 0.65
                },
                {
                    layer: 'founding-universities',
                    opacity: 0
                },
                {
                    layer: 'country-counts',
                    opacity: 0
                },
                {
                    layer:'ym-tz-omdtz',
                    opacity: 0
                },
                {
                    layer:'lloa-district',
                    opacity: 0
                },
                {
                    layer: 'brazil-historic-buildings',
                    opacity: 0
                },
                {
                    layer: 'uganda-wpdx',
                    opacity: 0
                },
                {
                    layer: 'uganda-wpdx copy',
                    opacity: 0          
                },
                {
                    layer: 'uganda-wpdx copy 1',
                    opacity: 0          
                }
            ],
            onChapterExit: [
                {
                    layer: 'ym-chapters-hot',
                    opacity: 0.15
                }
           ]
        },
        {
            id: 'founding_Schools',
            alignment: 'left',
            title: 'Founded',
            image: '',
            description: 'YouthMappers is managed via a cooperative agreement between the USAID GeoCenter and a consortium of U.S. universities, which serve as the implementing partners.  The program was launched 5 years ago.',
            location: {
                center: [-98, 40],
                zoom: 4.05,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'founding-universities',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: 'founding-universities',
                    opacity: 0.0
                },
                {
                    layer: 'ym-chapters-hot',
                    opacity: 0.0
                }
            ]
        },
        {
            id: 'chapters_by_year',
            alignment: 'center',
            title: 'Chapter Growth by Year',
            image: './imgs/chapters_by_year.png',
            description: 'Thus far in 2021 the network has added 50 new chapters for a total of 284 chapters and is on track to add more by the end of the year.',
            location: {
                center: [-88, 33],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'ym-chapters-hot',
                    opacity: 0.0
                }
            ]
        },
        {
            id: 'chapters_by_country',
            alignment: 'left',
            title: 'Chapters by country',
            //image: './imgs/chapters_by_regions.png',
            description: '2021 saw the addition of six chapters in new countries for the network (Angola, Madagascar, Mauritania, Paraguay, Swaziland, Togo).',
            location: {
                center: [-88, 33],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'country-counts',
                    opacity: 0.75,
                }
            ],
            onChapterExit: [
                {
                    layer: 'country-counts',
                    opacity: 0.0
                }
            ]
        },
        {
            id: 'chapters_by_region',
            alignment: 'center',
            title: 'Chapters by Region',
            image: './imgs/chapters_by_regions.png',
            description: '',
            location: {
                center: [-88, 33],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2021-osm-activities',
            alignment: 'center',
            title: 'Unique edits to OpenStreetMap',
           // image: './imgs/chapters_by_regions.png',
            description: 'YouthMappers students have surpassed 12 million edits to OpenStreetMap (OSM) this year.  That means new buildings, roads, and points of interest have been added that were otherwise unmapped.',
            location: {
                center: [-88, 33],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ESM-Update',
            alignment: 'center',
            title: 'Everywhere She Maps Update',
            //image: './imgs/chapters_by_regions.png',
            description: '<a href="https://www.youthmappers.org/everywhereshemaps"> Everywhere She Maps </a> (ESM) aims to strengthen the inclusiveness of the geospatial community to ensure female perspectives are represented in apps, websites, and mapping platforms. Through Everywhere She Maps, the next generation of female mappers will build their technical capacity, enhance their professional and networking skills, and contribute to mapping projects focused on adding data relevant to women’s needs.<br /><br />ESM will be implemented through three core activities that are proving successful in YouthMappers programming: a leadership program for women in technology, Everywhere She Maps Regional Ambassadors, and mapping and geospatial data creation that benefits women.',
            location: {
                center: [-88, 33],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ESM-PD',
            alignment: 'center',
            title: 'Professional Development + Internship Match Program',
            //image: './imgs/chapters_by_regions.png',
            description: 'A five part-series focused on <b>professional development</b> was held on topics critical for securing an internship or job: creating a resume, writing an unforgettable cover letter, communicating professionally, building a LinkedIn presence, and preparing for interviews.  You can check the sessions out below or on the <a href= "https://www.youtube.com/watch?v=rY54wDHTAfM&list=PLsAbn_TpDKVaJLTrHd94wJB3g9hXk-wNa">YouthMappers YouTube </a> if interested. <br /> <br /> <iframe width="830" height="415" src="https://www.youtube.com/embed/rY54wDHTAfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br /> <br /> The <b>Internship Match Program</b> was launched to match qualified student members who identify as women and/or non-binary with intership opportunites that will allow them to develop professionally and strengthen their skills.',
            location: {
                center: [-88, 33],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-updates-TZ',
            alignment: 'left',
            title: 'YouthMappers Chapters in Tanzania Awarded micro-Grant',
            //image: './imgs/chapters_by_regions.png',
            description: 'Three YouthMappers chapters in Tanzania were recipients of the inaugural micro-grant program organized by Open Map Development Tanzania (OMDTZ).  The SUZA YouthMappers chapter will be mapping schools in Zanzibar and the information will be shared with the Ministry of Education to improve internal systems.  The SMCoSE YouthMappers Chapter will be mapping solid waste, specifically plastics and its impacts on flooding and the data will be added to existing open datasets.  IRDP YouthMappers Dodoma are mapping roads, schools, hospitals and other social facilities to enhance the decision making abilities of ward officers.',
            location: {
                center: [30.98882, -6.50003],
                zoom: 5.74,
                pitch: 0.00,
                bearing: 0.00
            },
           onChapterEnter: [
                {
                    layer: 'ym-tz-omdtz',
                    opacity: .85
                }
            ],
            onChapterExit: [
                {
                    layer: 'ym-tz-omdtz',
                    opacity: 0.0
                }
            ]
        }, 
        {
            id: 'chapter-updates-uganda',
            alignment: 'left',
            title: 'Mapping Waterpoints in Uganda',
            //image: './imgs/chapters_by_regions.png',
            description: 'The Bureau for Resilience and Food Security has allocated innovation funds for the YouthMappers program to survey waterpoints in Gulu, Uganda to validate their location, operational status along with other critical attributes.  This data will be used to update the Waterpoint Data Exchange\'s datasets and used to engage local water authorities to assist in the management of their water point infrastructure.  Additionally researchers will use the datasets to develop Machine learning algorithms to better local water points features in the country.',
            location: {
                center: [32.28, 3.021],
                zoom: 10,
                pitch: 0.00,
                bearing: 0.00
            },
           onChapterEnter: [
                {
                    layer: 'uganda-wpdx',
                    opacity: .85
                }
            ],
            onChapterExit: [
                {
                    layer: 'uganda-wpdx',
                    opacity: 0.0
                }
            ]
        },
        {
            id: 'chapter-updates-ecuador',
            alignment: 'left',
            title: 'Mapping a Hidden Paradise During a Pandemic',
            image: './imgs/mapping_ecuador.jpg',
            description: 'Lloa, is a large rural parish in the district of Quito, Ecuador who\'s natural beauty makes it a tourist destination.  However, because of its remote location in the Andean mountains, it is isolated from many government services and there is a lack of data (including geospatial) to understand and support the region.  To help improve the economic potential of the area, the GeoMap ESPE-YouthMappers team decided to travel to the region and work with the communities there to add data to OSM.  On hearing about their project, the local government asked the students to collect data on the quality of internet and other basic services in the communities they were visiting.',
            location: {
                center: [-79.02, -2.362],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
           onChapterEnter: [
                {
                    layer: 'lloa-district',
                    opacity: .35
                }
            ],
            onChapterExit: [
                {
                    layer: 'lloa-district',
                    opacity: 0.0
                }
            ]
        }, 
        {
            id: 'chapter-updates-brazil',
            alignment: 'left',
            title: 'Mapping the Historical Heritage of São João del-Rei',
            //image: './imgs/mapping_ecuador.jpg',
            description: 'São João del-Rei is a historic city in the Minas Gerais state of Brazil. Due to its rapid urban growth, the lack of investment in infrastructure, and climate change, flooding has been intensifying and causing serious damage.  To help with the situation, YouthMappers in Brazil partnered with the  National Historical and Artistic Heritage Institute (IPHAN) to map the historic city center to provide better data for flood modeling and other planning activities.  To learn more check out this blog on the YouthMappers website or check out the video below. <br /> <br /><iframe width="444" height="250" src="https://video.wixstatic.com/video/72337f_1a846294946946949e09f4d136da04b6/1080p/mp4/file.mp4" title="Brazil Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [-44.268,-21.137],
                zoom: 15.55,
                pitch: 0.00,
                bearing: 0.00
            },
           onChapterEnter: [
                {
                    layer: 'brazil-historic-buildings',
                    opacity: .85
                }
            ],
            onChapterExit: [
                {
                    layer: 'brazil-historic-buildings',
                    opacity: 0.0
                }
            ]
        },
        {
            id: 'youthmappers-academy',
            alignment: 'center',
            title: 'YouthMappers Academy Launched!',
            image: './imgs/ym_academy_v2.jpg',
            description: 'YouthMappers launched a new online learning platform for the network aiming to strengthen students\' knowledge and proficiency to work within the OSM ecosystem including its tools, software, and community.  In line with our motto that \"We don’t just build maps. We build mappers,\" the curriculum focuses on building capacity and excellence. Course materials encourage YouthMappers to engage more confidently in open mapping communities and seek to stimulate critical thinking around research and mapping activities, leading to higher quality outputs. The added opportunity to earn micro-credentials will enhance YouthMappers’ job marketability by providing formal recognition of proficiency and achievement in targeted geospatial techniques and concepts. Continue reading for details on the courses and participation instructions. To learn more, check out the <a href ="https://www.youthmappers.org/post/announcing-the-youthmappers-academy-an-online-platform-to-build-mappers">YouthMappers\' blog post!<a/>',
            location: {
                center: [-88, 33],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
           onChapterEnter: [
                {
                    layer: 'brazil-historic-buildings',
                    opacity: .85
                }
            ],
            onChapterExit: [
                {
                    layer: 'brazil-historic-buildings',
                    opacity: 0.0
                }
            ]
        },
        {
            id: 'how-you-can-help',
            alignment: 'center',
            title: 'How Can You Help?  How Can You Get Involved?',
            //image: './imgs/ym_academy_v2.jpg',
            description: 'YouthMappers looks to connect its chapters to valuable activities that support USAID programming while providing valuable training and technical experience to the students in its network.<li>Present on your work to YouthMappers chapters in your country or in the region.</li><li>Connect YouthMappers to a USAID program to learn about its work.</li><li>Help fund an activity that involves YouthMappers support whether it is mapping/collecting data in the field or remotely.</li><li>Help us find internships for our ESM students by connecting us to companies, ngos and other organizations in your network.</li>',
            location: {
                center: [-88, 33],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
           onChapterEnter: [
                {
                    layer: 'brazil-historic-buildings',
                    opacity: .85
                }
            ],
            onChapterExit: [
                {
                    layer: 'brazil-historic-buildings',
                    opacity: 0.0
                }
            ]
        }
    ]
};
