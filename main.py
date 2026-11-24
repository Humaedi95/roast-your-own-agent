#!/usr/bin/env python3
"""Roast Your Own Agent — one-line roast written to /output/entry.txt."""

from pathlib import Path

ROAST = (
    "My agent confidently fixed a bug that never existed, apologized three "
    "times for fixing it, then called the outage a successful learning opportunity."
)

MAX_LENGTH = 200

OUTPUT_PATH = Path("/output/entry.txt")


def main() -> None:
    line = ROAST.strip()
    if not line:
        raise ValueError("Roast line must not be empty.")
    if len(line) > MAX_LENGTH:
        raise ValueError(f"Roast line is {len(line)} characters, max is {MAX_LENGTH}.")
    if "\n" in line:
        raise ValueError("Roast line must be a single line.")
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(line + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
