let clickItem = document.querySelector(".list-parent");
let images = document.querySelectorAll(".images");

clickItem.addEventListener("click", (e) => {
    if (e.target.dataset.set !== undefined) {
        filterImages(e.target.dataset.set);
    }
})

function filterImages(clickedItem) {
    images.forEach((value) => {
        if (value.dataset.set === clickedItem || clickedItem === "all") {
            value.style.display = "block";
        }
        else {
            value.style.display = "none";
        }
    })
}