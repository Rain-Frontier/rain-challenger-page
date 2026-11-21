export function md2html(raw ) {
  //replace bold 
  return raw.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
    .replace(/\[([^\]]+)\]\(([^\s)]+)\)/g, (match, label, url) => {
      return `<a href="${url}">${label}</a>`;
    })
    .replace(/\*(.+?)\*/g, "<i>$1</i>");
}

// Everything from the JSON goes through this before it is put into HTML, so values like
// "<<Interception>>" aren't parsed as tags and quotes can't break out of attributes
export function escapeHTML(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function merge(base, overlay) {
  for (const key in base) {
    if (overlay[key] !== undefined) {
      base[key] = overlay[key];
    }
  }
  return base;
}
