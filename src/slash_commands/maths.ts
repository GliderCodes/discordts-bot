import { Discord, Group, Option, Slash } from "@typeit/discord";
import { CommandInteraction } from "discord.js";

@Discord()
@Group("maths", "maths group description")
export abstract class Maths {
  @Slash("add")
  add(
    @Option("x", { description: "x value" })
    x: number,
    @Option("y", { description: "y value" })
    y: number,
    interaction: CommandInteraction
  ) {
    interaction.reply(String(x + y));
  }

  @Slash("multiply")
  multiply(
    @Option("x", { description: "x value" })
    x: number,
    @Option("y", { description: "y value" })
    y: number,
    interaction: CommandInteraction
  ) {
    interaction.reply(String(x * y));
  }
}
