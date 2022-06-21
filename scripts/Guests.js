import { getGuests } from "./database.js";

const guests = getGuests()

export const Guests = () => {
    let html= "<ul>"
    for (const allGuest of guests) {
        html += `<li id="guests--${allGuest.firstName}${allGuest.lastName}></li>`
    
    html += "</ul>"
    }
    return html
}
