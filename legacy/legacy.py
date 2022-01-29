import feedparser
import yaml

data = feedparser.parse("blog-01-26-2022.xml")
posts = {}

for entry in data.entries:
    try:
        if "tag:blogger.com" in entry.link:
            continue
        if "comments" in entry["href"]:
            continue
        if "#settings" in entry.category:
            continue
        if entry.title == "Template: pydanny":
            continue
        if "#comment" in entry.category:
            print("COMMENT", entry.date, entry.title)
            posts[entry["thr_in-reply-to"]["href"]].comments.append(entry)
            # breakpoint()
            continue

        print("ENTRY", entry.date, entry.title)
        entry["comments"] = []
        posts[entry.link] = entry
    except KeyError:
        continue
    # breakpoint()
    # break

print(len(posts))

for key, value in posts.items():
    # print(key)
    # print(value)
    # break
    filename = key.replace(".html", ".md")
    filename = filename.replace("https://pydanny.blogspot.com/", "")
    filename = filename.replace("/", "-")
    tags = [x["term"] for x in value.tags]
    tags = [x for x in tags if x != "http://schemas.google.com/blogger/2008/kind#post"]
    tags.append("legacy-blogger")
    # breakpoint()
    metadata = {
        "date": value["published"],
        "published": True,
        "slug": filename.replace(".md", ""),
        "tags": tags,
        "time_to_read": 5,
        "title": value["title"],
        "description": "",
    }
    # breakpoint()
    print(filename)
    with open(f"../posts/{filename}", "w") as f:
        f.write("---\n")
        f.write(yaml.dump(metadata))
        f.write("---\n\n")
        f.write(f"*This was originally posted on blogger [here]({key})*.")
        f.write(value["summary"])
        f.write("\n\n---\n\n")
        if value["comments"]:
            f.write(
                f'## {len(value["comments"])} comments captured from [original post]({key}) on Blogger\n\n'
            )
            for comment in value["comments"]:
                f.write(
                    f"**{comment['author_detail']['name']} said on {comment['published'][:10]}**\n\n"
                )
                f.write(comment["summary"])
                f.write("\n\n")
                # breakpoint()
        # for content in value['content']:
        #     # print(content['value'])
        #     f.write(content['value'])
        # break
        # f.write(value['content'])
