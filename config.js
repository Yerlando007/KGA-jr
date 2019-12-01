module.exports = {

	/**
	 * Instructions on how to get this: https://redd.it/40zgse
	 */
	yourID: "307828755328663555",

	setupCMD: "!createrolemessage",

	/**
	 * Delete the 'setupCMD' command after it is ran. Set to 'true' for the command message to be deleted
	 */
	deleteSetupCMD: false,

	initialMessage: `**Нажмите на реакцию, чтобы выбрать вашего любимого автора и получите роль с его именем! Вы можете отменить свой выбор снова нажав на реакцию!**`,
	
	embedMessage: `
	Нажмите на реакцию, чтобы выбрать вашего любимого автора и получите роль с его именем!
	
	Вы можете отменить свой выбор снова нажав на реакцию!
	`,
	
	/**
	 * Must set this if "embed" is set to true
	 */
	embedFooter: "Role Reactions",
	
	roles: ["KazGameArt", "Mefiresu", "MechaShadow"],

	/**
	 * For custom emojis, provide the name of the emoji
	 */
	reactions: ["💛", "💜", "❤️"],

	/**
	 * Set to "true" if you want all roles to be in a single embed
	 */
	embed: true,

	/**
	 * Set the embed color if the "embed" variable is et to "true"
	 * Format:
	 * 
	 * #dd9323
	 */
	embedColor: "#dd9323",

	/**
	 * Set to "true" if you want to set a thumbnail in the embed
	 */
	embedThumbnail: false,

	/**
	 * The link for the embed thumbnail if "embedThumbnail" is set to true
	 */
	embedThumbnailLink: "",

	/**
	 * You"ll have to set this up yourself! Read more below:
	 * Please do not commit this token to the public if you contributed to this repository
	 * or host your code anywhere online. Giving someone your bot's token is the equivalent
	 * to giving someone the keys to your house and walking away!
	 * 
	 * https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token
	 */
	botToken: ""
};