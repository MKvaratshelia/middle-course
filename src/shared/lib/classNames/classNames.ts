// специальный класс тайпскрипта, говорит что в качестве ключа будет стринг а в качестве значения либо boolean либо стринг
type Mods = Record<string, boolean | string>
export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ')
}
