import load_dict

D = load_dict.load_obj('tags')
d = dict()
for tags in D:
    for filename in tags:
        if(not filename in d):
            d[filename] = set()
        d[filename].add(tags)
load_dict.save_obj(d,"reviewpostTags")
