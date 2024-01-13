const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'suspend',
    description: 'Suspend a user.',
    type: 1,
    options: [
        {
            name: 'user',
            description: 'The user to suspend.',
            type: 6,
            required: true
        },
        {
            name: 'reason',
            description: 'The reason for the suspend.',
            type: 3,
            required: false
        }
    ],
    role_perms: ['1193034354931269722'],
    developers_only: false,
    category: 'Moderation',
    run: async (client, interaction, config) => {
        const userInput = interaction.options.get('user').value;
        const reasonInput = interaction.options.get('reason')?.value || 'No reason was provided';

        const user = interaction.guild.members.cache.get(userInput);

        if (!user) return interaction.reply({
            content: `\`❌\` The user is not in the guild.`,
            ephemeral: true
        });


        const roleIdToAdd = '1174618569091326012';

        try {

            await user.roles.add(roleIdToAdd);

            user.send({
                content: `You have been suspended from **${interaction.guild.name}**. ${reasonInput}`
            }).catch(() => { });

            interaction.reply({
                content: `\`✅\` ${user} has been successfully suspended!`,
                ephemeral: true
            });

            return interaction.channel.send({
                embeds: [
                    new EmbedBuilder()
                        .setDescription(`${user} has been suspended.`)
                        .setColor('Red')
                ]
            });
        } catch {
            return interaction.reply({
                content: `\`❌\` Something went wrong!`,
                ephemeral: true
            });
        }
    }
};
