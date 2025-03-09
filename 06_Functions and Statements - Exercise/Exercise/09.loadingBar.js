function loadingBar(percent) {
    if (percent === 100) {
      console.log("100% Complete!");
      console.log("[%%%%%%%%%%]");
    } else {
      const filled = percent / 10;
      const empty = 10 - filled;
      console.log(`${percent}% [${'%'.repeat(filled)}${'.'.repeat(empty)}]`);
      console.log("Still loading...");
    }
  }
  

loadingBar(50)
loadingBar(30)
loadingBar(100)