def normalized(text: str) -> str:
    return text.replace(".", "").replace(" ", "_").lower()
