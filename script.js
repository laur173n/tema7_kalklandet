//accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//AKTUELT

let nyheder = [];
document.addEventListener("DOMContentLoaded", start);

function start() {
    async function getJson() {
        let url = "http://lauravillumsen.com/kea/07-cms/kalklandet/wp//wp-json/wp/v2/nyhed"
        let jsonData = await fetch(url);
        nyheder = await jsonData.json();
        visNyheder();
    }

    function visNyheder() {
        let dest = document.querySelector(".nyheder");
        let temp = document.querySelector("template");
        nyheder.forEach(nyhed => {
            let klon = temp.cloneNode(true).content;
            klon.querySelector(".overskrift").innerHTML = nyhed.title.rendered;
            klon.querySelector(".dato").innerHTML = nyhed.dato;
            klon.querySelector(".tekst").innerHTML = nyhed.content.rendered;
            klon.querySelector("img").src = nyhed.billede.guid;
            dest.appendChild(klon);
        })

    }
    getJson();
}

// OM OS
let indhold;
document.addEventListener("DOMContentLoaded", start);

function start() {
    async function getJson() {
        let url = "http://lauravillumsen.com/kea/07-cms/kalklandet/wp//wp-json/wp/v2/pages/30"
        let jsonData = await fetch(url);
        indhold = await jsonData.json();
        visIndhold();
    }

    function visIndhold() {
        document.querySelector(".overskrift").textContent = indhold.title.rendered;
        document.querySelector(".indhold").innerHTML = indhold.content.rendered;
    }
    getJson();
}
