---
layout: home

hero:
  name: "Homebox"
  text: "Inventory and organization system built for the Home User"
  tagline: Simplicity-first home inventory management
  image:
    src: /img/lilbox.svg
    alt: Homebox Logo
  actions:
    - theme: brand
      text: Quick Start
      link: /guide/quick-start
    - theme: alt
      text: CSV Imports
      link: /reference/import-csv

features:
  - title: Simple
    details: Homebox is designed to be simple and easy to use with minimal setup and maintenance overhead.
  - title: Blazingly Fast
    details: Built with Go for efficient runtime and low memory usage, even on small home servers.
  - title: Portable
    details: SQLite + embedded web UI make deployment, backup, and restore straightforward.
---

Homebox is the inventory and organization system built for the Home User.

## Project Status

Homebox is currently in active development and remains in **beta**.

## Features

- Create and manage items with just a name and description.
- Add optional details like warranty info, purchase details, serial/model, notes, and attachments.
- Import and export data with CSV.
- Use custom reporting tools, including bill of materials and label workflows.
- Organize data with labels and locations.
- Multi-tenant support with group-based data isolation.

## Why Not Use Something Else?

Homebox focuses on household inventory use cases where lightweight workflows and low cognitive load matter more than enterprise-level complexity.
