#  import the modules
import os
from os import listdir
from PIL import Image


# get the path/directory
folder_dir = "."
for images in os.listdir(folder_dir):

    # check if the image ends with png
    if images.endswith(".jpg"):
        image = Image.open(images)
        image = image.convert("RGB")
        image.save(images + ".webp", "webp", optimize=True, quality=80)
        # print(images)
