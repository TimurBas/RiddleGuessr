export default function handleNull<T>(
  value: T | null,
  nullHandler: () => T
): T {
  return value === null ? nullHandler() : value;
}
