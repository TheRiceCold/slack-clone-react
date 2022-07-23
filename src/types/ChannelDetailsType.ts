import ChannelMemberType from "./ChannelMemberType";

type ChannelDetailsType = {
  id: 3,
  owner_id: Number,
  name: string,
  created_at: string,
  updated_at: string,
  channel_members: ChannelMemberType[],
};

export default ChannelDetailsType;
