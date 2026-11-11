/**
 * Utility to extract and format guest names from URL route pathnames or query parameters.
 * E.g.:
 * - /muhammad-rifqi-syatria -> "Muhammad Rifqi Syatria"
 * - /bpk-budi-dan-keluarga -> "Bpk. Budi dan Keluarga"
 * - ?to=Muhammad+Rifqi -> "Muhammad Rifqi"
 */

export function cleanAndFormatName(raw: string): string {
  if (!raw) return 'Tamu Undangan';

  // Replace dashes, underscores, and plus signs with spaces
  const words = raw.replace(/[-_+]+/g, ' ').trim().split(/\s+/);
  if (words.length === 0 || (words.length === 1 && words[0] === '')) {
    return 'Tamu Undangan';
  }

  const formattedWords = words.map((w) => {
    const lower = w.toLowerCase();

    // Conjunctions & prepositions
    if (lower === 'dan') return 'dan';
    if (lower === 'di') return 'di';
    if (lower === '&') return '&';

    // Honorifics
    if (lower === 'bpk' || lower === 'bpk.') return 'Bpk.';
    if (lower === 'ibu' || lower === 'ibu.') return 'Ibu';
    if (lower === 'dr' || lower === 'dr.') return 'Dr.';
    if (lower === 'dra' || lower === 'dra.') return 'Dra.';
    if (lower === 'prof' || lower === 'prof.') return 'Prof.';
    if (lower === 'kh' || lower === 'k.h' || lower === 'k.h.') return 'K.H.';

    // Degrees with dots (e.g. S.A.P, S.Kom, M.Pd, S.T)
    if (w.includes('.')) {
      return w
        .split('.')
        .map((part) => (part.length > 0 ? part.charAt(0).toUpperCase() + part.slice(1) : ''))
        .join('.');
    }

    // Default capitalization: Title Case
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  });

  return formattedWords.join(' ');
}

export function extractGuestNameFromUrl(): string {
  if (typeof window === 'undefined') return 'Tamu Undangan';

  // 1. Check query parameters first (?to=..., ?u=..., ?guest=..., ?nama=...)
  const params = new URLSearchParams(window.location.search);
  const queryName =
    params.get('to') ||
    params.get('u') ||
    params.get('p') ||
    params.get('guest') ||
    params.get('nama') ||
    params.get('undangan') ||
    params.get('for');

  if (queryName && queryName.trim()) {
    return cleanAndFormatName(decodeURIComponent(queryName.trim().replace(/\+/g, ' ')));
  }

  // 2. Check route path (e.g. /muhammad-rifqi-syatria or /bapak-budi-dan-keluarga)
  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const ignoredSlugs = ['index.html', 'favicon.ico', 'robots.txt', 'sitemap.xml', 'assets'];

  if (
    pathname &&
    !ignoredSlugs.includes(pathname.toLowerCase()) &&
    !pathname.startsWith('assets/')
  ) {
    const segments = pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    if (lastSegment) {
      try {
        const decoded = decodeURIComponent(lastSegment);
        const formatted = cleanAndFormatName(decoded);
        if (formatted && formatted.toLowerCase() !== 'index.html') {
          return formatted;
        }
      } catch {
        // Fallback
      }
    }
  }

  return 'Tamu Undangan';
}
