"""
Fix all images to .jpeg and rename it to the Person ID
"""

import csv

from pathlib import Path
from PIL import Image, ImageOps
from pillow_heif import register_heif_opener

import utils as U

register_heif_opener()  # HEIC を読めるようにする

SRC_DIR = Path("./assets/avatars")  # 変換元
DST_DIR = Path("./public_html/assets/images/avatars")  # 変換先（元ファイルは触らない）
DST_DIR.mkdir(exist_ok=True)

EXTENSIONS = {
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".heic",
    ".heif",
}

with open("./public_html/assets/people.csv", newline="", encoding="utf-8-sig") as f:
    people = list(csv.DictReader(f))


def estimate_person_id(filename: str) -> str | None:
    result: set[str] = set()
    for person in people:
        shimei = U.normalized(person["氏名"])
        name = U.normalized(person["Name"])
        family_name = U.normalized(person["Name"].split()[0])
        for keyword in [shimei, name, family_name]:
            if keyword in U.normalized(filename):
                result.add(person["ID"])
    if len(result) == 1:
        return result.pop()
    return None


for src in sorted(SRC_DIR.iterdir()):
    if src.suffix.lower() not in EXTENSIONS:
        continue

    person_id = estimate_person_id(src.name)
    if person_id is None:
        print("ERROR: Could not estimate the Person ID from:", src.name)
        print(
            "Please rename the image to <Person ID>.jpeg manually:",
            "./public_html/" + src.stem + ".jpeg",
        )
    filename = src.stem if person_id is None else person_id

    dst = DST_DIR / f"{filename}.jpeg"
    try:
        with Image.open(src) as img:
            img = ImageOps.exif_transpose(img)  # スマホ写真の向きを正す
            if img.mode != "RGB":
                img = img.convert("RGB")  # 透過 PNG などは JPEG にできないため
            img.save(dst, "JPEG", quality=90)
        print(f"OK   {src.name} -> {dst.name}")
    except Exception as e:
        print(f"FAIL {src.name}: {e}")
