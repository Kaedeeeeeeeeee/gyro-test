document.getElementById("start").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["content.js"]
      });
    });
  });
  
  document.getElementById("stop").addEventListener("click", () => {
    alert("陀螺仪控制已停止");
  });