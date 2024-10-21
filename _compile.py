import chevron, os, json

source_path = os.path.join(os.path.dirname(__file__), 'source', 'web', )
dest_path = os.path.join(os.path.dirname(__file__), 'web')
conf_path = os.path.join(os.path.dirname(__file__), 'source', 'config.json')
config = json.load(open(conf_path, 'r'))

files = [f for f in os.listdir(source_path) if os.path.isfile(os.path.join(source_path, f))]

for f in files:
    r = chevron.render(open(os.path.join(source_path, f), 'r'), config)
    with open(os.path.join(dest_path, f), 'w+') as ff:
        ff.write(r)

# print(chevron.render(open(source_path+'/insertHtml.js', 'r'), config))