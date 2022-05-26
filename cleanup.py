#!/usr/bin/env python
import re
from pathlib import Path

import typer
from bs4 import BeautifulSoup


def clean(input_file: Path):
    typer.secho(f"Opening '{input_file}'", fg=typer.colors.GREEN)
    text = input_file.read_text()

    text = text.replace('<br />', '\n')

    text = text.replace('http:', 'https:')

    # List cleanup
    text = text.replace('<ul><li>', '\n\n- ')
    text = text.replace('</li><li>', '\n- ')
    text = text.replace('</li></ul>', '\n\n')

    if '<ol>' in text:
        typer.secho(f"Warning: Ordered list will need cleanup", fg=typer.colors.RED)

    text = text.replace('<ol><li>', '\n\n1. ')
    text = text.replace('</li></ol>', '\n\n')

    if '<a' in text:
        typer.secho(f"<a> tag identified", fg=typer.colors.RED)

    soup = BeautifulSoup(text, 'html.parser')
    for link in soup.find_all('a'):
        new_link = f"[{link.string}]({link.get('href')})"
        text = text.replace(str(link), new_link)


    if '<pre' in text:
        typer.secho(f"Code examples found", fg=typer.colors.RED)        

    if '<span style="font-weight: bold;">' in text:
        typer.secho(f"Bold found", fg=typer.colors.RED)    
 

    text = text.replace('<span style="font-weight: bold;">note</span>', '**Note**:')
    
    input_file.write_text(text)

def main(input_file: Path, all: bool=False):
    if all == True:
        typer.secho(f"Going through all files!", fg=typer.colors.GREEN)    

        p = Path('.')
        for input_file in p.glob('posts/*.md'):
            clean(input_file)
    else:
        clean(input_file)


if __name__ == "__main__":
    typer.run(main)
