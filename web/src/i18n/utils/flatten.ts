export function flatten(obj: object, prefix = ""): Record<string, string> {
  return Object.entries(obj).reduce<Record<string, string>>((acc, [key, val]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof val === "object" && val ? { ...acc, ...flatten(val, path) } : { ...acc, [path]: val as string };
  }, {});
}
