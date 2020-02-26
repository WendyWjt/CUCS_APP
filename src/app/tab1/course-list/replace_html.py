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
        result.add(tag["href"].replace("course-list/", ""))
    return result




def writeToHtml(targetSet: set()):
    print(targetSet, "\n\n")
    
    filePath = os.getcwd()
    for root, dirs, files in os.walk(filePath):
        print("root:", root)
        print("dirs:", dirs)
        print("files:", files)
        print("="*10)

        print(root.count("\\"))

        # input()

        target1 = root.split("\\")[-1]
        target2 = root.split("\\")[-2]
        print(target1, target1 in targetSet)
        print(target2, target2 in targetSet, "\n\n")

        if target1 in targetSet or target2 in targetSet:
            c = root.count("\\")
            # inner
            if c == 12:
                for f in files:
                    if f.find(".page.html") != -1:
                        fPath = root + "\\" + f
                        file = open(fPath, "w", encoding = "utf-8")
                        format_file = open("inner_page_format.txt", "r")
                        for line in format_file:
                            file.write(line)
                            # print(line)
                            # input()
                        file.close()
                        format_file.close()
            # outer     
            elif c == 11:
                for f in files:
                    if f.find("course-intro") != -1 and f.find(".page.html") != -1:
                        fPath = root + "\\" + f
                        file = open(fPath, "w", encoding = "utf-8")
                        if len(dirs) == 0:
                            format_file = open("no_inner_page_format.txt", "r")
                        else:
                            format_file = open("outer_page_format.txt", "r")
                        for line in format_file:
                                file.write(line)
                        file.close()
                        format_file.close()
                            


if __name__ == "__main__":
    targetSet = targetCoursePage()
    writeToHtml(targetSet)
