document.addEventListener("DOMContentLoaded", () => {
    const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
    const navTargets = navLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const revealTargets = Array.from(document.querySelectorAll("[data-reveal]"));

    const setActiveLink = (targetId) => {
        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${targetId}`;
            link.classList.toggle("active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    if (navTargets.length) {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-38% 0px -48% 0px",
                threshold: 0,
            }
        );

        navTargets.forEach((section) => sectionObserver.observe(section));
    }

    if (revealTargets.length) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            {
                rootMargin: "0px 0px -8% 0px",
                threshold: 0.08,
            }
        );

        revealTargets.forEach((target) => revealObserver.observe(target));
    }
});
