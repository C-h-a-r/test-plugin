import { CommandClient, Command, CommandContext } from "https://raw.githubusercontent.com/harmonyland/harmony/main/mod.ts";
import { DiscordPlugin } from 'https://raw.githubusercontent.com/Customs-Dev-Team/plugin-class/main/Plugin.ts?token=GHSAT0AAAAAACE6FHWCYYEBLEAHKAL3PYNEZGXWTVQ';

class TestPlugin extends DiscordPlugin {
    constructor(client: CommandClient) {
        super("TestPlugin");
        
        client.on('ready', () => {
            this.logger.info(`Logged in as ${client.user?.tag}!`)
        });

      
    }
}

export { TestPlugin as Plugin }
