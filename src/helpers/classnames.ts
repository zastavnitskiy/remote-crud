/** Simple helper utility that simplifies creation of concatenated classnames */
export function classnames(...input: any[]) {
  return input.filter(Boolean).join(" ");
}
