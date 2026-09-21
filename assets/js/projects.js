class ProjectsController {

    constructor() {

        this.projectCards = [];
        this.projectDetails = null;
        this.currentProject = null;
        this.currentImageIndex = 0;
        
        this.projects = {
            
            "tini-clash": {

                title: "TiniClash",

                company: "Personal MVP",

                role: "Unity Gameplay Developer",

                overview:
                    "TiniClash is a mobile real-time strategy MVP built in Unity 6 using Unity Entities (ECS). The project focuses on a card-driven deployment loop where players spend mana to deploy units, units move and acquire targets, buildings attack, and the battle loop progresses in real time. The MVP is focused on establishing strong gameplay foundations, scalable ECS architecture and reusable systems before final art, animation and VFX.",

                tags: [
                    "Unity 6",
                    "C#",
                    "Unity Entities",
                    "ECS",
                    "Strategy",
                    "Gameplay Systems",
                    "Mobile",
                    "MVP"
                ],

                contributions: [

                    "Designed and implemented the core Unity Entities / ECS gameplay architecture.",

                    "Created the foundational UnitEntity setup for melee and ranged units.",

                    "Implemented unit spawning and movement systems.",

                    "Implemented target acquisition and building targeting.",

                    "Developed building attack systems and projectile spawning.",

                    "Implemented projectile-based combat flow.",

                    "Built the card definition, deck and hand systems.",

                    "Implemented the mana system used for unit deployment.",

                    "Implemented drag-and-drop card deployment from the mobile UI.",

                    "Built UnitDeploymentPreview and placement validation behaviour.",

                    "Implemented card refill timing and card pooling.",

                    "Integrated ECS gameplay data with the UI layer.",

                    "Worked with Unity SubScenes and ECS authoring/baking workflows.",

                    "Built the foundations for the gameplay loop and battle-state systems.",

                    "Debugged and resolved ECS structural-change, singleton, buffer and component lifecycle issues during development."

                ],

                metrics: {

                    "ROLE": "Unity Gameplay Developer",

                    "PROJECT TYPE": "Personal MVP",

                    "ENGINE": "Unity 6 · 6000.0.75f1",

                    "ARCHITECTURE": "Unity Entities · ECS",

                    "TARGET": "Mobile · Portrait",

                    "STATUS": "MVP Development"

                },

                technologies: [

                    "Unity 6",

                    "C#",

                    "Unity Entities",

                    "ECS",

                    "SubScenes",

                    "Authoring & Baking",

                    "Gameplay Systems",

                    "Card Systems",

                    "Mana System",

                    "Object Pooling",

                    "Mobile Development"

                ],

                images: [
                    "assets/images/projects/tini-clash/tini-clash-hero.png",
                    "assets/images/projects/tini-clash/tini-clash-card-system.png",
                    "assets/images/projects/tini-clash/tini-clash-valid-deployment.png",
                    "assets/images/projects/tini-clash/tini-clash-invalid-deployment.png",
                    "assets/images/projects/tini-clash/tini-clash-combat.png",
                    "assets/images/projects/tini-clash/tini-clash-battlefield.png",
                    "assets/images/projects/tini-clash/tini-clash-match-complete.png"
                ],

                video: "assets/videos/projects/tini-clash/tini-clash-gameplay.mp4",

                website: null

            },
            
            "lost-tower": {

                title: "The Lost Tower",

                company: "AWO Gaming",

                role: "Senior Unity Gameplay Developer · Sole Unity Developer",

                overview:
                    "The Lost Tower is a commercial live-service Tower Defense game developed for Android and iOS. As the sole Unity Gameplay Developer, I owned gameplay architecture, feature implementation, LiveOps systems, backend integrations, progression systems and long-term maintainability of the gameplay codebase.",

                tags: [
                    "Unity",
                    "C#",
                    "Tower Defense",
                    "LiveOps",
                    "Backend Integration",
                    "Progression",
                    "Mobile"
                ],

                contributions: [
                    "Owned the gameplay architecture and Unity gameplay implementation as the sole Unity Gameplay Developer.",
                    "Implemented core Tower Defense gameplay and wave-based combat systems.",
                    "Built LiveOps features including Season Pass, tournaments, events and progression systems.",
                    "Integrated and maintained backend REST APIs across gameplay and meta systems.",
                    "Implemented player progression, upgrades, cards, currencies and related meta-progression flows.",
                    "Built data-driven systems using LiveContent JSON to keep gameplay and meta configuration separate from code.",
                    "Implemented authentication and platform-specific account flows, including guest and Apple Sign In integration.",
                    "Worked on gameplay UI, FTUE, localization and player-facing systems.",
                    "Investigated and optimized mobile performance during heavy enemy waves and gameplay spikes.",
                    "Supported Android and iOS production workflows and release preparation."
                ],

                metrics: {
                    "ROLE": "Sole Unity Gameplay Developer",
                    "DURATION": "6 Months",
                    "TEAM": "4 Members",
                    "REST APIs": "69 Integrated",
                    "PLATFORMS": "Android & iOS",
                    "ENGINE": "Unity 2022 LTS"
                },

                technologies: [
                    "Unity 2022 LTS",
                    "C#",
                    "REST APIs",
                    "LiveOps",
                    "ScriptableObjects",
                    "Addressables",
                    "JSON",
                    "LiveContent",
                    "Git",
                    "Android",
                    "iOS",
                    "Performance Optimization"
                ],

                images: [
                    "assets/images/projects/lost-tower/game-cover.png",
                    "assets/images/projects/lost-tower/gameplay-god-of-war-impact.png",
                    "assets/images/projects/lost-tower/god-of-time-introduction.png",
                    "assets/images/projects/lost-tower/gameplay-late-wave.png",
                    "assets/images/projects/lost-tower/gameplay-god-of-ice.png",
                    "assets/images/projects/lost-tower/ui-scroll-unlock-attack-speed.png",
                    "assets/images/projects/lost-tower/splash-screen.png",
                    "assets/images/projects/lost-tower/gameplay-enemy-wave.png",
                    "assets/images/projects/lost-tower/ui-store-gems-pack.png",
                    "assets/images/projects/lost-tower/gameplay-god-of-war-activation.png",
                    "assets/images/projects/lost-tower/god-of-war-summoned.png",
                    "assets/images/projects/lost-tower/ui-scrolls-overview.png",
                    "assets/images/projects/lost-tower/ui-home-screen.png",
                    "assets/images/projects/lost-tower/god-of-ice-introduction.png",
                    "assets/images/projects/lost-tower/ui-scroll-unlock-gold-per-wave.png",
                    "assets/images/projects/lost-tower/ui-upgrades-tier3.png",
                    "assets/images/projects/lost-tower/ui-store-power-pack.png",
                    "assets/images/projects/lost-tower/ui-battle-pass.png",
                    "assets/images/projects/lost-tower/ui-upgrades-tier4.png",
                    "assets/images/projects/lost-tower/god-of-war-introduction.png"
                ],

                video: "assets/videos/projects/lost-tower/hero-gameplay.mp4",
                website: null

            },

            "ultimate-cafe-franchise": {

                title: "Ultimate Cafe Franchise",

                company: "Lunari Entertainment",

                role: "Senior Unity Gameplay Programmer",

                overview:
                    "Ultimate Cafe Franchise is a casual mobile simulation game that combines multiple gameplay experiences into a single title. Players build and customize their café while progressing through engaging mini-games, including Bubble Shooter and Match-3. As the Senior Unity Gameplay Programmer, I led the Unity development team, developed core gameplay systems and gameplay UI, integrated new features, and helped ensure a stable, high-quality production throughout development.",

                tags: [
                    "Unity",
                    "C#",
                    "Mobile",
                    "Simulation",
                    "Casual",
                    "Gameplay",
                    "Leadership"
                ],

                contributions: [

                    "Led the Unity development team throughout feature development and production.",

                    "Designed and implemented Bubble Shooter gameplay mechanics and supporting systems.",

                    "Developed gameplay systems, gameplay UI, and feature integrations across multiple game modes.",

                    "Led the implementation of a Fruit Ninja-style gameplay mode by coordinating and reviewing the team's development.",

                    "Integrated new gameplay content while maintaining a scalable and maintainable codebase.",

                    "Resolved gameplay and UI issues to improve production stability and overall player experience."

                ],

                technologies: [

                    "Unity",

                    "C#",

                    "Git",

                    "JSON",

                    "Mobile Development"

                ],

                images: [

                    "assets/images/projects/ultimate-cafe-franchise/game-cover.png",

                    "assets/images/projects/ultimate-cafe-franchise/gameplay-bubble-shooter.png",

                    "assets/images/projects/ultimate-cafe-franchise/gameplay-match3.png",

                    "assets/images/projects/ultimate-cafe-franchise/gameplay-cafe-customization.png",

                    "assets/images/projects/ultimate-cafe-franchise/gameplay-signature-drinks.png"

                ],

                video: null,

                website: null

            },

            "zoo-guardians": {

                title: "Zoo Guardians",

                company: "JumpStart Games",

                role: "Junior Unity Gameplay Programmer",

                overview:
                    "Zoo Guardians is a mobile zoo management simulation game where players build and expand their own wildlife park, care for animals, manage staff, complete quests, and unlock new content. As a Junior Unity Gameplay Programmer, I implemented gameplay systems, gameplay UI, and new features while collaborating closely with designers and senior developers to deliver a polished gameplay experience.",

                tags: [
                    "Unity",
                    "C#",
                    "Mobile",
                    "Simulation",
                    "Management",
                    "Gameplay"
                ],

                contributions: [

                    "Implemented Animal Management gameplay systems.",

                    "Developed Zoo Construction features and supporting gameplay systems.",

                    "Implemented Staff Management mechanics and related gameplay functionality.",

                    "Developed the Quest System and integrated gameplay progression features.",

                    "Implemented the Poll System and additional gameplay features across the project.",

                    "Resolved gameplay and UI bugs to improve stability and overall player experience."

                ],

                technologies: [

                    "Unity",

                    "C#",

                    "Git",

                    "Mobile Development"

                ],

                images: [

                    "assets/images/projects/zoo-guardians/game-cover.png",

                    "assets/images/projects/zoo-guardians/gameplay-zoo-overview.png",

                    "assets/images/projects/zoo-guardians/gameplay-animal-management.png",

                    "assets/images/projects/zoo-guardians/gameplay-zoo-staff.png",

                    "assets/images/projects/zoo-guardians/gameplay-global-missions.png",

                    "assets/images/projects/zoo-guardians/gameplay-quest-system.png"

                ],

                video: null,

                website: null

            },

            "savior-of-data-realm": {

                title: "Savior of Data Realm",

                company: "Knackbout Studios",

                role: "Unity Gameplay Programmer",

                overview:
                    "Savior of Data Realm is an educational action-adventure game designed to teach programming concepts through interactive gameplay, puzzles, combat, and quizzes. As the sole Unity Gameplay Developer, I was responsible for designing and implementing the entire gameplay experience, collaborating closely with the backend developer and artists to deliver a complete and engaging game.",

                tags: [
                    "Unity",
                    "C#",
                    "Gameplay",
                    "Educational",
                    "Puzzle",
                    "Adventure",
                    "Sole Developer"
                ],

                contributions: [

                    "Sole Unity Gameplay Developer responsible for the complete gameplay implementation.",

                    "Designed and implemented all gameplay systems and game mechanics.",

                    "Developed the programming puzzle system used throughout the game.",

                    "Implemented quiz-based combat mechanics and gameplay progression.",

                    "Developed the interactive door unlocking system and level progression flow.",

                    "Implemented the ammo system, gameplay UI, and player interactions.",

                    "Integrated backend APIs and collaborated closely with the backend developer and artists throughout production."

                ],

                technologies: [

                    "Unity",

                    "C#",

                    "Git",

                    "JSON",

                    "REST API Integration",

                    "Mobile Development"

                ],

                images: [

                    "assets/images/projects/savior-of-data-realm/game-cover.png",

                    "assets/images/projects/savior-of-data-realm/gameplay-programming-puzzle.png",

                    "assets/images/projects/savior-of-data-realm/gameplay-quiz-combat.png",

                    "assets/images/projects/savior-of-data-realm/gameplay-door-unlock.png",

                    "assets/images/projects/savior-of-data-realm/gameplay-ammo-system.png",

                    "assets/images/projects/savior-of-data-realm/gameplay-program-success.png"

                ],

                video: "https://youtu.be/rsmoUl07xtA?si=_bIV9_794qd_piik",

                website: "https://knackbout.com/savior-of-data-realm-game-promo"

            },

            "wordy": {

                title: "Wordy",

                company: "RealPlay Studios",

                role: "Senior Unity Gameplay Programmer",

                overview:
                    "Wordy is a casual word puzzle game where players solve word challenges and answer questions across progressively challenging levels. As the Senior Unity Gameplay Programmer, I led a small team of Unity developers and artists while developing core gameplay systems, gameplay UI, backend integrations, and production features to deliver a polished player experience.",

                tags: [
                    "Unity",
                    "C#",
                    "Puzzle",
                    "Casual",
                    "Mobile",
                    "Leadership"
                ],

                contributions: [

                    "Led a small team of Unity developers and artists throughout production.",

                    "Developed core gameplay systems and game flow.",

                    "Implemented question and answer mechanics along with gameplay progression.",

                    "Developed gameplay UI and player interaction systems.",

                    "Integrated backend APIs and gameplay data.",

                    "Collaborated closely with designers and artists to deliver production-ready features.",

                    "Resolved gameplay and UI issues to improve stability and player experience."

                ],

                technologies: [

                    "Unity",

                    "C#",

                    "Git",

                    "REST API Integration",

                    "Mobile Development"

                ],

                images: [

                    "assets/images/projects/wordy/game-cover.png",

                    "assets/images/projects/wordy/gameplay-question.png",

                    "assets/images/projects/wordy/gameplay-correct-answer.png",

                    "assets/images/projects/wordy/gameplay-level-complete.png"

                ],

                video: "https://drive.google.com/file/d/1LpUqPczcGjLv7FyL3G6nmAb1TX4EZpMQ/view?usp=sharing",

                website: null

            },

        };

    }

    initialize() {

        this.cacheElements();
        this.bindEvents();

    }

    cacheElements() {

        this.projectCards = document.querySelectorAll(".project-accordion");
        this.projectView = document.getElementById("project-view");
        
        this.projectCover = document.getElementById("project-cover");

        this.projectCompany = document.getElementById("project-company");

        this.projectTitle = document.getElementById("project-title");

        this.projectRole = document.getElementById("project-role");

        this.projectLinks = document.getElementById("project-links");
        
        this.projectGallery = document.getElementById("project-gallery");

        this.projectOverview = document.getElementById("project-overview");

        this.projectContributions = document.getElementById("project-contributions");

        this.projectTechnologies = document.getElementById("project-technologies");

        this.projectTags = document.getElementById("project-tags");
        this.projectMetricsSection = document.getElementById("project-metrics-section");
        this.projectMetrics = document.getElementById("project-metrics");

        this.lightbox = document.getElementById("project-lightbox");

        this.lightboxImage = document.getElementById("lightbox-image");

        this.lightboxClose = document.getElementById("lightbox-close");

        this.lightboxPrevious = document.getElementById("lightbox-previous");

        this.lightboxNext = document.getElementById("lightbox-next");
    }

    bindEvents() {

        this.projectCards.forEach(card => {

            card.addEventListener("click", () => {

                this.projectCards.forEach(projectCard => {

                    projectCard.classList.remove("active");

                });

                card.classList.add("active");

                this.showProject(card.dataset.project);

            });

        });
        this.lightboxClose.addEventListener("click", () => {

            this.closeLightbox();

        });

        this.lightboxNext.addEventListener("click", () => {

            this.nextImage();

        });

        this.lightboxPrevious.addEventListener("click", () => {

            this.previousImage();

        });

        this.lightbox.addEventListener("click", (event) => {

            if (event.target === this.lightbox) {

                this.closeLightbox();

            }

        });
        document.addEventListener("keydown", (event) => {

            if (!this.lightbox.classList.contains("active")) {

                return;

            }

            switch (event.key) {

                case "Escape":

                    this.closeLightbox();

                    break;

                case "ArrowLeft":

                    this.previousImage();

                    break;

                case "ArrowRight":

                    this.nextImage();

                    break;

            }

        });
    }

    showProject(projectId) {

        const project =
            this.projects[projectId];

        if (!project)
            return;

        this.currentProject = project;

        this.projectCover.src = project.images[0];

        this.projectCover.alt = `${project.title} Cover`;

        this.projectCompany.textContent =
            project.company;

        this.projectTitle.textContent =
            project.title;

        this.projectRole.textContent =
            project.role;

        this.projectOverview.textContent =
            project.overview;


        /* =====================================================
           TAGS
        ===================================================== */

        this.projectTags.innerHTML = "";

        project.tags.forEach(tag => {

            this.projectTags.innerHTML +=
                `<span class="tech-chip">${tag}</span>`;

        });


        /* =====================================================
           PROJECT METRICS
        ===================================================== */

        this.projectMetrics.innerHTML = "";

        if (project.metrics) {

            this.projectMetricsSection.style.display = "block";

            Object.entries(project.metrics).forEach(
                ([label, value]) => {

                    const metric = document.createElement("div");

                    metric.innerHTML = `
                        <span class="detail-label">
                            ${label}
                        </span>

                        <span class="detail-value">
                            ${value}
                        </span>
                    `;

                    this.projectMetrics.appendChild(metric);

                }
            );

        } else {

            this.projectMetricsSection.style.display = "none";

        }


        /* =====================================================
           CONTRIBUTIONS
        ===================================================== */

        this.projectContributions.innerHTML = "";

        project.contributions.forEach(
            contribution => {

                this.projectContributions.innerHTML += `
                    <li>
                        ${contribution}
                    </li>
                `;

            }
        );


        /* =====================================================
           TECHNOLOGIES
        ===================================================== */

        this.projectTechnologies.innerHTML = "";

        project.technologies.forEach(
            technology => {

                this.projectTechnologies.innerHTML += `
                    <span class="tech-chip">
                        ${technology}
                    </span>
                `;

            }
        );


        /* =====================================================
           GALLERY
        ===================================================== */

        this.projectGallery.innerHTML = "";

        if (project.images.length > 1) {

            project.images.slice(1).forEach(
                (image, index) => {

                    const img =
                        document.createElement("img");

                    img.src = image;

                    img.alt =
                        `${project.title} Screenshot ${index + 1}`;

                    img.addEventListener(
                        "click",
                        () => {

                            this.openLightbox(index);

                        }
                    );

                    this.projectGallery.appendChild(img);

                }
            );

        } else {

            const placeholder =
                document.createElement("div");

            placeholder.className =
                "project-gallery-placeholder";

            placeholder.textContent =
                "Additional screenshots and gameplay footage will be added here.";

            this.projectGallery.appendChild(
                placeholder
            );

        }


        /* =====================================================
           LINKS
        ===================================================== */

        this.projectLinks.innerHTML = "";

        if (project.video) {

            this.projectLinks.innerHTML += `
                <a
                    class="project-link-button"
                    href="${project.video}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ▶ Watch Gameplay
                </a>
            `;

        }

        if (project.website) {

            this.projectLinks.innerHTML += `
                <a
                    class="project-link-button"
                    href="${project.website}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🌐 Visit Website
                </a>
            `;

        }


        /* =====================================================
           SHOW VIEWER
        ===================================================== */

        this.projectView.style.display = "block";

        this.projectView.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

    openLightbox(index) {

        this.galleryImages = this.currentProject.images.slice(1);

        this.currentImageIndex = index;

        this.showLightboxImage(index);

        this.lightbox.classList.add("active");
        
        document.body.style.overflow = "hidden";

    }

    closeLightbox() {

        this.lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

    showLightboxImage(index) {

        this.lightboxImage.src =
            this.galleryImages[index];

    }

    nextImage() {

        this.currentImageIndex++;

        if (this.currentImageIndex >= this.galleryImages.length) {

            this.currentImageIndex = 0;

        }

        this.showLightboxImage(this.currentImageIndex);

    }

    previousImage() {

        this.currentImageIndex--;

        if (this.currentImageIndex < 0) {

            this.currentImageIndex = this.galleryImages.length - 1;

        }

        this.showLightboxImage(this.currentImageIndex);

    }

}