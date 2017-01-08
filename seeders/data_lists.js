var db = require('./models');

var fuel = ["regular", "plus", "premium", "diesel"];
var oil = ["0W-30", "0W-40", "5W-40", "5W-30", "10W-30", "10W-40", "15W-40", "20W-50"];
var wipers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var tireBrands = ["Bridgestone", "BFGoodrich", "Michelin", "Continental", "Pirelli", "Cooper", "Dunlop", "Goodyear", "Hancook", "Hoosier", "Kumho", "Firestone", "Uniroyal", "Falken", "Sumitomo", "Nitto", "Toyo"];
var users = {
    rick: {
        email: "showmewhatyougot@getschwifty.com",
        password: "takingroyoffthegrid",
        name: "Rick Sanchez"
    },
    morty: {
        email: "geeidontknowrick@awwman.com",
        password: "summerisabitch",
        name: "Morty Smith"
    },
    michael: {
        email: "needsomeonedead@imyourguy.com",
        password: "hereigokillinagain",
        name: "Krombopulos Michael"
    }
};

var cars = {
    rick: {
        year: 2008,
        make: "infiniti",
        model: "g37",
        style: "Sport 2dr Coupe (3.7L 6cyl 6M)",
        userId: 1,
        styleDetails: {
            "make": {
                "id": 200000089,
                "name": "Infiniti",
                "niceName": "infiniti"
            },
            "model": {
                "id": "Infiniti_G37",
                "name": "G37",
                "niceName": "g37"
            },
            "engine": {
                "id": "200095293",
                "name": "Engine",
                "equipmentType": "ENGINE",
                "compressionRatio": 11.0,
                "cylinder": 6,
                "size": 3.7,
                "displacement": 3699.0,
                "configuration": "V",
                "fuelType": "premium unleaded (required)",
                "horsepower": 330,
                "torque": 270,
                "totalValves": 24,
                "manufacturerEngineCode": "VQ37VHR",
                "type": "gas",
                "code": "6VNAG3.7",
                "compressorType": "NA",
                "rpm": {
                    "horsepower": 7000,
                    "torque": 5200
                },
                "valve": {
                    "timing": "variable valve timing",
                    "gear": "double overhead camshaft"
                }
            },
            "transmission": {
                "id": "200095294",
                "name": "6M",
                "equipmentType": "TRANSMISSION",
                "transmissionType": "MANUAL",
                "numberOfSpeeds": "6"
            },
            "drivenWheels": "rear wheel drive",
            "numOfDoors": "2",
            "options": [{
                "category": "Other",
                "options": [{
                    "id": "200095269",
                    "name": "Illuminated Kick Plates",
                    "equipmentType": "OPTION",
                    "price": {
                        "baseMSRP": 330.0,
                        "baseInvoice": 270.0,
                        "estimateTmv": false
                    },
                    "manufactureOptionName": "Illuminated Kick Plates",
                    "manufactureOptionCode": "P93"
                }, {
                    "id": "200095270",
                    "name": "Trunk Mat",
                    "equipmentType": "OPTION",
                    "price": {
                        "baseMSRP": 105.0,
                        "baseInvoice": 70.0,
                        "estimateTmv": false
                    },
                    "manufactureOptionName": "Trunk Mat",
                    "manufactureOptionCode": "T95"
                }, {
                    "id": "200095254",
                    "name": "Rear Spoiler",
                    "equipmentType": "OPTION",
                    "price": {
                        "baseMSRP": 550.0,
                        "baseInvoice": 474.0,
                        "estimateTmv": false
                    },
                    "manufactureOptionName": "Rear Spoiler",
                    "manufactureOptionCode": "R10"
                }, {
                    "id": "200095252",
                    "name": "Technology Package",
                    "description": "Includes intelligent cruise control, adaptive front lighting system and pre-crash seat belts with motion sensor on brake pedal.",
                    "equipmentType": "OPTION",
                    "price": {
                        "baseMSRP": 1150.0,
                        "baseInvoice": 991.0,
                        "estimateTmv": false
                    },
                    "manufactureOptionName": "Technology Package",
                    "manufactureOptionCode": "F01"
                }, {
                    "id": "200095267",
                    "name": "4-Wheel Active Steer Package",
                    "description": "Includes front and rear active steering system.",
                    "equipmentType": "OPTION",
                    "price": {
                        "baseMSRP": 1300.0,
                        "baseInvoice": 1121.0,
                        "estimateTmv": false
                    },
                    "manufactureOptionName": "4-Wheel Active Steer Package",
                    "manufactureOptionCode": "V01"
                }, {
                    "id": "200095253",
                    "name": "Moonroof",
                    "description": "Includes power sliding glass moonroof with tilt feature and sunshade.",
                    "equipmentType": "OPTION",
                    "price": {
                        "baseMSRP": 1000.0,
                        "baseInvoice": 862.0,
                        "estimateTmv": false
                    },
                    "manufactureOptionName": "Moonroof",
                    "manufactureOptionCode": "J01"
                }, {
                    "id": "200095265",
                    "name": "Premium Package",
                    "description": "Includes power sliding glass moonroof with tilt feature and sunshade, Infiniti Studio On Wheels by Bose premium audio system with Burr Brown DAC, 3-way component front door speakers with 10-inch subwoofers and driver's audio stage mode, iPod interface system, driver's seat memory system with steering wheel and outside mirrors, steering wheel and exterior rearview mirror position synchronization, power driver's lumbar support, power tilt and telescopic steering wheel, auto-dimming rearview mirror with compass and Homelink, Bluetooth hands-free phone system, heated front seats and heated front door mirrors.",
                    "equipmentType": "OPTION",
                    "price": {
                        "baseMSRP": 3200.0,
                        "baseInvoice": 2757.0,
                        "estimateTmv": false
                    },
                    "manufactureOptionName": "Premium Package",
                    "manufactureOptionCode": "P01"
                }, {
                    "id": "200095268",
                    "name": "Body-Colored Splash Guards",
                    "equipmentType": "OPTION",
                    "price": {
                        "baseMSRP": 200.0,
                        "baseInvoice": 158.0,
                        "estimateTmv": false
                    },
                    "manufactureOptionName": "Body-Colored Splash Guards",
                    "manufactureOptionCode": "B94"
                }, {
                    "id": "200095261",
                    "name": "Navigation Package",
                    "description": "Includes Infiniti hard drive navigation system with Infiniti controller and touch screen that also includes lane guidance and building footprints, 9.3GB music hard drive and compact flash slot which replaces 6-disc in-dash CD player, XM NavTraffic real-time traffic information, voice recognition for air conditioning, audio and navigation functions and RearView monitor.",
                    "equipmentType": "OPTION",
                    "price": {
                        "baseMSRP": 2200.0,
                        "baseInvoice": 1896.0,
                        "estimateTmv": false
                    },
                    "manufactureOptionName": "Navigation Package",
                    "manufactureOptionCode": "U01"
                }, {
                    "id": "200095264",
                    "name": "Trunk Cargo Net",
                    "equipmentType": "OPTION",
                    "price": {
                        "baseMSRP": 60.0,
                        "baseInvoice": 43.0,
                        "estimateTmv": false
                    },
                    "manufactureOptionName": "Trunk Cargo Net",
                    "manufactureOptionCode": "T92"
                }]
            }],
            "colors": [{
                "category": "Interior",
                "options": [{
                    "id": "200095243",
                    "name": "Stone",
                    "equipmentType": "COLOR",
                    "manufactureOptionName": "Stone",
                    "manufactureOptionCode": "W",
                    "colorChips": {
                        "primary": {
                            "r": 151,
                            "g": 148,
                            "b": 141,
                            "hex": "97948D"
                        }
                    },
                    "fabricTypes": [{
                        "name": "FABRIC_TYPE_1",
                        "value": "leather"
                    }]
                }, {
                    "id": "200095242",
                    "name": "Graphite",
                    "equipmentType": "COLOR",
                    "manufactureOptionName": "Graphite",
                    "manufactureOptionCode": "G",
                    "colorChips": {
                        "primary": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "hex": "000000"
                        }
                    },
                    "fabricTypes": [{
                        "name": "FABRIC_TYPE_1",
                        "value": "leather"
                    }]
                }]
            }, {
                "category": "Exterior",
                "options": [{
                    "id": "200095249",
                    "name": "Ivory Pearl",
                    "equipmentType": "COLOR",
                    "manufactureOptionName": "Ivory Pearl",
                    "manufactureOptionCode": "QX1",
                    "colorChips": {
                        "primary": {
                            "r": 237,
                            "g": 237,
                            "b": 235,
                            "hex": "EDEDEB"
                        }
                    }
                }, {
                    "id": "200095251",
                    "name": "Amethyst Graphite",
                    "equipmentType": "COLOR",
                    "manufactureOptionName": "Amethyst Graphite",
                    "manufactureOptionCode": "K57",
                    "colorChips": {
                        "primary": {
                            "r": 125,
                            "g": 121,
                            "b": 125,
                            "hex": "7D797D"
                        }
                    }
                }, {
                    "id": "200095246",
                    "name": "Platinum Graphite",
                    "equipmentType": "COLOR",
                    "manufactureOptionName": "Platinum Graphite",
                    "manufactureOptionCode": "K51",
                    "colorChips": {
                        "primary": {
                            "r": 125,
                            "g": 125,
                            "b": 127,
                            "hex": "7D7D7F"
                        }
                    }
                }, {
                    "id": "200095247",
                    "name": "Blue Slate",
                    "equipmentType": "COLOR",
                    "manufactureOptionName": "Blue Slate",
                    "manufactureOptionCode": "K52",
                    "colorChips": {
                        "primary": {
                            "r": 56,
                            "g": 55,
                            "b": 73,
                            "hex": "383749"
                        }
                    }
                }, {
                    "id": "200095244",
                    "name": "Athens Blue",
                    "equipmentType": "COLOR",
                    "manufactureOptionName": "Athens Blue",
                    "manufactureOptionCode": "B21",
                    "colorChips": {
                        "primary": {
                            "r": 44,
                            "g": 49,
                            "b": 81,
                            "hex": "2C3151"
                        }
                    }
                }, {
                    "id": "200095245",
                    "name": "Liquid Platinum",
                    "equipmentType": "COLOR",
                    "manufactureOptionName": "Liquid Platinum",
                    "manufactureOptionCode": "K23",
                    "colorChips": {
                        "primary": {
                            "r": 160,
                            "g": 160,
                            "b": 160,
                            "hex": "A0A0A0"
                        }
                    }
                }, {
                    "id": "200095248",
                    "name": "Black Obsidian",
                    "equipmentType": "COLOR",
                    "manufactureOptionName": "Black Obsidian",
                    "manufactureOptionCode": "KH3",
                    "colorChips": {
                        "primary": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "hex": "000000"
                        }
                    }
                }, {
                    "id": "200095250",
                    "name": "Vibrant Red",
                    "equipmentType": "COLOR",
                    "manufactureOptionName": "Vibrant Red",
                    "manufactureOptionCode": "A54",
                    "colorChips": {
                        "primary": {
                            "r": 113,
                            "g": 24,
                            "b": 15,
                            "hex": "71180F"
                        }
                    }
                }]
            }],
            "manufacturerCode": "99368",
            "price": {
                "baseMSRP": 36200.0,
                "baseInvoice": 33284.0,
                "deliveryCharges": 815.0,
                "usedTmvRetail": 10776.0,
                "usedPrivateParty": 9092.0,
                "usedTradeIn": 7715.0,
                "estimateTmv": false,
                "tmvRecommendedRating": 0
            },
            "categories": {
                "market": "Luxury,High-Performance",
                "EPAClass": "Subcompact Cars",
                "vehicleSize": "Midsize",
                "primaryBodyType": "Car",
                "vehicleStyle": "Coupe",
                "vehicleType": "Car"
            },
            "id": 100912606,
            "name": "Sport 2dr Coupe (3.7L 6cyl 6M)",
            "year": {
                "id": 100522871,
                "year": 2008
            },
            "submodel": {
                "body": "Coupe",
                "modelName": "G37 Coupe",
                "niceName": "coupe"
            },
            "trim": "Sport",
            "states": ["USED"],
            "squishVins": ["JNKCV64E8M"],
            "MPG": {
                "highway": "26",
                "city": "17"
            }
        },
        serviceDetails: {
            "actionHolder": [{
                "id": 1348892,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Replace",
                "item": "Cabin air filter",
                "itemDescription": "A filtering system that meters out pollen, road dust and other particles before they can reach the passenger cabin.",
                "laborUnits": 0.1,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871",
                "partCostPerUnit": 32.05
            }, {
                "id": 1348899,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Replace",
                "item": "Oil filter",
                "itemDescription": "A cartridge-filled canister placed in an engine\u0027s lubricating system to strain dirt and abrasive materials out of the oil.",
                "laborUnits": 0.1,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871",
                "partCostPerUnit": 6.5
            }, {
                "id": 1348874,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Evaporative control system",
                "itemDescription": "An emission control system that prevents raw fuel vapors from entering the atmosphere.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871"
            }, {
                "id": 1348902,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Replace",
                "item": "Air filter",
                "itemDescription": "A device that filters incoming air fed to the engine.",
                "laborUnits": 0.2,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871",
                "partCostPerUnit": 10.12
            }, {
                "id": 1348877,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Fuel lines & hoses",
                "itemDescription": "The tubing that carries fuel throughout a vehicle.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871"
            }, {
                "id": 1348905,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "intervalMonth": 6,
                "frequency": 4,
                "action": "Rotate",
                "item": "Wheels & tires",
                "itemDescription": "A circular frame of hard material that may be solid or partly solid, is capable of  turning on an axle, and holds the rubber cushion that contains compressed air.",
                "laborUnits": 0.3,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871"
            }, {
                "id": 1348878,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Inspect",
                "item": "Differential fluid",
                "itemDescription": "The liquid used for lubricating gears inside the differential.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871"
            }, {
                "id": 1348865,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Change",
                "item": "Engine oil",
                "itemDescription": "A substance that lubricates and cools the moving parts of the engine and reduces corrosion and the formation of rust.",
                "laborUnits": 0.21,
                "partUnits": 5.2,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871",
                "partCostPerUnit": 5.92
            }, {
                "id": 1348885,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 105000,
                "frequency": 4,
                "action": "Replace",
                "item": "Spark plugs",
                "itemDescription": "Cables that carry a high-voltage electrical charge from the distributor cap or ignition coils to the spark plugs.",
                "laborUnits": 1.0,
                "partUnits": 6.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871",
                "partCostPerUnit": 5.4
            }, {
                "id": 1348884,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 6,
                "frequency": 4,
                "action": "Inspect",
                "item": "Steering & suspension",
                "itemDescription": "A vehicle\u0027s steering is the collection of components that enable the operator to direct a vehicle in a desired direction. Suspension is the assemblage of joints, links and other components between a vehicle and its wheels.",
                "laborUnits": 0.2,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871"
            }, {
                "id": 1348876,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 6,
                "frequency": 4,
                "action": "Inspect",
                "item": "Exhaust system",
                "itemDescription": "A system of tubing that routes exhaust gases from the exhaust manifold to the rear of the car and into the air. The exhaust system includes catalytic converters and mufflers that help reduce air and noise pollution generated by an engine.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871"
            }, {
                "id": 1348879,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Inspect",
                "item": "Lights & controls",
                "itemDescription": "Any source of illumination and any device used to actuate or operate another.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871"
            }, {
                "id": 1348860,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 60000,
                "intervalMonth": 48,
                "frequency": 4,
                "action": "Flush/replace",
                "item": "Coolant",
                "itemDescription": "Also known as \"antifreeze.\" A mixture of water and ethylene glycol that has both a higher boiling point and a lower freezing point than plain water.",
                "laborUnits": 0.7,
                "partUnits": 2.4,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871",
                "partCostPerUnit": 8.0
            }, {
                "id": 1348867,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Inspect",
                "item": "Brake system",
                "itemDescription": "A vehicle\u0027s stopping mechanism comprised of a pedal connected to a hydraulic master cylinder that can actuate clamping and/or expanding devices at all four wheels that slow or stop a vehicle\u0027s rolling motion.  Components in a basic brake system are the master cylinder, calipers and/or wheel cylinders, linings or pads or shoes, rotors and/or drums.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871"
            }, {
                "id": 1348873,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "AUTOMATIC",
                "intervalMileage": 15000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Inspect",
                "item": "Automatic transmission fluid",
                "itemDescription": "The fluid used for lubricating and cooling an automatic transmission.",
                "laborUnits": 0.2,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871",
                "note1": "If towing trailer"
            }, {
                "id": 1348881,
                "engineCode": "6VNAG3.7",
                "transmissionCode": "MANUAL",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Inspect",
                "item": "Manual transmission oil",
                "itemDescription": "Fluid or oil in a manual type transmission that serves as a lubricating and cooling medium as well as permitting quiet operation.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100522871"
            }]
        },
    },
    morty: {
        year: 2013,
        make: "hyundai",
        model: "veloster",
        style: "Turbo 3dr Hatchback w/Black Interior (1.6L 4cyl Turbo 6M)",
        userId: 2,
        styleDetails: {
            "styles": [{
                "make": {
                    "id": 200001398,
                    "name": "Hyundai",
                    "niceName": "hyundai"
                },
                "model": {
                    "id": "Hyundai_Veloster",
                    "name": "Veloster",
                    "niceName": "veloster"
                },
                "engine": {
                    "id": "200378200",
                    "name": "Engine",
                    "equipmentType": "ENGINE",
                    "compressionRatio": 9.5,
                    "cylinder": 4,
                    "size": 1.6,
                    "displacement": 1591.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 201,
                    "torque": 195,
                    "totalValves": 16,
                    "manufacturerEngineCode": "Gamma",
                    "type": "gas",
                    "code": "4ITCG1.6",
                    "compressorType": "turbocharger",
                    "rpm": {
                        "horsepower": 6000,
                        "torque": 1750
                    },
                    "valve": {
                        "timing": "variable valve timing",
                        "gear": "double overhead camshaft"
                    }
                },
                "transmission": {
                    "id": "200378201",
                    "name": "6M",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "MANUAL",
                    "numberOfSpeeds": "6"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "3",
                "options": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423088",
                        "name": "Carpeted Floor Mats",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 110.0,
                            "baseInvoice": 88.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Carpeted Floor Mats",
                        "manufactureOptionCode": "CF"
                    }, {
                        "id": "200473293",
                        "name": "Bongiovi Premium Audio",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Bongiovi Premium Audio",
                        "manufactureOptionCode": "UA"
                    }, {
                        "id": "200423206",
                        "name": "Auto-Dimming Mirror With Homelink",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 275.0,
                            "baseInvoice": 248.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Auto-Dimming Mirror with Homelink",
                        "manufactureOptionCode": "HL"
                    }, {
                        "id": "200423087",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CL"
                    }, {
                        "id": "200423086",
                        "name": "Cargo Net",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 50.0,
                            "baseInvoice": 41.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Net",
                        "manufactureOptionCode": "CN"
                    }, {
                        "id": "200423205",
                        "name": "Interior Light Kit",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 250.0,
                            "baseInvoice": 226.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Interior Light Kit",
                        "manufactureOptionCode": "LK"
                    }]
                }, {
                    "category": "Safety",
                    "options": [{
                        "id": "200423092",
                        "name": "Wheel Locks",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 55.0,
                            "baseInvoice": 44.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Wheel Locks",
                        "manufactureOptionCode": "WL"
                    }]
                }, {
                    "category": "Package",
                    "options": [{
                        "id": "200423091",
                        "name": "Option Group 01",
                        "description": "Vehicle with standard equipment",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 0.0,
                            "baseInvoice": 0.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Option Group 01",
                        "manufactureOptionCode": "01"
                    }, {
                        "id": "200423207",
                        "name": "Ultimate Package",
                        "description": "Vehicle with standard equipment; Panoramic sunroof; Rear backup warning sensors; Navigation system with rearview camera; Automatic headlights; 115V outlet located in front center console",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2500.0,
                            "baseInvoice": 2300.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Ultimate Package",
                        "manufactureOptionCode": "04"
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423090",
                        "name": "Mudguards",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Mudguards",
                        "manufactureOptionCode": "MG"
                    }, {
                        "id": "200445744",
                        "name": "Michelin Pilot Super Sport Summer Tire",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 1200.0,
                            "baseInvoice": 1140.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Michelin Pilot Super Sport Summer Tire",
                        "manufactureOptionCode": "RT"
                    }]
                }],
                "colors": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423201",
                        "name": "Black Leather",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Black Leather",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            },
                            "secondary": {
                                "r": 139,
                                "g": 139,
                                "b": 142,
                                "hex": "8B8B8E"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "leather"
                        }]
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423082",
                        "name": "Marathon Blue",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Marathon Blue",
                        "manufactureOptionCode": "UU9",
                        "colorChips": {
                            "primary": {
                                "r": 48,
                                "g": 74,
                                "b": 193,
                                "hex": "304AC1"
                            }
                        }
                    }, {
                        "id": "200423085",
                        "name": "Vitamin C",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Vitamin C",
                        "manufactureOptionCode": "R9A",
                        "colorChips": {
                            "primary": {
                                "r": 192,
                                "g": 117,
                                "b": 46,
                                "hex": "C0752E"
                            }
                        }
                    }, {
                        "id": "200423199",
                        "name": "Elite White",
                        "equipmentType": "COLOR",
                        "price": {
                            "baseMSRP": 200.0,
                            "baseInvoice": 182.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Elite White",
                        "manufactureOptionCode": "SW2",
                        "colorChips": {
                            "primary": {
                                "r": 250,
                                "g": 250,
                                "b": 250,
                                "hex": "FAFAFA"
                            }
                        }
                    }, {
                        "id": "200423078",
                        "name": "Boston Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Boston Red",
                        "manufactureOptionCode": "P9R",
                        "colorChips": {
                            "primary": {
                                "r": 180,
                                "g": 27,
                                "b": 3,
                                "hex": "B41B03"
                            }
                        }
                    }, {
                        "id": "200423200",
                        "name": "Matte Gray",
                        "equipmentType": "COLOR",
                        "price": {
                            "baseMSRP": 1000.0,
                            "baseInvoice": 910.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Matte Gray",
                        "manufactureOptionCode": "S2G",
                        "colorChips": {
                            "primary": {
                                "r": 79,
                                "g": 79,
                                "b": 81,
                                "hex": "4F4F51"
                            }
                        }
                    }, {
                        "id": "200423084",
                        "name": "Ultra Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ultra Black",
                        "manufactureOptionCode": "MZH",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        }
                    }, {
                        "id": "200423081",
                        "name": "Ironman Silver",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ironman Silver",
                        "manufactureOptionCode": "RHM",
                        "colorChips": {
                            "primary": {
                                "r": 197,
                                "g": 197,
                                "b": 197,
                                "hex": "C5C5C5"
                            }
                        }
                    }]
                }],
                "manufacturerCode": "F0353F45",
                "price": {
                    "baseMSRP": 22100.0,
                    "baseInvoice": 21038.0,
                    "deliveryCharges": 795.0,
                    "usedTmvRetail": 12089.0,
                    "usedPrivateParty": 10499.0,
                    "usedTradeIn": 8706.0,
                    "estimateTmv": false,
                    "tmvRecommendedRating": 0
                },
                "categories": {
                    "market": "Hatchback,Performance",
                    "EPAClass": "Subcompact Cars",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 200423128,
                "name": "Turbo 3dr Hatchback w/Black Interior (1.6L 4cyl Turbo 6M)",
                "year": {
                    "id": 100535749,
                    "year": 2013
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Veloster Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "Turbo",
                "states": ["USED"],
                "squishVins": ["KMHTC6AEDU"],
                "MPG": {
                    "highway": "35",
                    "city": "24"
                }
            }, {
                "make": {
                    "id": 200001398,
                    "name": "Hyundai",
                    "niceName": "hyundai"
                },
                "model": {
                    "id": "Hyundai_Veloster",
                    "name": "Veloster",
                    "niceName": "veloster"
                },
                "engine": {
                    "id": "200424112",
                    "name": "DCT Engine",
                    "equipmentType": "ENGINE",
                    "compressionRatio": 11.0,
                    "cylinder": 4,
                    "size": 1.6,
                    "displacement": 1591.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 132,
                    "torque": 120,
                    "totalValves": 16,
                    "manufacturerEngineCode": "Gamma",
                    "type": "gas",
                    "code": "4INAG1.6",
                    "compressorType": "NA",
                    "rpm": {
                        "horsepower": 6300,
                        "torque": 4850
                    },
                    "valve": {
                        "timing": "variable valve timing",
                        "gear": "double overhead camshaft"
                    }
                },
                "transmission": {
                    "id": "200423075",
                    "name": "6A",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "AUTOMATED_MANUAL",
                    "numberOfSpeeds": "6"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "3",
                "options": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423206",
                        "name": "Auto-Dimming Mirror With Homelink",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 275.0,
                            "baseInvoice": 248.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Auto-Dimming Mirror with Homelink",
                        "manufactureOptionCode": "HL"
                    }, {
                        "id": "200423205",
                        "name": "Interior Light Kit",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 250.0,
                            "baseInvoice": 226.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Interior Light Kit",
                        "manufactureOptionCode": "LK"
                    }, {
                        "id": "200473293",
                        "name": "Bongiovi Premium Audio",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Bongiovi Premium Audio",
                        "manufactureOptionCode": "UA"
                    }, {
                        "id": "200423086",
                        "name": "Cargo Net",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 50.0,
                            "baseInvoice": 41.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Net",
                        "manufactureOptionCode": "CN"
                    }, {
                        "id": "200423089",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CT"
                    }, {
                        "id": "200423087",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CL"
                    }, {
                        "id": "200423088",
                        "name": "Carpeted Floor Mats",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 110.0,
                            "baseInvoice": 88.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Carpeted Floor Mats",
                        "manufactureOptionCode": "CF"
                    }]
                }, {
                    "category": "Mechanical",
                    "options": [{
                        "id": "200445743",
                        "name": "Remote Start",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Remote Start",
                        "manufactureOptionCode": "RK"
                    }]
                }, {
                    "category": "Safety",
                    "options": [{
                        "id": "200423092",
                        "name": "Wheel Locks",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 55.0,
                            "baseInvoice": 44.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Wheel Locks",
                        "manufactureOptionCode": "WL"
                    }]
                }, {
                    "category": "Package",
                    "options": [{
                        "id": "200423094",
                        "name": "Tech Package",
                        "description": "Vehicle with standard equipment; Rear backup warning sensors; Unique 18\" alloy wheels with exterior color painted inserts; P215/40R18; Navigation system with rearview camera; Automatic headlights; Proximity key entry with electronic push button start; 115V outlet located in front center console",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2000.0,
                            "baseInvoice": 1840.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Tech Package",
                        "manufactureOptionCode": "03"
                    }, {
                        "id": "200423093",
                        "name": "Style Package",
                        "description": "Vehicle with standard equipment; 18\" alloy wheels with P215/40R18 tires; Chrome grille surround with piano black highlights; Front fog lights; Panoramic sunroof; Piano black interior accents; 450-watt Dimension premium audio system with AM/FM/XM satellite radio/CD/MP3 with 8 speakers including external amplifier and subwoofer; Leatherette bolster seats and door inserts; Leather wrapped steering wheel and shift knob; Alloy pedals; Driver auto up/down window",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2000.0,
                            "baseInvoice": 1840.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Style Package",
                        "manufactureOptionCode": "02"
                    }, {
                        "id": "200423091",
                        "name": "Option Group 01",
                        "description": "Vehicle with standard equipment",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 0.0,
                            "baseInvoice": 0.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Option Group 01",
                        "manufactureOptionCode": "01"
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423204",
                        "name": "Graphic Package (Graphic Disco)",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 195.0,
                            "baseInvoice": 176.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Graphic Package (Graphic Disco)",
                        "manufactureOptionCode": "GD"
                    }, {
                        "id": "200423203",
                        "name": "Graphic Package (Lower Body)",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 195.0,
                            "baseInvoice": 176.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Graphic Package (Lower Body)",
                        "manufactureOptionCode": "LG"
                    }, {
                        "id": "200423090",
                        "name": "Mudguards",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Mudguards",
                        "manufactureOptionCode": "MG"
                    }]
                }],
                "colors": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423080",
                        "name": "Gray Cloth",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Gray",
                        "manufactureOptionCode": "GY",
                        "colorChips": {
                            "primary": {
                                "r": 97,
                                "g": 102,
                                "b": 103,
                                "hex": "616667"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "cloth"
                        }]
                    }, {
                        "id": "200423209",
                        "name": "Black Cloth/Leatherette",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Black Cloth/Leatherette",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 32,
                                "g": 38,
                                "b": 42,
                                "hex": "20262A"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "vinyl/cloth"
                        }]
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423084",
                        "name": "Ultra Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ultra Black",
                        "manufactureOptionCode": "MZH",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        }
                    }, {
                        "id": "200423078",
                        "name": "Boston Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Boston Red",
                        "manufactureOptionCode": "P9R",
                        "colorChips": {
                            "primary": {
                                "r": 180,
                                "g": 27,
                                "b": 3,
                                "hex": "B41B03"
                            }
                        }
                    }, {
                        "id": "200423079",
                        "name": "Century White",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Century White",
                        "manufactureOptionCode": "PGU",
                        "colorChips": {
                            "primary": {
                                "r": 250,
                                "g": 250,
                                "b": 250,
                                "hex": "FAFAFA"
                            }
                        }
                    }]
                }],
                "manufacturerCode": "F0312F45",
                "price": {
                    "baseMSRP": 18850.0,
                    "baseInvoice": 18170.0,
                    "deliveryCharges": 795.0,
                    "usedTmvRetail": 10865.0,
                    "usedPrivateParty": 9319.0,
                    "usedTradeIn": 7576.0,
                    "estimateTmv": false,
                    "tmvRecommendedRating": 0
                },
                "categories": {
                    "market": "Hatchback",
                    "EPAClass": "Subcompact Cars",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 200423072,
                "name": "3dr Hatchback w/Gray Interior (1.6L 4cyl 6AM)",
                "year": {
                    "id": 100535749,
                    "year": 2013
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Veloster Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "Base",
                "states": ["USED"],
                "squishVins": ["KMHTC6ADDU"],
                "MPG": {
                    "highway": "37",
                    "city": "28"
                }
            }, {
                "make": {
                    "id": 200001398,
                    "name": "Hyundai",
                    "niceName": "hyundai"
                },
                "model": {
                    "id": "Hyundai_Veloster",
                    "name": "Veloster",
                    "niceName": "veloster"
                },
                "engine": {
                    "id": "200423074",
                    "name": "1.6L Inline4 16 Valve   Gas Regular Unleaded",
                    "equipmentType": "ENGINE",
                    "compressionRatio": 11.0,
                    "cylinder": 4,
                    "size": 1.6,
                    "displacement": 1591.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 138,
                    "torque": 123,
                    "totalValves": 16,
                    "manufacturerEngineCode": "Gamma",
                    "type": "gas",
                    "code": "4INAG1.6",
                    "compressorType": "NA",
                    "rpm": {
                        "horsepower": 6300,
                        "torque": 4850
                    },
                    "valve": {
                        "timing": "variable valve timing",
                        "gear": "double overhead camshaft"
                    }
                },
                "transmission": {
                    "id": "200378201",
                    "name": "6M",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "MANUAL",
                    "numberOfSpeeds": "6"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "3",
                "options": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200473293",
                        "name": "Bongiovi Premium Audio",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Bongiovi Premium Audio",
                        "manufactureOptionCode": "UA"
                    }, {
                        "id": "200423086",
                        "name": "Cargo Net",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 50.0,
                            "baseInvoice": 41.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Net",
                        "manufactureOptionCode": "CN"
                    }, {
                        "id": "200423088",
                        "name": "Carpeted Floor Mats",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 110.0,
                            "baseInvoice": 88.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Carpeted Floor Mats",
                        "manufactureOptionCode": "CF"
                    }, {
                        "id": "200423087",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CL"
                    }, {
                        "id": "200423205",
                        "name": "Interior Light Kit",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 250.0,
                            "baseInvoice": 226.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Interior Light Kit",
                        "manufactureOptionCode": "LK"
                    }, {
                        "id": "200423089",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CT"
                    }, {
                        "id": "200423206",
                        "name": "Auto-Dimming Mirror With Homelink",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 275.0,
                            "baseInvoice": 248.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Auto-Dimming Mirror with Homelink",
                        "manufactureOptionCode": "HL"
                    }]
                }, {
                    "category": "Safety",
                    "options": [{
                        "id": "200423092",
                        "name": "Wheel Locks",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 55.0,
                            "baseInvoice": 44.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Wheel Locks",
                        "manufactureOptionCode": "WL"
                    }]
                }, {
                    "category": "Package",
                    "options": [{
                        "id": "200423091",
                        "name": "Option Group 01",
                        "description": "Vehicle with standard equipment",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 0.0,
                            "baseInvoice": 0.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Option Group 01",
                        "manufactureOptionCode": "01"
                    }, {
                        "id": "200423094",
                        "name": "Tech Package",
                        "description": "Vehicle with standard equipment; Rear backup warning sensors; Unique 18\" alloy wheels with exterior color painted inserts; P215/40R18; Navigation system with rearview camera; Automatic headlights; Proximity key entry with electronic push button start; 115V outlet located in front center console",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2000.0,
                            "baseInvoice": 1840.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Tech Package",
                        "manufactureOptionCode": "03"
                    }, {
                        "id": "200423093",
                        "name": "Style Package",
                        "description": "Vehicle with standard equipment; 18\" alloy wheels with P215/40R18 tires; Chrome grille surround with piano black highlights; Front fog lights; Panoramic sunroof; Piano black interior accents; 450-watt Dimension premium audio system with AM/FM/XM satellite radio/CD/MP3 with 8 speakers including external amplifier and subwoofer; Leatherette bolster seats and door inserts; Leather wrapped steering wheel and shift knob; Alloy pedals; Driver auto up/down window",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2000.0,
                            "baseInvoice": 1840.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Style Package",
                        "manufactureOptionCode": "02"
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423090",
                        "name": "Mudguards",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Mudguards",
                        "manufactureOptionCode": "MG"
                    }, {
                        "id": "200423204",
                        "name": "Graphic Package (Graphic Disco)",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 195.0,
                            "baseInvoice": 176.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Graphic Package (Graphic Disco)",
                        "manufactureOptionCode": "GD"
                    }, {
                        "id": "200423203",
                        "name": "Graphic Package (Lower Body)",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 195.0,
                            "baseInvoice": 176.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Graphic Package (Lower Body)",
                        "manufactureOptionCode": "LG"
                    }]
                }],
                "colors": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423080",
                        "name": "Gray Cloth",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Gray",
                        "manufactureOptionCode": "GY",
                        "colorChips": {
                            "primary": {
                                "r": 97,
                                "g": 102,
                                "b": 103,
                                "hex": "616667"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "cloth"
                        }]
                    }, {
                        "id": "200423209",
                        "name": "Black Cloth/Leatherette",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Black Cloth/Leatherette",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 32,
                                "g": 38,
                                "b": 42,
                                "hex": "20262A"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "vinyl/cloth"
                        }]
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423079",
                        "name": "Century White",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Century White",
                        "manufactureOptionCode": "PGU",
                        "colorChips": {
                            "primary": {
                                "r": 250,
                                "g": 250,
                                "b": 250,
                                "hex": "FAFAFA"
                            }
                        }
                    }, {
                        "id": "200423084",
                        "name": "Ultra Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ultra Black",
                        "manufactureOptionCode": "MZH",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        }
                    }, {
                        "id": "200423078",
                        "name": "Boston Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Boston Red",
                        "manufactureOptionCode": "P9R",
                        "colorChips": {
                            "primary": {
                                "r": 180,
                                "g": 27,
                                "b": 3,
                                "hex": "B41B03"
                            }
                        }
                    }]
                }],
                "manufacturerCode": "F0313F45",
                "price": {
                    "baseMSRP": 17600.0,
                    "baseInvoice": 16983.0,
                    "deliveryCharges": 795.0,
                    "usedTmvRetail": 10214.0,
                    "usedPrivateParty": 8719.0,
                    "usedTradeIn": 7033.0,
                    "estimateTmv": false,
                    "tmvRecommendedRating": 0
                },
                "categories": {
                    "market": "Hatchback",
                    "EPAClass": "Subcompact Cars",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 200423073,
                "name": "3dr Hatchback w/Gray Interior (1.6L 4cyl 6M)",
                "year": {
                    "id": 100535749,
                    "year": 2013
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Veloster Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "Base",
                "states": ["USED"],
                "squishVins": ["KMHTC6ADDU"],
                "MPG": {
                    "highway": "37",
                    "city": "27"
                }
            }, {
                "make": {
                    "id": 200001398,
                    "name": "Hyundai",
                    "niceName": "hyundai"
                },
                "model": {
                    "id": "Hyundai_Veloster",
                    "name": "Veloster",
                    "niceName": "veloster"
                },
                "engine": {
                    "id": "200424112",
                    "name": "DCT Engine",
                    "equipmentType": "ENGINE",
                    "compressionRatio": 11.0,
                    "cylinder": 4,
                    "size": 1.6,
                    "displacement": 1591.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 132,
                    "torque": 120,
                    "totalValves": 16,
                    "manufacturerEngineCode": "Gamma",
                    "type": "gas",
                    "code": "4INAG1.6",
                    "compressorType": "NA",
                    "rpm": {
                        "horsepower": 6300,
                        "torque": 4850
                    },
                    "valve": {
                        "timing": "variable valve timing",
                        "gear": "double overhead camshaft"
                    }
                },
                "transmission": {
                    "id": "200423075",
                    "name": "6A",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "AUTOMATED_MANUAL",
                    "numberOfSpeeds": "6"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "3",
                "options": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423086",
                        "name": "Cargo Net",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 50.0,
                            "baseInvoice": 41.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Net",
                        "manufactureOptionCode": "CN"
                    }, {
                        "id": "200423205",
                        "name": "Interior Light Kit",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 250.0,
                            "baseInvoice": 226.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Interior Light Kit",
                        "manufactureOptionCode": "LK"
                    }, {
                        "id": "200423087",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CL"
                    }, {
                        "id": "200423206",
                        "name": "Auto-Dimming Mirror With Homelink",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 275.0,
                            "baseInvoice": 248.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Auto-Dimming Mirror with Homelink",
                        "manufactureOptionCode": "HL"
                    }, {
                        "id": "200473293",
                        "name": "Bongiovi Premium Audio",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Bongiovi Premium Audio",
                        "manufactureOptionCode": "UA"
                    }]
                }, {
                    "category": "Safety",
                    "options": [{
                        "id": "200423092",
                        "name": "Wheel Locks",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 55.0,
                            "baseInvoice": 44.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Wheel Locks",
                        "manufactureOptionCode": "WL"
                    }]
                }, {
                    "category": "Package",
                    "options": [{
                        "id": "200423091",
                        "name": "Option Group 01",
                        "description": "Vehicle with standard equipment",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 0.0,
                            "baseInvoice": 0.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Option Group 01",
                        "manufactureOptionCode": "01"
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423090",
                        "name": "Mudguards",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Mudguards",
                        "manufactureOptionCode": "MG"
                    }]
                }],
                "colors": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423077",
                        "name": "Black Cloth",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Black",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "cloth"
                        }]
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423084",
                        "name": "Ultra Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ultra Black",
                        "manufactureOptionCode": "MZH",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        }
                    }, {
                        "id": "200423078",
                        "name": "Boston Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Boston Red",
                        "manufactureOptionCode": "P9R",
                        "colorChips": {
                            "primary": {
                                "r": 180,
                                "g": 27,
                                "b": 3,
                                "hex": "B41B03"
                            }
                        }
                    }, {
                        "id": "200423082",
                        "name": "Marathon Blue",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Marathon Blue",
                        "manufactureOptionCode": "UU9",
                        "colorChips": {
                            "primary": {
                                "r": 48,
                                "g": 74,
                                "b": 193,
                                "hex": "304AC1"
                            }
                        }
                    }, {
                        "id": "200423076",
                        "name": "26.2 Yellow",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "26.2 Yellow",
                        "manufactureOptionCode": "SYY",
                        "colorChips": {
                            "primary": {
                                "r": 217,
                                "g": 209,
                                "b": 122,
                                "hex": "D9D17A"
                            }
                        }
                    }, {
                        "id": "200423079",
                        "name": "Century White",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Century White",
                        "manufactureOptionCode": "PGU",
                        "colorChips": {
                            "primary": {
                                "r": 250,
                                "g": 250,
                                "b": 250,
                                "hex": "FAFAFA"
                            }
                        }
                    }, {
                        "id": "200445739",
                        "name": "Sprint Gray",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Sprint Gray",
                        "manufactureOptionCode": "SG2",
                        "colorChips": {
                            "primary": {
                                "r": 196,
                                "g": 195,
                                "b": 200,
                                "hex": "C4C3C8"
                            }
                        }
                    }]
                }],
                "manufacturerCode": "F0342F45",
                "price": {
                    "baseMSRP": 21300.0,
                    "baseInvoice": 20498.0,
                    "deliveryCharges": 795.0,
                    "usedTmvRetail": 12085.0,
                    "usedPrivateParty": 10450.0,
                    "usedTradeIn": 8606.0,
                    "estimateTmv": false
                },
                "categories": {
                    "market": "Hatchback",
                    "EPAClass": "Subcompact Cars",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 200445738,
                "name": "RE:MIX 3dr Hatchback w/Black Interior (1.6L 4cyl 6AM)",
                "year": {
                    "id": 100535749,
                    "year": 2013
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Veloster Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "RE:MIX",
                "states": ["USED"],
                "squishVins": ["KMHTC6ADDU"],
                "MPG": {
                    "highway": "37",
                    "city": "28"
                }
            }, {
                "make": {
                    "id": 200001398,
                    "name": "Hyundai",
                    "niceName": "hyundai"
                },
                "model": {
                    "id": "Hyundai_Veloster",
                    "name": "Veloster",
                    "niceName": "veloster"
                },
                "engine": {
                    "id": "200423074",
                    "name": "1.6L Inline4 16 Valve   Gas Regular Unleaded",
                    "equipmentType": "ENGINE",
                    "compressionRatio": 11.0,
                    "cylinder": 4,
                    "size": 1.6,
                    "displacement": 1591.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 138,
                    "torque": 123,
                    "totalValves": 16,
                    "manufacturerEngineCode": "Gamma",
                    "type": "gas",
                    "code": "4INAG1.6",
                    "compressorType": "NA",
                    "rpm": {
                        "horsepower": 6300,
                        "torque": 4850
                    },
                    "valve": {
                        "timing": "variable valve timing",
                        "gear": "double overhead camshaft"
                    }
                },
                "transmission": {
                    "id": "200378201",
                    "name": "6M",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "MANUAL",
                    "numberOfSpeeds": "6"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "3",
                "options": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423089",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CT"
                    }, {
                        "id": "200423087",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CL"
                    }, {
                        "id": "200423205",
                        "name": "Interior Light Kit",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 250.0,
                            "baseInvoice": 226.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Interior Light Kit",
                        "manufactureOptionCode": "LK"
                    }, {
                        "id": "200423206",
                        "name": "Auto-Dimming Mirror With Homelink",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 275.0,
                            "baseInvoice": 248.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Auto-Dimming Mirror with Homelink",
                        "manufactureOptionCode": "HL"
                    }, {
                        "id": "200473293",
                        "name": "Bongiovi Premium Audio",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Bongiovi Premium Audio",
                        "manufactureOptionCode": "UA"
                    }, {
                        "id": "200423088",
                        "name": "Carpeted Floor Mats",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 110.0,
                            "baseInvoice": 88.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Carpeted Floor Mats",
                        "manufactureOptionCode": "CF"
                    }, {
                        "id": "200423086",
                        "name": "Cargo Net",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 50.0,
                            "baseInvoice": 41.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Net",
                        "manufactureOptionCode": "CN"
                    }]
                }, {
                    "category": "Safety",
                    "options": [{
                        "id": "200423092",
                        "name": "Wheel Locks",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 55.0,
                            "baseInvoice": 44.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Wheel Locks",
                        "manufactureOptionCode": "WL"
                    }]
                }, {
                    "category": "Package",
                    "options": [{
                        "id": "200423093",
                        "name": "Style Package",
                        "description": "Vehicle with standard equipment; 18\" alloy wheels with P215/40R18 tires; Chrome grille surround with piano black highlights; Front fog lights; Panoramic sunroof; Piano black interior accents; 450-watt Dimension premium audio system with AM/FM/XM satellite radio/CD/MP3 with 8 speakers including external amplifier and subwoofer; Leatherette bolster seats and door inserts; Leather wrapped steering wheel and shift knob; Alloy pedals; Driver auto up/down window",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2000.0,
                            "baseInvoice": 1840.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Style Package",
                        "manufactureOptionCode": "02"
                    }, {
                        "id": "200423091",
                        "name": "Option Group 01",
                        "description": "Vehicle with standard equipment",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 0.0,
                            "baseInvoice": 0.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Option Group 01",
                        "manufactureOptionCode": "01"
                    }, {
                        "id": "200423094",
                        "name": "Tech Package",
                        "description": "Vehicle with standard equipment; Rear backup warning sensors; Unique 18\" alloy wheels with exterior color painted inserts; P215/40R18; Navigation system with rearview camera; Automatic headlights; Proximity key entry with electronic push button start; 115V outlet located in front center console",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2000.0,
                            "baseInvoice": 1840.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Tech Package",
                        "manufactureOptionCode": "03"
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423090",
                        "name": "Mudguards",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Mudguards",
                        "manufactureOptionCode": "MG"
                    }, {
                        "id": "200423204",
                        "name": "Graphic Package (Graphic Disco)",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 195.0,
                            "baseInvoice": 176.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Graphic Package (Graphic Disco)",
                        "manufactureOptionCode": "GD"
                    }, {
                        "id": "200423203",
                        "name": "Graphic Package (Lower Body)",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 195.0,
                            "baseInvoice": 176.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Graphic Package (Lower Body)",
                        "manufactureOptionCode": "LG"
                    }]
                }],
                "colors": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200473290",
                        "name": "Red Cloth",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Red",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 96,
                                "g": 39,
                                "b": 41,
                                "hex": "602729"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "cloth"
                        }]
                    }, {
                        "id": "200423209",
                        "name": "Black Cloth/Leatherette",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Black Cloth/Leatherette",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 32,
                                "g": 38,
                                "b": 42,
                                "hex": "20262A"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "vinyl/cloth"
                        }]
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423079",
                        "name": "Century White",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Century White",
                        "manufactureOptionCode": "PGU",
                        "colorChips": {
                            "primary": {
                                "r": 250,
                                "g": 250,
                                "b": 250,
                                "hex": "FAFAFA"
                            }
                        }
                    }, {
                        "id": "200423084",
                        "name": "Ultra Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ultra Black",
                        "manufactureOptionCode": "MZH",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        }
                    }, {
                        "id": "200423078",
                        "name": "Boston Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Boston Red",
                        "manufactureOptionCode": "P9R",
                        "colorChips": {
                            "primary": {
                                "r": 180,
                                "g": 27,
                                "b": 3,
                                "hex": "B41B03"
                            }
                        }
                    }]
                }],
                "manufacturerCode": "F0323F45",
                "price": {
                    "baseMSRP": 17600.0,
                    "baseInvoice": 16983.0,
                    "deliveryCharges": 795.0,
                    "usedTmvRetail": 10242.0,
                    "usedPrivateParty": 8739.0,
                    "usedTradeIn": 7045.0,
                    "estimateTmv": false
                },
                "categories": {
                    "market": "Hatchback",
                    "EPAClass": "Subcompact Cars",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 200473291,
                "name": "3dr Hatchback w/Red Interior (1.6L 4cyl 6M)",
                "year": {
                    "id": 100535749,
                    "year": 2013
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Veloster Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "Base",
                "states": ["USED"],
                "squishVins": ["KMHTC6ADDU"],
                "MPG": {
                    "highway": "37",
                    "city": "27"
                }
            }, {
                "make": {
                    "id": 200001398,
                    "name": "Hyundai",
                    "niceName": "hyundai"
                },
                "model": {
                    "id": "Hyundai_Veloster",
                    "name": "Veloster",
                    "niceName": "veloster"
                },
                "engine": {
                    "id": "200424112",
                    "name": "DCT Engine",
                    "equipmentType": "ENGINE",
                    "compressionRatio": 11.0,
                    "cylinder": 4,
                    "size": 1.6,
                    "displacement": 1591.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 132,
                    "torque": 120,
                    "totalValves": 16,
                    "manufacturerEngineCode": "Gamma",
                    "type": "gas",
                    "code": "4INAG1.6",
                    "compressorType": "NA",
                    "rpm": {
                        "horsepower": 6300,
                        "torque": 4850
                    },
                    "valve": {
                        "timing": "variable valve timing",
                        "gear": "double overhead camshaft"
                    }
                },
                "transmission": {
                    "id": "200423075",
                    "name": "6A",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "AUTOMATED_MANUAL",
                    "numberOfSpeeds": "6"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "3",
                "options": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423205",
                        "name": "Interior Light Kit",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 250.0,
                            "baseInvoice": 226.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Interior Light Kit",
                        "manufactureOptionCode": "LK"
                    }, {
                        "id": "200423206",
                        "name": "Auto-Dimming Mirror With Homelink",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 275.0,
                            "baseInvoice": 248.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Auto-Dimming Mirror with Homelink",
                        "manufactureOptionCode": "HL"
                    }, {
                        "id": "200473293",
                        "name": "Bongiovi Premium Audio",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Bongiovi Premium Audio",
                        "manufactureOptionCode": "UA"
                    }, {
                        "id": "200423086",
                        "name": "Cargo Net",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 50.0,
                            "baseInvoice": 41.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Net",
                        "manufactureOptionCode": "CN"
                    }, {
                        "id": "200423087",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CL"
                    }, {
                        "id": "200423088",
                        "name": "Carpeted Floor Mats",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 110.0,
                            "baseInvoice": 88.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Carpeted Floor Mats",
                        "manufactureOptionCode": "CF"
                    }, {
                        "id": "200423089",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CT"
                    }]
                }, {
                    "category": "Mechanical",
                    "options": [{
                        "id": "200445743",
                        "name": "Remote Start",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Remote Start",
                        "manufactureOptionCode": "RK"
                    }]
                }, {
                    "category": "Safety",
                    "options": [{
                        "id": "200423092",
                        "name": "Wheel Locks",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 55.0,
                            "baseInvoice": 44.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Wheel Locks",
                        "manufactureOptionCode": "WL"
                    }]
                }, {
                    "category": "Package",
                    "options": [{
                        "id": "200423093",
                        "name": "Style Package",
                        "description": "Vehicle with standard equipment; 18\" alloy wheels with P215/40R18 tires; Chrome grille surround with piano black highlights; Front fog lights; Panoramic sunroof; Piano black interior accents; 450-watt Dimension premium audio system with AM/FM/XM satellite radio/CD/MP3 with 8 speakers including external amplifier and subwoofer; Leatherette bolster seats and door inserts; Leather wrapped steering wheel and shift knob; Alloy pedals; Driver auto up/down window",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2000.0,
                            "baseInvoice": 1840.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Style Package",
                        "manufactureOptionCode": "02"
                    }, {
                        "id": "200423094",
                        "name": "Tech Package",
                        "description": "Vehicle with standard equipment; Rear backup warning sensors; Unique 18\" alloy wheels with exterior color painted inserts; P215/40R18; Navigation system with rearview camera; Automatic headlights; Proximity key entry with electronic push button start; 115V outlet located in front center console",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2000.0,
                            "baseInvoice": 1840.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Tech Package",
                        "manufactureOptionCode": "03"
                    }, {
                        "id": "200423091",
                        "name": "Option Group 01",
                        "description": "Vehicle with standard equipment",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 0.0,
                            "baseInvoice": 0.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Option Group 01",
                        "manufactureOptionCode": "01"
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423090",
                        "name": "Mudguards",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Mudguards",
                        "manufactureOptionCode": "MG"
                    }, {
                        "id": "200423204",
                        "name": "Graphic Package (Graphic Disco)",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 195.0,
                            "baseInvoice": 176.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Graphic Package (Graphic Disco)",
                        "manufactureOptionCode": "GD"
                    }, {
                        "id": "200423203",
                        "name": "Graphic Package (Lower Body)",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 195.0,
                            "baseInvoice": 176.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Graphic Package (Lower Body)",
                        "manufactureOptionCode": "LG"
                    }]
                }],
                "colors": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200473290",
                        "name": "Red Cloth",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Red",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 96,
                                "g": 39,
                                "b": 41,
                                "hex": "602729"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "cloth"
                        }]
                    }, {
                        "id": "200423209",
                        "name": "Black Cloth/Leatherette",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Black Cloth/Leatherette",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 32,
                                "g": 38,
                                "b": 42,
                                "hex": "20262A"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "vinyl/cloth"
                        }]
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423078",
                        "name": "Boston Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Boston Red",
                        "manufactureOptionCode": "P9R",
                        "colorChips": {
                            "primary": {
                                "r": 180,
                                "g": 27,
                                "b": 3,
                                "hex": "B41B03"
                            }
                        }
                    }, {
                        "id": "200423079",
                        "name": "Century White",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Century White",
                        "manufactureOptionCode": "PGU",
                        "colorChips": {
                            "primary": {
                                "r": 250,
                                "g": 250,
                                "b": 250,
                                "hex": "FAFAFA"
                            }
                        }
                    }, {
                        "id": "200423084",
                        "name": "Ultra Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ultra Black",
                        "manufactureOptionCode": "MZH",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        }
                    }]
                }],
                "manufacturerCode": "F0322F45",
                "price": {
                    "baseMSRP": 18850.0,
                    "baseInvoice": 18170.0,
                    "deliveryCharges": 795.0,
                    "usedTmvRetail": 10741.0,
                    "usedPrivateParty": 9193.0,
                    "usedTradeIn": 7448.0,
                    "estimateTmv": false
                },
                "categories": {
                    "market": "Hatchback",
                    "EPAClass": "Subcompact Cars",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 200473292,
                "name": "3dr Hatchback w/Red Interior (1.6L 4cyl 6AM)",
                "year": {
                    "id": 100535749,
                    "year": 2013
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Veloster Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "Base",
                "states": ["USED"],
                "squishVins": ["KMHTC6ADDU"],
                "MPG": {
                    "highway": "37",
                    "city": "28"
                }
            }, {
                "make": {
                    "id": 200001398,
                    "name": "Hyundai",
                    "niceName": "hyundai"
                },
                "model": {
                    "id": "Hyundai_Veloster",
                    "name": "Veloster",
                    "niceName": "veloster"
                },
                "engine": {
                    "id": "200423074",
                    "name": "1.6L Inline4 16 Valve   Gas Regular Unleaded",
                    "equipmentType": "ENGINE",
                    "compressionRatio": 11.0,
                    "cylinder": 4,
                    "size": 1.6,
                    "displacement": 1591.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 138,
                    "torque": 123,
                    "totalValves": 16,
                    "manufacturerEngineCode": "Gamma",
                    "type": "gas",
                    "code": "4INAG1.6",
                    "compressorType": "NA",
                    "rpm": {
                        "horsepower": 6300,
                        "torque": 4850
                    },
                    "valve": {
                        "timing": "variable valve timing",
                        "gear": "double overhead camshaft"
                    }
                },
                "transmission": {
                    "id": "200378201",
                    "name": "6M",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "MANUAL",
                    "numberOfSpeeds": "6"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "3",
                "options": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423206",
                        "name": "Auto-Dimming Mirror With Homelink",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 275.0,
                            "baseInvoice": 248.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Auto-Dimming Mirror with Homelink",
                        "manufactureOptionCode": "HL"
                    }, {
                        "id": "200473293",
                        "name": "Bongiovi Premium Audio",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Bongiovi Premium Audio",
                        "manufactureOptionCode": "UA"
                    }, {
                        "id": "200423086",
                        "name": "Cargo Net",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 50.0,
                            "baseInvoice": 41.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Net",
                        "manufactureOptionCode": "CN"
                    }, {
                        "id": "200423205",
                        "name": "Interior Light Kit",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 250.0,
                            "baseInvoice": 226.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Interior Light Kit",
                        "manufactureOptionCode": "LK"
                    }, {
                        "id": "200423087",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CL"
                    }]
                }, {
                    "category": "Safety",
                    "options": [{
                        "id": "200423092",
                        "name": "Wheel Locks",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 55.0,
                            "baseInvoice": 44.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Wheel Locks",
                        "manufactureOptionCode": "WL"
                    }]
                }, {
                    "category": "Package",
                    "options": [{
                        "id": "200423091",
                        "name": "Option Group 01",
                        "description": "Vehicle with standard equipment",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 0.0,
                            "baseInvoice": 0.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Option Group 01",
                        "manufactureOptionCode": "01"
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423090",
                        "name": "Mudguards",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Mudguards",
                        "manufactureOptionCode": "MG"
                    }]
                }],
                "colors": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423077",
                        "name": "Black Cloth",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Black",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "cloth"
                        }]
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423084",
                        "name": "Ultra Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ultra Black",
                        "manufactureOptionCode": "MZH",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        }
                    }, {
                        "id": "200423078",
                        "name": "Boston Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Boston Red",
                        "manufactureOptionCode": "P9R",
                        "colorChips": {
                            "primary": {
                                "r": 180,
                                "g": 27,
                                "b": 3,
                                "hex": "B41B03"
                            }
                        }
                    }, {
                        "id": "200423082",
                        "name": "Marathon Blue",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Marathon Blue",
                        "manufactureOptionCode": "UU9",
                        "colorChips": {
                            "primary": {
                                "r": 48,
                                "g": 74,
                                "b": 193,
                                "hex": "304AC1"
                            }
                        }
                    }, {
                        "id": "200445739",
                        "name": "Sprint Gray",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Sprint Gray",
                        "manufactureOptionCode": "SG2",
                        "colorChips": {
                            "primary": {
                                "r": 196,
                                "g": 195,
                                "b": 200,
                                "hex": "C4C3C8"
                            }
                        }
                    }, {
                        "id": "200423079",
                        "name": "Century White",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Century White",
                        "manufactureOptionCode": "PGU",
                        "colorChips": {
                            "primary": {
                                "r": 250,
                                "g": 250,
                                "b": 250,
                                "hex": "FAFAFA"
                            }
                        }
                    }, {
                        "id": "200423076",
                        "name": "26.2 Yellow",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "26.2 Yellow",
                        "manufactureOptionCode": "SYY",
                        "colorChips": {
                            "primary": {
                                "r": 217,
                                "g": 209,
                                "b": 122,
                                "hex": "D9D17A"
                            }
                        }
                    }]
                }],
                "manufacturerCode": "F0343F45",
                "price": {
                    "baseMSRP": 20050.0,
                    "baseInvoice": 19310.0,
                    "deliveryCharges": 795.0,
                    "usedTmvRetail": 11914.0,
                    "usedPrivateParty": 10309.0,
                    "usedTradeIn": 8499.0,
                    "estimateTmv": false
                },
                "categories": {
                    "market": "Hatchback",
                    "EPAClass": "Subcompact Cars",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 200445737,
                "name": "RE:MIX 3dr Hatchback w/Black Interior (1.6L 4cyl 6M)",
                "year": {
                    "id": 100535749,
                    "year": 2013
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Veloster Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "RE:MIX",
                "states": ["USED"],
                "squishVins": ["KMHTC6ADDU"],
                "MPG": {
                    "highway": "37",
                    "city": "27"
                }
            }, {
                "make": {
                    "id": 200001398,
                    "name": "Hyundai",
                    "niceName": "hyundai"
                },
                "model": {
                    "id": "Hyundai_Veloster",
                    "name": "Veloster",
                    "niceName": "veloster"
                },
                "engine": {
                    "id": "200378200",
                    "name": "Engine",
                    "equipmentType": "ENGINE",
                    "compressionRatio": 9.5,
                    "cylinder": 4,
                    "size": 1.6,
                    "displacement": 1591.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 201,
                    "torque": 195,
                    "totalValves": 16,
                    "manufacturerEngineCode": "Gamma",
                    "type": "gas",
                    "code": "4ITCG1.6",
                    "compressorType": "turbocharger",
                    "rpm": {
                        "horsepower": 6000,
                        "torque": 1750
                    },
                    "valve": {
                        "timing": "variable valve timing",
                        "gear": "double overhead camshaft"
                    }
                },
                "transmission": {
                    "id": "200423132",
                    "name": "6A",
                    "equipmentType": "TRANSMISSION",
                    "automaticType": "Shiftable automatic",
                    "transmissionType": "AUTOMATIC",
                    "numberOfSpeeds": "6"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "3",
                "options": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200473293",
                        "name": "Bongiovi Premium Audio",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Bongiovi Premium Audio",
                        "manufactureOptionCode": "UA"
                    }, {
                        "id": "200423086",
                        "name": "Cargo Net",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 50.0,
                            "baseInvoice": 41.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Net",
                        "manufactureOptionCode": "CN"
                    }, {
                        "id": "200423088",
                        "name": "Carpeted Floor Mats",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 110.0,
                            "baseInvoice": 88.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Carpeted Floor Mats",
                        "manufactureOptionCode": "CF"
                    }, {
                        "id": "200423206",
                        "name": "Auto-Dimming Mirror With Homelink",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 275.0,
                            "baseInvoice": 248.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Auto-Dimming Mirror with Homelink",
                        "manufactureOptionCode": "HL"
                    }, {
                        "id": "200423087",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CL"
                    }, {
                        "id": "200423205",
                        "name": "Interior Light Kit",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 250.0,
                            "baseInvoice": 226.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Interior Light Kit",
                        "manufactureOptionCode": "LK"
                    }]
                }, {
                    "category": "Safety",
                    "options": [{
                        "id": "200423092",
                        "name": "Wheel Locks",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 55.0,
                            "baseInvoice": 44.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Wheel Locks",
                        "manufactureOptionCode": "WL"
                    }]
                }, {
                    "category": "Package",
                    "options": [{
                        "id": "200423207",
                        "name": "Ultimate Package",
                        "description": "Vehicle with standard equipment; Panoramic sunroof; Rear backup warning sensors; Navigation system with rearview camera; Automatic headlights; 115V outlet located in front center console",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2500.0,
                            "baseInvoice": 2300.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Ultimate Package",
                        "manufactureOptionCode": "04"
                    }, {
                        "id": "200423091",
                        "name": "Option Group 01",
                        "description": "Vehicle with standard equipment",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 0.0,
                            "baseInvoice": 0.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Option Group 01",
                        "manufactureOptionCode": "01"
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200445744",
                        "name": "Michelin Pilot Super Sport Summer Tire",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 1200.0,
                            "baseInvoice": 1140.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Michelin Pilot Super Sport Summer Tire",
                        "manufactureOptionCode": "RT"
                    }, {
                        "id": "200423090",
                        "name": "Mudguards",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Mudguards",
                        "manufactureOptionCode": "MG"
                    }]
                }],
                "colors": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423201",
                        "name": "Black Leather",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Black Leather",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            },
                            "secondary": {
                                "r": 139,
                                "g": 139,
                                "b": 142,
                                "hex": "8B8B8E"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "leather"
                        }]
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423084",
                        "name": "Ultra Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ultra Black",
                        "manufactureOptionCode": "MZH",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        }
                    }, {
                        "id": "200423082",
                        "name": "Marathon Blue",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Marathon Blue",
                        "manufactureOptionCode": "UU9",
                        "colorChips": {
                            "primary": {
                                "r": 48,
                                "g": 74,
                                "b": 193,
                                "hex": "304AC1"
                            }
                        }
                    }, {
                        "id": "200423078",
                        "name": "Boston Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Boston Red",
                        "manufactureOptionCode": "P9R",
                        "colorChips": {
                            "primary": {
                                "r": 180,
                                "g": 27,
                                "b": 3,
                                "hex": "B41B03"
                            }
                        }
                    }, {
                        "id": "200423199",
                        "name": "Elite White",
                        "equipmentType": "COLOR",
                        "price": {
                            "baseMSRP": 200.0,
                            "baseInvoice": 182.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Elite White",
                        "manufactureOptionCode": "SW2",
                        "colorChips": {
                            "primary": {
                                "r": 250,
                                "g": 250,
                                "b": 250,
                                "hex": "FAFAFA"
                            }
                        }
                    }, {
                        "id": "200423200",
                        "name": "Matte Gray",
                        "equipmentType": "COLOR",
                        "price": {
                            "baseMSRP": 1000.0,
                            "baseInvoice": 910.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Matte Gray",
                        "manufactureOptionCode": "S2G",
                        "colorChips": {
                            "primary": {
                                "r": 79,
                                "g": 79,
                                "b": 81,
                                "hex": "4F4F51"
                            }
                        }
                    }, {
                        "id": "200423085",
                        "name": "Vitamin C",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Vitamin C",
                        "manufactureOptionCode": "R9A",
                        "colorChips": {
                            "primary": {
                                "r": 192,
                                "g": 117,
                                "b": 46,
                                "hex": "C0752E"
                            }
                        }
                    }, {
                        "id": "200423081",
                        "name": "Ironman Silver",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ironman Silver",
                        "manufactureOptionCode": "RHM",
                        "colorChips": {
                            "primary": {
                                "r": 197,
                                "g": 197,
                                "b": 197,
                                "hex": "C5C5C5"
                            }
                        }
                    }]
                }],
                "manufacturerCode": "F0352F45",
                "price": {
                    "baseMSRP": 23100.0,
                    "baseInvoice": 21978.0,
                    "deliveryCharges": 795.0,
                    "usedTmvRetail": 12539.0,
                    "usedPrivateParty": 10918.0,
                    "usedTradeIn": 9090.0,
                    "estimateTmv": false,
                    "tmvRecommendedRating": 0
                },
                "categories": {
                    "market": "Hatchback,Performance",
                    "EPAClass": "Subcompact Cars",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 200423130,
                "name": "Turbo 3dr Hatchback w/Black Interior (1.6L 4cyl Turbo 6A)",
                "year": {
                    "id": 100535749,
                    "year": 2013
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Veloster Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "Turbo",
                "states": ["USED"],
                "squishVins": ["KMHTC6AEDU"],
                "MPG": {
                    "highway": "31",
                    "city": "24"
                }
            }, {
                "make": {
                    "id": 200001398,
                    "name": "Hyundai",
                    "niceName": "hyundai"
                },
                "model": {
                    "id": "Hyundai_Veloster",
                    "name": "Veloster",
                    "niceName": "veloster"
                },
                "engine": {
                    "id": "200378200",
                    "name": "Engine",
                    "equipmentType": "ENGINE",
                    "compressionRatio": 9.5,
                    "cylinder": 4,
                    "size": 1.6,
                    "displacement": 1591.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 201,
                    "torque": 195,
                    "totalValves": 16,
                    "manufacturerEngineCode": "Gamma",
                    "type": "gas",
                    "code": "4ITCG1.6",
                    "compressorType": "turbocharger",
                    "rpm": {
                        "horsepower": 6000,
                        "torque": 1750
                    },
                    "valve": {
                        "timing": "variable valve timing",
                        "gear": "double overhead camshaft"
                    }
                },
                "transmission": {
                    "id": "200423132",
                    "name": "6A",
                    "equipmentType": "TRANSMISSION",
                    "automaticType": "Shiftable automatic",
                    "transmissionType": "AUTOMATIC",
                    "numberOfSpeeds": "6"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "3",
                "options": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423088",
                        "name": "Carpeted Floor Mats",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 110.0,
                            "baseInvoice": 88.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Carpeted Floor Mats",
                        "manufactureOptionCode": "CF"
                    }, {
                        "id": "200423206",
                        "name": "Auto-Dimming Mirror With Homelink",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 275.0,
                            "baseInvoice": 248.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Auto-Dimming Mirror with Homelink",
                        "manufactureOptionCode": "HL"
                    }, {
                        "id": "200423086",
                        "name": "Cargo Net",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 50.0,
                            "baseInvoice": 41.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Net",
                        "manufactureOptionCode": "CN"
                    }, {
                        "id": "200473293",
                        "name": "Bongiovi Premium Audio",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Bongiovi Premium Audio",
                        "manufactureOptionCode": "UA"
                    }, {
                        "id": "200423087",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CL"
                    }, {
                        "id": "200423205",
                        "name": "Interior Light Kit",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 250.0,
                            "baseInvoice": 226.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Interior Light Kit",
                        "manufactureOptionCode": "LK"
                    }]
                }, {
                    "category": "Safety",
                    "options": [{
                        "id": "200423092",
                        "name": "Wheel Locks",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 55.0,
                            "baseInvoice": 44.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Wheel Locks",
                        "manufactureOptionCode": "WL"
                    }]
                }, {
                    "category": "Package",
                    "options": [{
                        "id": "200423091",
                        "name": "Option Group 01",
                        "description": "Vehicle with standard equipment",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 0.0,
                            "baseInvoice": 0.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Option Group 01",
                        "manufactureOptionCode": "01"
                    }, {
                        "id": "200423207",
                        "name": "Ultimate Package",
                        "description": "Vehicle with standard equipment; Panoramic sunroof; Rear backup warning sensors; Navigation system with rearview camera; Automatic headlights; 115V outlet located in front center console",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2500.0,
                            "baseInvoice": 2300.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Ultimate Package",
                        "manufactureOptionCode": "04"
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423090",
                        "name": "Mudguards",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Mudguards",
                        "manufactureOptionCode": "MG"
                    }, {
                        "id": "200445744",
                        "name": "Michelin Pilot Super Sport Summer Tire",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 1200.0,
                            "baseInvoice": 1140.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Michelin Pilot Super Sport Summer Tire",
                        "manufactureOptionCode": "RT"
                    }]
                }],
                "colors": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423202",
                        "name": "Blue Leather",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Blue Leather",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            },
                            "secondary": {
                                "r": 72,
                                "g": 104,
                                "b": 148,
                                "hex": "486894"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "leather"
                        }]
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423084",
                        "name": "Ultra Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ultra Black",
                        "manufactureOptionCode": "MZH",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        }
                    }, {
                        "id": "200423200",
                        "name": "Matte Gray",
                        "equipmentType": "COLOR",
                        "price": {
                            "baseMSRP": 1000.0,
                            "baseInvoice": 910.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Matte Gray",
                        "manufactureOptionCode": "S2G",
                        "colorChips": {
                            "primary": {
                                "r": 79,
                                "g": 79,
                                "b": 81,
                                "hex": "4F4F51"
                            }
                        }
                    }, {
                        "id": "200423081",
                        "name": "Ironman Silver",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ironman Silver",
                        "manufactureOptionCode": "RHM",
                        "colorChips": {
                            "primary": {
                                "r": 197,
                                "g": 197,
                                "b": 197,
                                "hex": "C5C5C5"
                            }
                        }
                    }, {
                        "id": "200423199",
                        "name": "Elite White",
                        "equipmentType": "COLOR",
                        "price": {
                            "baseMSRP": 200.0,
                            "baseInvoice": 182.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Elite White",
                        "manufactureOptionCode": "SW2",
                        "colorChips": {
                            "primary": {
                                "r": 250,
                                "g": 250,
                                "b": 250,
                                "hex": "FAFAFA"
                            }
                        }
                    }]
                }],
                "manufacturerCode": "F0372F45",
                "price": {
                    "baseMSRP": 23100.0,
                    "baseInvoice": 21978.0,
                    "deliveryCharges": 795.0,
                    "usedTmvRetail": 12801.0,
                    "usedPrivateParty": 11099.0,
                    "usedTradeIn": 9180.0,
                    "estimateTmv": false,
                    "tmvRecommendedRating": 0
                },
                "categories": {
                    "market": "Hatchback,Performance",
                    "EPAClass": "Subcompact Cars",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 200423131,
                "name": "Turbo 3dr Hatchback w/Blue Interior (1.6L 4cyl Turbo 6A)",
                "year": {
                    "id": 100535749,
                    "year": 2013
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Veloster Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "Turbo",
                "states": ["USED"],
                "squishVins": ["KMHTC6AEDU"],
                "MPG": {
                    "highway": "31",
                    "city": "24"
                }
            }, {
                "make": {
                    "id": 200001398,
                    "name": "Hyundai",
                    "niceName": "hyundai"
                },
                "model": {
                    "id": "Hyundai_Veloster",
                    "name": "Veloster",
                    "niceName": "veloster"
                },
                "engine": {
                    "id": "200378200",
                    "name": "Engine",
                    "equipmentType": "ENGINE",
                    "compressionRatio": 9.5,
                    "cylinder": 4,
                    "size": 1.6,
                    "displacement": 1591.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 201,
                    "torque": 195,
                    "totalValves": 16,
                    "manufacturerEngineCode": "Gamma",
                    "type": "gas",
                    "code": "4ITCG1.6",
                    "compressorType": "turbocharger",
                    "rpm": {
                        "horsepower": 6000,
                        "torque": 1750
                    },
                    "valve": {
                        "timing": "variable valve timing",
                        "gear": "double overhead camshaft"
                    }
                },
                "transmission": {
                    "id": "200378201",
                    "name": "6M",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "MANUAL",
                    "numberOfSpeeds": "6"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "3",
                "options": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423087",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CL"
                    }, {
                        "id": "200473293",
                        "name": "Bongiovi Premium Audio",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Bongiovi Premium Audio",
                        "manufactureOptionCode": "UA"
                    }, {
                        "id": "200423206",
                        "name": "Auto-Dimming Mirror With Homelink",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 275.0,
                            "baseInvoice": 248.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Auto-Dimming Mirror with Homelink",
                        "manufactureOptionCode": "HL"
                    }, {
                        "id": "200423086",
                        "name": "Cargo Net",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 50.0,
                            "baseInvoice": 41.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Net",
                        "manufactureOptionCode": "CN"
                    }, {
                        "id": "200423088",
                        "name": "Carpeted Floor Mats",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 110.0,
                            "baseInvoice": 88.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Carpeted Floor Mats",
                        "manufactureOptionCode": "CF"
                    }, {
                        "id": "200423205",
                        "name": "Interior Light Kit",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 250.0,
                            "baseInvoice": 226.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Interior Light Kit",
                        "manufactureOptionCode": "LK"
                    }]
                }, {
                    "category": "Safety",
                    "options": [{
                        "id": "200423092",
                        "name": "Wheel Locks",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 55.0,
                            "baseInvoice": 44.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Wheel Locks",
                        "manufactureOptionCode": "WL"
                    }]
                }, {
                    "category": "Package",
                    "options": [{
                        "id": "200423207",
                        "name": "Ultimate Package",
                        "description": "Vehicle with standard equipment; Panoramic sunroof; Rear backup warning sensors; Navigation system with rearview camera; Automatic headlights; 115V outlet located in front center console",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2500.0,
                            "baseInvoice": 2300.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Ultimate Package",
                        "manufactureOptionCode": "04"
                    }, {
                        "id": "200423091",
                        "name": "Option Group 01",
                        "description": "Vehicle with standard equipment",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 0.0,
                            "baseInvoice": 0.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Option Group 01",
                        "manufactureOptionCode": "01"
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423090",
                        "name": "Mudguards",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Mudguards",
                        "manufactureOptionCode": "MG"
                    }, {
                        "id": "200445744",
                        "name": "Michelin Pilot Super Sport Summer Tire",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 1200.0,
                            "baseInvoice": 1140.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Michelin Pilot Super Sport Summer Tire",
                        "manufactureOptionCode": "RT"
                    }]
                }],
                "colors": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423202",
                        "name": "Blue Leather",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Blue Leather",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            },
                            "secondary": {
                                "r": 72,
                                "g": 104,
                                "b": 148,
                                "hex": "486894"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "leather"
                        }]
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423200",
                        "name": "Matte Gray",
                        "equipmentType": "COLOR",
                        "price": {
                            "baseMSRP": 1000.0,
                            "baseInvoice": 910.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Matte Gray",
                        "manufactureOptionCode": "S2G",
                        "colorChips": {
                            "primary": {
                                "r": 79,
                                "g": 79,
                                "b": 81,
                                "hex": "4F4F51"
                            }
                        }
                    }, {
                        "id": "200423081",
                        "name": "Ironman Silver",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ironman Silver",
                        "manufactureOptionCode": "RHM",
                        "colorChips": {
                            "primary": {
                                "r": 197,
                                "g": 197,
                                "b": 197,
                                "hex": "C5C5C5"
                            }
                        }
                    }, {
                        "id": "200423199",
                        "name": "Elite White",
                        "equipmentType": "COLOR",
                        "price": {
                            "baseMSRP": 200.0,
                            "baseInvoice": 182.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Elite White",
                        "manufactureOptionCode": "SW2",
                        "colorChips": {
                            "primary": {
                                "r": 250,
                                "g": 250,
                                "b": 250,
                                "hex": "FAFAFA"
                            }
                        }
                    }, {
                        "id": "200423084",
                        "name": "Ultra Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ultra Black",
                        "manufactureOptionCode": "MZH",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        }
                    }]
                }],
                "manufacturerCode": "F0373F45",
                "price": {
                    "baseMSRP": 22100.0,
                    "baseInvoice": 21038.0,
                    "deliveryCharges": 795.0,
                    "usedTmvRetail": 12089.0,
                    "usedPrivateParty": 10499.0,
                    "usedTradeIn": 8706.0,
                    "estimateTmv": false,
                    "tmvRecommendedRating": 0
                },
                "categories": {
                    "market": "Hatchback,Performance",
                    "EPAClass": "Subcompact Cars",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 101393259,
                "name": "Turbo 3dr Hatchback w/Blue Interior (1.6L 4cyl Turbo 6M)",
                "year": {
                    "id": 100535749,
                    "year": 2013
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Veloster Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "Turbo",
                "states": ["USED"],
                "squishVins": ["KMHTC6AEDU"],
                "MPG": {
                    "highway": "35",
                    "city": "24"
                }
            }, {
                "make": {
                    "id": 200001398,
                    "name": "Hyundai",
                    "niceName": "hyundai"
                },
                "model": {
                    "id": "Hyundai_Veloster",
                    "name": "Veloster",
                    "niceName": "veloster"
                },
                "engine": {
                    "id": "200423074",
                    "name": "1.6L Inline4 16 Valve   Gas Regular Unleaded",
                    "equipmentType": "ENGINE",
                    "compressionRatio": 11.0,
                    "cylinder": 4,
                    "size": 1.6,
                    "displacement": 1591.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 138,
                    "torque": 123,
                    "totalValves": 16,
                    "manufacturerEngineCode": "Gamma",
                    "type": "gas",
                    "code": "4INAG1.6",
                    "compressorType": "NA",
                    "rpm": {
                        "horsepower": 6300,
                        "torque": 4850
                    },
                    "valve": {
                        "timing": "variable valve timing",
                        "gear": "double overhead camshaft"
                    }
                },
                "transmission": {
                    "id": "200378201",
                    "name": "6M",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "MANUAL",
                    "numberOfSpeeds": "6"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "3",
                "options": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423206",
                        "name": "Auto-Dimming Mirror With Homelink",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 275.0,
                            "baseInvoice": 248.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Auto-Dimming Mirror with Homelink",
                        "manufactureOptionCode": "HL"
                    }, {
                        "id": "200423086",
                        "name": "Cargo Net",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 50.0,
                            "baseInvoice": 41.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Net",
                        "manufactureOptionCode": "CN"
                    }, {
                        "id": "200423087",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CL"
                    }, {
                        "id": "200423088",
                        "name": "Carpeted Floor Mats",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 110.0,
                            "baseInvoice": 88.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Carpeted Floor Mats",
                        "manufactureOptionCode": "CF"
                    }, {
                        "id": "200473293",
                        "name": "Bongiovi Premium Audio",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Bongiovi Premium Audio",
                        "manufactureOptionCode": "UA"
                    }, {
                        "id": "200423205",
                        "name": "Interior Light Kit",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 250.0,
                            "baseInvoice": 226.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Interior Light Kit",
                        "manufactureOptionCode": "LK"
                    }, {
                        "id": "200423089",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CT"
                    }]
                }, {
                    "category": "Safety",
                    "options": [{
                        "id": "200423092",
                        "name": "Wheel Locks",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 55.0,
                            "baseInvoice": 44.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Wheel Locks",
                        "manufactureOptionCode": "WL"
                    }]
                }, {
                    "category": "Package",
                    "options": [{
                        "id": "200423094",
                        "name": "Tech Package",
                        "description": "Vehicle with standard equipment; Rear backup warning sensors; Unique 18\" alloy wheels with exterior color painted inserts; P215/40R18; Navigation system with rearview camera; Automatic headlights; Proximity key entry with electronic push button start; 115V outlet located in front center console",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2000.0,
                            "baseInvoice": 1840.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Tech Package",
                        "manufactureOptionCode": "03"
                    }, {
                        "id": "200423091",
                        "name": "Option Group 01",
                        "description": "Vehicle with standard equipment",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 0.0,
                            "baseInvoice": 0.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Option Group 01",
                        "manufactureOptionCode": "01"
                    }, {
                        "id": "200423093",
                        "name": "Style Package",
                        "description": "Vehicle with standard equipment; 18\" alloy wheels with P215/40R18 tires; Chrome grille surround with piano black highlights; Front fog lights; Panoramic sunroof; Piano black interior accents; 450-watt Dimension premium audio system with AM/FM/XM satellite radio/CD/MP3 with 8 speakers including external amplifier and subwoofer; Leatherette bolster seats and door inserts; Leather wrapped steering wheel and shift knob; Alloy pedals; Driver auto up/down window",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2000.0,
                            "baseInvoice": 1840.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Style Package",
                        "manufactureOptionCode": "02"
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423203",
                        "name": "Graphic Package (Lower Body)",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 195.0,
                            "baseInvoice": 176.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Graphic Package (Lower Body)",
                        "manufactureOptionCode": "LG"
                    }, {
                        "id": "200423090",
                        "name": "Mudguards",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Mudguards",
                        "manufactureOptionCode": "MG"
                    }, {
                        "id": "200423204",
                        "name": "Graphic Package (Graphic Disco)",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 195.0,
                            "baseInvoice": 176.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Graphic Package (Graphic Disco)",
                        "manufactureOptionCode": "GD"
                    }]
                }],
                "colors": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423209",
                        "name": "Black Cloth/Leatherette",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Black Cloth/Leatherette",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 32,
                                "g": 38,
                                "b": 42,
                                "hex": "20262A"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "vinyl/cloth"
                        }]
                    }, {
                        "id": "200423077",
                        "name": "Black Cloth",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Black",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "cloth"
                        }]
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423078",
                        "name": "Boston Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Boston Red",
                        "manufactureOptionCode": "P9R",
                        "colorChips": {
                            "primary": {
                                "r": 180,
                                "g": 27,
                                "b": 3,
                                "hex": "B41B03"
                            }
                        }
                    }, {
                        "id": "200423083",
                        "name": "Triathlon Gray",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Triathlon Gray",
                        "manufactureOptionCode": "N9S",
                        "colorChips": {
                            "primary": {
                                "r": 125,
                                "g": 125,
                                "b": 125,
                                "hex": "7D7D7D"
                            }
                        }
                    }, {
                        "id": "200423082",
                        "name": "Marathon Blue",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Marathon Blue",
                        "manufactureOptionCode": "UU9",
                        "colorChips": {
                            "primary": {
                                "r": 48,
                                "g": 74,
                                "b": 193,
                                "hex": "304AC1"
                            }
                        }
                    }, {
                        "id": "200423085",
                        "name": "Vitamin C",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Vitamin C",
                        "manufactureOptionCode": "R9A",
                        "colorChips": {
                            "primary": {
                                "r": 192,
                                "g": 117,
                                "b": 46,
                                "hex": "C0752E"
                            }
                        }
                    }, {
                        "id": "200423079",
                        "name": "Century White",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Century White",
                        "manufactureOptionCode": "PGU",
                        "colorChips": {
                            "primary": {
                                "r": 250,
                                "g": 250,
                                "b": 250,
                                "hex": "FAFAFA"
                            }
                        }
                    }, {
                        "id": "200423076",
                        "name": "26.2 Yellow",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "26.2 Yellow",
                        "manufactureOptionCode": "SYY",
                        "colorChips": {
                            "primary": {
                                "r": 217,
                                "g": 209,
                                "b": 122,
                                "hex": "D9D17A"
                            }
                        }
                    }, {
                        "id": "200423084",
                        "name": "Ultra Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ultra Black",
                        "manufactureOptionCode": "MZH",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        }
                    }, {
                        "id": "200423081",
                        "name": "Ironman Silver",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ironman Silver",
                        "manufactureOptionCode": "RHM",
                        "colorChips": {
                            "primary": {
                                "r": 197,
                                "g": 197,
                                "b": 197,
                                "hex": "C5C5C5"
                            }
                        }
                    }]
                }],
                "manufacturerCode": "F0303F45",
                "price": {
                    "baseMSRP": 17600.0,
                    "baseInvoice": 16983.0,
                    "deliveryCharges": 795.0,
                    "usedTmvRetail": 9937.0,
                    "usedPrivateParty": 8497.0,
                    "usedTradeIn": 6874.0,
                    "estimateTmv": false,
                    "tmvRecommendedRating": 0
                },
                "categories": {
                    "market": "Hatchback",
                    "EPAClass": "Subcompact Cars",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 200423071,
                "name": "3dr Hatchback w/Black Interior (1.6L 4cyl 6M)",
                "year": {
                    "id": 100535749,
                    "year": 2013
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Veloster Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "Base",
                "states": ["USED"],
                "squishVins": ["KMHTC6ADDU"],
                "MPG": {
                    "highway": "37",
                    "city": "27"
                }
            }, {
                "make": {
                    "id": 200001398,
                    "name": "Hyundai",
                    "niceName": "hyundai"
                },
                "model": {
                    "id": "Hyundai_Veloster",
                    "name": "Veloster",
                    "niceName": "veloster"
                },
                "engine": {
                    "id": "200424112",
                    "name": "DCT Engine",
                    "equipmentType": "ENGINE",
                    "compressionRatio": 11.0,
                    "cylinder": 4,
                    "size": 1.6,
                    "displacement": 1591.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 132,
                    "torque": 120,
                    "totalValves": 16,
                    "manufacturerEngineCode": "Gamma",
                    "type": "gas",
                    "code": "4INAG1.6",
                    "compressorType": "NA",
                    "rpm": {
                        "horsepower": 6300,
                        "torque": 4850
                    },
                    "valve": {
                        "timing": "variable valve timing",
                        "gear": "double overhead camshaft"
                    }
                },
                "transmission": {
                    "id": "200423075",
                    "name": "6A",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "AUTOMATED_MANUAL",
                    "numberOfSpeeds": "6"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "3",
                "options": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423086",
                        "name": "Cargo Net",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 50.0,
                            "baseInvoice": 41.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Net",
                        "manufactureOptionCode": "CN"
                    }, {
                        "id": "200473293",
                        "name": "Bongiovi Premium Audio",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Bongiovi Premium Audio",
                        "manufactureOptionCode": "UA"
                    }, {
                        "id": "200423206",
                        "name": "Auto-Dimming Mirror With Homelink",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 275.0,
                            "baseInvoice": 248.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Auto-Dimming Mirror with Homelink",
                        "manufactureOptionCode": "HL"
                    }, {
                        "id": "200423205",
                        "name": "Interior Light Kit",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 250.0,
                            "baseInvoice": 226.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Interior Light Kit",
                        "manufactureOptionCode": "LK"
                    }, {
                        "id": "200423089",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CT"
                    }, {
                        "id": "200423087",
                        "name": "Cargo Tray",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Cargo Tray",
                        "manufactureOptionCode": "CL"
                    }, {
                        "id": "200423088",
                        "name": "Carpeted Floor Mats",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 110.0,
                            "baseInvoice": 88.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Carpeted Floor Mats",
                        "manufactureOptionCode": "CF"
                    }]
                }, {
                    "category": "Mechanical",
                    "options": [{
                        "id": "200445743",
                        "name": "Remote Start",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 350.0,
                            "baseInvoice": 316.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Remote Start",
                        "manufactureOptionCode": "RK"
                    }]
                }, {
                    "category": "Safety",
                    "options": [{
                        "id": "200423092",
                        "name": "Wheel Locks",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 55.0,
                            "baseInvoice": 44.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Wheel Locks",
                        "manufactureOptionCode": "WL"
                    }]
                }, {
                    "category": "Package",
                    "options": [{
                        "id": "200423093",
                        "name": "Style Package",
                        "description": "Vehicle with standard equipment; 18\" alloy wheels with P215/40R18 tires; Chrome grille surround with piano black highlights; Front fog lights; Panoramic sunroof; Piano black interior accents; 450-watt Dimension premium audio system with AM/FM/XM satellite radio/CD/MP3 with 8 speakers including external amplifier and subwoofer; Leatherette bolster seats and door inserts; Leather wrapped steering wheel and shift knob; Alloy pedals; Driver auto up/down window",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2000.0,
                            "baseInvoice": 1840.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Style Package",
                        "manufactureOptionCode": "02"
                    }, {
                        "id": "200423094",
                        "name": "Tech Package",
                        "description": "Vehicle with standard equipment; Rear backup warning sensors; Unique 18\" alloy wheels with exterior color painted inserts; P215/40R18; Navigation system with rearview camera; Automatic headlights; Proximity key entry with electronic push button start; 115V outlet located in front center console",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 2000.0,
                            "baseInvoice": 1840.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Tech Package",
                        "manufactureOptionCode": "03"
                    }, {
                        "id": "200423091",
                        "name": "Option Group 01",
                        "description": "Vehicle with standard equipment",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 0.0,
                            "baseInvoice": 0.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Option Group 01",
                        "manufactureOptionCode": "01"
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423203",
                        "name": "Graphic Package (Lower Body)",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 195.0,
                            "baseInvoice": 176.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Graphic Package (Lower Body)",
                        "manufactureOptionCode": "LG"
                    }, {
                        "id": "200423204",
                        "name": "Graphic Package (Graphic Disco)",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 195.0,
                            "baseInvoice": 176.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Graphic Package (Graphic Disco)",
                        "manufactureOptionCode": "GD"
                    }, {
                        "id": "200423090",
                        "name": "Mudguards",
                        "equipmentType": "OPTION",
                        "price": {
                            "baseMSRP": 95.0,
                            "baseInvoice": 76.0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "Mudguards",
                        "manufactureOptionCode": "MG"
                    }]
                }],
                "colors": [{
                    "category": "Interior",
                    "options": [{
                        "id": "200423077",
                        "name": "Black Cloth",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Black",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "cloth"
                        }]
                    }, {
                        "id": "200423209",
                        "name": "Black Cloth/Leatherette",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Black Cloth/Leatherette",
                        "manufactureOptionCode": "RY",
                        "colorChips": {
                            "primary": {
                                "r": 32,
                                "g": 38,
                                "b": 42,
                                "hex": "20262A"
                            }
                        },
                        "fabricTypes": [{
                            "name": "FABRIC_TYPE_1",
                            "value": "vinyl/cloth"
                        }]
                    }]
                }, {
                    "category": "Exterior",
                    "options": [{
                        "id": "200423079",
                        "name": "Century White",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Century White",
                        "manufactureOptionCode": "PGU",
                        "colorChips": {
                            "primary": {
                                "r": 250,
                                "g": 250,
                                "b": 250,
                                "hex": "FAFAFA"
                            }
                        }
                    }, {
                        "id": "200423082",
                        "name": "Marathon Blue",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Marathon Blue",
                        "manufactureOptionCode": "UU9",
                        "colorChips": {
                            "primary": {
                                "r": 48,
                                "g": 74,
                                "b": 193,
                                "hex": "304AC1"
                            }
                        }
                    }, {
                        "id": "200423084",
                        "name": "Ultra Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ultra Black",
                        "manufactureOptionCode": "MZH",
                        "colorChips": {
                            "primary": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "hex": "000000"
                            }
                        }
                    }, {
                        "id": "200423076",
                        "name": "26.2 Yellow",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "26.2 Yellow",
                        "manufactureOptionCode": "SYY",
                        "colorChips": {
                            "primary": {
                                "r": 217,
                                "g": 209,
                                "b": 122,
                                "hex": "D9D17A"
                            }
                        }
                    }, {
                        "id": "200423083",
                        "name": "Triathlon Gray",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Triathlon Gray",
                        "manufactureOptionCode": "N9S",
                        "colorChips": {
                            "primary": {
                                "r": 125,
                                "g": 125,
                                "b": 125,
                                "hex": "7D7D7D"
                            }
                        }
                    }, {
                        "id": "200423078",
                        "name": "Boston Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Boston Red",
                        "manufactureOptionCode": "P9R",
                        "colorChips": {
                            "primary": {
                                "r": 180,
                                "g": 27,
                                "b": 3,
                                "hex": "B41B03"
                            }
                        }
                    }, {
                        "id": "200423081",
                        "name": "Ironman Silver",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Ironman Silver",
                        "manufactureOptionCode": "RHM",
                        "colorChips": {
                            "primary": {
                                "r": 197,
                                "g": 197,
                                "b": 197,
                                "hex": "C5C5C5"
                            }
                        }
                    }, {
                        "id": "200423085",
                        "name": "Vitamin C",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Vitamin C",
                        "manufactureOptionCode": "R9A",
                        "colorChips": {
                            "primary": {
                                "r": 192,
                                "g": 117,
                                "b": 46,
                                "hex": "C0752E"
                            }
                        }
                    }]
                }],
                "manufacturerCode": "F0302F45",
                "price": {
                    "baseMSRP": 18850.0,
                    "baseInvoice": 18170.0,
                    "deliveryCharges": 795.0,
                    "usedTmvRetail": 10873.0,
                    "usedPrivateParty": 9330.0,
                    "usedTradeIn": 7589.0,
                    "estimateTmv": false,
                    "tmvRecommendedRating": 0
                },
                "categories": {
                    "market": "Hatchback",
                    "EPAClass": "Subcompact Cars",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 200423070,
                "name": "3dr Hatchback w/Black Interior (1.6L 4cyl 6AM)",
                "year": {
                    "id": 100535749,
                    "year": 2013
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Veloster Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "Base",
                "states": ["USED"],
                "squishVins": ["KMHTC6ADDU"],
                "MPG": {
                    "highway": "37",
                    "city": "28"
                }
            }],
            "stylesCount": 12
        },
        serviceDetails: {
            "actionHolder": [{
                "id": 1902596,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Change",
                "item": "Engine oil",
                "itemDescription": "A substance that lubricates and cools the moving parts of the engine and reduces corrosion and the formation of rust.",
                "laborUnits": 0.17,
                "partUnits": 4.2,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749",
                "partCostPerUnit": 5.92
            }, {
                "id": 1902630,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Suspension links & mountings",
                "itemDescription": "The assemblage of joints, links and other components between a vehicle and its wheels. The suspension in concert with the wheels and tires is largely responsible for a given vehicle\u0027s ride and handling characteristics.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902634,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Drive shaft and boots",
                "itemDescription": "Rubber seals covering the central shaft that the wheels rotate on.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902644,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Brakes, rear",
                "itemDescription": "A vehicle\u0027s stopping mechanism comprised of a pedal connected to a hydraulic master cylinder that can actuate clamping and/or expanding devices at all four wheels that slow or stop a vehicle\u0027s rolling motion.  Also used to refer to the brake system\u0027s most frequently replaced parts, brake pads and/or brake shoes.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902646,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Fuel filler cap & vapor hose",
                "itemDescription": "The cap used to seal the fuel filler neck and the flexible tubing in the evaporative emissions systems.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902632,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Fuel lines, hoses & connections",
                "itemDescription": "The tubing and connections that carry fuel throughout a vehicle.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902628,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Brake lines, hoses & connections",
                "itemDescription": "Tubes and their connections that carry brake fluid between the various components in a vehicle\u0027s brake system.",
                "laborUnits": 0.3,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902626,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Air conditioning system",
                "itemDescription": "The system of receiver/dryer, evaporator, condenser, compressor, refrigerant lines, controls and valves that allow for the controlled refrigeration of the air present in or entering a vehicle\u0027s interior.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902610,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Throttle system",
                "itemDescription": "The components used to control the volume of air to the engine.",
                "laborUnits": 0.09,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902621,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 37500,
                "frequency": 4,
                "action": "Inspect",
                "item": "Transmission fluid",
                "itemDescription": "The liquid in a transmission that  allows it to function and serves as a cooling and lubrication medium.",
                "laborUnits": 0.02,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902619,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Inspect",
                "item": "Vacuum lines & hoses",
                "itemDescription": "Flexible tubing used to carry air, fluids, vapors or pressurized gas.",
                "laborUnits": 0.07,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902648,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Fuel tank air filter",
                "itemDescription": "A replaceable metal or plastic canister that prevents particulate matter and most contaminants in the fuel from reaching the engine.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902612,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Inspect/rotate",
                "item": "Wheels & tires",
                "itemDescription": "A circular frame of hard material that may be solid or partly solid, is capable of  turning on an axle, and holds the rubber cushion that contains compressed air.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902586,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Inspect",
                "item": "Battery",
                "itemDescription": "A box containing lead plates filled with a water and acid mixture that stores electricity generated by the alternator. It is the source of power for parts of the car that operate on electricity.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902636,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Inspect",
                "item": "Air filter",
                "itemDescription": "A device that filters incoming air fed to the engine.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902638,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Replace",
                "item": "Air filter",
                "itemDescription": "A device that filters incoming air fed to the engine.",
                "laborUnits": 0.2,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749",
                "partCostPerUnit": 15.32
            }, {
                "id": 1902593,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Drive belt(s)",
                "itemDescription": "A belt that transfers the rotation of the engine through the crankshaft pulley to drive various devices, such as the alternator, water pump, air conditioning compressor or power steering pump.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902591,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Replace",
                "item": "Cabin air filter",
                "itemDescription": "A filtering system that meters out pollen, road dust and other particles before they can reach the passenger cabin.",
                "laborUnits": 0.3,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749",
                "partCostPerUnit": 20.16
            }, {
                "id": 1902642,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Brakes, front",
                "itemDescription": "A vehicle\u0027s stopping mechanism comprised of a pedal connected to a hydraulic master cylinder that can actuate clamping and/or expanding devices at all four wheels that slow or stop a vehicle\u0027s rolling motion.  Also used to refer to the brake system\u0027s most frequently replaced parts, brake pads and/or brake shoes.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902589,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Brake fluid",
                "itemDescription": "The fluid used in the hydraulic brake system.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902608,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Steering & suspension",
                "itemDescription": "A vehicle\u0027s steering is the collection of components that enable the operator to direct a vehicle in a desired direction. Suspension is the assemblage of joints, links and other components between a vehicle and its wheels.",
                "laborUnits": 0.25,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902606,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 105000,
                "frequency": 4,
                "action": "Replace",
                "item": "Spark plugs",
                "itemDescription": "Cables that carry a high-voltage electrical charge from the distributor cap or ignition coils to the spark plugs.",
                "laborUnits": 0.5,
                "partUnits": 4.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749",
                "partCostPerUnit": 3.2
            }, {
                "id": 1902597,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Exhaust system",
                "itemDescription": "A system of tubing that routes exhaust gases from the exhaust manifold to the rear of the car and into the air. The exhaust system includes catalytic converters and mufflers that help reduce air and noise pollution generated by an engine.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902604,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Parking brake",
                "itemDescription": "The mechanical brake connected by cables to either a ratcheting hand lever or foot pedal used to hold or apply a vehicle\u0027s rear and sometimes front brakes while left unattended or under conditions of hydraulic circuit failure. Sometimes referred to as the emergency brake.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902599,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Fuel filter",
                "itemDescription": "A replaceable metal or plastic canister that prevents particulate matter and most contaminants in the fuel from reaching the engine.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1902603,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Replace",
                "item": "Oil filter",
                "itemDescription": "A cartridge-filled canister placed in an engine\u0027s lubricating system to strain dirt and abrasive materials out of the oil.",
                "laborUnits": 0.1,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749",
                "partCostPerUnit": 6.12
            }, {
                "id": 1902624,
                "engineCode": "4ITCG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 120000,
                "frequency": 4,
                "action": "Flush/replace",
                "item": "Coolant",
                "itemDescription": "Also known as \"antifreeze.\" A mixture of water and ethylene glycol that has both a higher boiling point and a lower freezing point than plain water.",
                "laborUnits": 0.7,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749",
                "partCostPerUnit": 22.95
            }, {
                "id": 1837218,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Change",
                "item": "Engine oil",
                "itemDescription": "A substance that lubricates and cools the moving parts of the engine and reduces corrosion and the formation of rust.",
                "laborUnits": 0.17,
                "partUnits": 4.2,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749",
                "partCostPerUnit": 5.92
            }, {
                "id": 1837246,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 37500,
                "frequency": 4,
                "action": "Inspect",
                "item": "Transmission fluid",
                "itemDescription": "The liquid in a transmission that  allows it to function and serves as a cooling and lubrication medium.",
                "laborUnits": 0.02,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837242,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Steering & suspension",
                "itemDescription": "A vehicle\u0027s steering is the collection of components that enable the operator to direct a vehicle in a desired direction. Suspension is the assemblage of joints, links and other components between a vehicle and its wheels.",
                "laborUnits": 0.25,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837222,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Air conditioning system",
                "itemDescription": "The system of receiver/dryer, evaporator, condenser, compressor, refrigerant lines, controls and valves that allow for the controlled refrigeration of the air present in or entering a vehicle\u0027s interior.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837224,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Drive shaft and boots",
                "itemDescription": "Rubber seals covering the central shaft that the wheels rotate on.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837235,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Brake fluid",
                "itemDescription": "The fluid used in the hydraulic brake system.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837229,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Fuel filler cap & vapor hose",
                "itemDescription": "The cap used to seal the fuel filler neck and the flexible tubing in the evaporative emissions systems.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837228,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Brakes, rear",
                "itemDescription": "A vehicle\u0027s stopping mechanism comprised of a pedal connected to a hydraulic master cylinder that can actuate clamping and/or expanding devices at all four wheels that slow or stop a vehicle\u0027s rolling motion.  Also used to refer to the brake system\u0027s most frequently replaced parts, brake pads and/or brake shoes.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837226,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Drive belt(s)",
                "itemDescription": "A belt that transfers the rotation of the engine through the crankshaft pulley to drive various devices, such as the alternator, water pump, air conditioning compressor or power steering pump.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837233,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Brake lines, hoses & connections",
                "itemDescription": "Tubes and their connections that carry brake fluid between the various components in a vehicle\u0027s brake system.",
                "laborUnits": 0.3,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837231,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Brakes, front",
                "itemDescription": "A vehicle\u0027s stopping mechanism comprised of a pedal connected to a hydraulic master cylinder that can actuate clamping and/or expanding devices at all four wheels that slow or stop a vehicle\u0027s rolling motion.  Also used to refer to the brake system\u0027s most frequently replaced parts, brake pads and/or brake shoes.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837237,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Inspect",
                "item": "Battery",
                "itemDescription": "A box containing lead plates filled with a water and acid mixture that stores electricity generated by the alternator. It is the source of power for parts of the car that operate on electricity.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837244,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Inspect",
                "item": "Vacuum lines & hoses",
                "itemDescription": "Flexible tubing used to carry air, fluids, vapors or pressurized gas.",
                "laborUnits": 0.07,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837250,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Suspension links & mountings",
                "itemDescription": "The assemblage of joints, links and other components between a vehicle and its wheels. The suspension in concert with the wheels and tires is largely responsible for a given vehicle\u0027s ride and handling characteristics.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837248,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Throttle system",
                "itemDescription": "The components used to control the volume of air to the engine.",
                "laborUnits": 0.09,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837253,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Fuel lines, hoses & connections",
                "itemDescription": "The tubing and connections that carry fuel throughout a vehicle.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837251,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Exhaust system",
                "itemDescription": "A system of tubing that routes exhaust gases from the exhaust manifold to the rear of the car and into the air. The exhaust system includes catalytic converters and mufflers that help reduce air and noise pollution generated by an engine.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837277,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 105000,
                "frequency": 4,
                "action": "Replace",
                "item": "Spark plugs",
                "itemDescription": "Cables that carry a high-voltage electrical charge from the distributor cap or ignition coils to the spark plugs.",
                "laborUnits": 0.5,
                "partUnits": 4.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749",
                "partCostPerUnit": 3.2
            }, {
                "id": 1837260,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Inspect/rotate",
                "item": "Wheels & tires",
                "itemDescription": "A circular frame of hard material that may be solid or partly solid, is capable of  turning on an axle, and holds the rubber cushion that contains compressed air.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837256,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Parking brake",
                "itemDescription": "The mechanical brake connected by cables to either a ratcheting hand lever or foot pedal used to hold or apply a vehicle\u0027s rear and sometimes front brakes while left unattended or under conditions of hydraulic circuit failure. Sometimes referred to as the emergency brake.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837272,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Replace",
                "item": "Oil filter",
                "itemDescription": "A cartridge-filled canister placed in an engine\u0027s lubricating system to strain dirt and abrasive materials out of the oil.",
                "laborUnits": 0.1,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749",
                "partCostPerUnit": 6.12
            }, {
                "id": 1837257,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Fuel tank air filter",
                "itemDescription": "A replaceable metal or plastic canister that prevents particulate matter and most contaminants in the fuel from reaching the engine.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837262,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Replace",
                "item": "Air filter",
                "itemDescription": "A device that filters incoming air fed to the engine.",
                "laborUnits": 0.2,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749",
                "partCostPerUnit": 15.32
            }, {
                "id": 1837267,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "frequency": 4,
                "action": "Replace",
                "item": "Cabin air filter",
                "itemDescription": "A filtering system that meters out pollen, road dust and other particles before they can reach the passenger cabin.",
                "laborUnits": 0.3,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749",
                "partCostPerUnit": 20.16
            }, {
                "id": 1837239,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "frequency": 4,
                "action": "Inspect",
                "item": "Air filter",
                "itemDescription": "A device that filters incoming air fed to the engine.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837219,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "frequency": 4,
                "action": "Inspect",
                "item": "Fuel filter",
                "itemDescription": "A replaceable metal or plastic canister that prevents particulate matter and most contaminants in the fuel from reaching the engine.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749"
            }, {
                "id": 1837214,
                "engineCode": "4INAG1.6",
                "transmissionCode": "ALL",
                "intervalMileage": 120000,
                "frequency": 4,
                "action": "Flush/replace",
                "item": "Coolant",
                "itemDescription": "Also known as \"antifreeze.\" A mixture of water and ethylene glycol that has both a higher boiling point and a lower freezing point than plain water.",
                "laborUnits": 0.7,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100535749",
                "partCostPerUnit": 22.95
            }]
        }
    },
    michael: {
        year: 1997,
        make: "mitsubishi",
        model: "eclipse",
        style: "GS-T Turbo 2dr Hatchback",
        userId: 3,
        styleDetails: {
            "styles": [{
                "make": {
                    "id": 200002915,
                    "name": "Mitsubishi",
                    "niceName": "mitsubishi"
                },
                "model": {
                    "id": "Mitsubishi_Eclipse",
                    "name": "Eclipse",
                    "niceName": "eclipse"
                },
                "engine": {
                    "id": "200565908",
                    "name": "Engine",
                    "equipmentType": "ENGINE",
                    "cylinder": 4,
                    "size": 2.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 210,
                    "torque": 214,
                    "type": "gas",
                    "code": "4ITCG2.0",
                    "compressorType": "turbocharger",
                    "rpm": {
                        "horsepower": 6000,
                        "torque": 3000
                    }
                },
                "transmission": {
                    "id": "200565906",
                    "name": "5M",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "MANUAL",
                    "numberOfSpeeds": "5"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "2",
                "options": [],
                "colors": [{
                    "category": "Exterior",
                    "options": [{
                        "id": "200565912",
                        "name": "Kalapana Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Kalapana Black",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565914",
                        "name": "Saronno Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Saronno Red",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565910",
                        "name": "Northstar White",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Northstar White",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565911",
                        "name": "Minden Silver Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Minden Silver Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565913",
                        "name": "Magenta Grey Pearl",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Magenta Grey Pearl",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565916",
                        "name": "Barcelona Red Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Barcelona Red Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565909",
                        "name": "Monarch Green Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Monarch Green Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565915",
                        "name": "Cayenne Red Pearl",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Cayenne Red Pearl",
                        "manufactureOptionCode": "000"
                    }]
                }],
                "price": {
                    "usedTmvRetail": 2379.0,
                    "usedPrivateParty": 1396.0,
                    "usedTradeIn": 806.0,
                    "estimateTmv": false
                },
                "categories": {
                    "market": "Hatchback,Factory Tuner,Performance",
                    "EPAClass": "SUBCOMPACT_CARS",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 262,
                "name": "GS-T Turbo 2dr Hatchback",
                "year": {
                    "id": 1683,
                    "year": 1997
                },
                "submodel": {
                    "body": "Hatchback",
                    "tuner": "GS-T",
                    "modelName": "Eclipse GS-T",
                    "niceName": "gs-t"
                },
                "trim": "GS-T",
                "states": ["USED"],
                "squishVins": ["4A3AK54FVE"],
                "MPG": {
                    "highway": "29",
                    "city": "21"
                }
            }, {
                "make": {
                    "id": 200002915,
                    "name": "Mitsubishi",
                    "niceName": "mitsubishi"
                },
                "model": {
                    "id": "Mitsubishi_Eclipse",
                    "name": "Eclipse",
                    "niceName": "eclipse"
                },
                "engine": {
                    "id": "200565930",
                    "name": "Engine",
                    "equipmentType": "ENGINE",
                    "cylinder": 4,
                    "size": 2.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 140,
                    "torque": 130,
                    "type": "gas",
                    "code": "4INAG2.0",
                    "rpm": {
                        "horsepower": 6000,
                        "torque": 4800
                    }
                },
                "transmission": {
                    "id": "200565928",
                    "name": "5M",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "MANUAL",
                    "numberOfSpeeds": "5"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "2",
                "options": [],
                "colors": [{
                    "category": "Exterior",
                    "options": [{
                        "id": "200565935",
                        "name": "Magenta Grey Pearl",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Magenta Grey Pearl",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565937",
                        "name": "Monarch Green Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Monarch Green Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565934",
                        "name": "Cayenne Red Pearl",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Cayenne Red Pearl",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565932",
                        "name": "Kalapana Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Kalapana Black",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565931",
                        "name": "Northstar White",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Northstar White",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565933",
                        "name": "Minden Silver Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Minden Silver Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565938",
                        "name": "Saronno Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Saronno Red",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565936",
                        "name": "Barcelona Red Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Barcelona Red Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }]
                }],
                "price": {
                    "usedTmvRetail": 2000.0,
                    "usedPrivateParty": 1063.0,
                    "usedTradeIn": 500.0,
                    "estimateTmv": false
                },
                "categories": {
                    "market": "Hatchback",
                    "EPAClass": "SUBCOMPACT_CARS",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 640,
                "name": "RS 2dr Hatchback",
                "year": {
                    "id": 1683,
                    "year": 1997
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Eclipse Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "RS",
                "states": ["USED"],
                "squishVins": ["4A3AK34YVE"],
                "MPG": {
                    "highway": "30",
                    "city": "19"
                }
            }, {
                "make": {
                    "id": 200002915,
                    "name": "Mitsubishi",
                    "niceName": "mitsubishi"
                },
                "model": {
                    "id": "Mitsubishi_Eclipse",
                    "name": "Eclipse",
                    "niceName": "eclipse"
                },
                "engine": {
                    "id": "200565897",
                    "name": "Engine",
                    "equipmentType": "ENGINE",
                    "cylinder": 4,
                    "size": 2.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 140,
                    "torque": 130,
                    "type": "gas",
                    "code": "4INAG2.0",
                    "rpm": {
                        "horsepower": 6000,
                        "torque": 4800
                    }
                },
                "transmission": {
                    "id": "200565895",
                    "name": "5M",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "MANUAL",
                    "numberOfSpeeds": "5"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "2",
                "options": [],
                "colors": [{
                    "category": "Exterior",
                    "options": [{
                        "id": "200565901",
                        "name": "Monarch Green Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Monarch Green Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565905",
                        "name": "Northstar White",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Northstar White",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565902",
                        "name": "Saronno Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Saronno Red",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565903",
                        "name": "Cayenne Red Pearl",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Cayenne Red Pearl",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565899",
                        "name": "Kalapana Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Kalapana Black",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565900",
                        "name": "Magenta Grey Pearl",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Magenta Grey Pearl",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565904",
                        "name": "Barcelona Red Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Barcelona Red Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565898",
                        "name": "Minden Silver Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Minden Silver Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }]
                }],
                "price": {
                    "usedTmvRetail": 2000.0,
                    "usedPrivateParty": 1063.0,
                    "usedTradeIn": 500.0,
                    "estimateTmv": false
                },
                "categories": {
                    "market": "Hatchback",
                    "EPAClass": "SUBCOMPACT_CARS",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 11866,
                "name": "2dr Hatchback",
                "year": {
                    "id": 1683,
                    "year": 1997
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Eclipse Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "Base",
                "states": ["USED"],
                "squishVins": ["4A3AK24YVE"],
                "MPG": {
                    "highway": "30",
                    "city": "19"
                }
            }, {
                "make": {
                    "id": 200002915,
                    "name": "Mitsubishi",
                    "niceName": "mitsubishi"
                },
                "model": {
                    "id": "Mitsubishi_Eclipse",
                    "name": "Eclipse",
                    "niceName": "eclipse"
                },
                "engine": {
                    "id": "200565886",
                    "name": "Engine",
                    "equipmentType": "ENGINE",
                    "cylinder": 4,
                    "size": 2.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 140,
                    "torque": 130,
                    "type": "gas",
                    "code": "4INAG2.0",
                    "rpm": {
                        "horsepower": 6000,
                        "torque": 4800
                    }
                },
                "transmission": {
                    "id": "200565884",
                    "name": "5M",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "MANUAL",
                    "numberOfSpeeds": "5"
                },
                "drivenWheels": "front wheel drive",
                "numOfDoors": "2",
                "options": [],
                "colors": [{
                    "category": "Exterior",
                    "options": [{
                        "id": "200565887",
                        "name": "Northstar White",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Northstar White",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565889",
                        "name": "Magenta Grey Pearl",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Magenta Grey Pearl",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565892",
                        "name": "Saronno Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Saronno Red",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565894",
                        "name": "Barcelona Red Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Barcelona Red Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565893",
                        "name": "Cayenne Red Pearl",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Cayenne Red Pearl",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565890",
                        "name": "Kalapana Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Kalapana Black",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565891",
                        "name": "Monarch Green Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Monarch Green Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565888",
                        "name": "Minden Silver Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Minden Silver Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }]
                }],
                "price": {
                    "usedTmvRetail": 2113.0,
                    "usedPrivateParty": 1145.0,
                    "usedTradeIn": 564.0,
                    "estimateTmv": false
                },
                "categories": {
                    "market": "Hatchback",
                    "EPAClass": "SUBCOMPACT_CARS",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 259,
                "name": "GS 2dr Hatchback",
                "year": {
                    "id": 1683,
                    "year": 1997
                },
                "submodel": {
                    "body": "Hatchback",
                    "modelName": "Eclipse Hatchback",
                    "niceName": "hatchback"
                },
                "trim": "GS",
                "states": ["USED"],
                "squishVins": ["4A3AK44YVE"],
                "MPG": {
                    "highway": "30",
                    "city": "19"
                }
            }, {
                "make": {
                    "id": 200002915,
                    "name": "Mitsubishi",
                    "niceName": "mitsubishi"
                },
                "model": {
                    "id": "Mitsubishi_Eclipse",
                    "name": "Eclipse",
                    "niceName": "eclipse"
                },
                "engine": {
                    "id": "200565919",
                    "name": "Engine",
                    "equipmentType": "ENGINE",
                    "cylinder": 4,
                    "size": 2.0,
                    "configuration": "inline",
                    "fuelType": "regular unleaded",
                    "horsepower": 210,
                    "torque": 214,
                    "type": "gas",
                    "code": "4ITCG2.0",
                    "compressorType": "turbocharger",
                    "rpm": {
                        "horsepower": 6000,
                        "torque": 3000
                    }
                },
                "transmission": {
                    "id": "200565917",
                    "name": "5M",
                    "equipmentType": "TRANSMISSION",
                    "transmissionType": "MANUAL",
                    "numberOfSpeeds": "5"
                },
                "drivenWheels": "all wheel drive",
                "numOfDoors": "2",
                "options": [],
                "colors": [{
                    "category": "Exterior",
                    "options": [{
                        "id": "200565926",
                        "name": "Barcelona Red Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Barcelona Red Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565927",
                        "name": "Saronno Red",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Saronno Red",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565925",
                        "name": "Magenta Grey Pearl",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Magenta Grey Pearl",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565922",
                        "name": "Minden Silver Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Minden Silver Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565923",
                        "name": "Monarch Green Pearl Metallic",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Monarch Green Pearl Metallic",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565921",
                        "name": "Kalapana Black",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Kalapana Black",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565920",
                        "name": "Northstar White",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Northstar White",
                        "manufactureOptionCode": "000"
                    }, {
                        "id": "200565924",
                        "name": "Cayenne Red Pearl",
                        "equipmentType": "COLOR",
                        "manufactureOptionName": "Cayenne Red Pearl",
                        "manufactureOptionCode": "000"
                    }]
                }],
                "price": {
                    "usedTmvRetail": 2717.0,
                    "usedPrivateParty": 1714.0,
                    "usedTradeIn": 1111.0,
                    "estimateTmv": false
                },
                "categories": {
                    "market": "Hatchback,Factory Tuner,Performance",
                    "EPAClass": "SUBCOMPACT_CARS",
                    "vehicleSize": "Compact",
                    "primaryBodyType": "Car",
                    "vehicleStyle": "2dr Hatchback",
                    "vehicleType": "Car"
                },
                "id": 265,
                "name": "GSX Turbo 2dr Hatchback AWD",
                "year": {
                    "id": 1683,
                    "year": 1997
                },
                "submodel": {
                    "body": "Hatchback",
                    "tuner": "GSX",
                    "modelName": "Eclipse GSX",
                    "niceName": "gsx"
                },
                "trim": "GSX",
                "states": ["USED"],
                "squishVins": ["4A3AL54FVE"],
                "MPG": {
                    "highway": "26",
                    "city": "19"
                }
            }],
            "stylesCount": 5
        },
        serviceDetails: {
            "actionHolder": [{
                "id": 368844,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Replace",
                "item": "Spark plugs",
                "itemDescription": "Cables that carry a high-voltage electrical charge from the distributor cap or ignition coils to the spark plugs.",
                "laborUnits": 0.5,
                "partUnits": 4.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "partCostPerUnit": 3.6
            }, {
                "id": 368835,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 60000,
                "intervalMonth": 60,
                "frequency": 4,
                "action": "Inspect",
                "item": "Evaporative control system",
                "itemDescription": "An emission control system that prevents raw fuel vapors from entering the atmosphere.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368821,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Inspect boots & seals",
                "item": "Drive axles",
                "itemDescription": "In a front-wheel drive vehicle or a rear-wheel drive vehicle with independent rear suspension, the short axles that connect the driven wheels with the driving force.   Drive axles typically have CV (constant velocity)-joints on their ends.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368840,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 7500,
                "intervalMonth": 0,
                "frequency": 4,
                "action": "Change",
                "item": "Engine oil",
                "itemDescription": "A substance that lubricates and cools the moving parts of the engine and reduces corrosion and the formation of rust.",
                "laborUnits": 0.18,
                "partUnits": 4.5,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "partCostPerUnit": 5.92
            }, {
                "id": 368846,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Replace",
                "item": "Air filter",
                "itemDescription": "A device that filters incoming air fed to the engine.",
                "laborUnits": 0.2,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "partCostPerUnit": 25.0
            }, {
                "id": 368849,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 60000,
                "intervalMonth": 60,
                "frequency": 4,
                "action": "Replace",
                "item": "Timing belt",
                "itemDescription": "A \"toothed\" belt that drives an overhead camshaft or camshafts (and in some vehicles a water pump).",
                "laborUnits": 2.8,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "partCostPerUnit": 102.0
            }, {
                "id": 368831,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Inspect",
                "item": "Brake lines, hoses & connections",
                "itemDescription": "Tubes and their connections that carry brake fluid between the various components in a vehicle\u0027s brake system.",
                "laborUnits": 0.02,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368833,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Inspect",
                "item": "Exhaust system",
                "itemDescription": "A system of tubing that routes exhaust gases from the exhaust manifold to the rear of the car and into the air. The exhaust system includes catalytic converters and mufflers that help reduce air and noise pollution generated by an engine.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368848,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 60000,
                "intervalMonth": 60,
                "frequency": 4,
                "action": "Replace",
                "item": "Spark plug wires",
                "itemDescription": "Cables that carry a high-voltage electrical charge the spark plug(s).",
                "laborUnits": 0.5,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "partCostPerUnit": 78.6
            }, {
                "id": 368847,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 100000,
                "intervalMonth": 0,
                "frequency": 4,
                "action": "Replace",
                "item": "Timing belt",
                "itemDescription": "A \"toothed\" belt that drives an overhead camshaft or camshafts (and in some vehicles a water pump).",
                "laborUnits": 2.8,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "note1": "Not required if belt was previously replaced.",
                "partCostPerUnit": 102.0
            }, {
                "id": 368829,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 0,
                "frequency": 4,
                "action": "Inspect",
                "item": "Drive belt(s)",
                "itemDescription": "A belt that transfers the rotation of the engine through the crankshaft pulley to drive various devices, such as the alternator, water pump, air conditioning compressor or power steering pump.",
                "laborUnits": 0.03,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368822,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 0,
                "frequency": 4,
                "action": "Inspect",
                "item": "Coolant",
                "itemDescription": "Also known as \"antifreeze.\" A mixture of water and ethylene glycol that has both a higher boiling point and a lower freezing point than plain water.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368828,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Inspect",
                "item": "Brake pads",
                "itemDescription": "High-friction material attached to a metal backing plate.",
                "laborUnits": 0.15,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368827,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 0,
                "intervalMonth": 120,
                "frequency": 4,
                "action": "Inspect",
                "item": "Supplemental Restraint System",
                "itemDescription": "System composed of a safety devices that do not require any action on the part of the occupants to be effective, and its controls and sensors.",
                "laborUnits": 0.0,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368838,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Inspect",
                "item": "Rear drum brake linings & rear wheel cylinders",
                "itemDescription": "Within a drum-type brake are expendable friction material-lined \"shoes\" or brake linings. These are forced outward against a drum by sealed hydraulic wheel cylinders when the brakes are activated by the operator. The linings are periodically inspected for wear and the wheel cylinders should be inspected for fluid leakage.",
                "laborUnits": 0.4,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368836,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Inspect",
                "item": "Ball joints & steering linkage",
                "itemDescription": "Lubricated parts of the steering and suspension systems that allow relatively friction-free movement.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368834,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 60000,
                "intervalMonth": 60,
                "frequency": 4,
                "action": "Inspect",
                "item": "Fuel system",
                "itemDescription": "The assemblage of parts that stores and delivers fuel for the engine, including the fuel cap, fuel tank, fuel lines and hoses, fuel pump, fuel filter and fuel injectors or carburetor.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368837,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Inspect",
                "item": "Fuel lines & hoses",
                "itemDescription": "The tubing that carries fuel throughout a vehicle.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368850,
                "engineCode": "4INAG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Replace",
                "item": "Oil filter",
                "itemDescription": "A cartridge-filled canister placed in an engine\u0027s lubricating system to strain dirt and abrasive materials out of the oil.",
                "laborUnits": 0.1,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "partCostPerUnit": 7.4
            }, {
                "id": 368869,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Inspect",
                "item": "Fuel lines & hoses",
                "itemDescription": "The tubing that carries fuel throughout a vehicle.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368878,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Replace",
                "item": "Air filter",
                "itemDescription": "A device that filters incoming air fed to the engine.",
                "laborUnits": 0.2,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "partCostPerUnit": 25.0
            }, {
                "id": 368861,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Inspect",
                "item": "Brake lines, hoses & connections",
                "itemDescription": "Tubes and their connections that carry brake fluid between the various components in a vehicle\u0027s brake system.",
                "laborUnits": 0.02,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368866,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 60000,
                "intervalMonth": 60,
                "frequency": 4,
                "action": "Inspect",
                "item": "Fuel system",
                "itemDescription": "The assemblage of parts that stores and delivers fuel for the engine, including the fuel cap, fuel tank, fuel lines and hoses, fuel pump, fuel filter and fuel injectors or carburetor.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368871,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 5000,
                "intervalMonth": 6,
                "frequency": 4,
                "action": "Change",
                "item": "Engine oil",
                "itemDescription": "A substance that lubricates and cools the moving parts of the engine and reduces corrosion and the formation of rust.",
                "laborUnits": 0.19,
                "partUnits": 4.7,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "partCostPerUnit": 5.92
            }, {
                "id": 368853,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 0,
                "frequency": 4,
                "action": "Inspect",
                "item": "Coolant",
                "itemDescription": "Also known as \"antifreeze.\" A mixture of water and ethylene glycol that has both a higher boiling point and a lower freezing point than plain water.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368877,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 60000,
                "intervalMonth": 60,
                "frequency": 4,
                "action": "Replace",
                "item": "Timing belt",
                "itemDescription": "A \"toothed\" belt that drives an overhead camshaft or camshafts (and in some vehicles a water pump).",
                "laborUnits": 3.2,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "partCostPerUnit": 81.2
            }, {
                "id": 368868,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Inspect",
                "item": "Ball joints & steering linkage",
                "itemDescription": "Lubricated parts of the steering and suspension systems that allow relatively friction-free movement.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368875,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 100000,
                "intervalMonth": 0,
                "frequency": 4,
                "action": "Replace",
                "item": "Timing belt",
                "itemDescription": "A \"toothed\" belt that drives an overhead camshaft or camshafts (and in some vehicles a water pump).",
                "laborUnits": 3.2,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "note1": "Not required if belt was previously replaced.",
                "partCostPerUnit": 81.2
            }, {
                "id": 368865,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 0,
                "frequency": 4,
                "action": "Inspect",
                "item": "Transfer case fluid",
                "itemDescription": "Lubricant used in the transfer case.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "AWD",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368882,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 10000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Replace",
                "item": "Oil filter",
                "itemDescription": "A cartridge-filled canister placed in an engine\u0027s lubricating system to strain dirt and abrasive materials out of the oil.",
                "laborUnits": 0.1,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "partCostPerUnit": 8.0
            }, {
                "id": 368880,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Replace",
                "item": "Spark plugs",
                "itemDescription": "Cables that carry a high-voltage electrical charge from the distributor cap or ignition coils to the spark plugs.",
                "laborUnits": 0.5,
                "partUnits": 4.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "partCostPerUnit": 3.2
            }, {
                "id": 368852,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Inspect boots & seals",
                "item": "Drive axles",
                "itemDescription": "In a front-wheel drive vehicle or a rear-wheel drive vehicle with independent rear suspension, the short axles that connect the driven wheels with the driving force.   Drive axles typically have CV (constant velocity)-joints on their ends.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368864,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Inspect",
                "item": "Rear drum brake linings & rear wheel cylinders",
                "itemDescription": "Within a drum-type brake are expendable friction material-lined \"shoes\" or brake linings. These are forced outward against a drum by sealed hydraulic wheel cylinders when the brakes are activated by the operator. The linings are periodically inspected for wear and the wheel cylinders should be inspected for fluid leakage.",
                "laborUnits": 0.4,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368862,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Inspect",
                "item": "Brake pads",
                "itemDescription": "High-friction material attached to a metal backing plate.",
                "laborUnits": 0.15,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368876,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 60000,
                "intervalMonth": 60,
                "frequency": 4,
                "action": "Replace",
                "item": "Spark plug wires",
                "itemDescription": "Cables that carry a high-voltage electrical charge the spark plug(s).",
                "laborUnits": 0.5,
                "partUnits": 1.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683",
                "partCostPerUnit": 78.6
            }, {
                "id": 368867,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 60000,
                "intervalMonth": 60,
                "frequency": 4,
                "action": "Inspect",
                "item": "Evaporative control system",
                "itemDescription": "An emission control system that prevents raw fuel vapors from entering the atmosphere.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368863,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Inspect",
                "item": "Exhaust system",
                "itemDescription": "A system of tubing that routes exhaust gases from the exhaust manifold to the rear of the car and into the air. The exhaust system includes catalytic converters and mufflers that help reduce air and noise pollution generated by an engine.",
                "laborUnits": 0.05,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368854,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 24,
                "frequency": 4,
                "action": "Check level",
                "item": "Rear differential fluid",
                "itemDescription": "Lubricant that permits quiet and low friction operation of the differential. Can be gear oil, transmission fluid, or a more specialized fluid specified by the manufacturer.",
                "laborUnits": 0.1,
                "partUnits": 0.0,
                "driveType": "AWD",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368860,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 30000,
                "intervalMonth": 0,
                "frequency": 4,
                "action": "Inspect",
                "item": "Drive belt(s)",
                "itemDescription": "A belt that transfers the rotation of the engine through the crankshaft pulley to drive various devices, such as the alternator, water pump, air conditioning compressor or power steering pump.",
                "laborUnits": 0.03,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368857,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "ALL",
                "intervalMileage": 0,
                "intervalMonth": 120,
                "frequency": 4,
                "action": "Inspect",
                "item": "Supplemental Restraint System",
                "itemDescription": "System composed of a safety devices that do not require any action on the part of the occupants to be effective, and its controls and sensors.",
                "laborUnits": 0.0,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368856,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "AUTOMATIC",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Inspect",
                "item": "Automatic transmission fluid",
                "itemDescription": "The fluid used for lubricating and cooling an automatic transmission.",
                "laborUnits": 0.02,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368855,
                "engineCode": "4ITCG2.0",
                "transmissionCode": "MANUAL",
                "intervalMileage": 30000,
                "intervalMonth": 0,
                "frequency": 4,
                "action": "Check level",
                "item": "Manual transmission fluid",
                "itemDescription": "The fluid used for lubricating and cooling a manual transmission.",
                "laborUnits": 0.2,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368824,
                "engineCode": "4INAG2.0",
                "transmissionCode": "MANUAL",
                "intervalMileage": 30000,
                "intervalMonth": 0,
                "frequency": 4,
                "action": "Check level",
                "item": "Manual transmission fluid",
                "itemDescription": "The fluid used for lubricating and cooling a manual transmission.",
                "laborUnits": 0.2,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }, {
                "id": 368825,
                "engineCode": "4INAG2.0",
                "transmissionCode": "AUTOMATIC",
                "intervalMileage": 15000,
                "intervalMonth": 12,
                "frequency": 4,
                "action": "Inspect",
                "item": "Automatic transmission fluid",
                "itemDescription": "The fluid used for lubricating and cooling an automatic transmission.",
                "laborUnits": 0.02,
                "partUnits": 0.0,
                "driveType": "ALL",
                "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=1683"
            }]
        },
    }
};





//size reg expression = (\d{3}/\d{2}R\d{2})
// ([234]\dX\dR\d\d)|([234]\dX\d\dR\d\d)|([234]\d\.5X\dR\d\d)|([234]\d\.5X\d\dR\d\d)|([234]\d\.5X\d\d\.5R\d\d)|([234]\d\.5X\d\.5R\d\d)|([234]\dX\d\.5R\d\d)|([234]\dX\d\d\.5R\d\d)
var tireSizes = ["215/50R13",
    "225/45R13",
    "225/50R13",
    "255/40R13",
    "155/80R13",
    "175/70R13",
    "205/60R13",
    "165/80R13",
    "185/70R13",
    "175/80R13",
    "185/80R13",
    "105/70R14",
    "115/70R14",
    "125/70R14",
    "165/55R14",
    "165/65R14",
    "185/55R14",
    "185/60R14",
    "195/55R14",
    "205/50R14",
    "205/55R14",
    "225/50R14",
    "175/65R14",
    "175/70R14",
    "185/65R14",
    "195/60R14",
    "205/60R14",
    "185/70R14",
    "185/75R14",
    "195/65R14",
    "195/70R14",
    "215/60R14",
    "225/60R14",
    "195/75R14",
    "205/70R14",
    "215/70R14",
    "235/60R14",
    "245/60R14",
    "205/75R14",
    "215/75R14",
    "225/70R14",
    "105/70R15",
    "115/70R15",
    "125/70R15",
    "165/50R15",
    "195/45R15",
    "125/80R15",
    "145/65R15",
    "155/60R15",
    "165/60R15",
    "175/55R15",
    "195/50R15",
    "245/40R15",
    "275/35R15",
    "135/80R15",
    "165/65R15",
    "175/60R15",
    "185/55R15",
    "185/60R15",
    "195/55R15",
    "205/50R15",
    "205/55R15",
    "225/45R15",
    "225/50R15",
    "135/90R15",
    "155/80R15",
    "175/65R15",
    "185/65R15",
    "195/60R15",
    "205/60R15",
    "225/55R15",
    "235/50R15",
    "245/50R15",
    "345/35R15",
    "165/80R15",
    "185/70R15",
    "195/65R15",
    "195/70R15",
    "205/65R15",
    "215/60R15",
    "225/60R15",
    "265/50R15",
    "275/50R15",
    "205/70R15",
    "215/65R15",
    "215/70R15",
    "235/60R15",
    "245/60R15",
    "295/50R15",
    "205/75R15",
    "215/75R15",
    "225/70R15",
    "255/60R15",
    "295/55R15",
    "325/50R15",
    "225/75R15",
    "235/70R15",
    "235/75R15",
    "245/70R15",
    "255/65R15",
    "275/60R15",
    "215/85R15",
    "255/70R15",
    "265/70R15",
    "315/60R15",
    "255/75R15",
    "265/75R15",
    "295/65R15",
    "125/70R16",
    "175/50R16",
    "195/40R16",
    "195/45R16",
    "205/40R16",
    "215/35R16",
    "215/40R16",
    "125/80R16",
    "135/70R16",
    "175/55R16",
    "185/50R16",
    "195/50R16",
    "205/45R16",
    "215/45R16",
    "125/85R16",
    "125/90R16",
    "135/80R16",
    "175/60R16",
    "185/55R16",
    "185/60R16",
    "195/55R16",
    "205/50R16",
    "205/55R16",
    "215/50R16",
    "225/45R16",
    "225/50R16",
    "245/45R16",
    "135/90R16",
    "145/80R16",
    "195/60R16",
    "205/60R16",
    "215/55R16",
    "225/55R16",
    "245/50R16",
    "265/45R16",
    "275/45R16",
    "315/40R16",
    "195/65R16",
    "205/65R16",
    "215/60R16",
    "225/60R16",
    "235/55R16",
    "255/50R16",
    "155/90R16",
    "195/75R16",
    "205/70R16",
    "215/65R16",
    "215/70R16",
    "225/65R16",
    "235/60R16",
    "295/50R16",
    "355/40R16",
    "195/80R16",
    "205/75R16",
    "205/80R16",
    "215/75R16",
    "225/70R16",
    "235/65R16",
    "255/60R16",
    "225/75R16",
    "235/70R16",
    "235/75R16",
    "245/70R16",
    "255/65R16",
    "275/60R16",
    "285/60R16",
    "215/85R16",
    "235/80R16",
    "245/75R16",
    "255/70R16",
    "265/70R16",
    "285/65R16",
    "225/85R16",
    "235/85R16",
    "265/75R16",
    "275/70R16",
    "285/70R16",
    "265/80R16",
    "285/75R16",
    "305/70R16",
    "255/85R16",
    "295/75R16",
    "315/75R16",
    "375/65R16",
    "325/80R16",
    "345/75R16",
    "365/75R16",
    "385/70R16",
    "395/70R16",
    "125/70R17",
    "195/40R17",
    "195/45R17",
    "205/40R17",
    "215/35R17",
    "215/40R17",
    "225/35R17",
    "245/35R17",
    "125/80R17",
    "135/70R17",
    "205/45R17",
    "215/45R17",
    "225/40R17",
    "235/40R17",
    "245/40R17",
    "275/35R17",
    "135/80R17",
    "145/70R17",
    "155/70R17",
    "205/50R17",
    "205/55R17",
    "215/50R17",
    "225/45R17",
    "225/50R17",
    "235/45R17",
    "245/45R17",
    "255/40R17",
    "265/40R17",
    "275/40R17",
    "295/35R17",
    "315/35R17",
    "135/90R17",
    "145/80R17",
    "155/80R17",
    "215/55R17",
    "225/55R17",
    "235/50R17",
    "245/50R17",
    "255/45R17",
    "285/40R17",
    "295/40R17",
    "335/35R17",
    "145/90R17",
    "165/80R17",
    "215/60R17",
    "225/60R17",
    "235/55R17",
    "245/55R17",
    "255/50R17",
    "275/50R17",
    "345/40R17",
    "155/90R17",
    "165/90R17",
    "215/65R17",
    "215/70R17",
    "225/65R17",
    "235/60R17",
    "245/60R17",
    "255/55R17",
    "275/55R17",
    "225/70R17",
    "235/65R17",
    "245/65R17",
    "255/60R17",
    "265/60R17",
    "225/75R17",
    "235/70R17",
    "235/75R17",
    "245/70R17",
    "255/65R17",
    "265/65R17",
    "275/60R17",
    "285/60R17",
    "235/80R17",
    "245/75R17",
    "255/70R17",
    "265/70R17",
    "275/65R17",
    "285/65R17",
    "235/85R17",
    "255/75R17",
    "275/70R17",
    "285/70R17",
    "305/65R17",
    "255/80R17",
    "285/75R17",
    "295/70R17",
    "305/70R17",
    "315/70R17",
    "325/70R17",
    "355/70R17",
    "215/35R18",
    "125/70R18",
    "205/40R18",
    "215/40R18",
    "225/35R18",
    "235/35R18",
    "245/35R18",
    "285/30R18",
    "155/60R18",
    "215/45R18",
    "225/40R18",
    "235/40R18",
    "245/40R18",
    "255/35R18",
    "265/35R18",
    "275/35R18",
    "285/35R18",
    "295/30R18",
    "305/30R18",
    "315/30R18",
    "335/30R18",
    "135/80R18",
    "145/70R18",
    "215/50R18",
    "225/45R18",
    "225/50R18",
    "235/45R18",
    "245/45R18",
    "255/40R18",
    "265/40R18",
    "275/40R18",
    "295/35R18",
    "305/35R18",
    "315/35R18",
    "345/30R18",
    "145/80R18",
    "215/55R18",
    "225/55R18",
    "235/50R18",
    "245/50R18",
    "255/45R18",
    "265/45R18",
    "275/45R18",
    "285/40R18",
    "295/40R18",
    "305/40R18",
    "315/40R18",
    "325/35R18",
    "345/35R18",
    "155/85R18",
    "225/60R18",
    "235/55R18",
    "245/55R18",
    "255/50R18",
    "265/50R18",
    "285/45R18",
    "295/45R18",
    "305/45R18",
    "225/65R18",
    "235/60R18",
    "245/60R18",
    "255/55R18",
    "265/55R18",
    "275/55R18",
    "285/50R18",
    "325/45R18",
    "175/90R18",
    "235/65R18",
    "245/65R18",
    "255/60R18",
    "265/60R18",
    "285/55R18",
    "255/65R18",
    "265/65R18",
    "275/60R18",
    "285/60R18",
    "255/70R18",
    "265/70R18",
    "275/65R18",
    "285/65R18",
    "305/60R18",
    "275/70R18",
    "285/70R18",
    "295/65R18",
    "305/65R18",
    "325/60R18",
    "285/75R18",
    "295/70R18",
    "305/70R18",
    "325/65R18",
    "315/70R18",
    "355/65R18",
    "215/35R19",
    "235/30R19",
    "245/30R19",
    "295/25R19",
    "115/70R19",
    "125/70R19",
    "225/35R19",
    "235/35R19",
    "245/35R19",
    "255/30R19",
    "265/30R19",
    "275/30R19",
    "285/30R19",
    "315/25R19",
    "225/40R19",
    "235/40R19",
    "245/40R19",
    "255/35R19",
    "265/35R19",
    "275/35R19",
    "285/35R19",
    "295/30R19",
    "305/30R19",
    "315/30R19",
    "325/30R19",
    "335/30R19",
    "155/70R19",
    "175/60R19",
    "225/45R19",
    "235/45R19",
    "245/45R19",
    "255/40R19",
    "265/40R19",
    "275/40R19",
    "295/35R19",
    "305/35R19",
    "315/35R19",
    "345/30R19",
    "355/30R19",
    "145/80R19",
    "155/80R19",
    "225/55R19",
    "235/50R19",
    "245/50R19",
    "255/45R19",
    "275/45R19",
    "285/40R19",
    "315/40R19",
    "345/35R19",
    "235/55R19",
    "245/55R19",
    "255/50R19",
    "265/50R19",
    "275/50R19",
    "285/45R19",
    "295/45R19",
    "165/90R19",
    "175/80R19",
    "255/55R19",
    "265/55R19",
    "275/55R19",
    "235/65R19",
    "255/60R19",
    "215/30R20",
    "225/30R20",
    "235/30R20",
    "245/30R20",
    "275/25R20",
    "285/25R20",
    "295/25R20",
    "145/60R20",
    "225/35R20",
    "235/35R20",
    "245/35R20",
    "255/30R20",
    "265/30R20",
    "275/30R20",
    "285/30R20",
    "305/25R20",
    "315/25R20",
    "325/25R20",
    "335/25R20",
    "345/25R20",
    "155/60R20",
    "155/65R20",
    "165/60R20",
    "175/55R20",
    "195/50R20",
    "215/45R20",
    "235/40R20",
    "245/40R20",
    "255/35R20",
    "265/35R20",
    "275/35R20",
    "285/35R20",
    "295/30R20",
    "305/30R20",
    "315/30R20",
    "325/30R20",
    "335/30R20",
    "225/45R20",
    "235/45R20",
    "245/45R20",
    "255/40R20",
    "265/40R20",
    "275/40R20",
    "295/35R20",
    "305/35R20",
    "315/35R20",
    "345/30R20",
    "245/50R20",
    "255/45R20",
    "265/45R20",
    "275/45R20",
    "285/40R20",
    "295/40R20",
    "325/35R20",
    "235/55R20",
    "255/50R20",
    "265/50R20",
    "275/50R20",
    "285/45R20",
    "295/45R20",
    "305/45R20",
    "245/60R20",
    "255/55R20",
    "275/55R20",
    "285/50R20",
    "295/50R20",
    "265/60R20",
    "285/55R20",
    "295/55R20",
    "305/50R20",
    "315/50R20",
    "325/50R20",
    "275/60R20",
    "285/60R20",
    "295/60R20",
    "305/55R20",
    "275/65R20",
    "285/65R20",
    "305/60R20",
    "315/60R20",
    "355/50R20",
    "295/65R20",
    "325/60R20",
    "355/60R20",
    "245/30R21",
    "295/25R21",
    "245/35R21",
    "255/30R21",
    "265/30R21",
    "275/30R21",
    "285/30R21",
    "305/25R21",
    "325/25R21",
    "245/40R21",
    "255/35R21",
    "265/35R21",
    "275/35R21",
    "285/35R21",
    "295/30R21",
    "305/30R21",
    "325/30R21",
    "355/25R21",
    "255/40R21",
    "265/40R21",
    "275/40R21",
    "295/35R21",
    "265/45R21",
    "275/45R21",
    "285/40R21",
    "295/40R21",
    "315/40R21",
    "255/50R21",
    "275/50R21",
    "285/45R21",
    "325/40R21",
    "235/30R22",
    "245/30R22",
    "275/25R22",
    "285/25R22",
    "295/25R22",
    "255/30R22",
    "265/30R22",
    "275/30R22",
    "285/30R22",
    "305/25R22",
    "315/25R22",
    "335/25R22",
    "255/35R22",
    "265/35R22",
    "275/35R22",
    "285/35R22",
    "295/30R22",
    "305/30R22",
    "315/30R22",
    "265/40R22",
    "275/40R22",
    "265/45R22",
    "275/45R22",
    "285/40R22",
    "295/40R22",
    "305/40R22",
    "325/35R22",
    "275/50R22",
    "285/45R22",
    "305/45R22",
    "285/50R22",
    "355/40R22",
    "285/55R22",
    "305/50R22",
    "325/50R22",
    "375/45R22",
    "325/55R22",
    "335/55R22",
    "325/60R22",
    "355/60R22",
    "265/25R23",
    "285/35R23",
    "285/40R23",
    "305/40R23",
    "275/25R24",
    "255/30R24",
    "275/30R24",
    "285/30R24",
    "285/35R24",
    "295/30R24",
    "295/35R24",
    "305/35R24",
    "315/35R24",
    "405/25R24",
    "285/40R24",
    "295/40R24",
    "385/35R24",
    "325/45R24",
    "375/40R24",
    "315/50R24",
    "275/25R26",
    "295/25R26",
    "295/30R26",
    "305/30R26",
    "315/40R26",
    "295/25R28",
    "325/35R28",
    "315/30R30",
    "21x10R13",
    "22X8R13",
    "22X8R13",
    "24.5X8R13",
    "24.5X8R13",
    "24.5X9R13",
    "24.5X9R13",
    "26X8.5R14",
    "22X8R15",
    "22X8R15",
    "24X4.5R15",
    "24X5R15",
    "24X5R15",
    "24.5X8R15",
    "24.5X8R15",
    "26x8.5R15",
    "26X10R15",
    "26X10R15",
    "26X10.5R15",
    "26X11.5R15",
    "26X6R15",
    "26X6R15",
    "26X7.5R15",
    "26X8R15",
    "26X8R15",
    "26X8.5R15",
    "27x10R15",
    "27X10.5R15",
    "27X9.5R15",
    "28X10.5R15",
    "28X11.5R15",
    "28X12.5R15",
    "28X13.5R15",
    "28X4.5R15",
    "28X7.5R15",
    "28X9R15",
    "28X9R15",
    "29X10.5R15",
    "29X11.5R15",
    "29X12.5R15",
    "29X15.5R15",
    "29X18R15",
    "29X18R15",
    "29X18.5R15",
    "29X4.5R15",
    "29X8.5R15",
    "29.5X9R15",
    "29.5X9R15",
    "30X10.5R15",
    "30X11.5R15",
    "30X12.5R15",
    "30X13.5R15",
    "30X7R15",
    "30X7R15",
    "30X9R15",
    "30X9R15",
    "30X9.5R15",
    "31X10.5R15",
    "31X11R15",
    "31X11R15",
    "31X11.5R15",
    "31X12.5R15",
    "31X13R15",
    "31X13R15",
    "31X13.5R15",
    "31X14.5R15",
    "31X16.5R15",
    "31X18R15",
    "31X18R15",
    "31X18.5R15",
    "31X9.5R15",
    "32X10.5R15",
    "32X11.5R15",
    "32X14R15",
    "32X14R15",
    "32X16R15",
    "32X16R15",
    "32X17.5R15",
    "32X18.5R15",
    "32X9.5R15",
    "33X10.5R15",
    "33X11.5R15",
    "33X12.5R15",
    "33X13R15",
    "33X13R15",
    "33X13.5R15",
    "33X14R15",
    "33X14R15",
    "33X14.5R15",
    "33X15.5R15",
    "33X16.5R15",
    "33X19.5R15",
    "33X21.5R15",
    "33X9R15",
    "33X9R15",
    "33X9.5R15",
    "34X10.5R15",
    "34X12.5R15",
    "34X9.5R15",
    "35X10.5R15",
    "35X12.5R15",
    "35X13.5R15",
    "35X14.5R15",
    "35X15R15",
    "35X15R15",
    "35X15.5R15",
    "35X16R15",
    "35X16R15",
    "36X12.5R15",
    "36X13.5R15",
    "36X14.5R15",
    "37X12.5R15",
    "37X13R15",
    "37X13R15",
    "37X13.5R15",
    "37X14R15",
    "37X14R15",
    "37X14.5R15",
    "38X12.5R15",
    "38X13R15",
    "38X13R15",
    "38X14.5R15",
    "38X15.5R15",
    "38.5X11R15",
    "38.5X11R15",
    "38.5X15R15",
    "38.5X15R15",
    "38.5X16R15",
    "38.5X16R15",
    "39X13.5R15",
    "39.5X15R15",
    "39.5X15R15",
    "39.5X18R15",
    "39.5X18R15",
    "40X16R15",
    "40X16R15",
    "42X14R15",
    "42X14R15",
    "42X15R15",
    "42X15R15",
    "44X18.5R15",
    "44X19.5R15",
    "44X21R15",
    "44X21R15",
    "47X17R15",
    "47X17R15",
    "22x8.5R16",
    "26x10R16",
    "26X11.5R16",
    "27x8.5R16",
    "28x10R16",
    "28X11.5R16",
    "30X11.5R16",
    "31X10.5R16",
    "31X11R16",
    "31X11R16",
    "31X11.5R16",
    "31X12.5R16",
    "32X10R16",
    "32X10R16",
    "32X11.5R16",
    "32X9R16",
    "32X9R16",
    "33X10.5R16",
    "33X11.5R16",
    "33X12.5R16",
    "33X13R16",
    "33X13R16",
    "33X13.5R16",
    "33X14R16",
    "33X14R16",
    "33X14.5R16",
    "33X9.5R16",
    "34X10.5R16",
    "34X12.5R16",
    "34X13.5R16",
    "34X9R16",
    "34X9R16",
    "34.5X17R16",
    "34.5X17R16",
    "35X10.5R16",
    "35X12.5R16",
    "35X14.5R16",
    "35X15R16",
    "35X15R16",
    "35X16R16",
    "35X16R16",
    "36X12.5R16",
    "36X13R16",
    "36X13R16",
    "36X13.5R16",
    "36X14.5R16",
    "37X12.5R16",
    "37X13R16",
    "37X13R16",
    "37X13.5R16",
    "37X14R16",
    "37X14R16",
    "37X14.5R16",
    "38X13R16",
    "38X13R16",
    "38X14.5R16",
    "38X15.5R16",
    "38.5X11R16",
    "38.5X11R16",
    "38.5X15R16",
    "38.5X15R16",
    "39X13.5R16",
    "39.5X15R16",
    "39.5X15R16",
    "40X16R16",
    "40X16R16",
    "41X14.5R16",
    "42X14R16",
    "42X14R16",
    "42X15R16",
    "42X15R16",
    "44X19.5R16",
    "44X21R16",
    "44X21R16",
    "46X19.5R16",
    "33X11.5R16",
    "33X12.5R16",
    "33X14R16",
    "33X14R16",
    "33X14.5R16",
    "33X15.5R16",
    "35X12.5R16",
    "35X14.5R16",
    "35X15R16",
    "35X15R16",
    "35X15.5R16",
    "35X16R16",
    "35X16R16",
    "35X9.5R16",
    "36X12.5R16",
    "36X13.5R16",
    "36X14.5R16",
    "36X16R16",
    "36X16R16",
    "37X12.5R16",
    "37X13R16",
    "37X13R16",
    "37X14R16",
    "37X14R16",
    "38X11R16",
    "38X11R16",
    "38X12.5R16",
    "38X15.5R16",
    "38.5X11R16",
    "38.5X11R16",
    "38.5X15R16",
    "38.5X15R16",
    "38.5X16R16",
    "38.5X16R16",
    "39X13.5R16",
    "39.5X15R16",
    "39.5X15R16",
    "39.5X18R16",
    "39.5X18R16",
    "42X14R16",
    "42X14R16",
    "42X15R16",
    "42X15R16",
    "43X14.5R16",
    "44X18.5R16",
    "44X18.5R16",
    "44X19.5R16",
    "44X21R16",
    "44X21R16",
    "47X17R16",
    "47X17R16",
    "48X12.5R16",
    "49X21R16",
    "49X21R16",
    "23x8.5R17",
    "25x10R17",
    "26x10R17",
    "26X11.5R17",
    "27x10R17",
    "28x8.5R17",
    "28x10R17",
    "29x10R17",
    "31X10.5R17",
    "32X10.5R17",
    "32X11.5R17",
    "33X10.5R17",
    "33X12.5R17",
    "33X13R17",
    "33X13R17",
    "33X13.5R17",
    "34X10.5R17",
    "35X10.5R17",
    "35X12.5R17",
    "35X14.5R17",
    "36X12.5R17",
    "36X13.5R17",
    "37X12.5R17",
    "37X13R17",
    "37X13R17",
    "37X13.5R17",
    "37X14R17",
    "37X14R17",
    "38X13.5R17",
    "38X14.5R17",
    "38X15.5R17",
    "39X13.5R17",
    "39.5X15R17",
    "39.5X15R17",
    "40X13.5R17",
    "40X14.5R17",
    "40X16R17",
    "40X16R17",
    "41X14.5R17",
    "42X14R17",
    "42X14R17",
    "42X14.5R17",
    "42X15R17",
    "42X15R17",
    "43X14.5R17",
    "44X19.5R17",
    "44X21R17",
    "44X21R17",
    "47X17R17",
    "47X17R17",
    "49X21R17",
    "49X21R17",
    "25x10R18",
    "26x10R18",
    "26X12R18",
    "26X12R18",
    "27x10R18",
    "28x10R18",
    "29x10R18",
    "30x10R18",
    "33X11.5R18",
    "33X12.5R18",
    "33X13R18",
    "33X13R18",
    "33X13.5R18",
    "34X12.5R18",
    "35X12.5R18",
    "35X13R18",
    "35X13R18",
    "35X13.5R18",
    "35X14.5R18",
    "36X13.5R18",
    "37X12.5R18",
    "37X13.5R18",
    "38X13.5R18",
    "38X14.5R18",
    "38X15R18",
    "38X15R18",
    "38X15.5R18",
    "40X13.5R18",
    "40X14.5R18",
    "41X14.5R18",
    "25x10R19",
    "26x10R19",
    "27x10R19",
    "28x10R19",
    "29x10R19",
    "30x10R19",
    "31x10R19",
    "26x10R20",
    "26x12R20",
    "27x10R20",
    "28x10R20",
    "29x10R20",
    "30x10R20",
    "31x10R20",
    "31X18R20",
    "31X18R20",
    "32x12R20",
    "33X12R20",
    "33X12R20",
    "33X12.5R20",
    "33X13.5R20",
    "34X14R20",
    "35X11.5R20",
    "35X12.5R20",
    "35X13R20",
    "35X13R20",
    "35X13.5R20",
    "35X14.5R20",
    "36X13.5R20",
    "36X15.5R20",
    "37X11.5R20",
    "37X12.5R20",
    "37X13.5R20",
    "38X13.5R20",
    "38X14.5R20",
    "38X15.5R20",
    "39X13.5R20",
    "39.5X15R20",
    "39.5X15R20",
    "40X13.5R20",
    "40X14.5R20",
    "40X15.5R20",
    "41X14.5R20",
    "42X14.5R20",
    "42X15R20",
    "42X15R20",
    "43X14.5R20",
    "44X19.5R20",
    "44X19.5R20",
    "44X21R20",
    "44X21R20",
    "45X14.5R20",
    "46X19.5R20",
    "49X21R20",
    "49X21R20",
    "27x10R21",
    "27x12R21",
    "28X10R21",
    "28x14R21",
    "29X10R21",
    "31x10R21",
    "28x10R22",
    "28x12R22",
    "29x10R22",
    "33X12.5R22",
    "34x12R22",
    "35X12.5R22",
    "35X14.5R22",
    "37X12.5R22",
    "37X13.5R22",
    "38X13.5R22",
    "38X15.5R22",
    "40X14.5R22",
    "40X15.5R22",
    "41X14.5R22",
    "30x10R24",
    "35X13.5R24",
    "37X13.5R24",
    "38X13.5R24",
    "38X14R24",
    "38X14R24",
    "40X14.5R24",
    "40X15.5R24",
    "40X15.5R26"
];
