
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

