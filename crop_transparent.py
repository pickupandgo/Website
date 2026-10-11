from PIL import Image
import sys

def crop_transparent(image_path, output_path):
    try:
        im = Image.open(image_path)
        im = im.convert("RGBA")
        bbox = im.getbbox()
        if bbox:
            im_cropped = im.crop(bbox)
            im_cropped.save(output_path)
            print("Cropped successfully to", bbox)
        else:
            print("No bounding box found, image might be completely transparent.")
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    crop_transparent("public/Website_Image_transparent.png", "public/Website_Image_cropped.png")
