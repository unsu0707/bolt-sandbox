const { App } = require("@slack/bolt");
import db from "./db";

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.message("deus post ([^ ]+)", async ({ message, say, context }) => {
  const { posts } = db.data;
  const key: string = context.matches[1];
  const post = posts.find((p) => p.id === req.params.id);
  var result: boolean = await lend();
  await say(`See ya later, <@${message.user}> :wave:`);
});

app.message("deus get ([^ ]+)", async ({ message, say }) => {
  var result: boolean = await lend();
  await say(`See ya later, <@${message.user}> :wave:`);
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();

function lend(): boolean | PromiseLike<boolean> {}
