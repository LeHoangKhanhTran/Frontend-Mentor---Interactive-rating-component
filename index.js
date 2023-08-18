let rating = 0;
document.addEventListener("DOMContentLoaded", () => {
    let ratingElements = document.querySelectorAll(".rating");
    ratingElements.forEach(e => {
        e.addEventListener("click", () => {
            ratingElements.forEach(e => {
               e.className = "rating inactive"
            })
            e.className = "rating active";
            rating = e.value;
        })
    })

    let submitElement = document.getElementById("submit");
    submitElement.addEventListener("click", () => {
        if (rating !== 0)
        {
            let preSubmit = document.getElementById("wrapper1");
            preSubmit.style.display = "none";
            let postSubmit = document.getElementById("wrapper2");
            postSubmit.style.display = "";
            document.getElementById("rating-response").innerText = "You selected " + rating.toString() + " out of 5";
        }
    })
})
