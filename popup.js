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

if (DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === "function") {
  // iOS 设备请求权限
  DeviceMotionEvent.requestPermission()
    .then(permissionState => {
      if (permissionState === "granted") {
        window.addEventListener("deviceorientation", handleOrientation);
      } else {
        alert("请允许访问陀螺仪数据。");
      }
    })
    .catch(console.error);
} else {
  // 非 iOS 设备直接访问
  window.addEventListener("deviceorientation", handleOrientation);
}

function handleOrientation(event) {
  const alpha = event.alpha; // Z轴旋转
  const beta = event.beta;   // X轴旋转
  const gamma = event.gamma; // Y轴旋转

  document.getElementById("gyro-data").innerHTML = `
    Z轴 (alpha): ${alpha}<br>
    X轴 (beta): ${beta}<br>
    Y轴 (gamma): ${gamma}
  `;
}
