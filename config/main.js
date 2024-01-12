const { GatewayIntentBits, Partials } = require('discord.js');
const presenceData = require('../JSON/presence.json');
require('dotenv').config();

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
        token: "MTE5MTM1MTM1NzMzMzA2NTcyOQ.Grv5yj.uf7vL5Y8HV3SDbZGIWZ0EoH7b0RirN1cLTfS_8",
        id: "1191351357333065729"
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
