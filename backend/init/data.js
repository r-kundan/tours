const sampleTours =
 [
    {
        title: "Serene Retreat in the Maldives",
        description:
            "Escape to a private overwater villa in the Maldives. Immerse yourself in crystal-clear waters, unwind on secluded beaches, and savor gourmet dining under the stars.",
        location: "Maldives",
        country: " Maldives",
        image: "https://source.unsplash.com/uWpggIb3iHs",
        map: "https://www.google.com/maps/place/Maldives/@3.1120983,73.2403564,6z/data=!3m1!4b1!4m6!3m5!1s0x24b599bfaafb7bbd:0x414509e181956289!8m2!3d3.202778!4d73.22068!16zL20vMDR0eTg?entry=ttu"
    },
    {
        title: "Cultural Discovery in Rome",
        description:
            "Explore the timeless wonders of Rome, Italy's Eternal City. Wander through ancient ruins, admire Renaissance art, and indulge in authentic Italian gelato.",
        location: "Rome",
        country: "Italy",
        image: "https://source.unsplash.com/rknrvCrfS1k",
        map: "https://www.google.com/maps/place/Rome,+Metropolitan+City+of+Rome+Capital,+Italy/@41.9100711,12.5359979,11z/data=!3m1!4b1!4m6!3m5!1s0x132f6196f9928ebb:0xb90f770693656e38!8m2!3d41.8967068!4d12.4822025!16zL20vMDZjNjI?entry=ttu"
    },
    {
        title: "Safari Adventure in Kruger National Park",
        description:
            "Embark on a thrilling safari in South Africa's Kruger National Park. Spot the Big Five, traverse rugged landscapes, and witness unforgettable African sunsets.",
        location: "Kruger National Park",
        country: " South Africa",
        image: "https://source.unsplash.com/EunFGVJLPmQ",
        map: "https://www.google.com/maps/place//@29.2791059,75.4927463,14.97z?entry=ttu"
    },
    {
        title: "Island Paradise in Fiji",
        description:
            "Discover the untouched beauty of Fiji's secluded islands. Dive into vibrant coral reefs, experience traditional Fijian culture, and unwind in luxury beachfront resorts.",
        location: "Fiji Islands",
        country: "Fiji",
        image:"https://source.unsplash.com/x7SAp0fx2bc",
        map: "https://www.google.com/maps/place/Fiji+Islands/"
    },
    {
        title: "Enchanting Journey through Kyoto",
        description:
            "Immerse yourself in the ancient traditions of Kyoto, Japan. Explore historic temples, stroll through bamboo forests, and experience the tranquility of Japanese tea ceremonies.",
        location: "Kyoto",
        country: "Japan",
         image: "https://source.unsplash.com/UoK9BlE",
        map: "https://www.google.com/maps/place/Kyoto,+Japan/"
    },
    {
        title: "Adventure in the Amazon Rainforest",
        description:
            "Embark on a wild adventure deep into the heart of the Amazon Rainforest. Encounter diverse wildlife, trek through lush jungles, and discover indigenous cultures.",
        location: "Amazon Rainforest",
        country: "Brazil",
         image: "https://source.unsplash.com/hbHKEB5m2xE",
        map: "https://www.google.com/maps/place/Amazon+Rainforest/@-3.4653052,-62.2158805,15z/data=!3m1!4b1!4m6!3m5!1s0x91e8605342744385:0x3d3c6dc1394a7fc7!8m2!3d-3.4653053!4d-62.2158805!16zL20vMGN4NHA?entry=ttu"
    },
    {
        title: "Nordic Winter Wonderland in Lapland",
        description:
            "Experience the magic of winter in Finland's Lapland region. Husky sled through snow-covered landscapes, marvel at the Northern Lights, and visit Santa Claus Village.",
        location: "Lapland",
        country: "Finland", 
        image: "https://source.unsplash.com/YmD5N1oBmq4",
        map: "https://www.google.com/maps/place/Lapland,+Finland/@57.1178018,34.7091854,4z/data=!4m6!3m5!1s0x45d30036254ca145:0xcedc4eb30d91aca1!8m2!3d67.9222304!4d26.5046438!16zL20vMDFuZHdr?entry=ttu"
    },
    {
        title: "Coastal Escape to Santorini",
        description:
            "Relax on the sun-drenched shores of Santorini, Greece. Admire stunning sunsets over the Aegean Sea, explore picturesque villages, and indulge in fresh Mediterranean cuisine.",
        location: "Santorini",
        country: "Greece",
         image: "https://source.unsplash.com/vF0l0bqLRKY",
        map: "https://www.google.com/maps/place/Santorini/@36.4071539,25.4206309,12z/data=!3m1!4b1!4m6!3m5!1s0x1499ce86adfd9ff7:0xb2a761f740d68afc!8m2!3d36.3931562!4d25.4615092!16zL20vMDcwdDk?entry=ttu"
    },
    {
        title: "Cultural Immersion in Marrakech",
        description:
            "Lose yourself in the vibrant sights and sounds of Marrakech, Morocco. Navigate bustling souks, admire intricate architecture, and savor flavorful Moroccan tagines.",
        location: "Marrakech",
        country: "Morocco",
         image: "https://source.unsplash.com/UIwwV5GlyqY",
        map: "https://www.google.com/maps/place/Marrakesh,+Morocco/@31.6346214,-8.0078531,12z/data=!3m1!4b1!4m6!3m5!1s0xdafee8d96179e51:0x5950b6534f87adb8!8m2!3d31.6225224!4d-7.9898258!16zL20vMDU0cnc?entry=ttu"
    },
    {
        title: "Alpine Adventure in the Swiss Alps",
        description:
            "Embark on an exhilarating alpine adventure in the Swiss Alps. Ski down powdery slopes, hike through pristine mountain trails, and enjoy panoramic views of snow-capped peaks.",
        location: "Swiss Alps",
        country: "Switzerland", 
        image: "https://source.unsplash.com/GPpYgZWorDc",
        map: "https://www.google.com/maps/place/Swiss+Alps/@46.5601056,8.5610781,15z/data=!3m1!4b1!4m6!3m5!1s0x478576eb2f97f733:0x41140a31bc0c273!8m2!3d46.5601061!4d8.5610781!16zL20vMGZjZHQ?entry=ttu"
    },
    {
        title: "Tropical Paradise Getaway",
        description:
            "Escape to a secluded tropical paradise in the heart of the Caribbean. Relax on pristine white-sand beaches, explore vibrant coral reefs, and indulge in delicious local cuisine.",
        location: "Caribbean",
        country: "Various (depends on specific island)",
         image: "https://source.unsplash.com/uWpggIb3iHs",
        map: "https://www.google.com/maps/place/Caribbean/@18.628206,-72.2944979,5z/data=!3m1!4b1!4m6!3m5!1s0x8eb9e309d5a038b7:0xc67ecf32cac5dbdc!8m2!3d21.4691137!4d-78.6568942!16zL20vMDI2MW0?entry=ttu"
    },
    {
        title: "Cultural Exploration in Kyoto",
        description:
            "Discover the rich cultural heritage of Kyoto, Japan's ancient capital. Visit historic temples, stroll through traditional gardens, and witness the beauty of cherry blossoms in spring.",
        location: "Kyoto",
        country: "Japan", 
        image: "https://source.unsplash.com/EJvGBYjrwEA",
        map: "https://www.google.com/maps/place/Kyoto,+Japan/@35.0981962,135.7188694,10z/data=!3m1!4b1!4m6!3m5!1s0x6001a8d6cd3cc3f1:0xc0961d366bbb1d3d!8m2!3d35.011564!4d135.7681489!16zL20vMDlkNF8?entry=ttu"
    },
    {
        title: "Safari Adventure in the Serengeti",
        description:
            " Embark on an unforgettable safari adventure in the vast Serengeti National Park. Encounter majestic lions, graceful giraffes, and herds of wildebeest on thrilling game drives.",
        location: " Serengeti National Park",
        country: " Tanzania", 
        image: "https://source.unsplash.com/l7OSismNsyM",
        map: "https://www.google.com/maps/place//@29.2794515,75.4927273,15z/data=!3m1!4b1?entry=ttu"
    },
    {
        title: "Mediterranean Cruise Experience",
        description:
            "Sail the azure waters of the Mediterranean Sea on a luxurious cruise ship. Explore charming coastal towns, sample delectable cuisine, and soak up the Mediterranean sun.",
        location: "Mediterranean Sea",
        country: "Various (depends on specific ports of call)",
         image: "https://source.unsplash.com/qPF9jyuFM",
        map: "https://www.google.com/maps/place/Mediterranean+Sea/@38.0149379,15.0967822,5z/data=!3m1!4b1!4m6!3m5!1s0x131421b81c473c9f:0x2e93598afeccf840!8m2!3d34.5531284!4d18.0480105!16zL20vMDRzd3g?entry=ttu"
    },
    {
        title: "Northern Lights Expedition in Iceland",
        description:
            "Chase the mesmerizing Northern Lights in the enchanting landscapes of Iceland. Marvel at the dancing auroras, relax in geothermal hot springs, and explore dramatic ice caves.",
        location: "Iceland",
        country: "Iceland", 
        image: "https://source.unsplash.com/qPF9jyuFM",
        map: "https://www.google.com/maps/place/Iceland/@64.86425,-19.24805,6z/data=!3m1!4b1!4m6!3m5!1s0x48d22b52a3eb6043:0x6f8a0434e5c1459a!8m2!3d64.963051!4d-19.020835!16zL20vMDNyajA?entry=ttu"
    },
    {
        title: "Alpine Retreat in the Austrian Alps",
        description:
            "Experience the charm of a traditional alpine village in the Austrian Alps. Ski world-class slopes, indulge in hearty Austrian cuisine, and unwind in cozy mountain chalets.",
        location: "Austrian Alps",
        country: "Austria",
         image: "https://source.unsplash.com/28qKmxN3FRQ",
        map: ""
    },
    {
        title: "Coastal Haven in the Amalfi Coast",
        description:
            "Discover the beauty of Italy's Amalfi Coast, where rugged cliffs meet the azure sea. Explore quaint coastal towns, savor fresh seafood dishes, and soak up the Mediterranean sun.",
        location: "Amalfi Coast",
        country: "Italy",
         image: "https://source.unsplash.com/5ennCEKDiRQ",
        map: ""
    },
    {
        title: "Adventure in the Australian Outback",
        description:
            "Embark on a thrilling adventure in the vast Australian Outback. Explore ancient rock formations, encounter unique wildlife, and camp under the star-filled skies.",
        location: " Australian Outback",
        country: "Australia", 
        image: "https://source.unsplash.com/eVaLajpG7Lg",
        map: ""
    },
    {
        title: "Island Paradise in the Seychelles",
        description:
            "Escape to paradise on the pristine islands of the Seychelles. Relax on white-sand beaches, snorkel in crystal-clear waters, and experience the laid-back island life.",
        location: "Seychelles",
        country: "Seychelles", 
        image: "https://source.unsplash.com/u7nxI32spEk",
        map: "https://www.google.com/maps/place/Seychelles/@-7.0903897,51.1880494,7z/data=!3m1!4b1!4m6!3m5!1s0x225c21fd70bead3b:0x32d3d0a0d349daf7!8m2!3d-4.679574!4d55.491977!16zL20vMDZzdzk?entry=ttu"
    },
    {
        title: "Cultural Discovery in Istanbul",
        description:
            "Immerse yourself in the vibrant culture of Istanbul, where East meets West. Explore historic landmarks, wander through bustling bazaars, and savor flavorful Turkish cuisine.",
        location: "Istanbul",
        country: "Turkey",
         image: "https://source.unsplash.com/NsPUgTrqpkQ",
        map: "https://www.google.com/maps/place/%C4%B0stanbul,+T%C3%BCrkiye/@41.0053215,29.0121795,10z/data=!3m1!4b1!4m6!3m5!1s0x14caa7040068086b:0xe1ccfe98bc01b0d0!8m2!3d41.0082376!4d28.9783589!16zL20vMDk5NDlt?entry=ttu"
    },
    {
        title: "Coastal Escape to the French Riviera",
        description:
            "Indulge in the glamorous lifestyle of the French Riviera. Relax on sun-kissed beaches, explore chic coastal towns, and dine in Michelin-starred restaurants.",
        location: "French Riviera",
        country: "France",
         image: "https://source.unsplash.com/5wSTD4OwPFo",
         map: "https://www.google.com/maps/place/French+Riviera,+France/@43.3895653,6.5207475,9z/data=!3m1!4b1!4m6!3m5!1s0x12cebc738732d97f:0x594966412c5651c0!8m2!3d43.2547731!4d6.6378577!16zL20vMDFuZnY5?entry=ttu"
    },
    {
        title: "Island Paradise in the Bahamas",
        description:
            "Discover the beauty of the Bahamas' sun-drenched islands. Swim with dolphins, lounge on powdery beaches, and explore colorful coral reefs.",
        location: "Bahamas",
        country: " Bahamas", 
        image: "https://source.unsplash.com/ndnZLh3LK6c",
        map: "https://www.google.com/maps/place/The+Bahamas/@24.4344686,-75.9667161,7z/data=!3m1!4b1!4m6!3m5!1s0x88d69a3bb2480f3d:0x133eb4836ac779e5!8m2!3d25.03428!4d-77.39628!16zL20vMDE2MHc?entry=ttu"
    },
    {
        title: " Historical Exploration in Athens",
        description:
            "Explore the cradle of Western civilization in Athens, Greece. Marvel at ancient ruins, visit iconic landmarks like the Acropolis, and enjoy authentic Greek hospitality.",
        location: "Athens",
        country: "Greece",
         image: "https://source.unsplash.com/ilQmlVIMN4c",
        map: "https://www.google.com/maps/place/Athens,+Greece/@37.9908372,23.7383394,13z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd1f067043f1:0x2736354576668ddd!8m2!3d37.9838096!4d23.7275388!16zL20vMG4yeg?entry=ttu"
    },
    {
        title: "Adventure in the Swiss Alps",
        description:
            "Experience the thrill of hiking through the stunning Swiss Alps with our guided tour. Marvel at breathtaking vistas, enjoy cozy mountain lodges, and immerse yourself in the beauty of Switzerland.",
        location: "Swiss Alps",
        country: "Switzerland",
         image: "https://source.unsplash.com/2CaJfWhaeek",
        map: "https://www.google.com/maps/place/Swiss+Alps/@46.5601056,8.5610781,15z/data=!3m1!4b1!4m6!3m5!1s0x478576eb2f97f733:0x41140a31bc0c273!8m2!3d46.5601061!4d8.5610781!16zL20vMGZjZHQ?entry=ttu"
    },
    {
        title: "Mediterranean Cruise Experience",
        description:
            " Sail the azure waters of the Mediterranean Sea on a luxurious cruise ship. Explore charming coastal towns, sample delectable cuisine, and soak up the Mediterranean sun.",
        location: "Mediterranean Sea",
        country: "Various (depends on specific ports of call)",
         image: "https://source.unsplash.com/cwPwpQidIi0",
        map: "https://www.google.com/maps/place/Mediterranean+Sea/@38.0149379,15.0967822,5z/data=!3m1!4b1!4m6!3m5!1s0x131421b81c473c9f:0x2e93598afeccf840!8m2!3d34.5531284!4d18.0480105!16zL20vMDRzd3g?entry=ttu"
    },
];
module.exports = { data: sampleTours };
