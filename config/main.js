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
        token: process.env.BOT_TOKEN,
        id: process.env.BOT_ID
    },

    // Database:
    database: {
        mongodb_uri: 'mongodb+srv://V1TALDatabase-v2:Nd4PBsg1nESN5aMB@cluster0.5ryiipx.mongodb.net/?retryWrites=true&w=majority'
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
