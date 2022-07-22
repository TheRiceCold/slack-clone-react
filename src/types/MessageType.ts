type MessageType = {
  id: Number,
  body: string,
  created_at: string,
  sender: {
    id: Number,
    provider: string,
    uid: string,
    allow_password_change: false,
    name: null,
    nickname: null,
    image: null,
    email: string,
    created_at: string,
    updated_at: string,
  }
};

export default MessageType;
