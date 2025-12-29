// ----- DATA FOR HOUSSAM -----
const data = {
  name: "HOUSSAM ELARSAOUI",
  role: "Développeur Full Stack",
  initials: "HE",
  location: "Beni Mellal, Morocco",
  experienceYears: "2+ years",
  status: "Looking for a full-stack internship (stage)",
  stackShort: "React · Next.js · Angular · Node.js · Laravel · MongoDB (Mongoose)",
  bio:
    "I'm Houssam, a self-taught full stack developer from Beni Mellal. I work with React, Next.js, Angular, Node.js and Laravel, and I love turning ideas into real projects while improving my skills every day.",

  contact: {
    email: "houssamelarsaoui@gmail.com",
    location: "Beni Mellal, Morocco",
    freelance: "Available for stage & freelance",
    links: [
      { label: "GitHub", url: "https://github.com/l9iirch-hub" },
      { label: "Instagram", url: "https://instagram.com/hossam_xx7" }
      // { label: "LinkedIn", url: "..." } // زيدها من بعد إلا بغيتي
    ]
  },

  // Languages + Skills
  skills: [
    "English",
    "Français",
    "Arabic",
    "React",
    "Next.js",
    "Angular",
    "jQuery",
    "Bootstrap",
    "Node.js",
    "Laravel",
    "Mongoose",
    "REST APIs",
    "Git & GitHub"
  ],

  // projects: خاوية دابا – منين دير بروجيه، زيدو هنا
  projects: [
    // مثال من بعد:
    // {
    //   title: "My First Full Stack App",
    //   short: "Small CRUD app with React and Node.",
    //   type: "featured",        // featured / side / other
    //   category: "web",         // web / other
    //   tech: ["React", "Node", "MongoDB"],
    //   live: "https://...",
    //   code: "https://github.com/..."
    // }
  ],

  experience: [
    {
      role: "Full Stack Developer (self-taught)",
      company: "Personal learning & practice",
      period: "2022 – Present",
      description:
        "Building and studying full stack applications with React, Next.js, Node.js, Laravel and MongoDB, focusing on clean code and problem solving."
    },
    {
      role: "Student & online courses",
      company: "Self-learning (YouTube / MOOCs)",
      period: "2020 – 2022",
      description:
        "Learning web fundamentals (HTML, CSS, JS), algorithms and best practices in English, French and Arabic resources."
    }
  ]
};

// ----- BASIC FILL -----
function fillBasic() {
  $("#user-name, #hero-name-text, #footer-name").text(data.name);
  $("#user-role, #hero-role-text").text(data.role);
  $("#logo-initial").text(data.initials);
  $("#hero-status-text").text(data.status);
  $("#hero-bio").text(data.bio);
  $("#meta-location, #contact-location").text("📍 " + data.location);
  $("#meta-experience").text("⏱ " + data.experienceYears + " learning");
  $("#meta-stack").text("⚙️ " + data.stackShort);
  $("#contact-freelance").text(data.contact.freelance);
  $("#contact-email-link")
    .attr("href", "mailto:" + data.contact.email)
    .text(data.contact.email);
}

// ----- SKILLS -----
function renderSkills() {
  const row = $("#skills-row").empty();
  data.skills.forEach((s) => row.append(`<span class="pill">${s}</span>`));
}

// ----- PROJECTS -----
function renderProjects(filter = "all") {
  const grid = $("#projects-grid").empty();

  const filtered = data.projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "featured") return p.type === "featured";
    if (filter === "web") return p.category === "web";
    if (filter === "other") return p.category === "other";
    return true;
  });

  if (!filtered.length) {
    grid.append(
      `<p style="font-size:13px;color:#9ca3af;">No projects yet. Start building and add them in <strong>app.js → data.projects</strong>.</p>`
    );
    return;
  }

  filtered.forEach((p, i) => {
    const techHtml = p.tech.map((t) => `<span>${t}</span>`).join("");
    const linksHtml = `
      ${p.live ? `<a href="${p.live}" target="_blank">Live</a>` : ""}
      ${p.live && p.code ? "&nbsp;·&nbsp;" : ""}
      ${p.code ? `<a href="${p.code}" target="_blank">Code</a>` : ""}
    `;
    const card = $(`
      <article class="card" data-index="${i}">
        <div>
          <div class="card-header">
            <h3 class="card-title">${p.title}</h3>
            <span class="card-tag">${p.type || "project"}</span>
          </div>
          <p class="card-body">${p.short || ""}</p>
          <div class="card-details">${p.details || ""}</div>
        </div>
        <div class="card-footer">
          <div class="card-tech">${techHtml}</div>
          <div class="card-links">${linksHtml}</div>
        </div>
        <div class="card-details-toggle">more…</div>
      </article>
    `);
    grid.append(card.hide().fadeIn(180));
  });
}

// ----- EXPERIENCE -----
function renderExperience() {
  const t = $("#timeline").empty();
  data.experience.forEach((item) => {
    t.append(`
      <div class="timeline-item">
        <div>
          <div class="timeline-role">${item.role}</div>
          <div class="timeline-company">${item.company}</div>
        </div>
        <div class="timeline-date">${item.period}</div>
        <div class="timeline-desc">${item.description}</div>
      </div>
    `);
  });
}

// ----- CONTACT LINKS -----
function renderContactLinks() {
  const c = $("#contact-links").empty();
  data.contact.links.forEach((l) => {
    c.append(`<a href="${l.url}" target="_blank">${l.label}</a>`);
  });
}

// ----- UI BEHAVIOUR -----
function setupScroll() {
  $("[data-scroll]").on("click", function () {
    const target = $(this).data("scroll");
    const $t = $(target);
    if ($t.length) {
      $("html, body").animate({ scrollTop: $t.offset().top - 70 }, 400);
    }
  });
}

function setupProjectFilterButtons() {
  $(".project-filter").on("click", function () {
    $(".project-filter").removeClass("active");
    $(this).addClass("active");
    renderProjects($(this).data("filter"));
  });
}

function setupProjectDetailsToggle() {
  $("#projects-grid").on("click", ".card-details-toggle", function () {
    const $d = $(this).closest(".card").find(".card-details");
    if ($d.is(":visible")) {
      $d.slideUp(150);
      $(this).text("more…");
    } else {
      $d.slideDown(150);
      $(this).text("less");
    }
  });
}

function setupThemeToggle() {
  $("#theme-toggle").on("click", function () {
    const $body = $("body");
    const isDark = $body.hasClass("theme-dark");
    if (isDark) {
      $body.removeClass("theme-dark").addClass("theme-light");
      $("#theme-icon").text("☼");
      $("#theme-label").text("Light");
    } else {
      $body.removeClass("theme-light").addClass("theme-dark");
      $("#theme-icon").text("☾");
      $("#theme-label").text("Dark");
    }
  });
}

// reveal on scroll
function handleRevealOnScroll() {
  const winTop = $(window).scrollTop();
  const winHeight = $(window).height();
  $(".reveal").each(function () {
    const elemTop = $(this).offset().top;
    if (elemTop < winTop + winHeight - 80) {
      $(this).addClass("visible");
    }
  });
}

// ----- INIT -----
$(function () {
  fillBasic();
  renderSkills();
  renderProjects("all");
  renderExperience();
  renderContactLinks();
  setupScroll();
  setupProjectFilterButtons();
  setupProjectDetailsToggle();
  setupThemeToggle();

  $("#year").text(new Date().getFullYear());

  handleRevealOnScroll();
  $(window).on("scroll", handleRevealOnScroll);
});
