import os
from pathlib import Path
import shutil

filePath = os.getcwd()
for root, dirs, files in os.walk(filePath):
    print("root:", root)
    print("dirs:", dirs)
    print("files:", files)
    print("="*10)

    print(root.count("\\"))
    print()

    # input()

    c = root.count("\\")
    
    if c == 12:
        for f in files:
            if f.find(".page.scss") != -1:
                fPath = root + "\\" + f
                file = open(fPath, "w")
                file.write("@import url(\"../../../tab1.page.scss\");")
                file.close()
    elif c == 11:  
        for f in files:
            if f.find("course-intro") != -1 and f.find(".page.scss") != -1:
                fPath = root + "\\" + f
                file = open(fPath, "w")
                file.write("@import url(\"../../tab1.page.scss\");")
                file.close()

    
        


    
