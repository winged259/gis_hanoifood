
for (res of restaurant) {

    star = '&#9734;&#9734;&#9734;&#9734;&#9734;'
    for (let s = 0; s < res.rating; s++) {
        star = star.replace('&#9734;', '&#11088;')
    }
    info = `<b>${res.name}</b>
            <br><br> ${star}
            <br><br>Đồ ăn: ${res.foods.join(", ")}
            <br><br>Đồ uống: ${res.drinks.join(", ")}
            <br>
            <img class="fit-picture" src = ${res.url}>`
    let mark = L.marker([res.y, res.x]);
    var icon = mark.options.icon;
    icon.options.iconSize = [20, 30];
    icon.options.shadowSize = [30, 30];
    mark.setIcon(icon);

    mark.bindPopup(info).openPopup().addTo(map);
}


// form-autofill
var theMarker1 = {};
var theMarker2 = {};
document.getElementById("choose-button-1").addEventListener("click", function () {

    map.once('click', function (e) {
        if (theMarker1 != undefined) {
            map.removeLayer(theMarker1);
        };
        theMarker1 = L.marker(e.latlng).addTo(map);
        document.querySelector("#departLocation").setAttribute('value', `${e.latlng.lat}, ${e.latlng.lng}`)
    })
})
document.getElementById("choose-button-2").addEventListener("click", function () {
    map.once('click', function (e) {
        if (theMarker2 != undefined) {
            map.removeLayer(theMarker2);
        };
        theMarker2 = L.marker(e.latlng).addTo(map);
        document.querySelector("#destLocation").setAttribute('value', `${e.latlng.lat}, ${e.latlng.lng}`)
    })
})

