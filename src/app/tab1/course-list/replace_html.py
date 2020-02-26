import os
from pathlib import Path
import shutil

from bs4 import BeautifulSoup

def targetCoursePage() -> set():
    p = "replace_course_list.txt"
    file = open(p)
    soup = BeautifulSoup(file.read(), "html.parser")
    tags = soup.find_all("ion-item")
    result = set()
    for tag in tags:
        result.add(tag["href"])
    return result




def writeToHtml(targetSet: set()):
    filePath = os.getcwd()
    for root, dirs, files in os.walk(filePath):
        print("root:", root)
        print("dirs:", dirs)
        print("files:", files)
        print("="*10)

        print(root.count("\\"))
        print()

        #input()

        if root in targetSet:
            c = root.count("\\")
            # inner
            if c == 12:
                for f in files:
                    if f.find(".page.html") != -1:
                        fPath = root + "\\" + f
                        file = open(fPath, "w")
                        file.write("@import url(\"../../../tab1.page.scss\");")
                        file.close()
            # outer     
            elif c == 11:  
                for f in files:
                    if f.find("course-intro") != -1 and f.find(".page.html") != -1:
                        fPath = root + "\\" + f
                        file = open(fPath, "w")
                        file.write("@import url(\"../../tab1.page.scss\");")
                        file.close()


if __name__ == "__main__":
    targetSet = targetCoursePage()
    writeToHtml(targetSet)
