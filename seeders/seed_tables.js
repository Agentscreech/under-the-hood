var db = require('../models');

function buildAll(){
    buildServices(services);
    buildUsers(users);
    buildFuel(fuel);
    buildOil(oil);
    buildWiper(wipers);
    buildTireBrand(tireBrands);
    buildCars(cars);
    buildTireSizes(carTires);
    buildMockServices(mockServices);
}

//populate services
var services = [
    {
        name:"fuel",
    },
    {
        name:"oil",
    },
    {
        name:"wiper",
    },
    {
        name:"tire",
    },
    {
        name:"air filter"
    },
    {
        name:"battery"
    },
    {
        name:"in cabin air filter"
    },
    {
        name:"spark plugs"
    },
    {
        name:"brakes"
    },
    {
        name:"other"
    },

];

function buildServices(item){
    item.forEach(function(service){
        db.service.findOrCreate({
            where:{
                name:service.name
            }
        });
    });

}

//populate users

var users = [
    {
        email: "showmewhatyougot@getschwifty.com",
        password: "takingroyoffthegrid",
        name: "Rick Sanchez"
    },
    {
        email: "geeidontknowrick@awwman.com",
        password: "summerisabitch",
        name: "Morty Smith"
    },
    {
        email: "needsomeonedead@imyourguy.com",
        password: "hereigokillinagain",
        name: "Krombopulos Michael"
    }
];
function buildUsers(item){
    item.forEach(function(user){
        db.user.findOrCreate({
            where: {
                email:user.email,
                password:user.password,
                name:user.name
            }
        });
    });
}


//populate fuel
var fuel = ["regular", "plus", "premium", "diesel"];
function buildFuel(item){
    item.forEach(function(fuel){
        db.fuel.findOrCreate({where:{grade:fuel}});
    });
}



//populate oil
var oil = ["0W-30", "0W-40", "5W-40", "5W-30", "10W-30", "10W-40", "15W-40", "20W-50"];
function buildOil(item){
    item.forEach(function(oil){
        db.oil.findOrCreate({where:{weight:oil}});
    });
}


//populate wipers
var wipers = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
function buildWiper(item){
    item.forEach(function(wiper){
        db.wiper.findOrCreate({where:{length:wiper}});
    });
}


//populate tireBrands
var tireBrands = ["Bridgestone", "BFGoodrich", "Michelin", "Continental", "Pirelli", "Cooper", "Dunlop", "Goodyear", "Hancook", "Hoosier", "Kumho", "Firestone", "Uniroyal", "Falken", "Sumitomo", "Nitto", "Toyo"];
function buildTireBrand(item){
    item.forEach(function(tirebrand){
        db.tireBrand.findOrCreate({where:{name:tirebrand}});
    });
}


//populate cars,

var cars = [
    {
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
    {
        year: 2013,
        make: "hyundai",
        model: "veloster",
        style: "Turbo 3dr Hatchback w/Black Interior (1.6L 4cyl Turbo 6M)",
        userId: 2,
        styleDetails: {
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
    {
        year: 1997,
        make: "mitsubishi",
        model: "eclipse",
        style: "GS-T Turbo 2dr Hatchback",
        userId: 3,
        styleDetails: {
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
            }
    }
];
function buildCars(item){
    item.forEach(function(car){
        var styleDetails = JSON.stringify(car.styleDetails);
        var serviceDetails = JSON.stringify(car.serviceDetails);
        db.car.findOrCreate({
            where: {
                year:car.year,
                make:car.make,
                model:car.model,
                style:car.style,
                userId:car.userId,
                styleDetails:styleDetails,
                serviceDetails:serviceDetails
            }
        });
    });
}


//populate tireSizes

var carTires = ["215/50R13",
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
    "315/30R30"];

function buildTireSizes(item){
    item.forEach(function(tire){
        var tireWidth = tire.substring(0,3);
        var tireHeight = tire.substring(4,6);
        var tireRim = tire.substring(7,9);
        db.tireSize.findOrCreate({
            where:{
                width: tireWidth,
                height: tireHeight,
                rim: tireRim
            }
        });
    });
}


//populate mockServices

var mockServices = [
    {
        carId:1,
        serviceId:2,
        cost:58,
        mileage:80000,
        fuelId:3
    },
    {
        carId:2,
        serviceId:2,
        cost:32,
        mileage:34000,
        fuelId:1
    },
    {
        carId:3,
        serviceId:2,
        cost:48,
        mileage:203000,
        fuelId:2
    },
    {
        carId:1,
        serviceId:1,
        cost:98,
        mileage:80200,
        oilId:4
    },
    {
        carId:2,
        serviceId:1,
        cost:78,
        mileage:34200,
        oilId:2
    },
    {
        carId:3,
        serviceId:1,
        cost:40,
        mileage:203200,
        oilId:7
    },
    {
        carId:1,
        serviceId:5,
        cost:2000,
        mileage:80300,
        tireSizeId:397,
        tireBrandId:3
    },
    {
        carId:2,
        serviceId:5,
        cost:1500,
        mileage:34300,
        tireSizeId:298,
        tireBrandId:4
    },
    {
        carId:3,
        serviceId:5,
        cost:800,
        mileage:203300,
        tireSizeId:216,
        tireBrandId:3
    },
    {
        carId:1,
        serviceId:3,
        cost:30,
        mileage:80400,
        wiperId:9
    },
    {
        carId:2,
        serviceId:3,
        cost:20,
        mileage:34400,
        wiperId:17
    },
    {
        carId:3,
        serviceId:3,
        cost:10,
        mileage:203400,
        wiperId:11
    },
    {
        carId:1,
        serviceId:4,
        cost:20,
        mileage:80500
    },
    {
        carId:2,
        serviceId:4,
        cost:15,
        mileage:34500
    },
    {
        carId:3,
        serviceId:4,
        cost:8,
        mileage:203500
    },
    {
        carId:1,
        serviceId:8,
        cost:159,
        mileage:80600
    },
    {
        carId:2,
        serviceId:8,
        cost:100,
        mileage:34600
    },
    {
        carId:3,
        serviceId:8,
        cost:79,
        mileage:203600
    }
];

function buildMockServices(item){
    item.forEach(function(service){
        if(service.fuelId === undefined){
            service.fuelId = null;
        } else if (service.oilId === undefined){
            service.oilId = null;
        } else if (service.wiperId === undefined){
            service.wiperId = null;
        } else if (service.tireBrandId === undefined){
            service.tireBrandId = null;
        } else if (service.tireSizeId === undefined){
                service.tireSizeId = null;
        }
        db.car_service.findOrCreate({
            where:{
                carId:service.carId,
                serviceId:service.serviceId,
                cost:service.cost,
                mileage:service.mileage,
                fuelId:service.fuelId,
                oilId:service.oilId,
                wiperId:service.wiperId,
                tireSizeId:service.tireSizeId,
                tireBrandId:service.tireBrandId
            }
        });
    });
}

buildAll();
