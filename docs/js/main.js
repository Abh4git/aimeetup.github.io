/* ====== SITE CONFIG: edit these ====== */
const CONFIG = {
  // Where "Join the group" should go: WhatsApp community invite, LinkedIn group/page, Google Form, Luma/Meetup page, etc.
  joinUrl: "mailto:hello@aimeetup.tech?subject=Join%20AI%20Meetup%20Community",
  siteUrl: "https://aimeetup.tech"
};
/* ===================================== */

document.querySelectorAll("#joinBtn").forEach(a => {
  a.href = CONFIG.joinUrl;
  if (/^https?:/.test(CONFIG.joinUrl)) { a.target = "_blank"; a.rel = "noopener"; }
});
document.querySelectorAll("[data-join]").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("join").scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

const u = encodeURIComponent(CONFIG.siteUrl), t = encodeURIComponent("AI Meetup Community, Kerala: Build, Learn, Innovate");
document.getElementById("shLi").href = `https://www.linkedin.com/sharing/share-offsite/?url=${u}`;
document.getElementById("shWa").href = `https://wa.me/?text=${t}%20${u}`;
document.getElementById("shX").href = `https://twitter.com/intent/tweet?text=${t}&url=${u}`;
document.getElementById("yr").textContent = new Date().getFullYear();

/* highlight active tab on scroll */
const tabs = [...document.querySelectorAll(".tab")];
const secs = tabs.map(t => document.querySelector(t.getAttribute("href")));
function onScroll() {
  let i = 0;
  secs.forEach((s, k) => { if (s.getBoundingClientRect().top < 180) i = k; });
  tabs.forEach((t, k) => t.classList.toggle("active", k === i));
}
addEventListener("scroll", onScroll, { passive: true }); onScroll();
