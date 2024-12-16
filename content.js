// 检查设备是否支持 DeviceOrientation
if (window.DeviceOrientationEvent) {
    alert("陀螺仪控制已启动！");
  
    window.addEventListener("deviceorientation", (event) => {
      const alpha = event.alpha; // 水平旋转角度
      const beta = event.beta;   // 垂直旋转角度
      const gamma = event.gamma; // 前后旋转角度
  
      console.log(`alpha: ${alpha}, beta: ${beta}, gamma: ${gamma}`);
  
      // 在谷歌地球街景中动态调整视角
      const streetView = document.querySelector("canvas"); // 找到街景的画布
      if (streetView) {
        // 这里假设我们可以通过 Web API 调整视角
        streetView.style.transform = `rotateY(${alpha}deg) rotateX(${beta}deg)`;
      }
    });
  } else {
    alert("你的设备不支持陀螺仪控制。");
  }