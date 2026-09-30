from collections import Counter
from pathlib import PurePath

files = ["report.pdf", "photo.png", "notes.txt",
         "resume.pdf", "logo.png", "data.csv"]

extensions = Counter(
    PurePath(file).suffix.lower() for file in files
)

for extension, count in extensions.most_common():
    print(extension, ":", count)
