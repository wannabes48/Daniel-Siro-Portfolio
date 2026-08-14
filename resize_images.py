import os
from PIL import Image

src_dir = r"C:\Users\Dorah Siro\daniel-portfolio\src\assets\images"

hero_path = os.path.join(src_dir, "hero-workspace.png")
portrait_path = os.path.join(src_dir, "profile-portrait.png")

if os.path.exists(hero_path):
    img = Image.open(hero_path)
    img.save(os.path.join(src_dir, "hero-workspace.webp"), "WEBP", quality=80)
    print("Converted hero-workspace.png to webp")
else:
    print("hero-workspace.png not found")

if os.path.exists(portrait_path):
    img = Image.open(portrait_path)
    img = img.resize((400, 401), Image.Resampling.LANCZOS)
    img.save(os.path.join(src_dir, "profile-portrait.webp"), "WEBP", quality=80)
    print("Converted and resized profile-portrait.png to webp")
else:
    print("profile-portrait.png not found")
