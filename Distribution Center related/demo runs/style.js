const filterContainer = document.querySelector(".gallery-filter");
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("filter-item")){
        filterContainer.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.foreach((items) => {
            if(items.classList.contains(filterValue) || filterValue === "all"){
                items.classList.remove("hide");
                items.classList.add("show");
            }else{
                items.classList.remove("show");
                items.classList.add("hide");
            }
        });
    }
});