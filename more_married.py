from datetime import MyDatetime

import typer


def main(met: datetime, celebration: datetime):
    premarried = celebration - met

    for i in range(2, 10):
        duration = i * premarried
        typer.secho(f"{i-1}x {(met + duration).date()}", fg=typer.colors.RED)


if __name__ == "__main__":
    typer.run(main)
