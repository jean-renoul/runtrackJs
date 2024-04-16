document.addEventListener("scroll", function() {
    let footer = document.querySelector("footer");
    let scrollPosition = window.scrollY;
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercentage = (scrollPosition / maxScroll) * 100;
    let red = Math.round(255 * (scrollPercentage / 100));
    let green = Math.round(255 * ((100 - scrollPercentage) / 100));
    footer.style.backgroundColor = "rgb(" + red + "," + green + ",0)";
});