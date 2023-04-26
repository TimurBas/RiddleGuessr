export default function handleEmptyString(
  string: string,
  caller: string
): void {
  if (string === "") {
    throw new Error(`From ${caller}: String was empty`);
  }
}
