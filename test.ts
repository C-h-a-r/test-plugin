import { CommandClient, Command, CommandContext } from "https://raw.githubusercontent.com/harmonyland/harmony/main/mod.ts";
import { DiscordPlugin } from 'https://raw.githubusercontent.com/C-h-a-r/plugin-class/main/Plugin.ts';

class TestPlugin extends DiscordPlugin {
    constructor(client: CommandClient) {
        super("TestPlugin");
        
        client.on('ready', () => {
            this.logger.info(`Logged in as ${client.user?.tag}!`)
        });

      
    }
}

export { TestPlugin as Plugin }
