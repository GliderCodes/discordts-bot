import { Discord, Slash } from "@typeit/discord";
import { CommandInteraction } from "discord.js";

@Discord()
export abstract class Ping {
  @Slash("ping")
  ping(interaction: CommandInteraction) {
    interaction.reply("Pong", { ephemeral: true });
  }
}
