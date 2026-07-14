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

    await ComponentLoader.load("sections/engineering-highlights.html", "engineering-highlights");

    await ComponentLoader.load("sections/experience.html", "experience");

    await ComponentLoader.load("sections/projects.html", "projects");

    await ComponentLoader.load("sections/philosophy.html", "philosophy");

    await ComponentLoader.load("sections/contact.html", "contact");

    await ComponentLoader.load("components/footer.html", "footer");

}

document.addEventListener("DOMContentLoaded", loadWebsite);