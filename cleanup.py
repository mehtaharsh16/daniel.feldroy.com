#!/usr/bin/env python
from pathlib import Path

import typer


def main(input_file: Path):
    typer.secho(f"Opening '{input_file}'", fg=typer.colors.GREEN)
    text = input_file.read_text()

    typer.secho(f"Fixing paragraphs", fg=typer.colors.GREEN)
    text = text.replace('<br />', '\n')

    # List cleanup
    text = text.replace('<ul><li>', '\n\n- ')
    text = text.replace('</li><li>', '\n- ')
    text = text.replace('</li></ul>', '\n\n')

    if '<ol>' in text:
        typer.secho(f"Warning: Ordered list will need cleanup", fg=typer.colors.RED)

    text = text.replace('<ol><li>', '\n\n- ')
    text = text.replace('</li></ol>', '\n\n')

    if '<a' in text:
        typer.secho(f"<a> tag identified", fg=typer.colors.RED)

    if '<pre' in text:
        typer.secho(f"Code examples found", fg=typer.colors.RED)        

    if '<span style="font-weight: bold;">' in text:
        typer.secho(f"Bold found", fg=typer.colors.RED)    

    text = text.lower().replace('<span style="font-weight: bold;">note</span>', '**Note**:')
    
    input_file.write_text(text)

if __name__ == "__main__":
    typer.run(main)
