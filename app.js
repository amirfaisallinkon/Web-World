// Map nav text to section IDs
const scrollMap = {
    "Home": "top",
    "Services": "our-expertice",
    "About": "how-we-work",
    "Contact Us": "connect-with"
};

// Smooth scroll on nav click
document.querySelectorAll("nav ul li").forEach(item => {
    item.addEventListener("click", () => {
        const sectionId = scrollMap[item.textContent.trim()];
        const section = sectionId === "top" ? document.body : document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Back to Top Button
const backToTop = document.querySelector("#scroll");
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

// Styles for the button
Object.assign(backToTop.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    padding: "10px 15px",
    fontSize: "24px",
    backgroundColor: "#1e40af",
    color: "white",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    display: "none",
    zIndex: "999"
});

// Toggle visibility on scroll
window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 400 ? "block" : "none";
});

// Scroll to top
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
