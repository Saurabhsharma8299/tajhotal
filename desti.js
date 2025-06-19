function toggleMobileMenu() {
  const x = document.getElementById("mobileMenu");
  if (x.classList.contains("w3-show")) {
    x.classList.remove("w3-show");
  } else {
    x.classList.add("w3-show");
  }
}
