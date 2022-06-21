/*

    This module contains all of the data, or state, for the
    application. It exports three functions that allow other
    modules to get copies of the information stored in the database.

*/

const database = {
    guests: [{
        id: 1,
        firstName: "Janice",
        lastName: "Gregory"
    }, {
        id: 2,
        firstName: "Liam",
        lastName: "Miller"
    }, {
        id: 3,
        firstName: "Fiona",
        lastName: "Smith"
    }, {
        id: 4,
        firstName: "Ivor",
        lastName: "Watson"
    }, {
        id: 5,
        firstName: "Gary",
        lastName: "Monroe"
    }, {
        id: 6,
        firstName: "Candice",
        lastName: "Watson"
    }, {
        id: 7,
        firstName: "Jalyn",
        lastName: "Bailey"
    }, {
        id: 8,
        firstName: "Jeff",
        lastName: "Fisher"
    }, {
        id: 9,
        firstName: "Grover",
        lastName: "Cleveland"
    }, {
        id: 10,
        firstName: "Steven",
        lastName: "Holmes"
    }, {
        id: 11,
        firstName: "Harry",
        lastName: "Manson"
    }, {
        id: 12,
        firstName: "Charlie",
        lastName: "Beckham"
    }, {
        id: 13,
        firstName: "Shauna",
        lastName: "Williams"
    }, {
        id: 14,
        firstName: "Josh",
        lastName: "Huntsman"
    }, {
        id: 15,
        firstName: "Zachary",
        lastName: "Smith"
    }], 
parkAreas: [{
    id: 1, name: "Chamfort River"
}, {
    id: 2, name: "Lost Wolf Hiking Trail"
},{
    id: 3, name: "Lodge"
},{
    id: 4, name: "Gander River"
},{
    id: 5, name: "Campgrounds"
},{
    id: 6, name: "Pine Bluffs Trails"
}], 
services: [{
        id: 1, name: "rafting"
    }, {
        id: 2, name: "canoeing"
    },{
        id: 3, name: "fishing"
    },{
        id: 4, name: "hiking"
    },{
        id: 5, name: "picnicking"
    },{
        id: 6, name: "rock climbing"
    },{
        id: 7, name: "lodging"
    },{
        id: 8, name: "parking"
    },{
        id: 9, name: "information"
    },{
        id: 10, name: "zip lines"
    }]
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getParkAreas = () => {
    return database.parkAreas.map(areas => ({...areas}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

