import re

def countWord(word, lyrics):
    words = re.findall(rf"(?<!\w){re.escape(word)}(?!\w)", re.sub(r"[^\w\s\u0600-\u06FF]", "", lyrics), re.IGNORECASE)
    count = len(words)

    print(f"The word '{word}' appears {count} times in the lyrics.")

lyrics = input("Paste your lyrics here (can be Arabic or English)...\n").strip()
word = input("Enter the word to count: ").strip()
countWord(word, lyrics)
