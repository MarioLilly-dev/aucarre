// Parse query parameters from URL
const params = new URLSearchParams(window.location.search);

const bride = params.get("bride") || "Bride";
const groom = params.get("groom") || "Groom";
const date = params.get("date") || "2025-11-21";
const time = params.get("time") || "19:00";
const venue = params.get("venue") || "Beirut";
const map = params.get("map") || "#";

document.getElementById("coupleNames").textContent = `${bride} 💕 ${groom}`;
document.getElementById("dateTime").textContent = `${date} at ${time}`;
document.getElementById("venue").textContent = venue;

const mapLink = document.getElementById("mapLink");
if (map === "#" || map.trim() === "") {
  mapLink.style.display = "none";
} else {
  mapLink.href = map;
}
