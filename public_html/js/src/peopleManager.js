// @ts-check

/**
 * @fileoverview Define PeopleManager that manage people list or selections.
 * @todo The 'faculty' is not '学年'. So change that's name.
 *
 * - Why use Faculty but not Professor?
 *   - Faculty = Professors + Pre-Professors
 *   - So, Faculty is more official.
 */

// Papa (papaparse) is a libaray that can convert CSV to JSON: https://www.papaparse.com/
import Papa from "papaparse";

export class PeopleManager {
  /**
   * PeopleManager constructor
   * @param {Person[]} people
   */
  constructor(people) {
    this.people = people;
  }

  /**
   * Load people csv and parse it as JavaScript Object.
   * @param {string} [path="./assets/people.csv"]
   * @returns {Promise<PeopleManager>}
   */
  static async loadFromCsv(path = "./assets/people.csv") {
    const csv = await (await fetch(path)).text();

    /**
     * Construct Person object.
     * @type {import("papaparse").ParseResult<Person>}
     */
    const parseResult = Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
    });

    const people = parseResult.data;

    return new PeopleManager(people);
  }

  /**
   * Get the person by ID.
   * @param {string} id The Person ID
   * @returns {Person | undefined}
   */
  getPersonById(id) {
    return this.people.find((person) => person.ID === id);
  }

  /**
   * Select Faculties from people list.
   * @returns {Person[]}
   */
  getFaculties() {
    return this.people.filter((person) => person.学年.startsWith("Faculty"));
  }

  /**
   * Select Ph.D. Students from people list.
   * @returns {Person[]}
   */
  getPhdStudents() {
    return this.people.filter((person) => person.学年.startsWith("D"));
  }

  /**
   * Select Masters Students from people list.
   * @returns {Person[]}
   */
  getMasterStudents() {
    return this.people.filter((person) => person.学年.startsWith("M"));
  }

  /**
   * Select Bachelor Students from people list.
   * @returns {Person[]}
   */
  getBachelorStudents() {
    return this.people.filter((person) => person.学年.startsWith("B"));
  }
}
