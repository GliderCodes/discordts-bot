import { Discord, On } from "@typeit/discord";
import { GuildMember, TextChannel } from "discord.js";

@Discord()
export abstract class Member_Events {
  @On("guildMemberAdd")
  async member_join(member: GuildMember) {
    const guild = member.guild;

    const channel = guild.channels.cache.find(
      (channel) => channel.name == "join-leave" && channel.type === "text"
    ) as TextChannel;

    channel.send(`${member.user.tag} has joined the server`);
  }

  @On("guildMemberRemove")
  async member_leave(member: GuildMember) {
    const guild = member.guild;

    const channel = guild.channels.cache.find(
      (channel) => channel.name == "join-leave" && channel.type === "text"
    ) as TextChannel;

    channel.send(`${member.user.tag} has left the server`);
  }
}
