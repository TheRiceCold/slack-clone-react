import UserType from "@/types/UserType";

export const uniqueArray = (list: any) => 
  list.filter((value: any, index: Number, self: any) => self.indexOf(value) === index);

export const uniqueByKey = (data: any, key: string) =>
  data.filter((dm: any, index: Number, self: any) => 
    index === self.findIndex((t: any) => t.email === dm.email)
  )

export const findObjectByKey = (list: any, key: any, input: string) => 
  list.filter((item: any) => {
    const regex = new RegExp(`${input}`, "gi");
    return item[key].match(regex);
  });

export const getEmailById = (users: any, id: Number) => {
  const foundUser = users.find(
    (user: UserType) => user.id === id
  );
  return foundUser && foundUser.email;
};
