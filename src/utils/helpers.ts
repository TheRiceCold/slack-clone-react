export const uniqueArray = (list: any[]) => 
  list.filter((value, index, self) => self.indexOf(value) === index);

export const uniqueByKey = (data: any[], key: string) =>
  data.filter(
    (dm, index, self) => 
      index === self.findIndex(
        t => t.email === dm.email
      )
  )

export const findObjectByKey = (list: any[], key: any, input: string) => 
  list.filter((item: any) => {
    const regex = new RegExp(`${input}`, "gi");
    return item[key].match(regex);
  });
