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
