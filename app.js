const servicesMenu = document.getElementById("services-menu");
    const servicesContent = document.getElementById("services-content");

    servicesMenu.addEventListener("click", () => {
      if (servicesContent.style.display === "none") {
        servicesContent.style.display = "block";
      } else {
        servicesContent.style.display = "none";
      }
    });