import { Client as DiscordTSClient } from "@typeit/discord";
import { client } from "../../settings.json";
import "reflect-metadata";
import { Intents } from "discord.js";
import Path from "path";

class Client extends DiscordTSClient {
  constructor() {
    super({
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
      classes: [
        Path.join(__dirname, "../slash_commands", "*.ts"),
        Path.join(__dirname, "../events", "*.ts"),
      ],
      silent: false,
      requiredByDefault: true,
      // slashGuilds: [""], // used in dev mode to load slash commands faster
    });
  }

  // starting the bot
  public async start() {
    await this.login(client.token); // change token in settings.json

    this.once("ready", async () => {
      console.log(`${this.user.tag} is now online`);
      await this.clearSlashes(); // for slash commands to be cleared
      await this.initSlashes(); // for slash commands
    });

    this.on("interaction", (interaction) => {
      this.executeSlash(interaction); // for slash commands
    });
  }
}

export default Client;
