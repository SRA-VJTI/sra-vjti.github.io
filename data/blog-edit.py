import json

ffile = None
with open('blog-data.json', 'r') as fp:
    ffile = json.load(fp)
    for i, year in enumerate(ffile):
        for j, blog in enumerate(ffile[i]["blogs"]):
            blogfilen = ffile[i]["blogs"][j]["content-name"]
            with open(blogfilen) as blogfile:
                ffile[i]["blogs"][j]["content"] = blogfile.read()

with open('blog-data.json', 'w') as fp:
    json.dump(ffile, fp)
