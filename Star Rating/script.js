document.addEventListener("DOMContentLoaded", () => {
    const star = document.querySelectorAll(".fa-star");
    const ratingValue = document.querySelector(".rating-value");
    let currentRating = 0;

    // Function to update star display based on a rating
    const UpdateStar = (rating) => {
        star.forEach((starElement, index) => {
            if (index < rating) {
                starElement.classList.add("active");
            } else {
                starElement.classList.remove("active");
            }
        });
    };

    // Function to handle star hover effect
    const handleStarHover = (event) => {
        const rating = event.target.dataset.rating;
        star.forEach((starElement, index) => {
            if (index < rating) {
                starElement.classList.add("hover");
            } else {
                starElement.classList.remove("hover");
            }
        });
    };

    // Function to handle star leave effect
    const handleStarLeave = () => {
        star.forEach((starElement) => {
            starElement.classList.remove("hover");
        });
        UpdateStar(currentRating);
    };

    // Function to handle a star click
    const handleStarClick = (event) => {
        currentRating = parseInt(event.target.dataset.rating, 10);
        ratingValue.textContent = `${currentRating}/5`;
        UpdateStar(currentRating);
    };

    // Add event listeners to each star
    star.forEach((starElement) => {
        starElement.addEventListener("mouseenter", handleStarHover);
        starElement.addEventListener("mouseleave", handleStarLeave);
        starElement.addEventListener("click", handleStarClick);
    });
});