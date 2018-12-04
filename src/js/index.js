const $ = document.querySelector.bind(document);

$(".open-overlay").addEventListener("click", () => {
  let overlay_navigation = $(".overlay-navigation");
  let top_bar = $(".bar-top");
  let middle_bar = $(".bar-middle");
  let bottom_bar = $(".bar-bottom");
  let nav_items = document.querySelectorAll("nav ul li");

  overlay_navigation.classList.toggle("overlay-active");

  if (overlay_navigation.classList.contains("overlay-active")) {
    top_bar.classList.remove("animate-out-top-bar");
    top_bar.classList.add("animate-top-bar");

    middle_bar.classList.remove("animate-out-middle-bar");
    middle_bar.classList.add("animate-middle-bar");

    bottom_bar.classList.remove("animate-out-bottom-bar");
    bottom_bar.classList.add("animate-bottom-bar");

    overlay_navigation.classList.remove("overlay-slide-up");
    overlay_navigation.classList.add("overlay-slide-down");

    for (let i = 0; i < nav_items.length; i++) {
      nav_items[i].classList.remove(
        `slide-in-nav-item${i <= 0 ? "" : "-delay-" + i}-reverse`
      );
      nav_items[i].classList.add(
        `slide-in-nav-item${i <= 0 ? "" : "-delay-" + i}`
      );
    }
  } else {
    top_bar.classList.remove("animate-top-bar");
    top_bar.classList.add("animate-out-top-bar");

    middle_bar.classList.remove("animate-middle-bar");
    middle_bar.classList.add("animate-out-middle-bar");

    bottom_bar.classList.remove("animate-bottom-bar");
    bottom_bar.classList.add("animate-out-bottom-bar");

    overlay_navigation.classList.remove("overlay-slide-down");
    overlay_navigation.classList.add("overlay-slide-up");

    for (let i = 0; i < nav_items.length; i++) {
      nav_items[i].classList.remove(
        `slide-in-nav-item${i <= 0 ? "" : "-delay-" + i}`
      );
      nav_items[i].classList.add(
        `slide-in-nav-item${i <= 0 ? "" : "-delay-" + i}-reverse`
      );
    }
  }
});
