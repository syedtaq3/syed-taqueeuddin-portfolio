class ComponentLoader {

    static async load(path, id) {

        try {

            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`Failed to load ${path}`);
            }
            const html = await response.text();
            document.getElementById(id).innerHTML = html;
        }

        catch (error) {

            console.error(error);

        }

    }

}

async function loadWebsite() {

    await ComponentLoader.load("components/header.html", "header");

    await ComponentLoader.load("sections/hero.html", "hero");

    await ComponentLoader.load("sections/featured-project.html", "featured-project");

    await ComponentLoader.load("sections/experience.html", "experience");

    await ComponentLoader.load("sections/engineering-expertise.html", "engineering-highlights");

    await ComponentLoader.load("sections/projects.html", "projects");

    await ComponentLoader.load("sections/philosophy.html", "philosophy");

    await ComponentLoader.load("sections/contact.html", "contact");

    await ComponentLoader.load("components/footer.html", "footer");

}

document.addEventListener("DOMContentLoaded", async () => {

    await loadWebsite();

    initializeScrollSpy();
    initializeMobileNavigation();

});

function initializeScrollSpy() {

    const navLinks = document.querySelectorAll(".desktop-nav a");

    const sections = [];

    navLinks.forEach(link => {

        const id = link.getAttribute("href").substring(1);

        const section = document.getElementById(id);

        if(section){

            sections.push({
                link,
                section
            });

        }

    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                navLinks.forEach(link =>
                    link.classList.remove("active")
                );

                const active = sections.find(s => s.section === entry.target);

                if(active){

                    active.link.classList.add("active");

                }

            }

        });

    },{
        rootMargin:"-35% 0px -55% 0px",
        threshold:0
    });

    sections.forEach(item => observer.observe(item.section));

}

/* ===========================================================
   MOBILE NAVIGATION
=========================================================== */

function initializeMobileNavigation() {

    const menuButton = document.querySelector(".mobile-menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    if (!menuButton || !mobileNav)
        return;

    const navLinks = mobileNav.querySelectorAll("a");

    function openMenu() {

        mobileNav.classList.add("is-open");

        menuButton.classList.add("is-open");

        menuButton.setAttribute("aria-expanded", "true");

        document.body.classList.add("menu-open");

    }

    function closeMenu() {

        mobileNav.classList.remove("is-open");

        menuButton.classList.remove("is-open");

        menuButton.setAttribute("aria-expanded", "false");

        document.body.classList.remove("menu-open");

    }

    menuButton.addEventListener("click", () => {

        if (mobileNav.classList.contains("is-open")) {

            closeMenu();

        } else {

            openMenu();

        }

    });

    navLinks.forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeMenu();

        }

    });

    document.addEventListener("click", event => {

        const clickedInside =
            mobileNav.contains(event.target) ||
            menuButton.contains(event.target);

        if (!clickedInside) {

            closeMenu();

        }

    });

}