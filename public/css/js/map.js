mapboxgl.accessToken = mapToken;

// Check if listing has geometry data
if (!listing.geometry || !listing.geometry.coordinates) {
    console.error("Listing geometry is missing!");
    document.getElementById('map').innerHTML = '<p style="padding: 2rem; text-align: center;">Map location not available</p>';
} else {
    const map = new mapboxgl.Map({
        container: 'map',
        style: "mapbox://styles/mapbox/streets-v12",
        center: listing.geometry.coordinates,
        zoom: 9
    });

    new mapboxgl.Marker({ color: "red" })
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({offset: 25}).setHTML(
                `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
            )
        )
        .addTo(map);
}