import { Discord, Group, Guard, Option, Slash } from "@typeit/discord";
import { CommandInteraction } from "discord.js";
import Client from "../client";
import { Guild } from "../utils/guards/guild";

@Discord()
@Group("set", "set client settings")
@Guard(Guild("ID"))
export abstract class Client_Related {
  @Slash("username")
  username(
    @Option("username", "STRING")
    username: string,
    interaction: CommandInteraction,
    client: Client
  ) {
    interaction.defer(true);
    client.user.setUsername(username);
    interaction.editReply(`Username updated to: ${client.user.username}`);
  }
}
