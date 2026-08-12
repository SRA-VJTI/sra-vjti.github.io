---
# Support Us page.
#
# - csr:        the Corporate Social Responsibility section and the
#               highlight block (amount + label + description).
# - sponsor:    the "Become a Sponsor" pitch + CTA button.
# - sponsors:   the list of current sponsors shown as chips at the
#               bottom of the page.
#
# To add a sponsor:    append an entry to `sponsors:` with name + href.

eyebrow: SRA VJTI
title: Support Us
desc: Partner with VJTI's most technically proficient student society.
csr:
  title: Corporate Social Responsibility
  body: |
    SRA Lab has been instrumental in cultivating individual student development
    within robotics and related disciplines, contributing to a robust scientific
    and research environment. CSR support enables us to finance crucial research
    and infrastructure projects, advancing knowledge and cultivating a skilled
    workforce for the future.
  highlight:
    amount: '₹60,00,000'
    label: GIC Re · CSR Grant 2022–23
    desc: |
      Created the modern SRA Lab — equipped with electronics and mechanical
      workbenches, ESD safety stations, an Ultimaker S5 Pro 3D printer, and
      high-performance computing hardware. Inaugurated on May 3rd, 2024.
sponsor:
  title: Become a Sponsor
  body: |
    SRA's journey begins with cutting-edge seminars attended by 200+ freshers,
    followed by a month-long mentorship programme, ground-breaking projects, and
    participation in national and international competitions. By associating with
    SRA, your organisation gains early access to VJTI's most talented students —
    making you their first choice when it matters.
  ctaLabel: Get in touch
  ctaHref: 'mailto:sra@vjti.ac.in'
# img is optional: without it the sponsor renders as its name in text.
# Set `invert: true` for artwork that is white, so it stays visible on the
# light logo chip (the Texas Instruments file is a white silhouette).
# `scale` (0-1) optically balances a logo that reads heavier than the rest.
sponsors:
  - name: Espressif
    href: 'https://www.espressif.com/'
    img: /sponsors/espressif.png
  - name: Lion Circuits
    href: 'https://www.lioncircuits.com/'
    img: /sponsors/Lion_circuits.png
  - name: Solid Space
    href: 'https://solidspace.co.in/'
    img: /sponsors/solidspace.png
  - name: Texas Instruments
    href: 'https://www.ti.com/'
    img: /sponsors/texas.png
    invert: true
    scale: 0.82
---
