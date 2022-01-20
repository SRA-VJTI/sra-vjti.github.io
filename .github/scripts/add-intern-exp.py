from fileinput import filename
import sys
from datetime import datetime
import os
import re

INTERN_EXP_BASE_PATH = "./data/intern-exp/"
# {"timestamp":"1/20/2022 16:27:07","email-address":"sra@vjti.ac.in","internship-name":"MITACS","member-name":"Vedant Paranjape","gist":"Worked at ARS Lab",
# "start-duration":"5/15/2021","end-duration":"Researc\nResearc on emebeded","q1":"applied through MITACS\nsdf\n\nadsa *A*","q2":"asdadkasmndljka",
# "q3":"sfklamnflkmdlfkma\n[gellop](www.google.com)","q4":"secret","q5":"asadasd","q6":"dsadasadas","q7":"email","q8":"8/13/2021"}

intern_exp_body = dict()

# convert the text data into a dict
for i in range(1, len(sys.argv)):
	intern_exp_body[sys.argv[i].split(":")[0]] = str(sys.argv[i].split(":")[1])

# convert the date in text to datetime object
intern_exp_body["start-duration"] = datetime.strptime(intern_exp_body["start-duration"], "%m/%d/%Y")
intern_exp_body["end-duration"] = datetime.strptime(intern_exp_body["end-duration"], "%m/%d/%Y")

# check if the given year's folder exists
if not os.path.exists(INTERN_EXP_BASE_PATH + str(intern_exp_body["start-duration"].year)):
	os.mkdir(INTERN_EXP_BASE_PATH + str(intern_exp_body["start-duration"].year))
else:
	print(f"Directory for the year {intern_exp_body['start-duration'].year} already exists, skipping creation of new directory")

# create a filename from the data
intern_exp_filename = str(intern_exp_body["start-duration"].year) + "_" + intern_exp_body["member-name"].split(" ")[0].lower() + "_" + intern_exp_body["member-name"].split(" ")[1].lower() + "_" + re.sub('\W+','', intern_exp_body["internship-name"]).lower() + ".md"

# TODO: check if markdown file of same name exists and accordingly a create markdown file
# if os.path.exists(INTERN_EXP_BASE_PATH + str(intern_exp_body["start-duration"].year) + intern_exp_filename):

file_handle = open(INTERN_EXP_BASE_PATH + str(intern_exp_body["start-duration"].year) + "/" + intern_exp_filename, "w+")

file_output_string = f"""
# What was your internship about, and what was the duration of it ?

{intern_exp_body["q1"]}

# How do you approach the Organization/University ?

{intern_exp_body["q2"]}

# What was your project about ?

{intern_exp_body["q3"]}

# How was the host University in terms of research and campus life ?

{intern_exp_body["q4"]}

# How much was your stipend ?

{intern_exp_body["q5"]}

# Can you provide any resources to check out your project ?

{intern_exp_body["q6"]}

# Suggestions to the fellow VJTIians who want to go for this internship.

{intern_exp_body["q7"]}

# What is the best way to contact you ?

{intern_exp_body["q8"]}
"""

file_handle.write(file_output_string)

# print(file_output_string)
print(intern_exp_body)