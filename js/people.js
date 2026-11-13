// @ts-check

import { applyLang } from "./lang.js";
import { PeopleManager } from "./src/peopleManager.js";

const peopleManager = await PeopleManager.loadFromCsv();
const personCardMiniTemplate = /** @type {HTMLTemplateElement} */ (
  document.getElementById("person-card-mini-template")
);

/**
 * Render Faculties
 */
const facultyList = document.getElementById("faculty-list");
const faculties = peopleManager.getFaculties();
faculties.forEach((faculty) => {
  const template = /** @type {DocumentFragment} */ (
    personCardMiniTemplate.content.cloneNode(true)
  );

  renderPersonCardMini(template, faculty);

  facultyList?.appendChild(template);
});

/**
 * Render Ph.D Students
 */
const phdList = document.getElementById("phd-list");
const phdStudents = peopleManager.getPhdStudents();
phdStudents.forEach((student) => {
  const template = /** @type {DocumentFragment} */ (
    personCardMiniTemplate.content.cloneNode(true)
  );

  renderPersonCardMini(template, student);

  phdList?.appendChild(template);
});

/**
 * Render Master Students
 */
const masterList = document.getElementById("master-list");
const masterStudents = peopleManager.getMasterStudents();
masterStudents.forEach((student) => {
  const template = /** @type {DocumentFragment} */ (
    personCardMiniTemplate.content.cloneNode(true)
  );

  renderPersonCardMini(template, student);

  masterList?.appendChild(template);
});

/**
 * Render Bachelor Students
 */
const bachelorList = document.getElementById("bachelor-list");
const bachelorStudents = peopleManager.getBachelorStudents();
bachelorStudents.forEach((student) => {
  const template = /** @type {DocumentFragment} */ (
    personCardMiniTemplate.content.cloneNode(true)
  );

  renderPersonCardMini(template, student);

  bachelorList?.appendChild(template);
});

const avatars = document.querySelectorAll(
  ".people-list .person-card-mini__avatar img",
);
avatars.forEach((avatar) => {
  avatar.addEventListener("click", () => {
    const personId = avatar.getAttribute("data-person-id");
    if (!personId) return;

    const person = peopleManager.getPersonById(personId);
    if (!person) return;

    openPersonModal(person);
  });
});

const personModal = document.getElementById("person-modal");
personModal?.addEventListener("click", (event) => {
  if (event.target === personModal) {
    closePersonModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePersonModal();
  }
});

/**
 * Open modal and show person info.
 * @param {Person} person The person to show.
 */
async function openPersonModal(person) {
  const modal = document.getElementById("person-modal");

  const personCardMini = /** @type {DocumentFragment | null} */ (
    modal?.querySelector(".person-card-mini")
  );
  const research = modal?.querySelector(".person-card__research");
  const skills = modal?.querySelector(".person-card__skills");

  if (personCardMini) {
    renderPersonCardMini(personCardMini, person);
  }

  if (research) {
    if (person.研究テーマ) {
      const newP = document.createElement("p");
      newP.classList.add("person-card__temp");
      newP.textContent = person.研究テーマ;

      research.appendChild(newP);
      research.classList.remove("hidden");
    } else {
      research.classList.add("hidden");
    }
  }

  if (skills) {
    if (person.スキル) {
      const newP = document.createElement("p");
      newP.classList.add("person-card__temp");
      newP.textContent = person.スキル;

      skills.appendChild(newP);
      skills.classList.remove("hidden");
    } else {
      skills.classList.add("hidden");
    }
  }

  modal?.classList.add("is-active");
  document.body.classList.add("no-scroll");
  await applyLang();
}

function closePersonModal() {
  const modal = document.getElementById("person-modal");
  modal?.classList.remove("is-active");

  const temps = document.querySelectorAll(".person-card__temp");
  temps.forEach((temp) => temp.remove());

  document.body.classList.remove("no-scroll");
}

/**
 * Render person card mini.
 * @param {DocumentFragment} element The parent element
 * @param {Person} person The person to show.
 */
function renderPersonCardMini(element, person) {
  const name = element.querySelector(".person-card-mini__name");
  const position = element.querySelector(".person-card-mini__position");
  const lab = element.querySelector(".person-card-mini__lab");
  const img = /** @type {HTMLImageElement | null} */ (
    element.querySelector(".person-card-mini__avatar img")
  );

  if (name) {
    name.setAttribute("data-lang-ja", person.氏名);
    name.setAttribute("data-lang-en", person.Name);
  }

  if (position) {
    position.setAttribute("data-lang-ja", person.学年);
    position.setAttribute("data-lang-en", person.学年);
  }

  if (lab) {
    lab.setAttribute("data-lang-ja", person.研究室);
    lab.setAttribute("data-lang-en", person.Lab);
  }

  if (img) {
    img.src = person.Avatar;
    img.onerror = () => {
      img.onerror = null; // prevent endless loop
      img.src = "./assets/images/default_avatar.png";
    };
    img.setAttribute("data-person-id", person.ID);
  }
}
