export type UserType = {
  id: Number,
  provider: string,
  uid: string,
  allow_password_change: boolean,
  name: string | null,
  nickname: string | null,
  image: string | null,
  email: string,
  created_at: string,
  updated_at: string
}
