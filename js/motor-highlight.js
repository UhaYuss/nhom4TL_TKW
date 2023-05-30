document.addEventListener("DOMContentLoaded", () => {
    const firstContent = document.querySelector("#accordion .content:first-of-type");
    toggleAccordion(firstContent.previousElementSibling);
});

function toggleAccordion(title) {
    const contents = document.querySelectorAll("#accordion .content");
    const content = title.nextElementSibling;
    const isDisplayed = content.classList.contains("show");

    contents.forEach(item => {
        if (item !== content) {
            item.classList.remove("show");
            item.classList.add("hide");
        }
    });

    if (!isDisplayed) {
        content.classList.remove("hide");
        content.classList.add("show");
    }
}

