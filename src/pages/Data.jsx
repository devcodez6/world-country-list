const countries = [	
{
id:0,	
name:	"Afghanistan",
region:	"Asia",
area:	652230,
independent:	false,
},
{id:1,	
name:	"Åland Islands",
region:	"Europe",
area:	1580,
independent:	false},
{id:2,	
name:	"Albania",
region:	"Europe",
area:	28748,
independent:	false,
},
{id:3,	
name:	"Algeria",
region:	"Africa",
area:	2381741,
independent:	false,
},
{id:4,
name:	"American Samoa",
region:	"Oceania",
area:	199,
independent:	false,
},
{id:5,	
name:	"Andorra",
region:	"Europe",
area:	468,
independent:	false,
},
{id:6,	
name:	"Angola",
region:	"Africa",
area:	1246700,
independent:	false,
},
{id:7,	
name:	"Anguilla",
region:	"Americas",
area:	91,
independent:	false,
},
{id:8,
name:	"Antarctica",
region:	"Polar",
area:	14000000,
independent:	false,
},
{id:9,	
name:	"Antigua and Barbuda",
region:	"Americas",
area:	442,
independent:	false,
},
{id:10,	
name:	"Argentina",
region:	"Americas",
area:	2780400,
independent:	false,
},
{id:11,	
name:	"Armenia",
region:	"Asia",
area:	29743,
independent:	false,
},
{id:12,	
name:	"Aruba",
region:	"Americas",
area:	180,
independent:	false,
},
{id:13,	
name:	"Australia",
region:	"Oceania",
area:	7692024,
independent:	false,
},
{id:14,	
name:	"Austria",
region:	"Europe",
area:	83871,
independent:	false,
},
{id:15,	
name:	"Azerbaijan",
region:	"Asia",
area:	86600,
independent:	false,
},
{id:16,	
name:	"Bahamas",
region:	"Americas",
area:	13943,
independent:	false,
},
{id:17,	
name:	"Bahrain",
region:	"Asia",
area:	765,
independent:	false,
},
{id:18,	
name:	"Bangladesh",
region:	"Asia",
area:	147570,
independent:	false,
},
{id:19,	
name:	"Barbados",
region:	"Americas",
area:	430,
independent:	false,},
{id:20,	
name:	"Belarus",
region:	"Europe",
area:	207600,
independent:	false,
},
{id:21,	
name:	"Belgium",
region:	"Europe",
area:	30528,
independent:	false,
},
{id:22,	
name:	"Belize",
region:	"Americas",
area:	22966,
independent:	false,
},
{id:23,	
name:	"Benin",
region:	"Africa",
area:	112622,
independent:	false,
},
{id:24,	
name:	"Bermuda",
region:	"Americas",
area:	54,
independent:	false,
},
{id:25,	
name:	"Bhutan"
region:	"Asia"
area:	38394
independent:	false},
{26	
name:	"Bolivia (Plurinational State of)"
region:	"Americas"
area:	1098581
independent:	false},
{27	
name:	"Bonaire, Sint Eustatius and Saba"
region:	"Americas"
area:	294
independent:	false},
{28	
name:	"Bosnia and Herzegovina"
region:	"Europe"
area:	51209
independent:	false},
{29	
name:	"Botswana"
region:	"Africa"
area:	582000
independent:	false},
{30	
name:	"Bouvet Island"
region:	"Antarctic Ocean"
area:	49
independent:	false},
{31	
name:	"Brazil"
region:	"Americas"
area:	8515767
independent:	false},
{32	
name:	"British Indian Ocean Territory"
region:	"Africa"
area:	60
independent:	false},
{33	
name:	"United States Minor Outlying Islands"
region:	"Americas"
independent:	false},
{34	
name:	"Virgin Islands (British)"
region:	"Americas"
area:	151
independent:	false},
{35	
name:	"Virgin Islands (U.S.)"
region:	"Americas"
area:	346.36
independent:	false},
{36	
name:	"Brunei Darussalam"
region:	"Asia"
area:	5765
independent:	false},
{37	
name:	"Bulgaria"
region:	"Europe"
area:	110879
independent:	false},
{38	
name:	"Burkina Faso"
region:	"Africa"
area:	272967
independent:	false},
{39	
name:	"Burundi"
region:	"Africa"
area:	27834
independent:	false},
{40	
name:	"Cambodia"
region:	"Asia"
area:	181035
independent:	false},
{41	
name:	"Cameroon"
region:	"Africa"
area:	475442
independent:	false},
{42	
name:	"Canada"
region:	"Americas"
area:	9984670
independent:	false},
{43	
name:	"Cabo Verde"
region:	"Africa"
area:	4033
independent:	false},
{44	
name:	"Cayman Islands"
region:	"Americas"
area:	264
independent:	false},
{45	
name:	"Central African Republic"
region:	"Africa"
area:	622984
independent:	false},
{46	
name:	"Chad"
region:	"Africa"
area:	1284000
independent:	false},
{47	
name:	"Chile"
region:	"Americas"
area:	756102
independent:	false},
{48	
name:	"China"
region:	"Asia"
area:	9640011
independent:	false},
{49	
name:	"Christmas Island"
region:	"Oceania"
area:	135
independent:	false},
{50	
name:	"Cocos (Keeling) Islands"
region:	"Oceania"
area:	14
independent:	false},
{51	
name:	"Colombia"
region:	"Americas"
area:	1141748
independent:	false},
{52	
name:	"Comoros"
region:	"Africa"
area:	1862
independent:	false},
{53	
name:	"Congo"
region:	"Africa"
area:	342000
independent:	false},
{54	
name:	"Congo (Democratic Republic of the)"
region:	"Africa"
area:	2344858
independent:	false},
{55	
name:	"Cook Islands"
region:	"Oceania"
area:	236
independent:	false},
{56	
name:	"Costa Rica"
region:	"Americas"
area:	51100
independent:	false},
{57	
name:	"Croatia"
region:	"Europe"
area:	56594
independent:	false},
{58	
name:	"Cuba"
region:	"Americas"
area:	109884
independent:	false},
{59	
name:	"Curaçao"
region:	"Americas"
area::	444
independent:	false},
{60	
name:	"Cyprus"
region:	"Europe"
area:	9251
independent:	false},
{61	
name:	"Czech Republic"
region:	"Europe"
area:	78865
independent:	false},
{62	
name:	"Denmark"
region:	"Europe"
area:	43094
independent:	false},
{63	
name:	"Djibouti"
region:	"Africa"
area:	23200
independent:	false},
{64	
name:	"Dominica"
region:	"Americas"
area:	751
independent:	false},
{65	
name:	"Dominican Republic"
region:	"Americas"
area:	48671
independent:	false},
{66	
name:	"Ecuador"
region:	"Americas"
area:	276841
independent:	false},
{67	
name:	"Egypt"
region:	"Africa"
area:	1002450
independent:	false},
{68	
name:	"El Salvador"
region:	"Americas"
area:	21041
independent:	false},
{69	
name:	"Equatorial Guinea"
region:	"Africa"
area:	28051
independent:	false},
{70	
name:	"Eritrea"
region:	"Africa"
area:	117600
independent:	false},
{71	
name:	"Estonia"
region:	"Europe"
area:	45227
independent:	false},
{72	
name:	"Ethiopia"
region:	"Africa"
area:	1104300
independent:	false},
{73	
name:	"Falkland Islands (Malvinas)"
region:	"Americas"
area:	12173
independent:	false},
{74	
name:	"Faroe Islands"
region:	"Europe"
area:	1393
independent:	false},
{75	
name:	"Fiji"
region:	"Oceania"
area:	18272
independent:	false},
{76	
name:	"Finland"
region:	"Europe"
area:	338424
independent:	false},
{77	
name:	"France"
region:	"Europe"
area:	640679
independent:	false},
{78	
name:	"French Guiana"
region:	"Americas"
independent:	false},
{79	
name:	"French Polynesia"
region:	"Oceania"
area:	4167
independent:	false},
{80	
name:	"French Southern Territories"
region:	"Africa"
area:	7747
independent:	false},
{81	
name:	"Gabon"
region:	"Africa"
area:	267668
independent:	false},
{82	
name:	"Gambia"
region:	"Africa"
area:	11295
independent:	false},
{83	
name:	"Georgia"
region:	"Asia"
area:	69700
independent:	false},
{84	
name:	"Germany"
region:	"Europe"
area:	357114
independent:	false},
{85	
name:	"Ghana"
region:	"Africa"
area:	238533
independent:	false},
{86	
name:	"Gibraltar"
region:	"Europe"
area:	6
independent:	false},
{87	
name:	"Greece"
region:	"Europe"
area	131990
independent	false},
{88	
name	"Greenland"
region	"Americas"
area	2166086
independent	false},
{89	
name	"Grenada"
region	"Americas"
area	344
independent	false},
{90	
name	"Guadeloupe"
region	"Americas"
independent	false},
{91	
name	"Guam"
region	"Oceania"
area	549
independent	false},
{92	
name	"Guatemala"
region	"Americas"
area	108889
independent	false},
{93	
name	"Guernsey"
region	"Europe"
area	78
independent	false},
{94	
name	"Guinea"
region	"Africa"
area	245857
independent	false},
{95	
name	"Guinea-Bissau"
region	"Africa"
area	36125
independent	false},
{96	
name	"Guyana"
region	"Americas"
area	214969
independent	false},
{97	
name	"Haiti"
region	"Americas"
area	27750
independent	false},
{98	
name	"Heard Island and McDonald Islands"
region	"Antarctic"
area	412
independent	false},
{99	
name	"Vatican City"
region	"Europe"
area	0.44
independent	false},
{100	
name	"Honduras"
region	"Americas"
area	112492
independent	false},
{101	
name	"Hungary"
region	"Europe"
area	93028
independent	false},
{102	
name	"Hong Kong"
region	"Asia"
area	1104
independent	false},
{103	
name	"Iceland"
region	"Europe"
area	103000
independent	false},
{104	
name	"India"
region	"Asia"
area	3287590
independent	false},
{105	
name	"Indonesia"
region	"Asia"
area	1904569
independent	false},
{106	
name	"Ivory Coast"
region	"Africa"
area	322463
independent	false},
{107	
name	"Iran (Islamic Republic of)"
region	"Asia"
area	1648195
independent	false},
{108	
name	"Iraq"
region	"Asia"
area	438317
independent	false},
{109	
name	"Ireland"
region	"Europe"
area	70273
independent	false},
{110	
name	"Isle of Man"
region	"Europe"
area	572
independent	false},
{111	
name	"Israel"
region	"Asia"
area	20770
independent	false},
{112	
name	"Italy"
region	"Europe"
area	301336
independent	false},
{113	
name	"Jamaica"
region	"Americas"
area	10991
independent	false},
{114	
name	"Japan"
region	"Asia"
area	377930
independent	false},
{115	
name	"Jersey"
region	"Europe"
area	116
independent	false},
{116	
name	"Jordan"
region	"Asia"
area	89342
independent	false},
{117	
name	"Kazakhstan"
region	"Asia"
area	2724900
independent	false},
{118	
name	"Kenya"
region	"Africa"
area	580367
independent	false},
{119	
name	"Kiribati"
region	"Oceania"
area	811
independent	false},
{120	
name	"Kuwait"
region	"Asia"
area	17818
independent	false},
{121	
name	"Kyrgyzstan"
region	"Asia"
area	199951
independent	false},
{122	
name	"Lao People's Democratic Republic"
region	"Asia"
area	236800
independent	false},
{123	
name	"Latvia"
region	"Europe"
area	64559
independent	false},
{124	
name	"Lebanon"
region	"Asia"
area	10452
independent	false},
{125	
name	"Lesotho"
region	"Africa"
area	30355
independent	false},
{126	
name	"Liberia"
region	"Africa"
area	111369
independent	false},
{127	
name	"Libya"
region	"Africa"
area	1759540
independent	false},
{128	
name	"Liechtenstein"
region	"Europe"
area	160
independent	false},
{129	
name	"Lithuania"
region	"Europe"
area	65300
independent	false},
{130	
name	"Luxembourg"
region	"Europe"
area	2586
independent	false},
{131	
name	"Macao"
region	"Asia"
area	30
independent	false},
{132	
name	"North Macedonia"
region	"Europe"
area	25713
independent	false},
{133	
name	"Madagascar"
region	"Africa"
area	587041
independent	false},
{134	
name	"Malawi"
region	"Africa"
area	118484
independent	false},
{135	
name	"Malaysia"
region	"Asia"
area	330803
independent	false},
{136	
name	"Maldives"
region	"Asia"
area	300
independent	false},
{137	
name	"Mali"
region	"Africa"
area	1240192
independent	false},
{138	
name	"Malta"
region	"Europe"
area	316
independent	false},
{139	
name	"Marshall Islands"
region	"Oceania"
area	181
independent	false},
{140	
name	"Martinique"
region	"Americas"
independent	false},
{141	
name	"Mauritania"
region	"Africa"
area	1030700
independent	false},
{142	
name	"Mauritius"
region	"Africa"
area	2040
independent	false},
{143	
name	"Mayotte"
region	"Africa"
independent	false},
144	
name	"Mexico"
region	"Americas"
area	1964375
independent	{false
145	
name	"Micronesia (Federated States of)"
region	"Oceania"
area	702
independent	false},
{146	
name	"Moldova (Republic of)"
region	"Europe"
area	33846
independent	false},
{147	
name	"Monaco"
region	"Europe"
area	2.02
independent	false},
{148	
name	"Mongolia"
region	"Asia"
area	1564110
independent	false},
{149	
name	"Montenegro"
region	"Europe"
area	13812
independent	false},
{150	
name	"Montserrat"
region	"Americas"
area	102
independent	false},
{151	
name	"Morocco"
region	"Africa"
area	446550
independent	false},
{152	
name	"Mozambique"
region	"Africa"
area	801590
independent	false},
{153	
name	"Myanmar"
region	"Asia"
area	676578
independent	false},
{154	
name	"Namibia"
region	"Africa"
area	825615
independent	false},
{155	
name	"Nauru"
region	"Oceania"
area	21
independent	false},
{156	
name	"Nepal"
region	"Asia"
area	147181
independent	false},
{157	
name	"Netherlands"
region	"Europe"
area	41850
independent	false},
{158	
name	"New Caledonia"
region	"Oceania"
area	18575
independent	false},
{159	
name	"New Zealand"
region	"Oceania"
area	270467
independent	false},
{160	
name	"Nicaragua"
region	"Americas"
area	130373
independent	false},
{161	
name	"Niger"
region	"Africa"
area	1267000
independent	false},
{162	
name	"Nigeria"
region	"Africa"
area	923768
independent	false},
{163	
name	"Niue"
region	"Oceania"
area	260
independent	false},
{164	
name	"Norfolk Island"
region	"Oceania"
area	36
independent	false},
{165	
name	"Korea (Democratic People's Republic of)"
region	"Asia"
area	120538
independent	false},
{166	
name	"Northern Mariana Islands"
region	"Oceania"
area	464
independent	false},
{167	
name	"Norway"
region	"Europe"
area	323802
independent	false},
{168	
name	"Oman"
region	"Asia"
area	309500
independent	false},
{169	
name	"Pakistan"
region	"Asia"
area	881912
independent	false},
{170	
name	"Palau"
region	"Oceania"
area	459
independent	false},
{171	
name	"Palestine, State of"
region	"Asia"
independent	false
},
{172	
name	"Panama"
region	"Americas"
area	75417
independent	false},
{173	
name	"Papua New Guinea"
region	"Oceania"
area	462840
independent	false},
{174	
name	"Paraguay"
region	"Americas"
area	406752
independent	false},
{175	
name	"Peru"
region	"Americas"
area	1285216
independent	false},
{176	
name	"Philippines"
region	"Asia"
area	342353
independent	false},
{177	
name	"Pitcairn"
region	"Oceania"
area	47
independent	false},
{178	
name	"Poland"
region	"Europe"
area	312679
independent	false},
{179	
name	"Portugal"
region	"Europe"
area	92090
independent	false},
{180	
name	"Puerto Rico"
region	"Americas"
area	8870
independent	false},
{181	
name	"Qatar"
region	"Asia"
area	11586
independent	false},
{182	
name	"Republic of Kosovo"
region	"Europe"
area	10908
independent	false},
{183	
name	"Réunion"
region	"Africa"
independent	false},
{184	
name	"Romania"
region	"Europe"
area	238391
independent	false},
{185	
name	"Russian Federation"
region	"Europe"
area	17124442
independent	false},
{186	
name	"Rwanda"
region	"Africa"
area	26338
independent	false},
{187	
name	"Saint Barthélemy"
region	"Americas"
area	21
independent	false},
{188	
name	"Saint Helena, Ascension and Tristan da Cunha"
region	"Africa"
independent	false},
{189	
name	"Saint Kitts and Nevis"
region	"Americas"
area	261
independent	false},
{190	
name	"Saint Lucia"
region	"Americas"
area	616
independent	false},
{191	
name	"Saint Martin (French part)"
region	"Americas"
area	53
independent	false},
{192	
name	"Saint Pierre and Miquelon"
region	"Americas"
area	242
independent	false},
{193	
name	"Saint Vincent and the Grenadines"
region	"Americas"
area	389
independent	false},
{194	
name	"Samoa"
region	"Oceania"
area	2842
independent	false},
{195	
name	"San Marino"
region	"Europe"
area	61
independent	false},
{196	
name	"Sao Tome and Principe"
region	"Africa"
area	964
independent	false},
{197	
name	"Saudi Arabia"
region	"Asia"
area	2149690
independent	false},
{198	
name	"Senegal"
region	"Africa"
area	196722
independent	false},
{199	
name	"Serbia"
region	"Europe"
area	88361
independent	false},
{200	
name	"Seychelles"
region	"Africa"
area	452
independent	false},
{201	
name	"Sierra Leone"
region	"Africa"
area	71740
independent	false},
{202	
name	"Singapore"
region	"Asia"
area	710
independent	false},
{203	
name	"Sint Maarten (Dutch part)"
region	"Americas"
area	34
independent	false},
{204	
name	"Slovakia"
region	"Europe"
area	49037
independent	false},
{205	
name	"Slovenia"
region	"Europe"
area	20273
independent	false},
{206	
name	"Solomon Islands"
region	"Oceania"
area	28896
independent	false},
{207	
name	"Somalia"
region	"Africa"
area	637657
independent	false},
{208	
name	"South Africa"
region	"Africa"
area	1221037
independent	false},
{209	
name	"South Georgia and the South Sandwich Islands"
region	"Americas"
independent	false},
{210	
name	"Korea (Republic of)"
region	"Asia"
area	100210
independent	false},
{211	
name	"Spain"
region	"Europe"
area	505992
independent	false},
{212	
name	"Sri Lanka"
region	"Asia"
area	65610
independent	false},
{213	
name	"Sudan"
region	"Africa"
area	1886068
independent	false},
{214	
name	"South Sudan"
region	"Africa"
area	619745
independent	false},
{215	
name	"Suriname"
region	"Americas"
area	163820
independent	false},
{216	
name	"Svalbard and Jan Mayen"
region	"Europe"
independent	false},
{217	
name	"Swaziland"
region	"Africa"
area	17364
independent	false},
{218	
name	"Sweden"
region	"Europe"
area	450295
independent	false},
{219	
name	"Switzerland"
region	"Europe"
area	41284
independent	false},
{220	
name	"Syrian Arab Republic"
region	"Asia"
area	185180
independent	false},
{221	
name	"Taiwan"
region	"Asia"
area	36193
independent	false},
{222	
name	"Tajikistan"
region	"Asia"
area	143100
independent	false},
{223	
name	"Tanzania, United Republic of"
region	"Africa"
area	945087
independent	false},
{224	
name	"Thailand"
region	"Asia"
area	513120
independent	false},
{225	
name	"Timor-Leste"
region	"Asia"
area	14874
independent	false},
{226	
name	"Togo"
region	"Africa"
area	56785
independent	false},
{227	
name	"Tokelau"
region	"Oceania"
area	12
independent	false},
{228	
name	"Tonga"
region	"Oceania"
area	747
independent	false}
{229	
name	"Trinidad and Tobago"
region	"Americas"
area	5130
independent	false},
{230	
name	"Tunisia"
region	"Africa"
area	163610
independent	false},
{231	
name	"Turkey"
region	"Asia"
area	783562
independent	false},
{232	
name	"Turkmenistan"
region	"Asia"
area	488100
independent	false},
{233	
name	"Turks and Caicos Islands"
region	"Americas"
area	948
independent	false},
{234	
name	"Tuvalu"
region	"Oceania"
area	26
independent	false},
{235	
name	"Uganda"
region	"Africa"
area	241550
independent	false},
{236	
name	"Ukraine"
region	"Europe"
area	603700
independent	false},
{237	
name	"United Arab Emirates"
region	"Asia"
area	83600
independent	false},
{238	
name	"United Kingdom of Great Britain and Northern Ireland"
region	"Europe"
area	242900
independent	false},
{239	
name	"United States of America"
region	"Americas"
area	9629091
independent	false},
{240	
name	"Uruguay"
region	"Americas"
area	181034
independent	false},
{241	
name	"Uzbekistan"
region	"Asia"
area	447400
independent	false},
{242	
name	"Vanuatu"
region	"Oceania"
area	12189
independent	false},
{243	
name	"Venezuela (Bolivarian Republic of)"
region	"Americas"
area	916445
independent	false},
{244	
name	"Vietnam"
region	"Asia"
area	331212
independent	false},
{245	
name	"Wallis and Futuna"
region	"Oceania"
area	142
independent	false},
{246	
name	"Western Sahara"
region	"Africa"
area	266000
independent	false},
{247	
name	"Yemen"
region	"Asia"
area	527968
independent	false},
{248	
name	"Zambia"
region	"Africa"
area	752618
independent	false},
{249	
name	"Zimbabwe"
region	"Africa"
area	390757
independent	false},
]