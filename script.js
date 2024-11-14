function showServiceDetails(service) {
    alert(`Service Details: ${service}`);
}
<script>
function toggleAboutDetails() {
    var aboutDetails = document.getElementById("aboutDetails");
    aboutDetails.style.display = aboutDetails.style.display === "none" ? "block" : "none";
}
</script>

function promptCompanyDetails() {
    const details = prompt("Please enter your company details (Name, Industry, Location, etc.):");
    if (details) {
        document.getElementById("customization-portal").style.display = "block";
        document.getElementById("search-section").style.display = "none";
        document.getElementById("progress").innerText = "20%";
    }
}
