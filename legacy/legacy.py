import feedparser

data = feedparser.parse('blog-01-26-2022.xml')

for entry in data.entries:
    try:
        if 'comments' in entry['href']:
            continue  
        if '#comment' in entry.category:
            continue
        if '#settings' in entry.category:
            continue          
        print(entry.date, entry.title)
    except KeyError:
        continue
    # breakpoint()
    # break
