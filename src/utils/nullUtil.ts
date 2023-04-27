/**
 * If the value is null, calls the nullHandler function to get a replacement value.
 * Otherwise, returns the original value.
 *
 * @param {T | null} value - The value to check for nullness.
 * @param {() => T} nullHandler - The function to call if the value is null.
 * @returns {T} The original value if it is not null, or the result of calling nullHandler otherwise.
 *
 * @example
 * // returns 42
 * const result1 = handleNull<number>(42, () => 0);
 *
 * // returns "default"
 * const result2 = handleNull<string>(null, () => "default");
 */
export function handleNullOrElse<T>(
  value: T | null,
  nullHandler: () => T
): T {
  return value === null ? nullHandler() : value;
}

/**
 * If the value is null, returns an empty string.
 * Otherwise, returns the original string value.
 *
 * @param {string | null} value - The string value to check for nullness.
 * @returns {string} The original string value if it is not null, or an empty string otherwise.
 *
 * @example
 * // returns "hello"
 * const result1 = handleNullDefaultEmptyString("hello");
 *
 * // returns ""
 * const result2 = handleNullDefaultEmptyString(null);
 */
export function handleNullOrEmptyString(
  value: string | null
): string {
  return handleNullOrElse<string>(value, () => "");
}
