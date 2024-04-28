#  import the modules
import os
from PIL import Image

# get the path/directory
folder_dir = "."
file_list = os.listdir(folder_dir)
print("list:" + str(file_list))

for images in file_list:
    # check if the image ends with png
    if (
        images.endswith(".JPG")
        or images.endswith(".jpg")
        or images.endswith(".png")
        or images.endswith(".PNG")
    ):
        new_filename = images + ".webp"
        if (new_filename) not in file_list:
            image = Image.open(images)
            image = image.convert("RGB")
            image.save(new_filename, "webp", optimize=True, quality=80)
            print(images)
