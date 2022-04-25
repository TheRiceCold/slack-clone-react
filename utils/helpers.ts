export const uniqueArray = (list: any[]) =>
  list.filter((value, index, self) =>
    self.indexOf(value) === index)

export const findObjByKey = (
  list: any[], key: string, input: string) =>
  list.filter((item: any) => {
    const regex = new RegExp(`${input}`,'gi')
    return item[key].match(regex)
  })

export const uniqueByKey = (list: any[], key: string) =>
  list.filter(
    (value, index, self) =>
      index === self.findIndex(t =>  t[key] === value[key]))
