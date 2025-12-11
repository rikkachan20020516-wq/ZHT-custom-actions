const core = require('@actions/core');

try {
  const name = core.getInput('name');

  const emojis = ['🚀', '🎉', '✨', '🌟', '🔥', '💪', '👑', '🦁', '🐯', '🏆'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const now = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });

  console.log(`\n🎯 🎯 🎯  ZHT SUPER GREET  🎯 🎯 🎯`);
  console.log(`🌟  Hello, ${name}!`);
  console.log(`🎉  Hope you have an amazing day! ${randomEmoji}`);
  console.log(`🕐  Current time (JST): ${now}`);
  console.log(`🎯 🎯 🎯  Powered by Zhao Hanting  🎯 🎯 🎯\n`);

  core.setOutput('emoji', randomEmoji);
    core.setOutput('greeting-time', now);

  } catch (error) {
    core.setFailed(`Action failed: ${error.message}`);
  }
