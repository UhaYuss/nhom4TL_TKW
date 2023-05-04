const versions = document.querySelectorAll(".version-pic");

versions.forEach(version => {
    version.addEventListener("mouseover", e => {
        const newVersion = version.dataset.value;
        document.getElementById("version").innerHTML = newVersion;
    });
    version.addEventListener("mouseout", e => {
        document.getElementById("version").innerHTML = "Phiên bản";
    });
});
