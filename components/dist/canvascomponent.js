"use strict";
exports.__esModule = true;
let react_1 = require("react");
let CanvasComponent = function (_a) {
  var width = _a.width,
    height = _a.height;
  let canvasRef = react_1.useRef(null);
  react_1.useEffect(
    function () {
      let canvas = canvasRef.current;
      if (!canvas) return;
      let context = canvas.getContext("2d");
      if (!context) return;
      let colors = [
        [100, 149, 237],
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255],
        [255, 255, 0],
        [255, 0, 255],
        [0, 255, 255],
      ];
      let colorIndex = 0;
      let colorInterpolation = 0;
      let colorSpeed = 0.005;
      function interpolateColors(color1, color2, t) {
        let r = Math.round((1 - t) * color1[0] + t * color2[0]);
        let g = Math.round((1 - t) * color1[1] + t * color2[1]);
        let b = Math.round((1 - t) * color1[2] + t * color2[2]);
        return [r, g, b];
      }
      function updateColor() {
        colorInterpolation += colorSpeed;
        if (colorInterpolation >= 1) {
          colorInterpolation = 0;
          colorIndex = (colorIndex + 1) % colors.length;
        }
      }
      function drawCircle(mx, my, radius, opacity) {
        context.beginPath();
        context.arc(mx, my, radius, 0, 2 * Math.PI, false);
        context.lineWidth = 3;
        let currentColorIndex = colorIndex % colors.length;
        let nextColorIndex = (colorIndex + 1) % colors.length;
        let currentColor = colors[currentColorIndex];
        let nextColor = colors[nextColorIndex];
        let interpolatedColor = interpolateColors(
          currentColor,
          nextColor,
          colorInterpolation
        );
        context.strokeStyle =
          "rgba(" +
          interpolatedColor[0] +
          "," +
          interpolatedColor[1] +
          "," +
          interpolatedColor[2] +
          "," +
          opacity +
          ")";
        context.stroke();
      }
      let frame = 0;
      let circleCoord = [];
      let stay = 0;
      let dir = 1;
      let dirY = 1;
      let auto = true;
      let mX = width / 2;
      let mY = height / 2;
      let handle = function (e) {
        stay = 0;
        auto = false;
        mX = e.pageX - (canvas.offsetLeft || 0);
        mY = e.pageY - (canvas.offsetTop || 0);
      };
      canvas.addEventListener("mousemove", handle);
      canvas.addEventListener("touchmove", handle);
      let render = function () {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears canvas
        let cX = canvas.width / 2;
        let cY = canvas.height / 2;
        function drawCircles() {
          var _a, _b;
          frame++;
          if (frame % 1 === 0) {
            if (
              frame > 5 &&
              frame % 2 === 0 &&
              ((_a = circleCoord[circleCoord.length - 1]) === null ||
              _a === void 0
                ? void 0
                : _a[0]) === mX &&
              ((_b = circleCoord[circleCoord.length - 1]) === null ||
              _b === void 0
                ? void 0
                : _b[1]) === mY
            ) {
              stay++;
              if (stay > 50) auto = true;
            }
            if (!auto) {
              circleCoord.push([mX, mY, frame]);
            } else {
              stay++;
              stay %= 400;
              if (stay % 93 === 0) {
                dir = -dir;
                dirY = -dirY;
              }
              circleCoord.push([
                mX + dir * (Math.random() * 3 - 100 + stay),
                mY + dirY * (Math.random() * 3 - 100 + stay),
                frame,
              ]);
            }
          }
          if (circleCoord.length > 100) circleCoord.shift();
          for (var i = 0, c = circleCoord.length; i < c; i++) {
            let base = frame - circleCoord[i][2] + 15;
            let aX = circleCoord[i][0];
            let cX_1 = circleCoord[i][1];
            drawCircle(
              aX + base,
              cX_1 + base / 2,
              3 * base + base / 10,
              1.3 / base
            );
            drawCircle(aX, cX_1, 1.5 * base + base / 10, 2.3 / base);
            drawCircle(aX, cX_1, 2 * base + base / 20, 2.5 / base);
          }
          updateColor();
          requestAnimationFrame(render);
        }
        render();
      };
      render();
    },
    [width, height]
  );
  return react_1["default"].createElement("canvas", {
    ref: canvasRef,
    width: width,
    height: height,
  });
};
exports["default"] = CanvasComponent;
