"""
Generate Person ID and Avatar URL
"""

import csv

import utils as U


def create_person_id(lab: str, position: str, name: str) -> str:
    """
    Example:
        Input:
            Lab: Hagiwara Lab.
            Position: B4
            Name: OWADA Kaiji
        Output:
            hagiwara_lab-b4-owada_kaiji
    """
    return f"{U.normalized(lab)}-{U.normalized(position)}-{U.normalized(name)}".lower()


with open("./assets/people.csv", newline="", encoding="utf-8-sig") as f:
    people = list(csv.DictReader(f))

normalized_people: list[dict] = []
fieldnames = [  # TODO: Keep up-to-date
    "ID",
    "氏名",
    "Name",
    "学年",
    "研究室",
    "Lab",
    "研究テーマ",
    "スキル",
    "Avatar",
]

lab_translations = {  # TODO: Keep up-to-date
    "萩原研究室": "Hagiwara Lab.",
    "崔研究室": "Choi Lab.",
    "鈴木研究室": "Suzuki Lab.",
}

for person in people:
    lab = lab_translations[person["研究室"]]
    person_id = create_person_id(lab, person["学年"], person["Name"])
    normalized_people.append(
        {
            "ID": person_id,
            "氏名": person["氏名"],
            "Name": person["Name"],
            "学年": person["学年"],
            "研究室": person["研究室"],
            "Lab": lab,
            "研究テーマ": person["研究テーマ"],
            "スキル": person["スキル"],
            "Avatar": f"./assets/images/avatars/{person_id}.jpeg",  # NOTE: fix to .jpeg
        }
    )

normalized_people.sort(key=lambda person: person.get("Name", ""))
normalized_people.sort(key=lambda person: person.get("研究室", ""))
normalized_people.sort(key=lambda person: person.get("学年", ""), reverse=True)

with open("./public_html/assets/people.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(normalized_people)
