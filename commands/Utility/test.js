const { EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'regiment-check',
    description: 'Check user and assign roles based on Roblox group memberships.',
    type: 1,
    options: [
        {
            name: 'username',
            description: 'Your Roblox username.',
            type: 6,
            required: true
        }
    ],
    role_perms: null,
    developers_only: false,
    category: 'Utility',
    run: async (client, interaction, config) => {
        const userInput = interaction.options.get('username').value;

        
        const randomWord = generateRandomWord();
        await interaction.reply(`Put \`${randomWord}\` in your Roblox profile description. You have 1 minute.`);

        
        const profileUpdateTimeout = 60000;
        const profileUpdateMessage = await interaction.fetchReply();
        setTimeout(async () => {
            const updatedProfile = await checkProfileUpdate(interaction, profileUpdateMessage, randomWord, userInput);

            if (updatedProfile) {
                const groups = await getRobloxGroupMemberships(userInput);
                const roleId = getRoleIdBasedOnGroups(groups);
                await assignRole(interaction, roleId);
            } else {
          
                await interaction.followUp('Expired, please try again.');
            }
        }, profileUpdateTimeout);
    }
};


function generateRandomWord() {

    return 'KL:8whdnadn';
}


async function checkProfileUpdate(interaction, message, expectedWord, username) {
    // Implementation of your profile update check logic
    // Compare the description with the expected word
    // Return true if the description contains the expected word, false otherwise
    return true; // Replace with your logic
}

// Function to get the user's Roblox group memberships
async function getRobloxGroupMemberships(username) {
    // Implementation of your logic to fetch the user's Roblox group memberships
    // You may use the Bloxlink API or other methods to achieve this
    return [
        'https://www.roblox.com/groups/4991566/BA-Education-and-Training-Services#!/about',
        'https://www.roblox.com/groups/10055282/BA-United-Kingdom-Special-Forces#!/about',
        'https://www.roblox.com/groups/5731412/BA-16th-Air-Assault-Brigade#!/about',
        'https://www.roblox.com/groups/10876963/BA-1st-Infantry-Forces-Division#!/about',
        'https://www.roblox.com/groups/3658269/BA-The-Grenadier-Guards#!/about',
        'https://www.roblox.com/groups/2630460/BA-Royal-Military-Police#!/about'
    ];
}

// Function to get the role ID based on the user's groups
function getRoleIdBasedOnGroups(groups) {
    // Implementation of your logic to map Roblox groups to Discord role IDs
    // Return the appropriate role ID based on the groups
    const groupRoleMapping = {
        'https://www.roblox.com/groups/4991566/BA-Education-and-Training-Services#!/about': '1193181970600050752',
        'https://www.roblox.com/groups/10055282/BA-United-Kingdom-Special-Forces#!/about': '1193181980733472850',
        'https://www.roblox.com/groups/5731412/BA-16th-Air-Assault-Brigade#!/about': '1193181977428369408',
        'https://www.roblox.com/groups/10876963/BA-1st-Infantry-Forces-Division#!/about': '1193181967328489563',
        'https://www.roblox.com/groups/3658269/BA-The-Grenadier-Guards#!/about': '1193181973674475582',
        'https://www.roblox.com/groups/2630460/BA-Royal-Military-Police#!/about': '1193181963771723857'
    };

    // Check each group and return the corresponding role ID
    for (const group of groups) {
        if (groupRoleMapping[group]) {
            return groupRoleMapping[group];
        }
    }

    // If none of the specific groups, return the default role ID
    return '1196653937709813770';
}

// Function to assign a role to the user
async function assignRole(interaction, roleId) {
    // Implementation of your logic to assign a role to the user
    // Use the Discord.js API to assign the role
    const member = interaction.guild.members.cache.get(interaction.user.id);
    const role = interaction.guild.roles.cache.get(roleId);

    try {
        await member.roles.add(role);
        await interaction.followUp('Completed');
    } catch (error) {
        console.error(error);
        await interaction.followUp('There was an error, please contact the staff to get the role.');
    }
}
