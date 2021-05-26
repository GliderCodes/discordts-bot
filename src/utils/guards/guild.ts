import { GuardFunction, ArgsOf } from "@typeit/discord";
import { CommandInteraction, Message } from "discord.js";

export function Guild(ID: string) {
  const guard: GuardFunction<ArgsOf<"message"> | CommandInteraction> = async (
    messageOrCommand,
    client,
    next
  ) => {
    if (messageOrCommand instanceof CommandInteraction) {
      if (messageOrCommand.guildID == ID) await next();
    } else if (messageOrCommand[0] instanceof Message)
      if (messageOrCommand[0].guild.id == ID) await next();
  };

  return guard;
}
