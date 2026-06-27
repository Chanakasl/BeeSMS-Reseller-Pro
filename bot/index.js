const bot = require("../config/bot");

bot.command("start", async (ctx) => {
    await ctx.reply(
`👋 Welcome to BeeSMS Reseller Pro

🇱🇰 සිංහල
BeeSMS Reseller Bot වෙත සාදරයෙන් පිළිගනිමු.

🇬🇧 English
Welcome to BeeSMS Reseller Bot.

⚡ System Status : Online`
    );
});

bot.command("ping", async (ctx) => {
    await ctx.reply("🏓 Pong!");
});

module.exports = bot;
