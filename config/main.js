const { GatewayIntentBits, Partials } = require('discord.js');
const presenceData = require('../JSON/presence.json');

module.exports = {
    // Client configuration:
    client: {
        // Constructor:
        constructor: {
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildBans,
                GatewayIntentBits.GuildEmojisAndStickers,
                GatewayIntentBits.GuildIntegrations,
                GatewayIntentBits.GuildWebhooks,
                GatewayIntentBits.GuildInvites,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.GuildPresences,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildMessageTyping,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.DirectMessageReactions,
                GatewayIntentBits.DirectMessageTyping,
                GatewayIntentBits.MessageContent
            ],
            partials: [
                Partials.Channel,
                Partials.Message,
                Partials.User,
                Partials.GuildMember,
                Partials.Reaction
            ],
            presence: {
                activities: [
                    {
                        name: presenceData.activity,
                        type: presenceData.activity_type
                    }
                ],
                status: presenceData.status
            }
        },
        // Identification:
        token: "MTE5MzA0NDEyNDM0NjA5MzYyOA.GL_Xi0.PV_gTda1jBaqwiIXvnCDvW3cyaJHhn-_3jOtgw",
        id: "1193044124346093628"
    },

    // Database:
    database: {
        mongodb_uri: 'mongodb+srv://rlx:rlx@rlx1.qqf2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    },

    // APIs:
    apis: {
        
    },

    // Users:
    users: {
        developers: ["1119592830327861358"],
        owner: "926429344413413426"
    }
};
