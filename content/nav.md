---
# Top navigation bar.
#
# To add a link:          append an entry to `main:`.
# To make it external:    add `external: true`.
# To reorder:             move entries up or down in the list.
# To edit the Activities dropdown items: edit `activities:` below.
#
# Note: the entry with `dropdown: true` is what triggers the
# Activities dropdown — leave that one in place.

main:
  - label: Home
    href: /
  - label: Projects
    href: /activities/projects
  - label: Activities
    dropdown: true
  - label: People
    href: 'https://sravjti.in/webring/'
    external: true
  - label: Alumni
    href: /alumni
  - label: Blogs
    href: 'https://blog.sravjti.in/'
    external: true
  - label: Support Us
    href: /support
activities:
  - label: Startups
    href: /activities/startups
  - label: Open Source
    href: /activities/opensource
  - label: Achievements
    href: /activities/achievements
  - label: Publications
    href: /activities/publications
  - label: Events
    href: /activities/events
---
