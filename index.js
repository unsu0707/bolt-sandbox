const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// "goodbye" が含まれるメッセージの着信をリッスン
app.message("hello", async ({ message, say }) => {
  // say() で、イベントがトリガーされたチャンネルにメッセージを送信する
  await say(`Hello, <@${message.user}> :wave:`);
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
