let timerId = setInterval(() => {
  console.log("⏰ This will stop in 5 seconds");
}, 1000);

setTimeout(() => {
  clearInterval(timerId);
  console.log("🛑 Timer stopped!");
}, 5000);
