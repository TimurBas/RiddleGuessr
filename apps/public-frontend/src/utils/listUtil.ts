/**
 * Throws an error if the given list is empty.
 *
 * @param {T[]} list - The list to check.
 * @throws {Error} If the list is empty.
 */
export function throwErrorOnEmptyList<T>(list: T[]): void {
    if (list.length === 0) {
        throw new Error("List was empty");
    }
}
