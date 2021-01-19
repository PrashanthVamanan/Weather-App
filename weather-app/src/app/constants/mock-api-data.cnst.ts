const countriesList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua And Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas The",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Cook Islands",
  "Costa Rica",
  "Cote D'Ivoire (Ivory Coast)",
  "Croatia (Hrvatska)",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic Of The Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji Islands",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia The",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey and Alderney",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard and McDonald Islands",
  "Honduras",
  "Hong Kong S.A.R.",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea North",
  "Korea South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau S.A.R.",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Man (Isle of)",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands Antilles",
  "Netherlands The",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian Territory Occupied",
  "Panama",
  "Papua new Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn Island",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic Of The Congo",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts And Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent And The Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Smaller Territories of the UK",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard And Jan Mayen Islands",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad And Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks And Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City State (Holy See)",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (British)",
  "Virgin Islands (US)",
  "Wallis And Futuna Islands",
  "Western Sahara",
  "Yemen",
  "Yugoslavia",
  "Zambia",
  "Zimbabwe"
]

//Tamilnadu is example state
const statesForACountryList = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kenmore",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Narora",
  "Odisha",
  "Pondicherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
]

const citiesInAState = [
  "Abiramam",
  "Achampudur",
  "Acharapakkam",
  "Acharipallam",
  "Achipatti",
  "Adikaratti",
  "Adiramapattinam",
  "Aduturai",
  "Adyar",
  "Agaram",
  "Agasthiswaram",
  "Akkaraipettai",
  "Alagappapuram",
  "Alagapuri",
  "Alampalayam",
  "Alandur",
  "Alanganallur",
  "Alangayam",
  "Alangudi",
  "Alangulam",
  "Alanthurai",
  "Alapakkam",
  "Allapuram",
  "Alur",
  "Alwar Tirunagari",
  "Alwarkurichi",
  "Ambasamudram",
  "Ambur",
  "Ammainaickanur",
  "Ammaparikuppam",
  "Ammapettai",
  "Ammavarikuppam",
  "Ammur",
  "Anaimalai",
  "Anaiyur",
  "Anakaputhur",
  "Ananthapuram",
  "Andanappettai",
  "Andipalayam",
  "Andippatti",
  "Anjugramam",
  "Annamalainagar",
  "Annavasal",
  "Annur",
  "Anthiyur",
  "Appakudal",
  "Arachalur",
  "Arakandanallur",
  "Arakonam",
  "Aralvaimozhi",
  "Arani",
  "Arani Road",
  "Arantangi",
  "Arasiramani",
  "Aravakurichi",
  "Aravankadu",
  "Arcot",
  "Arimalam",
  "Ariyalur",
  "Ariyappampalayam",
  "Ariyur",
  "Arni",
  "Arulmigu Thirumuruganpundi",
  "Arumanai",
  "Arumbavur",
  "Arumuganeri",
  "Aruppukkottai",
  "Ashokapuram",
  "Athani",
  "Athanur",
  "Athimarapatti",
  "Athipattu",
  "Athur",
  "Attayyampatti",
  "Attur",
  "Auroville",
  "Avadattur",
  "Avadi",
  "Avalpundurai",
  "Avaniapuram",
  "Avinashi",
  "Ayakudi",
  "Ayanadaippu",
  "Aygudi",
  "Ayothiapattinam",
  "Ayyalur",
  "Ayyampalayam",
  "Ayyampettai",
  "Azhagiapandiapuram",
  "Balakrishnampatti",
  "Balakrishnapuram",
  "Balapallam",
  "Balasamudram",
  "Bargur",
  "Belur",
  "Berhatty",
  "Bhavani",
  "Bhawanisagar",
  "Bhuvanagiri",
  "Bikketti",
  "Bodinayakkanur",
  "Brahmana Periya Agraharam",
  "Buthapandi",
  "Buthipuram",
  "Chatrapatti",
  "Chembarambakkam",
  "Chengalpattu",
  "Chengam",
  "Chennai",
  "Chennasamudram",
  "Chennimalai",
  "Cheranmadevi",
  "Cheruvanki",
  "Chetpet",
  "Chettiarpatti",
  "Chettipalaiyam",
  "Chettipalayam Cantonment",
  "Chettithangal",
  "Cheyur",
  "Cheyyar",
  "Chidambaram",
  "Chinalapatti",
  "Chinna Anuppanadi",
  "Chinna Salem",
  "Chinnakkampalayam",
  "Chinnammanur",
  "Chinnampalaiyam",
  "Chinnasekkadu",
  "Chinnavedampatti",
  "Chitlapakkam",
  "Chittodu",
  "Cholapuram",
  "Coimbatore",
  "Coonoor",
  "Courtalam",
  "Cuddalore",
  "Dalavaipatti",
  "Darasuram",
  "Denkanikottai",
  "Desur",
  "Devadanapatti",
  "Devakkottai",
  "Devakottai",
  "Devanangurichi",
  "Devarshola",
  "Devasthanam",
  "Dhalavoipuram",
  "Dhali",
  "Dhaliyur",
  "Dharapadavedu",
  "Dharapuram",
  "Dharmapuri",
  "Dindigul",
  "Dusi",
  "Edaganasalai",
  "Edaikodu",
  "Edakalinadu",
  "Elathur",
  "Elayirampannai",
  "Elumalai",
  "Eral",
  "Eraniel",
  "Eriodu",
  "Erode",
  "Erumaipatti",
  "Eruvadi",
  "Ethapur",
  "Ettaiyapuram",
  "Ettimadai",
  "Ezhudesam",
  "Ganapathipuram",
  "Gandhi Nagar",
  "Gangaikondan",
  "Gangavalli",
  "Ganguvarpatti",
  "Gingi",
  "Gopalasamudram",
  "Gopichettipalaiyam",
  "Gudalur",
  "Gudiyattam",
  "Guduvanchery",
  "Gummidipoondi",
  "Hanumanthampatti",
  "Harur",
  "Harveypatti",
  "Highways",
  "Hosur",
  "Hubbathala",
  "Huligal",
  "Idappadi",
  "Idikarai",
  "Ilampillai",
  "Ilanji",
  "Iluppaiyurani",
  "Iluppur",
  "Inam Karur",
  "Injambakkam",
  "Irugur",
  "Jaffrabad",
  "Jagathala",
  "Jalakandapuram",
  "Jalladiampet",
  "Jambai",
  "Jayankondam",
  "Jolarpet",
  "Kadambur",
  "Kadathur",
  "Kadayal",
  "Kadayampatti",
  "Kadayanallur",
  "Kadiapatti",
  "Kalakkad",
  "Kalambur",
  "Kalapatti",
  "Kalappanaickenpatti",
  "Kalavai",
  "Kalinjur",
  "Kaliyakkavilai",
  "Kallakkurichi",
  "Kallakudi",
  "Kallidaikurichchi",
  "Kallukuttam",
  "Kallupatti",
  "Kalpakkam",
  "Kalugumalai",
  "Kamayagoundanpatti",
  "Kambainallur",
  "Kambam",
  "Kamuthi",
  "Kanadukathan",
  "Kanakkampalayam",
  "Kanam",
  "Kanchipuram",
  "Kandanur",
  "Kangayam",
  "Kangayampalayam",
  "Kangeyanallur",
  "Kaniyur",
  "Kanjikoil",
  "Kannadendal",
  "Kannamangalam",
  "Kannampalayam",
  "Kannankurichi",
  "Kannapalaiyam",
  "Kannivadi",
  "Kanyakumari",
  "Kappiyarai",
  "Karaikkudi",
  "Karamadai",
  "Karambakkam",
  "Karambakkudi",
  "Kariamangalam",
  "Kariapatti",
  "Karugampattur",
  "Karumandi Chellipalayam",
  "Karumathampatti",
  "Karumbakkam",
  "Karungal",
  "Karunguzhi",
  "Karuppur",
  "Karur",
  "Kasipalaiyam",
  "Kasipalayam G",
  "Kathirvedu",
  "Kathujuganapalli",
  "Katpadi",
  "Kattivakkam",
  "Kattumannarkoil",
  "Kattupakkam",
  "Kattuputhur",
  "Kaveripakkam",
  "Kaveripattinam",
  "Kavundampalaiyam",
  "Kavundampalayam",
  "Kayalpattinam",
  "Kayattar",
  "Kelamangalam",
  "Kelambakkam",
  "Kembainaickenpalayam",
  "Kethi",
  "Kilakarai",
  "Kilampadi",
  "Kilkulam",
  "Kilkunda",
  "Killiyur",
  "Killlai",
  "Kilpennathur",
  "Kilvelur",
  "Kinathukadavu",
  "Kiramangalam",
  "Kiranur",
  "Kiripatti",
  "Kizhapavur",
  "Kmarasamipatti",
  "Kochadai",
  "Kodaikanal",
  "Kodambakkam",
  "Kodavasal",
  "Kodumudi",
  "Kolachal",
  "Kolappalur",
  "Kolathupalayam",
  "Kolathur",
  "Kollankodu",
  "Kollankoil",
  "Komaralingam",
  "Komarapalayam",
  "Kombai",
  "Konakkarai",
  "Konavattam",
  "Kondalampatti",
  "Konganapuram",
  "Koradacheri",
  "Korampallam",
  "Kotagiri",
  "Kothinallur",
  "Kottaiyur",
  "Kottakuppam",
  "Kottaram",
  "Kottivakkam",
  "Kottur",
  "Kovilpatti",
  "Koyampattur",
  "Krishnagiri",
  "Krishnarayapuram",
  "Krishnasamudram",
  "Kuchanur",
  "Kuhalur",
  "Kulasekarappattinam",
  "Kulasekarapuram",
  "Kulithalai",
  "Kumarapalaiyam",
  "Kumarapalayam",
  "Kumarapuram",
  "Kumbakonam",
  "Kundrathur",
  "Kuniyamuthur",
  "Kunnathur",
  "Kunur",
  "Kuraikundu",
  "Kurichi",
  "Kurinjippadi",
  "Kurudampalaiyam",
  "Kurumbalur",
  "Kuthalam",
  "Kuthappar",
  "Kuttalam",
  "Kuttanallur",
  "Kuzhithurai",
  "Labbaikudikadu",
  "Lakkampatti",
  "Lalgudi",
  "Lalpet",
  "Llayangudi",
  "Madambakkam",
  "Madanur",
  "Madathukulam",
  "Madhavaram",
  "Madippakkam",
  "Madukkarai",
  "Madukkur",
  "Madurai",
  "Maduranthakam",
  "Maduravoyal",
  "Mahabalipuram",
  "Makkinanpatti",
  "Mallamuppampatti",
  "Mallankinaru",
  "Mallapuram",
  "Mallasamudram",
  "Mallur",
  "Mamallapuram",
  "Mamsapuram",
  "Manachanallur",
  "Manali",
  "Manalmedu",
  "Manalurpet",
  "Manamadurai",
  "Manapakkam",
  "Manapparai",
  "Manavalakurichi",
  "Mandaikadu",
  "Mandapam",
  "Mangadu",
  "Mangalam",
  "Mangalampet",
  "Manimutharu",
  "Mannargudi",
  "Mappilaiurani",
  "Maraimalai Nagar",
  "Marakkanam",
  "Maramangalathupatti",
  "Marandahalli",
  "Markayankottai",
  "Marudur",
  "Marungur",
  "Masinigudi",
  "Mathigiri",
  "Mattur",
  "Mayiladuthurai",
  "Mecheri",
  "Melacheval",
  "Melachokkanathapuram",
  "Melagaram",
  "Melamadai",
  "Melamaiyur",
  "Melanattam",
  "Melathiruppanthuruthi",
  "Melattur",
  "Melmananbedu",
  "Melpattampakkam",
  "Melur",
  "Melvisharam",
  "Mettupalayam",
  "Mettur",
  "Meyyanur",
  "Milavittan",
  "Minakshipuram",
  "Minambakkam",
  "Minjur",
  "Modakurichi",
  "Mohanur",
  "Mopperipalayam",
  "Mudalur",
  "Mudichur",
  "Mudukulathur",
  "Mukasipidariyur",
  "Mukkudal",
  "Mulagumudu",
  "Mulakaraipatti",
  "Mulanur",
  "Mullakkadu",
  "Muruganpalayam",
  "Musiri",
  "Muthupet",
  "Muthur",
  "Muttayyapuram",
  "Muttupet",
  "Muvarasampettai",
  "Myladi",
  "Mylapore",
  "Nadukkuthagai",
  "Naduvattam",
  "Nagapattinam",
  "Nagavakulam",
  "Nagercoil",
  "Nagojanahalli",
  "Nallampatti",
  "Nallur",
  "Namagiripettai",
  "Namakkal",
  "Nambiyur",
  "Nambutalai",
  "Nandambakkam",
  "Nandivaram",
  "Nangavalli",
  "Nangavaram",
  "Nanguneri",
  "Nanjikottai",
  "Nannilam",
  "Naranammalpuram",
  "Naranapuram",
  "Narasimhanaickenpalayam",
  "Narasingapuram",
  "Narasojipatti",
  "Naravarikuppam",
  "Nasiyanur",
  "Natham",
  "Nathampannai",
  "Natrampalli",
  "Nattam",
  "Nattapettai",
  "Nattarasankottai",
  "Navalpattu",
  "Nazarethpettai",
  "Nazerath",
  "Neikkarapatti",
  "Neiyyur",
  "Nellikkuppam",
  "Nelliyalam",
  "Nemili",
  "Nemilicheri",
  "Neripperichal",
  "Nerkunram",
  "Nerkuppai",
  "Nerunjipettai",
  "Neykkarappatti",
  "Neyveli",
  "Nidamangalam",
  "Nilagiri",
  "Nilakkottai",
  "Nilankarai",
  "Odaipatti",
  "Odaiyakulam",
  "Oddanchatram",
  "Odugathur",
  "Oggiyamduraipakkam",
  "Olagadam",
  "Omalur",
  "Ooty",
  "Orathanadu",
  "Othakadai",
  "Othakalmandapam",
  "Ottapparai",
  "Pacode",
  "Padaividu",
  "Padianallur",
  "Padirikuppam",
  "Padmanabhapuram",
  "Padririvedu",
  "Palaganangudy",
  "Palaimpatti",
  "Palakkodu",
  "Palamedu",
  "Palani",
  "Palani Chettipatti",
  "Palavakkam",
  "Palavansathu",
  "Palayakayal",
  "Palayam",
  "Palayamkottai",
  "Palladam",
  "Pallapalayam",
  "Pallapatti",
  "Pallattur",
  "Pallavaram",
  "Pallikaranai",
  "Pallikonda",
  "Pallipalaiyam",
  "Pallipalaiyam Agraharam",
  "Pallipattu",
  "Pammal",
  "Panagudi",
  "Panaimarathupatti",
  "Panapakkam",
  "Panboli",
  "Pandamangalam",
  "Pannaikadu",
  "Pannaipuram",
  "Pannuratti",
  "Panruti",
  "Papanasam",
  "Pappankurichi",
  "Papparapatti",
  "Pappireddipatti",
  "Paramakkudi",
  "Paramankurichi",
  "Paramathi",
  "Parangippettai",
  "Paravai",
  "Pasur",
  "Pathamadai",
  "Pattinam",
  "Pattiviranpatti",
  "Pattukkottai",
  "Pazhugal",
  "Pennadam",
  "Pennagaram",
  "Pennathur",
  "Peraiyur",
  "Peralam",
  "Perambalur",
  "Peranamallur",
  "Peravurani",
  "Periyakodiveri",
  "Periyakulam",
  "Periyanayakkanpalaiyam",
  "Periyanegamam",
  "Periyapatti",
  "Periyasemur",
  "Pernambut",
  "Perumagalur",
  "Perumandi",
  "Perumuchi",
  "Perundurai",
  "Perungalathur",
  "Perungudi",
  "Perungulam",
  "Perur",
  "Perur Chettipalaiyam",
  "Pethampalayam",
  "Pethanaickenpalayam",
  "Pillanallur",
  "Pirkankaranai",
  "Polichalur",
  "Pollachi",
  "Polur",
  "Ponmani",
  "Ponnamaravathi",
  "Ponnampatti",
  "Ponneri",
  "Porur",
  "Pothanur",
  "Pothatturpettai",
  "Pudukadai",
  "Pudukkottai Cantonment",
  "Pudukottai",
  "Pudupalaiyam Aghraharam",
  "Pudupalayam",
  "Pudupatti",
  "Pudupattinam",
  "Pudur",
  "Puduvayal",
  "Pulambadi",
  "Pulampatti",
  "Puliyampatti",
  "Puliyankudi",
  "Puliyur",
  "Pullampadi",
  "Puluvapatti",
  "Punamalli",
  "Punjai Puliyampatti",
  "Punjai Thottakurichi",
  "Punjaipugalur",
  "Puthalam",
  "Putteri",
  "Puvalur",
  "Puzhal",
  "Puzhithivakkam",
  "Rajapalayam",
  "Ramanathapuram",
  "Ramapuram",
  "Rameswaram",
  "Ranipet",
  "Rasipuram",
  "Rayagiri",
  "Rithapuram",
  "Rosalpatti",
  "Rudravathi",
  "Sadayankuppam",
  "Saint Thomas Mount",
  "Salangapalayam",
  "Salem",
  "Samalapuram",
  "Samathur",
  "Sambavar Vadagarai",
  "Sankaramanallur",
  "Sankarankoil",
  "Sankarapuram",
  "Sankari",
  "Sankarnagar",
  "Saravanampatti",
  "Sarcarsamakulam",
  "Sathiyavijayanagaram",
  "Sathuvachari",
  "Sathyamangalam",
  "Sattankulam",
  "Sattur",
  "Sayalgudi",
  "Sayapuram",
  "Seithur",
  "Sembakkam",
  "Semmipalayam",
  "Sennirkuppam",
  "Senthamangalam",
  "Sentharapatti",
  "Senur",
  "Sethiathoppu",
  "Sevilimedu",
  "Sevugampatti",
  "Shenbakkam",
  "Shencottai",
  "Shenkottai",
  "Sholavandan",
  "Sholinganallur",
  "Sholingur",
  "Sholur",
  "Sikkarayapuram",
  "Singampuneri",
  "Singanallur",
  "Singaperumalkoil",
  "Sirapalli",
  "Sirkali",
  "Sirugamani",
  "Sirumugai",
  "Sithayankottai",
  "Sithurajapuram",
  "Sivaganga",
  "Sivagiri",
  "Sivakasi",
  "Sivanthipuram",
  "Sivur",
  "Soranjeri",
  "South Kannanur",
  "South Kodikulam",
  "Srimushnam",
  "Sriperumpudur",
  "Sriramapuram",
  "Srirangam",
  "Srivaikuntam",
  "Srivilliputtur",
  "Suchindram",
  "Suliswaranpatti",
  "Sulur",
  "Sundarapandiam",
  "Sundarapandiapuram",
  "Surampatti",
  "Surandai",
  "Suriyampalayam",
  "Swamimalai",
  "Tambaram",
  "Taramangalam",
  "Tattayyangarpettai",
  "Tayilupatti",
  "Tenkasi",
  "Thadikombu",
  "Thakkolam",
  "Thalainayar",
  "Thalakudi",
  "Thamaraikulam",
  "Thammampatti",
  "Thanjavur",
  "Thanthoni",
  "Tharangambadi",
  "Thedavur",
  "Thenambakkam",
  "Thengampudur",
  "Theni",
  "Theni Allinagaram",
  "Thenkarai",
  "Thenthamaraikulam",
  "Thenthiruperai",
  "Thesur",
  "Thevaram",
  "Thevur",
  "Thiagadurgam",
  "Thiagarajar Colony",
  "Thingalnagar",
  "Thiruchirapalli",
  "Thirukarungudi",
  "Thirukazhukundram",
  "Thirumalayampalayam",
  "Thirumazhisai",
  "Thirunagar",
  "Thirunageswaram",
  "Thirunindravur",
  "Thirunirmalai",
  "Thiruparankundram",
  "Thiruparappu",
  "Thiruporur",
  "Thiruppanandal",
  "Thirupuvanam",
  "Thiruthangal",
  "Thiruthuraipundi",
  "Thiruvaivaru",
  "Thiruvalam",
  "Thiruvarur",
  "Thiruvattaru",
  "Thiruvenkatam",
  "Thiruvennainallur",
  "Thiruvithankodu",
  "Thisayanvilai",
  "Thittacheri",
  "Thondamuthur",
  "Thorapadi",
  "Thottipalayam",
  "Thottiyam",
  "Thudiyalur",
  "Thuthipattu",
  "Thuvakudi",
  "Timiri",
  "Tindivanam",
  "Tinnanur",
  "Tiruchchendur",
  "Tiruchengode",
  "Tirukkalukkundram",
  "Tirukkattuppalli",
  "Tirukkoyilur",
  "Tirumangalam",
  "Tirumullaivasal",
  "Tirumuruganpundi",
  "Tirunageswaram",
  "Tirunelveli",
  "Tirupathur",
  "Tirupattur",
  "Tiruppuvanam",
  "Tirupur",
  "Tirusulam",
  "Tiruttani",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruverambur",
  "Tiruverkadu",
  "Tiruvethipuram",
  "Tiruvidaimarudur",
  "Tiruvottiyur",
  "Tittakudi",
  "TNPL Pugalur",
  "Tondi",
  "Turaiyur",
  "Tuticorin",
  "Udagamandalam",
  "Udagamandalam Valley",
  "Udankudi",
  "Udayarpalayam",
  "Udumalaipettai",
  "Udumalpet",
  "Ullur",
  "Ulundurpettai",
  "Unjalaur",
  "Unnamalaikadai",
  "Uppidamangalam",
  "Uppiliapuram",
  "Urachikkottai",
  "Urapakkam",
  "Usilampatti",
  "Uthangarai",
  "Uthayendram",
  "Uthiramerur",
  "Uthukkottai",
  "Uttamapalaiyam",
  "Uttukkuli",
  "Vadakarai Kizhpadugai",
  "Vadakkanandal",
  "Vadakku Valliyur",
  "Vadalur",
  "Vadamadurai",
  "Vadavalli",
  "Vadipatti",
  "Vadugapatti",
  "Vaithiswarankoil",
  "Valangaiman",
  "Valasaravakkam",
  "Valavanur",
  "Vallam",
  "Valparai",
  "Valvaithankoshtam",
  "Vanavasi",
  "Vandalur",
  "Vandavasi",
  "Vandiyur",
  "Vaniputhur",
  "Vaniyambadi",
  "Varadarajanpettai",
  "Varadharajapuram",
  "Vasudevanallur",
  "Vathirairuppu",
  "Vattalkundu",
  "Vazhapadi",
  "Vedapatti",
  "Vedaranniyam",
  "Vedasandur",
  "Velampalaiyam",
  "Velankanni",
  "Vellakinar",
  "Vellakoil",
  "Vellalapatti",
  "Vellalur",
  "Vellanur",
  "Vellimalai",
  "Vellore",
  "Vellottamparappu",
  "Velluru",
  "Vengampudur",
  "Vengathur",
  "Vengavasal",
  "Venghatur",
  "Venkarai",
  "Vennanthur",
  "Veppathur",
  "Verkilambi",
  "Vettaikaranpudur",
  "Vettavalam",
  "Vijayapuri",
  "Vikramasingapuram",
  "Vikravandi",
  "Vilangudi",
  "Vilankurichi",
  "Vilapakkam",
  "Vilathikulam",
  "Vilavur",
  "Villukuri",
  "Villupuram",
  "Viraganur",
  "Virakeralam",
  "Virakkalpudur",
  "Virapandi",
  "Virapandi Cantonment",
  "Virappanchatram",
  "Viravanallur",
  "Virudambattu",
  "Virudhachalam",
  "Virudhunagar",
  "Virupakshipuram",
  "Viswanatham",
  "Vriddhachalam",
  "Walajabad",
  "Walajapet",
  "Wellington",
  "Yercaud",
  "Zamin Uthukuli"
]

const latLongForCountryStateCity = {
  "data": [
    {
      "latitude": 11.052213,
      "longitude": 78.408526,
      "type": "region",
      "name": "Tamil Nadu",
      "number": null,
      "postal_code": null,
      "street": null,
      "confidence": 0.3,
      "region": "Tamil Nadu",
      "region_code": "TN",
      "county": null,
      "locality": null,
      "administrative_area": null,
      "neighbourhood": null,
      "country": "India",
      "country_code": "IND",
      "continent": "Asia",
      "label": "Tamil Nadu, India"
    }
  ]
}

const weatherInfoForLatLong = {
  "lat": 11.0522,
  "lon": 78.4085,
  "timezone": "Asia/Kolkata",
  "timezone_offset": 19800,
  "current": {
    "dt": 1611033817,
    "sunrise": 1611018591,
    "sunset": 1611060232,
    "temp": 24,
    "feels_like": 25.5,
    "pressure": 1014,
    "humidity": 78,
    "dew_point": 19.93,
    "uvi": 7.4,
    "clouds": 40,
    "visibility": 3000,
    "wind_speed": 3.09,
    "wind_deg": 350,
    "weather": [
      {
        "id": 701,
        "main": "Mist",
        "description": "mist",
        "icon": "50d"
      }
    ]
  },
  "daily": [
    {
      "dt": 1611037800,
      "sunrise": 1611018591,
      "sunset": 1611060232,
      "temp": {
        "day": 25.64,
        "min": 19.84,
        "max": 29.42,
        "night": 21.8,
        "eve": 27.29,
        "morn": 20
      },
      "feels_like": {
        "day": 27.56,
        "night": 23.05,
        "eve": 28.28,
        "morn": 21.86
      },
      "pressure": 1014,
      "humidity": 67,
      "dew_point": 19.06,
      "wind_speed": 1.91,
      "wind_deg": 40,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": 23,
      "pop": 0,
      "uvi": 10.39
    },
    {
      "dt": 1611124200,
      "sunrise": 1611104998,
      "sunset": 1611146662,
      "temp": {
        "day": 28.69,
        "min": 20.95,
        "max": 30.52,
        "night": 23.63,
        "eve": 28.82,
        "morn": 21.73
      },
      "feels_like": {
        "day": 29.96,
        "night": 26.28,
        "eve": 30.73,
        "morn": 23.57
      },
      "pressure": 1014,
      "humidity": 46,
      "dew_point": 16.04,
      "wind_speed": 0.97,
      "wind_deg": 84,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": 68,
      "pop": 0.14,
      "uvi": 10.99
    },
    {
      "dt": 1611210600,
      "sunrise": 1611191404,
      "sunset": 1611233091,
      "temp": {
        "day": 29.82,
        "min": 22.28,
        "max": 31.14,
        "night": 24.08,
        "eve": 29.91,
        "morn": 22.38
      },
      "feels_like": {
        "day": 33.3,
        "night": 27.43,
        "eve": 32.85,
        "morn": 25.61
      },
      "pressure": 1013,
      "humidity": 59,
      "dew_point": 21.09,
      "wind_speed": 0.96,
      "wind_deg": 62,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": 5,
      "pop": 0.17,
      "uvi": 10.39
    },
    {
      "dt": 1611297000,
      "sunrise": 1611277810,
      "sunset": 1611319519,
      "temp": {
        "day": 29.59,
        "min": 22.45,
        "max": 32.06,
        "night": 23.16,
        "eve": 29.6,
        "morn": 22.45
      },
      "feels_like": {
        "day": 31.79,
        "night": 24.67,
        "eve": 30.89,
        "morn": 25.64
      },
      "pressure": 1013,
      "humidity": 55,
      "dew_point": 19.65,
      "wind_speed": 1.85,
      "wind_deg": 111,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": 11,
      "pop": 0.02,
      "uvi": 11.35
    },
    {
      "dt": 1611383400,
      "sunrise": 1611364214,
      "sunset": 1611405948,
      "temp": {
        "day": 28.52,
        "min": 21.37,
        "max": 31.08,
        "night": 22.12,
        "eve": 29.11,
        "morn": 21.37
      },
      "feels_like": {
        "day": 29.88,
        "night": 23.88,
        "eve": 29.74,
        "morn": 23.79
      },
      "pressure": 1013,
      "humidity": 53,
      "dew_point": 18.11,
      "wind_speed": 2.05,
      "wind_deg": 87,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": 22,
      "pop": 0,
      "uvi": 11.21
    },
    {
      "dt": 1611469800,
      "sunrise": 1611450617,
      "sunset": 1611492375,
      "temp": {
        "day": 28.06,
        "min": 20.58,
        "max": 30.78,
        "night": 21.56,
        "eve": 28.42,
        "morn": 20.58
      },
      "feels_like": {
        "day": 29.11,
        "night": 22.59,
        "eve": 28.48,
        "morn": 22.53
      },
      "pressure": 1013,
      "humidity": 53,
      "dew_point": 17.6,
      "wind_speed": 2.23,
      "wind_deg": 102,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": 1,
      "pop": 0,
      "uvi": 12
    },
    {
      "dt": 1611556200,
      "sunrise": 1611537020,
      "sunset": 1611578803,
      "temp": {
        "day": 28.07,
        "min": 19.79,
        "max": 30.96,
        "night": 20.92,
        "eve": 28.43,
        "morn": 19.79
      },
      "feels_like": {
        "day": 29.4,
        "night": 21.54,
        "eve": 27.91,
        "morn": 21.56
      },
      "pressure": 1014,
      "humidity": 50,
      "dew_point": 16.85,
      "wind_speed": 1.3,
      "wind_deg": 80,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": 0,
      "pop": 0,
      "uvi": 12
    },
    {
      "dt": 1611642600,
      "sunrise": 1611623421,
      "sunset": 1611665229,
      "temp": {
        "day": 27.82,
        "min": 19,
        "max": 30.63,
        "night": 20.46,
        "eve": 28.43,
        "morn": 19
      },
      "feels_like": {
        "day": 28.37,
        "night": 20.83,
        "eve": 28.03,
        "morn": 20.39
      },
      "pressure": 1013,
      "humidity": 44,
      "dew_point": 14.76,
      "wind_speed": 1.24,
      "wind_deg": 81,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": 42,
      "pop": 0,
      "uvi": 12
    }
  ]
}

const pastFiveDaysForecastInfo = [
  {
    "lat": 11.0522,
    "lon": 78.4085,
    "timezone": "Asia/Kolkata",
    "timezone_offset": 19800,
    "current": {
      "dt": 1610971791,
      "sunrise": 1610932182,
      "sunset": 1610973802,
      "temp": 29,
      "feels_like": 29.76,
      "pressure": 1010,
      "humidity": 58,
      "dew_point": 19.9,
      "uvi": 10.09,
      "clouds": 75,
      "visibility": 5000,
      "wind_speed": 4.12,
      "wind_deg": 70,
      "weather": [
        {
          "id": 721,
          "main": "Haze",
          "description": "haze",
          "icon": "50d"
        }
      ]
    },
    "hourly": [
      {
        "dt": 1610928000,
        "temp": 19,
        "feels_like": 20,
        "pressure": 1011,
        "humidity": 94,
        "dew_point": 18.01,
        "clouds": 20,
        "visibility": 2500,
        "wind_speed": 2.57,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610931600,
        "temp": 19,
        "feels_like": 20.36,
        "pressure": 1012,
        "humidity": 94,
        "dew_point": 18.01,
        "clouds": 20,
        "visibility": 2500,
        "wind_speed": 2.06,
        "wind_deg": 340,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610935200,
        "temp": 19,
        "feels_like": 20.36,
        "pressure": 1014,
        "humidity": 94,
        "dew_point": 18.01,
        "clouds": 20,
        "visibility": 2500,
        "wind_speed": 2.06,
        "wind_deg": 300,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610938800,
        "temp": 23,
        "feels_like": 24.05,
        "pressure": 1014,
        "humidity": 78,
        "dew_point": 18.96,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 3.09,
        "wind_deg": 340,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610942400,
        "temp": 25,
        "feels_like": 24.59,
        "pressure": 1015,
        "humidity": 69,
        "dew_point": 18.92,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 5.14,
        "wind_deg": 20,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610946000,
        "temp": 27,
        "feels_like": 26.56,
        "pressure": 1015,
        "humidity": 61,
        "dew_point": 18.84,
        "clouds": 40,
        "visibility": 4000,
        "wind_speed": 5.14,
        "wind_deg": 30,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610949600,
        "temp": 28,
        "feels_like": 27.49,
        "pressure": 1014,
        "humidity": 57,
        "dew_point": 18.69,
        "clouds": 40,
        "visibility": 4500,
        "wind_speed": 5.14,
        "wind_deg": 50,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610953200,
        "temp": 29,
        "feels_like": 28.68,
        "pressure": 1013,
        "humidity": 58,
        "dew_point": 19.9,
        "clouds": 40,
        "visibility": 5000,
        "wind_speed": 5.66,
        "wind_deg": 60,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610956800,
        "temp": 30,
        "feels_like": 30.65,
        "pressure": 1011,
        "humidity": 54,
        "dew_point": 19.68,
        "clouds": 40,
        "visibility": 5000,
        "wind_speed": 4.12,
        "wind_deg": 50,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610960400,
        "temp": 30,
        "feels_like": 28.38,
        "pressure": 1010,
        "humidity": 48,
        "dew_point": 17.8,
        "clouds": 40,
        "visibility": 5000,
        "wind_speed": 6.17,
        "wind_deg": 90,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610964000,
        "temp": 30,
        "feels_like": 28.38,
        "pressure": 1010,
        "humidity": 48,
        "dew_point": 17.8,
        "clouds": 40,
        "visibility": 5000,
        "wind_speed": 6.17,
        "wind_deg": 90,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610967600,
        "temp": 30,
        "feels_like": 28.8,
        "pressure": 1010,
        "humidity": 51,
        "dew_point": 18.76,
        "clouds": 40,
        "visibility": 5000,
        "wind_speed": 6.17,
        "wind_deg": 90,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610971200,
        "temp": 29,
        "feels_like": 29.76,
        "pressure": 1010,
        "humidity": 58,
        "dew_point": 19.9,
        "clouds": 75,
        "visibility": 5000,
        "wind_speed": 4.12,
        "wind_deg": 70,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610974800,
        "temp": 28,
        "feels_like": 28.7,
        "pressure": 1011,
        "humidity": 61,
        "dew_point": 19.78,
        "clouds": 75,
        "visibility": 4000,
        "wind_speed": 4.12,
        "wind_deg": 80,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610978400,
        "temp": 27,
        "feels_like": 27.74,
        "pressure": 1011,
        "humidity": 65,
        "dew_point": 19.86,
        "clouds": 40,
        "visibility": 4000,
        "wind_speed": 4.12,
        "wind_deg": 90,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610982000,
        "temp": 26,
        "feels_like": 27.19,
        "pressure": 1012,
        "humidity": 73,
        "dew_point": 20.79,
        "clouds": 40,
        "visibility": 4000,
        "wind_speed": 4.12,
        "wind_deg": 70,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610985600,
        "temp": 25,
        "feels_like": 27.33,
        "pressure": 1013,
        "humidity": 78,
        "dew_point": 20.9,
        "clouds": 40,
        "visibility": 3500,
        "wind_speed": 2.57,
        "wind_deg": 80,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610989200,
        "temp": 24,
        "feels_like": 26.71,
        "pressure": 1013,
        "humidity": 83,
        "dew_point": 20.93,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 2.06,
        "wind_deg": 40,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610992800,
        "temp": 23,
        "feels_like": 25.34,
        "pressure": 1013,
        "humidity": 88,
        "dew_point": 20.91,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 2.57,
        "wind_deg": 50,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610996400,
        "temp": 23,
        "feels_like": 25.6,
        "pressure": 1012,
        "humidity": 83,
        "dew_point": 19.96,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 1.54,
        "wind_deg": 340,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1611000000,
        "temp": 22,
        "feels_like": 24.58,
        "pressure": 1011,
        "humidity": 88,
        "dew_point": 19.92,
        "clouds": 20,
        "visibility": 3000,
        "wind_speed": 1.54,
        "wind_deg": 320,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1611003600,
        "temp": 22,
        "feels_like": 23.49,
        "pressure": 1011,
        "humidity": 88,
        "dew_point": 19.92,
        "clouds": 20,
        "visibility": 3000,
        "wind_speed": 3.09,
        "wind_deg": 360,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1611007200,
        "temp": 22,
        "feels_like": 24.14,
        "pressure": 1010,
        "humidity": 83,
        "dew_point": 18.98,
        "clouds": 20,
        "visibility": 3000,
        "wind_speed": 1.54,
        "wind_deg": 350,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1611010800,
        "temp": 21,
        "feels_like": 22.76,
        "pressure": 1011,
        "humidity": 88,
        "dew_point": 18.94,
        "clouds": 20,
        "visibility": 3000,
        "wind_speed": 2.06,
        "wind_deg": 360,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      }
    ]
  },
  {
    "lat": 11.0522,
    "lon": 78.4085,
    "timezone": "Asia/Kolkata",
    "timezone_offset": 19800,
    "current": {
      "dt": 1610885391,
      "sunrise": 1610845773,
      "sunset": 1610887372,
      "temp": 28,
      "feels_like": 29.2,
      "pressure": 1010,
      "humidity": 65,
      "dew_point": 20.81,
      "uvi": 9.97,
      "clouds": 20,
      "visibility": 5000,
      "wind_speed": 4.12,
      "wind_deg": 90,
      "weather": [
        {
          "id": 721,
          "main": "Haze",
          "description": "haze",
          "icon": "50d"
        }
      ]
    },
    "hourly": [
      {
        "dt": 1610841600,
        "temp": 23,
        "feels_like": 25.89,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 21.98,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 2.57,
        "wind_deg": 50,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610845200,
        "temp": 23,
        "feels_like": 26.61,
        "pressure": 1011,
        "humidity": 94,
        "dew_point": 21.98,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 1.54,
        "wind_deg": 40,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610848800,
        "temp": 23,
        "feels_like": 26.97,
        "pressure": 1012,
        "humidity": 94,
        "dew_point": 21.98,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 1.03,
        "wind_deg": 40,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610852400,
        "temp": 24,
        "feels_like": 25.76,
        "pressure": 1012,
        "humidity": 88,
        "dew_point": 21.89,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 4.12,
        "wind_deg": 70,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610856000,
        "temp": 26,
        "feels_like": 27.38,
        "pressure": 1013,
        "humidity": 78,
        "dew_point": 21.87,
        "clouds": 40,
        "visibility": 2500,
        "wind_speed": 4.63,
        "wind_deg": 70,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610859600,
        "temp": 28,
        "feels_like": 29.7,
        "pressure": 1013,
        "humidity": 69,
        "dew_point": 21.78,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 4.12,
        "wind_deg": 40,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610863200,
        "temp": 29,
        "feels_like": 30.68,
        "pressure": 1012,
        "humidity": 65,
        "dew_point": 21.75,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 4.12,
        "wind_deg": 70,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610866800,
        "temp": 29,
        "feels_like": 30.68,
        "pressure": 1011,
        "humidity": 65,
        "dew_point": 21.75,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 4.12,
        "wind_deg": 80,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610870400,
        "temp": 30,
        "feels_like": 31.77,
        "pressure": 1010,
        "humidity": 62,
        "dew_point": 21.92,
        "clouds": 40,
        "visibility": 4000,
        "wind_speed": 4.12,
        "wind_deg": 70,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610874000,
        "temp": 30,
        "feels_like": 31.77,
        "pressure": 1009,
        "humidity": 62,
        "dew_point": 21.92,
        "clouds": 40,
        "visibility": 5000,
        "wind_speed": 4.12,
        "wind_deg": 90,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610877600,
        "temp": 29,
        "feels_like": 30.68,
        "pressure": 1009,
        "humidity": 65,
        "dew_point": 21.75,
        "clouds": 40,
        "visibility": 5000,
        "wind_speed": 4.12,
        "wind_deg": 70,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610881200,
        "temp": 29,
        "feels_like": 30.32,
        "pressure": 1009,
        "humidity": 65,
        "dew_point": 21.75,
        "clouds": 20,
        "visibility": 5000,
        "wind_speed": 4.63,
        "wind_deg": 80,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610884800,
        "temp": 28,
        "feels_like": 29.2,
        "pressure": 1010,
        "humidity": 65,
        "dew_point": 20.81,
        "clouds": 20,
        "visibility": 5000,
        "wind_speed": 4.12,
        "wind_deg": 90,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610888400,
        "temp": 26,
        "feels_like": 27.91,
        "pressure": 1010,
        "humidity": 73,
        "dew_point": 20.79,
        "clouds": 20,
        "visibility": 4000,
        "wind_speed": 3.09,
        "wind_deg": 90,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610892000,
        "temp": 26,
        "feels_like": 26.83,
        "pressure": 1011,
        "humidity": 73,
        "dew_point": 20.79,
        "clouds": 20,
        "visibility": 3500,
        "wind_speed": 4.63,
        "wind_deg": 80,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610895600,
        "temp": 25,
        "feels_like": 26.77,
        "pressure": 1013,
        "humidity": 83,
        "dew_point": 21.91,
        "clouds": 40,
        "visibility": 3500,
        "wind_speed": 4.12,
        "wind_deg": 70,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610899200,
        "temp": 24,
        "feels_like": 25.76,
        "pressure": 1014,
        "humidity": 88,
        "dew_point": 21.89,
        "clouds": 40,
        "visibility": 3500,
        "wind_speed": 4.12,
        "wind_deg": 50,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610902800,
        "temp": 24,
        "feels_like": 26.84,
        "pressure": 1014,
        "humidity": 88,
        "dew_point": 21.89,
        "clouds": 40,
        "visibility": 3500,
        "wind_speed": 2.57,
        "wind_deg": 10,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610906400,
        "temp": 22,
        "feels_like": 23.49,
        "pressure": 1013,
        "humidity": 88,
        "dew_point": 19.92,
        "clouds": 20,
        "visibility": 3500,
        "wind_speed": 3.09,
        "wind_deg": 360,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610910000,
        "temp": 22,
        "feels_like": 23.49,
        "pressure": 1013,
        "humidity": 88,
        "dew_point": 19.92,
        "clouds": 20,
        "visibility": 3500,
        "wind_speed": 3.09,
        "wind_deg": 10,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610913600,
        "temp": 22,
        "feels_like": 23.49,
        "pressure": 1012,
        "humidity": 88,
        "dew_point": 19.92,
        "clouds": 20,
        "visibility": 3500,
        "wind_speed": 3.09,
        "wind_deg": 10,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610917200,
        "temp": 22,
        "feels_like": 23.49,
        "pressure": 1011,
        "humidity": 88,
        "dew_point": 19.92,
        "clouds": 20,
        "visibility": 3000,
        "wind_speed": 3.09,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610920800,
        "temp": 21,
        "feels_like": 23.25,
        "pressure": 1011,
        "humidity": 94,
        "dew_point": 20,
        "clouds": 20,
        "visibility": 3000,
        "wind_speed": 2.06,
        "wind_deg": 10,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610924400,
        "temp": 21,
        "feels_like": 23.25,
        "pressure": 1011,
        "humidity": 94,
        "dew_point": 20,
        "clouds": 20,
        "visibility": 3000,
        "wind_speed": 2.06,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      }
    ]
  },
  {
    "lat": 11.0522,
    "lon": 78.4085,
    "timezone": "Asia/Kolkata",
    "timezone_offset": 19800,
    "current": {
      "dt": 1610798991,
      "sunrise": 1610759363,
      "sunset": 1610800941,
      "temp": 28,
      "feels_like": 31.54,
      "pressure": 1009,
      "humidity": 78,
      "dew_point": 23.8,
      "uvi": 10.33,
      "clouds": 75,
      "visibility": 4000,
      "wind_speed": 3.09,
      "wind_deg": 110,
      "weather": [
        {
          "id": 721,
          "main": "Haze",
          "description": "haze",
          "icon": "50d"
        }
      ]
    },
    "hourly": [
      {
        "dt": 1610755200,
        "temp": 23,
        "feels_like": 25.89,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 21.98,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 2.57,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610758800,
        "temp": 23,
        "feels_like": 26.61,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 21.98,
        "clouds": 40,
        "visibility": 1500,
        "wind_speed": 1.54,
        "wind_deg": 10,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610762400,
        "temp": 23,
        "feels_like": 26.25,
        "pressure": 1011,
        "humidity": 94,
        "dew_point": 21.98,
        "clouds": 40,
        "visibility": 1500,
        "wind_speed": 2.06,
        "wind_deg": 10,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610766000,
        "temp": 24,
        "feels_like": 26.48,
        "pressure": 1012,
        "humidity": 88,
        "dew_point": 21.89,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 3.09,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610769600,
        "temp": 24,
        "feels_like": 24.55,
        "pressure": 1012,
        "humidity": 83,
        "dew_point": 20.93,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 5.14,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610773200,
        "temp": 24,
        "feels_like": 24.55,
        "pressure": 1012,
        "humidity": 83,
        "dew_point": 20.93,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 5.14,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610776800,
        "temp": 29,
        "feels_like": 29.97,
        "pressure": 1011,
        "humidity": 65,
        "dew_point": 21.75,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 5.14,
        "wind_deg": 70,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610780400,
        "temp": 29,
        "feels_like": 29.97,
        "pressure": 1011,
        "humidity": 65,
        "dew_point": 21.75,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 5.14,
        "wind_deg": 70,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610784000,
        "temp": 30,
        "feels_like": 31.77,
        "pressure": 1009,
        "humidity": 62,
        "dew_point": 21.92,
        "clouds": 40,
        "visibility": 4000,
        "wind_speed": 4.12,
        "wind_deg": 70,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610787600,
        "temp": 30,
        "feels_like": 32.33,
        "pressure": 1008,
        "humidity": 66,
        "dew_point": 22.95,
        "clouds": 40,
        "visibility": 4000,
        "wind_speed": 4.12,
        "wind_deg": 50,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610791200,
        "temp": 30,
        "feels_like": 32.33,
        "pressure": 1008,
        "humidity": 66,
        "dew_point": 22.95,
        "clouds": 40,
        "visibility": 4000,
        "wind_speed": 4.12,
        "wind_deg": 70,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610794800,
        "temp": 29,
        "feels_like": 30.62,
        "pressure": 1008,
        "humidity": 70,
        "dew_point": 22.97,
        "clouds": 40,
        "visibility": 4000,
        "wind_speed": 5.14,
        "wind_deg": 110,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610798400,
        "temp": 28,
        "feels_like": 31.54,
        "pressure": 1009,
        "humidity": 78,
        "dew_point": 23.8,
        "clouds": 75,
        "visibility": 4000,
        "wind_speed": 3.09,
        "wind_deg": 110,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610802000,
        "temp": 27,
        "feels_like": 30.57,
        "pressure": 1009,
        "humidity": 83,
        "dew_point": 23.86,
        "clouds": 75,
        "visibility": 3500,
        "wind_speed": 3.09,
        "wind_deg": 110,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610805600,
        "temp": 27,
        "feels_like": 30.57,
        "pressure": 1010,
        "humidity": 83,
        "dew_point": 23.86,
        "clouds": 75,
        "visibility": 3500,
        "wind_speed": 3.09,
        "wind_deg": 100,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610809200,
        "temp": 26,
        "feels_like": 27.94,
        "pressure": 1011,
        "humidity": 83,
        "dew_point": 22.89,
        "clouds": 75,
        "visibility": 3500,
        "wind_speed": 4.63,
        "wind_deg": 90,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610812800,
        "temp": 25,
        "feels_like": 27.29,
        "pressure": 1011,
        "humidity": 88,
        "dew_point": 22.87,
        "clouds": 75,
        "visibility": 3500,
        "wind_speed": 4.12,
        "wind_deg": 90,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610816400,
        "temp": 25,
        "feels_like": 28.01,
        "pressure": 1012,
        "humidity": 88,
        "dew_point": 22.87,
        "clouds": 75,
        "visibility": 3500,
        "wind_speed": 3.09,
        "wind_deg": 80,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610820000,
        "temp": 25,
        "feels_like": 28.73,
        "pressure": 1011,
        "humidity": 88,
        "dew_point": 22.87,
        "clouds": 75,
        "visibility": 3500,
        "wind_speed": 2.06,
        "wind_deg": 90,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610823600,
        "temp": 25,
        "feels_like": 28.73,
        "pressure": 1011,
        "humidity": 88,
        "dew_point": 22.87,
        "clouds": 40,
        "visibility": 3500,
        "wind_speed": 2.06,
        "wind_deg": 60,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610827200,
        "temp": 24,
        "feels_like": 27.43,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 22.97,
        "clouds": 40,
        "visibility": 3500,
        "wind_speed": 2.57,
        "wind_deg": 30,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610830800,
        "temp": 24,
        "feels_like": 26.84,
        "pressure": 1010,
        "humidity": 88,
        "dew_point": 21.89,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 2.57,
        "wind_deg": 50,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610834400,
        "temp": 24,
        "feels_like": 26.84,
        "pressure": 1010,
        "humidity": 88,
        "dew_point": 21.89,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 2.57,
        "wind_deg": 50,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610838000,
        "temp": 23,
        "feels_like": 26.08,
        "pressure": 1010,
        "humidity": 100,
        "dew_point": 23,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 3.09,
        "wind_deg": 60,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      }
    ]
  },
  {
    "lat": 11.0522,
    "lon": 78.4085,
    "timezone": "Asia/Kolkata",
    "timezone_offset": 19800,
    "current": {
      "dt": 1610712591,
      "sunrise": 1610672952,
      "sunset": 1610714511,
      "temp": 27,
      "feels_like": 30.94,
      "pressure": 1009,
      "humidity": 83,
      "dew_point": 23.86,
      "uvi": 10.09,
      "clouds": 90,
      "visibility": 4000,
      "wind_speed": 2.57,
      "wind_deg": 50,
      "weather": [
        {
          "id": 701,
          "main": "Mist",
          "description": "mist",
          "icon": "50d"
        }
      ]
    },
    "hourly": [
      {
        "dt": 1610668800,
        "temp": 24,
        "feels_like": 27.43,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 22.97,
        "clouds": 90,
        "visibility": 2500,
        "wind_speed": 2.57,
        "wind_deg": 360,
        "weather": [
          {
            "id": 301,
            "main": "Drizzle",
            "description": "drizzle",
            "icon": "09n"
          }
        ]
      },
      {
        "dt": 1610672400,
        "temp": 23,
        "feels_like": 26.45,
        "pressure": 1011,
        "humidity": 100,
        "dew_point": 23,
        "clouds": 90,
        "visibility": 1500,
        "wind_speed": 2.57,
        "wind_deg": 70,
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
          }
        ],
        "rain": {
          "1h": 1.5
        }
      },
      {
        "dt": 1610676000,
        "temp": 23,
        "feels_like": 26.08,
        "pressure": 1012,
        "humidity": 100,
        "dew_point": 23,
        "clouds": 90,
        "visibility": 800,
        "wind_speed": 3.09,
        "wind_deg": 110,
        "weather": [
          {
            "id": 502,
            "main": "Rain",
            "description": "heavy intensity rain",
            "icon": "10d"
          }
        ],
        "rain": {
          "1h": 8
        }
      },
      {
        "dt": 1610679600,
        "temp": 23,
        "feels_like": 26.61,
        "pressure": 1013,
        "humidity": 94,
        "dew_point": 21.98,
        "clouds": 90,
        "visibility": 2500,
        "wind_speed": 1.54,
        "wind_deg": 140,
        "weather": [
          {
            "id": 301,
            "main": "Drizzle",
            "description": "drizzle",
            "icon": "09d"
          }
        ]
      },
      {
        "dt": 1610683200,
        "temp": 23,
        "feels_like": 26.61,
        "pressure": 1013,
        "humidity": 94,
        "dew_point": 21.98,
        "clouds": 90,
        "visibility": 2500,
        "wind_speed": 1.54,
        "wind_deg": 60,
        "weather": [
          {
            "id": 300,
            "main": "Drizzle",
            "description": "light intensity drizzle",
            "icon": "09d"
          }
        ]
      },
      {
        "dt": 1610686800,
        "temp": 23,
        "feels_like": 24.45,
        "pressure": 1013,
        "humidity": 94,
        "dew_point": 21.98,
        "clouds": 90,
        "visibility": 2500,
        "wind_speed": 4.63,
        "wind_deg": 80,
        "weather": [
          {
            "id": 301,
            "main": "Drizzle",
            "description": "drizzle",
            "icon": "09d"
          }
        ]
      },
      {
        "dt": 1610690400,
        "temp": 24,
        "feels_like": 27.2,
        "pressure": 1012,
        "humidity": 88,
        "dew_point": 21.89,
        "clouds": 90,
        "visibility": 2500,
        "wind_speed": 2.06,
        "wind_deg": 50,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610694000,
        "temp": 24,
        "feels_like": 27.2,
        "pressure": 1011,
        "humidity": 88,
        "dew_point": 21.89,
        "clouds": 90,
        "visibility": 4000,
        "wind_speed": 2.06,
        "wind_deg": 350,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610697600,
        "temp": 25,
        "feels_like": 27.49,
        "pressure": 1010,
        "humidity": 83,
        "dew_point": 21.91,
        "clouds": 90,
        "visibility": 4000,
        "wind_speed": 3.09,
        "wind_deg": 30,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610701200,
        "temp": 26,
        "feels_like": 30.23,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 24.96,
        "clouds": 90,
        "visibility": 4000,
        "wind_speed": 3.09,
        "wind_deg": 50,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610704800,
        "temp": 26,
        "feels_like": 29.68,
        "pressure": 1009,
        "humidity": 89,
        "dew_point": 24.04,
        "clouds": 90,
        "visibility": 4000,
        "wind_speed": 3.09,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610708400,
        "temp": 26,
        "feels_like": 30.6,
        "pressure": 1009,
        "humidity": 94,
        "dew_point": 24.96,
        "clouds": 90,
        "visibility": 4000,
        "wind_speed": 2.57,
        "wind_deg": 30,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610712000,
        "temp": 27,
        "feels_like": 30.94,
        "pressure": 1009,
        "humidity": 83,
        "dew_point": 23.86,
        "clouds": 90,
        "visibility": 4000,
        "wind_speed": 2.57,
        "wind_deg": 50,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610715600,
        "temp": 26,
        "feels_like": 30.76,
        "pressure": 1010,
        "humidity": 89,
        "dew_point": 24.04,
        "clouds": 90,
        "visibility": 3500,
        "wind_speed": 1.54,
        "wind_deg": 30,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610719200,
        "temp": 26,
        "feels_like": 28.96,
        "pressure": 1011,
        "humidity": 89,
        "dew_point": 24.04,
        "clouds": 75,
        "visibility": 3500,
        "wind_speed": 4.12,
        "wind_deg": 290,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610722800,
        "temp": 25,
        "feels_like": 29.72,
        "pressure": 1011,
        "humidity": 94,
        "dew_point": 23.97,
        "clouds": 75,
        "visibility": 3500,
        "wind_speed": 1.54,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610726400,
        "temp": 25,
        "feels_like": 30.08,
        "pressure": 1012,
        "humidity": 94,
        "dew_point": 23.97,
        "clouds": 75,
        "visibility": 3500,
        "wind_speed": 1.03,
        "wind_deg": 10,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610730000,
        "temp": 25,
        "feels_like": 29.29,
        "pressure": 1011,
        "humidity": 94,
        "dew_point": 23.97,
        "clouds": 75,
        "visibility": 3500,
        "wind_speed": 2.16,
        "wind_deg": 79,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610733600,
        "temp": 25,
        "feels_like": 29.45,
        "pressure": 1011,
        "humidity": 88,
        "dew_point": 22.87,
        "clouds": 75,
        "visibility": 3500,
        "wind_speed": 1.03,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610737200,
        "temp": 25,
        "feels_like": 29.45,
        "pressure": 1010,
        "humidity": 88,
        "dew_point": 22.87,
        "clouds": 75,
        "visibility": 3500,
        "wind_speed": 1.03,
        "wind_deg": 40,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610740800,
        "temp": 24,
        "feels_like": 28.15,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 22.97,
        "clouds": 40,
        "visibility": 3500,
        "wind_speed": 1.54,
        "wind_deg": 30,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610744400,
        "temp": 24,
        "feels_like": 28.15,
        "pressure": 1009,
        "humidity": 94,
        "dew_point": 22.97,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 1.54,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610748000,
        "temp": 24,
        "feels_like": 27.79,
        "pressure": 1009,
        "humidity": 94,
        "dew_point": 22.97,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 2.06,
        "wind_deg": 40,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610751600,
        "temp": 24,
        "feels_like": 26.84,
        "pressure": 1009,
        "humidity": 88,
        "dew_point": 21.89,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 2.57,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      }
    ]
  },
  {
    "lat": 11.0522,
    "lon": 78.4085,
    "timezone": "Asia/Kolkata",
    "timezone_offset": 19800,
    "current": {
      "dt": 1610626191,
      "sunrise": 1610586540,
      "sunset": 1610628080,
      "temp": 26,
      "feels_like": 28.96,
      "pressure": 1009,
      "humidity": 89,
      "dew_point": 24.04,
      "uvi": 10.13,
      "clouds": 90,
      "visibility": 4000,
      "wind_speed": 4.12,
      "wind_deg": 70,
      "weather": [
        {
          "id": 701,
          "main": "Mist",
          "description": "mist",
          "icon": "50d"
        }
      ]
    },
    "hourly": [
      {
        "dt": 1610582400,
        "temp": 23,
        "feels_like": 25.53,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 21.98,
        "clouds": 75,
        "visibility": 2500,
        "wind_speed": 3.09,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610586000,
        "temp": 23,
        "feels_like": 26.25,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 21.98,
        "clouds": 75,
        "visibility": 2500,
        "wind_speed": 2.06,
        "wind_deg": 10,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610589600,
        "temp": 24,
        "feels_like": 27.2,
        "pressure": 1011,
        "humidity": 88,
        "dew_point": 21.89,
        "clouds": 90,
        "visibility": 2000,
        "wind_speed": 2.06,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610593200,
        "temp": 23,
        "feels_like": 26.25,
        "pressure": 1012,
        "humidity": 94,
        "dew_point": 21.98,
        "clouds": 90,
        "visibility": 2000,
        "wind_speed": 2.06,
        "wind_deg": 50,
        "weather": [
          {
            "id": 301,
            "main": "Drizzle",
            "description": "drizzle",
            "icon": "09d"
          }
        ]
      },
      {
        "dt": 1610596800,
        "temp": 24,
        "feels_like": 25.76,
        "pressure": 1013,
        "humidity": 88,
        "dew_point": 21.89,
        "clouds": 75,
        "visibility": 2500,
        "wind_speed": 4.12,
        "wind_deg": 50,
        "weather": [
          {
            "id": 300,
            "main": "Drizzle",
            "description": "light intensity drizzle",
            "icon": "09d"
          }
        ]
      },
      {
        "dt": 1610600400,
        "temp": 26,
        "feels_like": 27.03,
        "pressure": 1012,
        "humidity": 78,
        "dew_point": 21.87,
        "clouds": 75,
        "visibility": 3000,
        "wind_speed": 5.14,
        "wind_deg": 50,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610604000,
        "temp": 26,
        "feels_like": 28.24,
        "pressure": 1012,
        "humidity": 89,
        "dew_point": 24.04,
        "clouds": 75,
        "visibility": 3000,
        "wind_speed": 5.14,
        "wind_deg": 70,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610607600,
        "temp": 26,
        "feels_like": 28.24,
        "pressure": 1012,
        "humidity": 89,
        "dew_point": 24.04,
        "clouds": 75,
        "visibility": 3000,
        "wind_speed": 5.14,
        "wind_deg": 70,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610611200,
        "temp": 28,
        "feels_like": 30.81,
        "pressure": 1010,
        "humidity": 78,
        "dew_point": 23.8,
        "clouds": 75,
        "visibility": 4000,
        "wind_speed": 4.12,
        "wind_deg": 50,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610614800,
        "temp": 29,
        "feels_like": 31.87,
        "pressure": 1009,
        "humidity": 74,
        "dew_point": 23.89,
        "clouds": 90,
        "visibility": 4000,
        "wind_speed": 4.12,
        "wind_deg": 20,
        "weather": [
          {
            "id": 301,
            "main": "Drizzle",
            "description": "drizzle",
            "icon": "09d"
          }
        ],
        "rain": {
          "1h": 0.35
        }
      },
      {
        "dt": 1610618400,
        "temp": 28,
        "feels_like": 31.9,
        "pressure": 1008,
        "humidity": 78,
        "dew_point": 23.8,
        "clouds": 90,
        "visibility": 4000,
        "wind_speed": 2.57,
        "wind_deg": 50,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610622000,
        "temp": 28,
        "feels_like": 32.16,
        "pressure": 1009,
        "humidity": 83,
        "dew_point": 24.84,
        "clouds": 90,
        "visibility": 4000,
        "wind_speed": 3.09,
        "wind_deg": 60,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610625600,
        "temp": 26,
        "feels_like": 28.96,
        "pressure": 1009,
        "humidity": 89,
        "dew_point": 24.04,
        "clouds": 90,
        "visibility": 4000,
        "wind_speed": 4.12,
        "wind_deg": 70,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
          }
        ]
      },
      {
        "dt": 1610629200,
        "temp": 26,
        "feels_like": 30.76,
        "pressure": 1010,
        "humidity": 89,
        "dew_point": 24.04,
        "clouds": 90,
        "visibility": 4000,
        "wind_speed": 1.54,
        "wind_deg": 10,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610632800,
        "temp": 26,
        "feels_like": 30.04,
        "pressure": 1011,
        "humidity": 89,
        "dew_point": 24.04,
        "clouds": 90,
        "visibility": 4000,
        "wind_speed": 2.57,
        "wind_deg": 30,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610636400,
        "temp": 25,
        "feels_like": 29,
        "pressure": 1011,
        "humidity": 94,
        "dew_point": 23.97,
        "clouds": 75,
        "visibility": 3500,
        "wind_speed": 2.57,
        "wind_deg": 20,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610640000,
        "temp": 25,
        "feels_like": 29,
        "pressure": 1012,
        "humidity": 94,
        "dew_point": 23.97,
        "clouds": 75,
        "visibility": 3000,
        "wind_speed": 2.57,
        "wind_deg": 30,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610643600,
        "temp": 24,
        "feels_like": 28.38,
        "pressure": 1012,
        "humidity": 100,
        "dew_point": 24,
        "clouds": 75,
        "visibility": 3000,
        "wind_speed": 2.06,
        "wind_deg": 30,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610647200,
        "temp": 24,
        "feels_like": 27.43,
        "pressure": 1011,
        "humidity": 94,
        "dew_point": 22.97,
        "clouds": 75,
        "visibility": 3000,
        "wind_speed": 2.57,
        "wind_deg": 50,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610650800,
        "temp": 24,
        "feels_like": 27.79,
        "pressure": 1011,
        "humidity": 94,
        "dew_point": 22.97,
        "clouds": 75,
        "visibility": 3000,
        "wind_speed": 2.06,
        "wind_deg": 70,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610654400,
        "temp": 24,
        "feels_like": 27.43,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 22.97,
        "clouds": 75,
        "visibility": 3000,
        "wind_speed": 2.57,
        "wind_deg": 50,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610658000,
        "temp": 24,
        "feels_like": 27.43,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 22.97,
        "clouds": 75,
        "visibility": 3000,
        "wind_speed": 2.57,
        "wind_deg": 70,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610661600,
        "temp": 24,
        "feels_like": 28.15,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 22.97,
        "clouds": 75,
        "visibility": 3000,
        "wind_speed": 1.54,
        "wind_deg": 40,
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
          }
        ]
      },
      {
        "dt": 1610665200,
        "temp": 24,
        "feels_like": 28.15,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 22.97,
        "clouds": 90,
        "visibility": 3000,
        "wind_speed": 1.54,
        "wind_deg": 340,
        "weather": [
          {
            "id": 300,
            "main": "Drizzle",
            "description": "light intensity drizzle",
            "icon": "09n"
          }
        ]
      }
    ]
  }
]

export const WEATHER_APP_MOCK_RESPONSE = {
  COUNTRIES_LIST : countriesList,
  STATES_FOR_A_COUNTRY: statesForACountryList,
  CITIES_FOR_A_STATE: citiesInAState,
  LAT_LONG_FOR_COUNTRY_STATE_CITY: latLongForCountryStateCity,
  WEATHER_INFO_FOR_LAT_LONG: weatherInfoForLatLong,
  PAST_FIVE_DAYS_FORECAST: pastFiveDaysForecastInfo
}