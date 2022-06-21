import { getServices } from "./database.js";

import { getParkAreas } from "./database.js";
import { Guests } from "./Guests.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls</h1>
<article class="details">
    <section class="detail--column list details_parkAreas">
        <h2>North West - ${getParkAreas()}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>North - ${getParkAreas()}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>North East - ${getParkAreas()}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>South West - ${getParkAreas()}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>South - ${getParkAreas()}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>South East - ${getParkAreas()}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_guests">
        <h2>Guests in the Park</h2>
            ${Guests()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML

/* <section class="detail--column list details_parkAreas">
        <h2>North - ${getParkAreas()}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>North East - ${getParkAreas()}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>South West - ${getParkAreas()}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>South - ${getParkAreas()}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>South East - ${getParkAreas()}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_guests">
        <h2>Guests in the Park</h2>
            ${Guests()}
    </section> */