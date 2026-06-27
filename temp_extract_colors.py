from PIL import Image
import collections
img = Image.open('4 tech logo.png').convert('RGBA')
pixels = list(img.getdata())
px = [(r,g,b) for r,g,b,a in pixels if a > 200]
c = collections.Counter(tuple(round(x / 32) * 32 for x in px[i]) for i in range(len(px)))
print(c.most_common(20))
