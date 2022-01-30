"""
TODOs
1. Figure out if looking for 'Template: pydanny' can be automated
2. Find pure python way to convert HTML to markdown
"""

import sys
from pathlib import Path

try:
    import feedparser
    import typer
    import yaml
except ImportError:
    print("Install the dependencies in requirements.txt")

def main(input_file: Path, output_dir: Path):

    typer.secho(f"Parsing data from '{input_file}'", fg=typer.colors.GREEN)
    raw_text = input_file.read_text()
    # parse the historical data
    data = feedparser.parse(raw_text)
    breakpoint()
    posts = {}
    for entry in data.entries:
        try:
            # Filter out config data and other junk
            if "tag:blogger.com" in entry.link:
                continue
            if "comments" in entry["href"]:
                continue
            if "#settings" in entry.category:
                continue
            if entry.title == "Template: pydanny":
                continue

            # add comments to entries
            if "#comment" in entry.category:
                posts[entry["thr_in-reply-to"]["href"]].comments.append(entry)
                continue

            # Add entries to the posts and prep for comments
            entry["comments"] = []
            posts[entry.link] = entry
        except KeyError:
            continue

    # Write the markdown files
    typer.secho(f"Writing {len(posts)} blogger posts to markdown files", fg=typer.colors.GREEN)
    with typer.progressbar(posts.items()) as posts_progress:
        for key, value in posts_progress:
            # Get a MD filename from the original HTML URL
            filename = key.replace(".html", ".md")
            link = data['feed']['link'].replace('http', 'https')
            filename = filename.replace(link, "")
            filename = filename.replace("/", "-")
            # Get a list of tags
            tags = [x["term"] for x in value.tags]
            tags = [x for x in tags if x != "http://schemas.google.com/blogger/2008/kind#post"]
            tags.append("legacy-blogger")
            frontmatter = {
                "date": value["published"],
                "published": True,
                "slug": filename.replace(".md", ""),
                "tags": tags,
                "time_to_read": 5,
                "title": value["title"],
                "description": "",
            }
            with open(f"{output_dir.joinpath(filename)}", "w") as f:
                # Set the frontmatter
                f.write("---\n")
                f.write(yaml.dump(frontmatter))
                f.write("---\n\n")
                # Set a link to the original content
                f.write(f"*This was originally posted on blogger [here]({key})*.\n\n")
                # Write the HTML, TODO: consider converting to markdown
                f.write(value["summary"])
                # If any comments, add them
                if value["comments"]:
                    f.write("\n\n---\n\n")            
                    f.write(
                        f'## {len(value["comments"])} comments captured from [original post]({key}) on Blogger\n\n'
                    )
                    for comment in value["comments"]:
                        f.write(
                            f"**{comment['author_detail']['name']} said on {comment['published'][:10]}**\n\n"
                        )
                        f.write(comment["summary"])
                        f.write("\n\n")


if __name__ == '__main__':
    typer.run(main)
