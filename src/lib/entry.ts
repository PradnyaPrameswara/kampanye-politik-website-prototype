export function entrySlug(entry: { id: string; slug?: string }): string {
  return (entry.slug ?? entry.id).replace(/\.(md|json)$/, '');
}
