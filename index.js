const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// "goodbye" が含まれるメッセージの着信をリッスン
app.message(
  "goodbye",
  async ({ message, say, ccc, ddd, eee, client, context }) => {
    // say() で、イベントがトリガーされたチャンネルにメッセージを送信する
    await say(`See ya later, <@${message.user}> :wave:`);
    console.log(message, say, ccc, ddd, eee, client, context);
  }
);
(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
