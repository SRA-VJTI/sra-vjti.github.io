const SHEET_ID = '1y8IYmdYM38ycrLXvdIWC-cfGlhHWLQqC1dp-_i1rwKA';
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=0`;

// Handles quoted fields (commas, embedded newlines, escaped quotes) per RFC 4180.
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (c !== '\r') {
      field += c;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function toPillList(cell) {
  return (cell || '')
    .split('|')
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => ({ t }));
}

export async function fetchAlumniFromSheet() {
  const res = await fetch(SHEET_CSV_URL);
  if (!res.ok) {
    throw new Error(`Alumni sheet fetch failed: ${res.status}`);
  }
  const text = await res.text();
  const rows = parseCSV(text).filter((r) => r.some((cell) => cell !== ''));
  const [header, ...body] = rows;
  if (!header) return [];

  const idx = {
    name: header.indexOf('Name'),
    year: header.indexOf('Year'),
    current: header.indexOf('Current'),
    previous: header.indexOf('Previous'),
    image: header.indexOf('Image'),
    linkedin: header.indexOf('LinkedIn'),
    github: header.indexOf('GitHub'),
  };

  return body
    .filter((r) => r[idx.name]?.trim())
    .map((r) => ({
      name: r[idx.name].trim(),
      year: (r[idx.year] || '').trim(),
      imgName: (r[idx.image] || '').trim(),
      linkedInLink: (r[idx.linkedin] || '').trim(),
      githubLink: (r[idx.github] || '').trim(),
      current: toPillList(r[idx.current]),
      previous: toPillList(r[idx.previous]),
    }));
}
