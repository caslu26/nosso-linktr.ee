document.addEventListener("DOMContentLoaded", function() {
    const links = [
        { text: "Tiktok", url: "https://www.tiktok.com/@bunker_dosdevs", icon: "bi-tiktok" },
        { text: "GitHub", url: "https://github.com/caslu26", icon: "bi-github" },
        { text: "Landing Page", url: "https://caslu26.github.io/land-page-empresa/", icon: "bi-window" }
    ];

    const linksContainer = document.getElementById("links");

    links.forEach(link => {
        const linkItem = document.createElement("div");
        linkItem.classList.add("link-item");

        const iconElement = document.createElement("i");
        iconElement.classList.add("bi", link.icon); // Adicione "bi" antes do nome do ícone

        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.textContent = link.text;

        linkItem.appendChild(iconElement);
        linkItem.appendChild(linkElement);
        linksContainer.appendChild(linkItem);
    });
});
