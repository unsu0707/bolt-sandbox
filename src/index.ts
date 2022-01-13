const { App } = require("@slack/bolt");
const { DbService } = require("./DbService");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const dbService = new DbService();
const tableName = "table";

app.message("deus set ([^ ]+)", async ({ message, say, context }) => {
  const key = context.matches[1];
  const result = await dbService.find(tableName, key);
  if (!result) {
    await dbService.add(tableName, key, 1);
  } else {
    await dbService.update(tableName, key);
  }
  const afterResult = await dbService.find(tableName, key);
  await say(`${key}: ${afterResult} is saved!`);
});

app.message("deus get ([^ ]+)", async ({ message, say, context }) => {
  const key = context.matches[1];
  const value = await dbService.find(tableName, key);

  await say(`${key}: ${value} `);
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
