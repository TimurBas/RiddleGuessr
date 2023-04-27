/**
 * Throws an error if the input string is empty. 
 * 
 * @param {string} string - The input string to check for emptiness.
 * @throws {Error} Throws an error if the input string is empty.
 * @returns {void}
 *
 * @example
 * // throws an error: "String was empty"
 * handleEmptyString("");
 */
export default function throwErrorOnEmptyString(string: string): void {
  if (string === "") {
    throw new Error(`String was empty`);
  }
}
