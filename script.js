document.addEventListener("DOMContentLoaded", () => {
    renderConstellationBackground();
    initProjectModal();

    const siteHeader = document.querySelector(".site-header");
    const heroSection = document.querySelector("#overview");
    const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const syncHeaderState = () => {
        if (!siteHeader) return;
        const heroBottom = heroSection?.getBoundingClientRect().bottom ?? 0;
        const hideHeader = heroBottom > 120;

        siteHeader.classList.toggle("is-hidden", hideHeader);
        siteHeader.classList.toggle("is-elevated", !hideHeader && window.scrollY > 10);
    };

    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });
    window.addEventListener("resize", syncHeaderState);

    if (!sections.length) return;

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const targetId = `#${entry.target.id}`;

                navLinks.forEach((link) => {
                    const isActive = link.getAttribute("href") === targetId;
                    link.classList.toggle("active", isActive);
                    if (isActive) {
                        link.setAttribute("aria-current", "page");
                    } else {
                        link.removeAttribute("aria-current");
                    }
                });
            });
        },
        {
            rootMargin: "-35% 0px -45% 0px",
            threshold: 0,
        }
    );

    sections.forEach((section) => sectionObserver.observe(section));
});

function initProjectModal() {
    const modal = document.getElementById("project-modal");
    const modalContent = modal?.querySelector(".project-modal-content");
    const toggles = document.querySelectorAll(".project-toggle");
    const closeButtons = modal?.querySelectorAll("[data-project-close]");

    if (!modal || !modalContent || !toggles.length) return;

    const closeModal = () => {
        modal.hidden = true;
        modalContent.replaceChildren();
        document.body.classList.remove("modal-open");
    };

    toggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const card = toggle.closest(".project-card");
            const targetId = toggle.dataset.projectTarget;
            const details = targetId ? document.getElementById(targetId) : null;

            if (!card || !details) return;

            const media = card.querySelector(".project-media")?.cloneNode(true);
            const kicker = card.querySelector(".project-kicker")?.cloneNode(true);
            const title = card.querySelector("h3")?.cloneNode(true);
            const summary = card.querySelector(".project-summary")?.cloneNode(true);
            const detailBlock = details.querySelector(".project-details")?.cloneNode(true);
            const tools = details.querySelector(".project-tools")?.cloneNode(true);
            const actions = details.querySelector(".project-actions")?.cloneNode(true);

            if (title) {
                title.id = "project-modal-title";
                title.classList.add("project-modal-title");
            }

            if (actions) {
                const deadAnchor = actions.querySelector('a[href^="#project-"]');
                if (deadAnchor) {
                    deadAnchor.remove();
                }
            }

            const header = document.createElement("div");
            header.className = "project-modal-header";

            if (kicker) header.append(kicker);
            if (title) header.append(title);
            if (summary) header.append(summary);

            modalContent.replaceChildren(
                ...[media, header, detailBlock, tools, actions].filter(Boolean)
            );

            modal.hidden = false;
            document.body.classList.add("modal-open");
        });
    });

    closeButtons?.forEach((button) => {
        button.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.hidden) {
            closeModal();
        }
    });
}

function renderConstellationBackground() {
    const canvas = document.createElement("canvas");
    canvas.className = "page-constellation";
    document.body.prepend(canvas);

    const context = canvas.getContext("2d");
    if (!context) return;

    const resizeAndRender = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = window.devicePixelRatio || 1;

        canvas.width = Math.floor(width * ratio);
        canvas.height = Math.floor(height * ratio);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        context.clearRect(0, 0, width, height);

        drawConstellationScene(context, width, height);
    };

    resizeAndRender();
    window.addEventListener("resize", debounce(resizeAndRender, 160));
}

function drawConstellationScene(context, width, height) {
    const random = mulberry32(Math.round(width * 13 + height * 7));
    const palette = {
        blue: "#363DFF",
        violet: "#6265FF",
        green: "#74C885",
        slate: "#5B5C80",
        sage: "#62936A",
        dark: "#262733",
    };

    const stars = [];
    const families = [];
    const rootCount = width < 720 ? 4 : 6;

    for (let index = 0; index < rootCount; index += 1) {
        const root = makeStar({
            x: width * (0.14 + index * (0.72 / Math.max(1, rootCount - 1))) + jitter(random, 32),
            y: height * (0.22 + (index % 2) * 0.17) + jitter(random, 30),
            radius: 26 + random() * 18,
            points: pickPoints(random),
            depth: 0,
            family: index,
            parentId: null,
        });

        stars.push(root);
        const family = [root];

        const childCount = 2 + Math.floor(random() * 2);
        for (let childIndex = 0; childIndex < childCount; childIndex += 1) {
            const childAngle = ((Math.PI * 2) / childCount) * childIndex + random() * 0.8;
            const childDistance = 120 + random() * 96;
            const child = makeStar({
                x: clamp(root.x + Math.cos(childAngle) * childDistance, 72, width - 72),
                y: clamp(root.y + Math.sin(childAngle) * childDistance, 84, height - 84),
                radius: root.radius * (0.54 + random() * 0.18),
                points: pickPoints(random),
                depth: 1,
                family: index,
                parentId: root.id,
            });

            stars.push(child);
            family.push(child);

            const grandChildCount = 1 + Math.floor(random() * 2);
            for (let grandChildIndex = 0; grandChildIndex < grandChildCount; grandChildIndex += 1) {
                const grandChildAngle = childAngle + (random() - 0.5) * 1.5;
                const grandChildDistance = 84 + random() * 82;
                const grandChild = makeStar({
                    x: clamp(child.x + Math.cos(grandChildAngle) * grandChildDistance, 48, width - 48),
                    y: clamp(child.y + Math.sin(grandChildAngle) * grandChildDistance, 60, height - 60),
                    radius: child.radius * (0.48 + random() * 0.2),
                    points: pickPoints(random),
                    depth: 2,
                    family: index,
                    parentId: child.id,
                });

                stars.push(grandChild);
                family.push(grandChild);
            }
        }

        families.push(family);
    }

    drawBackdropDots(context, width, height, random, palette);
    drawFamilyConnections(context, families, stars, palette);
    stars.forEach((star) => drawStar(context, star, palette));
}

function drawBackdropDots(context, width, height, random, palette) {
    for (let index = 0; index < 42; index += 1) {
        const x = random() * width;
        const y = random() * height;
        const radius = 1 + random() * 1.8;
        context.beginPath();
        context.fillStyle = withAlpha(palette.slate, 0.08 + random() * 0.1);
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
    }
}

function drawFamilyConnections(context, families, stars, palette) {
    const starById = new Map(stars.map((star) => [star.id, star]));

    context.lineCap = "round";
    context.lineJoin = "round";

    families.forEach((family, familyIndex) => {
        family.forEach((star, index) => {
            if (star.parentId !== null) {
                const parent = starById.get(star.parentId);
                if (parent) {
                    drawLink(context, parent, star, withAlpha(palette.violet, 0.22), 1.2);
                }
            }

            for (let siblingIndex = index + 1; siblingIndex < family.length; siblingIndex += 1) {
                const sibling = family[siblingIndex];
                const distance = getDistance(star, sibling);

                if (star.depth === sibling.depth && distance < 230) {
                    drawLink(context, star, sibling, withAlpha(palette.green, 0.14), 0.95);
                }

                if (Math.abs(star.depth - sibling.depth) === 2 && distance < 270) {
                    drawLink(context, star, sibling, withAlpha(palette.sage, 0.1), 0.8);
                }
            }

            if (familyIndex < families.length - 1 && star.depth === 0) {
                const nextRoot = families[familyIndex + 1][0];
                drawLink(context, star, nextRoot, withAlpha(palette.slate, 0.12), 0.9);
            }
        });
    });
}

function drawLink(context, start, end, strokeStyle, lineWidth) {
    context.beginPath();
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
    context.stroke();
}

function drawStar(context, star, palette) {
    const outerRadius = star.radius;
    const innerRadius = star.radius * 0.42;
    const step = Math.PI / star.points;

    context.beginPath();
    for (let point = 0; point < star.points * 2; point += 1) {
        const radius = point % 2 === 0 ? outerRadius : innerRadius;
        const angle = -Math.PI / 2 + step * point;
        const x = star.x + Math.cos(angle) * radius;
        const y = star.y + Math.sin(angle) * radius;

        if (point === 0) {
            context.moveTo(x, y);
        } else {
            context.lineTo(x, y);
        }
    }
    context.closePath();

    const fill = star.depth === 0 ? withAlpha(palette.blue, 0.12) : withAlpha(palette.green, 0.08);
    const stroke = star.depth === 0 ? withAlpha(palette.blue, 0.34) : withAlpha(palette.violet, 0.26);

    context.fillStyle = fill;
    context.strokeStyle = stroke;
    context.lineWidth = star.depth === 0 ? 1.8 : 1.2;
    context.fill();
    context.stroke();

    context.beginPath();
    context.fillStyle = star.depth === 0 ? withAlpha(palette.dark, 0.7) : withAlpha(palette.slate, 0.55);
    context.arc(star.x, star.y, Math.max(2.4, star.radius * 0.12), 0, Math.PI * 2);
    context.fill();
}

function makeStar({ x, y, radius, points, depth, family, parentId }) {
    return {
        id: `${family}-${depth}-${Math.round(x)}-${Math.round(y)}`,
        x,
        y,
        radius,
        points,
        depth,
        family,
        parentId,
    };
}

function pickPoints(random) {
    const options = [7, 9, 11];
    return options[Math.floor(random() * options.length)];
}

function jitter(random, amount) {
    return (random() - 0.5) * amount * 2;
}

function withAlpha(hex, alpha) {
    const normalized = hex.replace("#", "");
    const bigint = parseInt(normalized, 16);
    const red = (bigint >> 16) & 255;
    const green = (bigint >> 8) & 255;
    const blue = bigint & 255;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function getDistance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}

function debounce(callback, delay) {
    let timeoutId;

    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => callback(...args), delay);
    };
}

function mulberry32(seed) {
    let value = seed >>> 0;

    return () => {
        value += 0x6d2b79f5;
        let result = Math.imul(value ^ (value >>> 15), value | 1);
        result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
        return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
    };
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
