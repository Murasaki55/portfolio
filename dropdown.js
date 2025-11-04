const blocLinks = document.querySelector(".bloc-links");
const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener('mouseover', () => {
    blocLinks.style.maxHeight = blocLinks.scrollHeight + "px";
});

dropdown.addEventListener('mouseout', () => {
    blocLinks.style.maxHeight = "0px";
});
