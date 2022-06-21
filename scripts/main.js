import { getGuests, getParkAreas, getServices } from "./database.js";
getGuests()
getParkAreas()
getServices()

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls</h1>
<article class="details">
    <section class="detail--column list details_parkAreas">
        <h2>North West - ${getParkAreas([0])}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>North - ${getParkAreas([1])}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>North East - ${getParkAreas([2])}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>South West - ${getParkAreas([3])}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>South - ${getParkAreas([4])}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_parkAreas">
        <h2>South East - ${getParkAreas([5])}</h2>
            ${getServices()}
    </section>
    <section class="detail--column list details_guests">
        <h2>Guests in the Park</h2>
            ${getGuests()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML