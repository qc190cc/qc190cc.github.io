<template>
  <div class="maintenancePlanAdd">
    <div class="panel-body">
      <div class="demo">
        <canvas id="canvas" :width="width" :height="height"></canvas>
      </div>
    </div>
    <div style="display: flex;">
      <template v-for="(img, index) in imgs" :key="index">
        <div style="padding: 5px 10px;">
          <div style="text-align: center;">
            <el-popover placement="right" :width="500" trigger="hover">
              <template #reference>
                <el-icon :size="30"><WarningFilled /></el-icon>
              </template>
              <div>
                <div>整块坐标: x:{{ img.x}}, y:{{ img.y }}</div>
                <div>每个点位:</div>
                <div>{{ img.points }}</div>
              </div>
            </el-popover>
          </div>
          <img
            :src="img.src"
            class="img"
            style="opacity: 1; margin: 5px; width: 200px; height: 150px; object-fit: contain; outline: 1px solid #ccc;" />
        </div>
      </template>
    </div>
    <div>
      <img id="expImg" src="@/assets/t.png" />
      <img src="https://qntest.mydadui.com/bac/upload/202501/qiniu_20250114174242ee4d362.png" />
    </div>
  </div>
</template>
<script>
import * as fabric from 'fabric' 
export default {
  name: "App",
  data() {
    return {
      width: 912,
      height: 507,
      rect: [],
      canvas: {},
      x: "",
      y: "",

      mouseFrom: {},
      mouseTo: {},
      drawType: null,  //当前绘制图像的种类
      textbox: null,
      drawWidth: 2, //笔触宽度
      color: "#E34F51", //画笔颜色
      drawingObject: null, //当前绘制对象
      moveCount: 1, //绘制移动计数器
      doDrawing: false, // 绘制状态

      //polygon 相关参数
      polygonMode: false,
      pointArray: [],
      lineArray: [],
      activeShape: false,
      activeLine: "",
      line: {},

      imgs: []
    };
  },
  watch: {
    drawType() {
      this.canvas.selection = !this.drawType;
    },
    width() {
      this.canvas.setWidth(this.width)
    },
    height() {
      this.canvas.setHeight(this.height)
    },
  },
  methods: {
    // 保存当前画布为png图片
    save() {
      var canvas = document.getElementById('canvas')
      var imgData = canvas.toDataURL('png');
      imgData = imgData.replace('image/png', 'image/octet-stream');

      // 下载后的问题名，可自由指定
      var filename = 'drawingboard_' + (new Date()).getTime() + '.' + 'png';
      this.saveFile(imgData, filename);
    },
    saveFile(data, filename) {
      var save_link = document.createElement('a');
      save_link.href = data;
      save_link.download = filename;

      var event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      save_link.dispatchEvent(event);
    },
    uploadImg() {
      document.getElementById("imgInput").click();
    },
    // 从已渲染的DOM元素加载图片至canvas
    loadExpImg() {
      var imgElement = document.getElementById("expImg"); //声明我们的图片
      var imgInstance = new fabric.Image(imgElement, {
        selectable: false
        // zIndex:-99,
      });
      this.canvas.add(imgInstance);
    },
    // 开始绘制时，指定绘画种类
    drawTypeChange(e) {
      this.drawType = e;
      this.canvas.skipTargetFind = !!e
      if (e == "pen") {
        // isDrawingMode为true 才可以自由绘画
        this.canvas.isDrawingMode = true;
      } else {
        this.canvas.isDrawingMode = false;
      }
    },
    // 鼠标按下时触发
    mousedown(e) {
      // 记录鼠标按下时的坐标
      var xy = e.pointer || this.transformMouse(e.e.offsetX, e.e.offsetY);
      this.mouseFrom.x = xy.x;
      this.mouseFrom.y = xy.y;
      this.doDrawing = true;
      if (this.drawType == "text") {
        this.drawing();
      }

      if (this.textbox) {
        this.textbox.enterEditing();
        this.textbox.hiddenTextarea.focus();
      }
      // 绘制多边形
      if (this.drawType == "polygon") {
        this.canvas.skipTargetFind = false;
        try {
          // 此段为判断是否闭合多边形，点击红点时闭合多边形
          if (this.pointArray.length > 1) {
            // e.target.id == this.pointArray[0].id 表示点击了初始红点
            if (e.target && e.target.id == this.pointArray[0].id) {
              this.generatePolygon();
            }
          }
          //未点击红点则继续作画
          if (this.polygonMode) {
            this.addPoint(e);
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    // 鼠标松开执行
    mouseup(e) {
      var xy = e.pointer || this.transformMouse(e.e.offsetX, e.e.offsetY);
      this.mouseTo.x = xy.x;
      this.mouseTo.y = xy.y;
      this.drawingObject = null;
      this.moveCount = 1;
      if (this.drawType != "polygon") {
        this.doDrawing = false;
      }
    },

    //鼠标移动过程中已经完成了绘制
    mousemove(e) {
      if (this.moveCount % 2 && !this.doDrawing) {
        //减少绘制频率
        return;
      }
      this.moveCount++;
      var xy = e.pointer || this.transformMouse(e.e.offsetX, e.e.offsetY);
      this.mouseTo.x = xy.x;
      this.mouseTo.y = xy.y;
      // 多边形与文字框特殊处理
      if (this.drawType != "text" || this.drawType != "polygon") {
        this.drawing(e);
      }
      if (this.drawType == "polygon") {
        if (this.activeLine && this.activeLine.class == "line") {
          var pointer = this.canvas.getPointer(e.e);
          this.activeLine.set({ x2: pointer.x, y2: pointer.y });

          var points = this.activeShape.get("points");
          points[this.pointArray.length] = {
            x: pointer.x,
            y: pointer.y,
            zIndex: 1
          };
          this.activeShape.set({
            points: points
          });
          this.canvas.renderAll();
        }
        this.canvas.renderAll();
      }
    },
    deleteObj() {
      const canvas = this.canvas;
      canvas.getActiveObjects().map(item => {
        canvas.remove(item);
      });
    },
    transformMouse(mouseX, mouseY) {
      return { x: mouseX / 1, y: mouseY / 1 };
    },
    // 绘制多边形开始，绘制多边形和其他图形不一样，需要单独处理
    drawPolygon() {
      this.drawType = "polygon";
      this.polygonMode = true;
      //这里画的多边形，由顶点与线组成
      this.pointArray = new Array();  // 顶点集合
      this.lineArray = new Array();  //线集合
      this.canvas.isDrawingMode = false;
    },
    addPoint(e) {
      var random = Math.floor(Math.random() * 10000);
      var id = new Date().getTime() + random;
      var circle = new fabric.Circle({
        radius: 5,
        fill: "#ffffff",
        stroke: "#333333",
        strokeWidth: 0.5,
        left: (e.pointer.x || e.e.layerX) / this.canvas.getZoom(),
        top: (e.pointer.y || e.e.layerY) / this.canvas.getZoom(),
        selectable: false,
        hasBorders: false,
        hasControls: false,
        originX: "center",
        originY: "center",
        id: id,
        objectCaching: false
      });
      if (this.pointArray.length == 0) {
        circle.set({
          fill: "red"
        });
      }
      var points = [
        (e.pointer.x || e.e.layerX) / this.canvas.getZoom(),
        (e.pointer.y || e.e.layerY) / this.canvas.getZoom(),
        (e.pointer.x || e.e.layerX) / this.canvas.getZoom(),
        (e.pointer.y || e.e.layerY) / this.canvas.getZoom()
      ];

      this.line = new fabric.Line(points, {
        strokeWidth: 2,
        fill: "#999999",
        stroke: "#999999",
        class: "line",
        originX: "center",
        originY: "center",
        selectable: false,
        hasBorders: false,
        hasControls: false,
        evented: false,

        objectCaching: false
      });
      if (this.activeShape) {
        var pos = this.canvas.getPointer(e.e);
        var points = this.activeShape.get("points");
        points.push({
          x: pos.x,
          y: pos.y
        });
        var polygon = new fabric.Polygon(points, {
          stroke: "#333333",
          strokeWidth: 1,
          fill: "#cccccc",
          opacity: 0.3,

          selectable: false,
          hasBorders: false,
          hasControls: false,
          evented: false,
          objectCaching: false
        });


        this.canvas.remove(this.activeShape);


        this.canvas.add(polygon);
        this.activeShape = polygon;
        this.canvas.renderAll();
      } else {
        var polyPoint = [
          {
            x: (e.pointer.x || e.e.layerX) / this.canvas.getZoom(),
            y: (e.pointer.y || e.e.layerY) / this.canvas.getZoom()
          }
        ];
        var polygon = new fabric.Polygon(polyPoint, {
          stroke: "#333333",
          strokeWidth: 1,
          fill: "#cccccc",
          opacity: 0.3,

          selectable: false,
          hasBorders: false,
          hasControls: false,
          evented: false,
          objectCaching: false
        });
        this.activeShape = polygon;
        this.canvas.add(polygon);
      }
      this.activeLine = this.line;

      this.pointArray.push(circle);
      this.lineArray.push(this.line);
      this.canvas.add(this.line);
      this.canvas.add(circle);
    },
    generatePolygon() {
      console.log('🚀 ~ generatePolygon:')
      var points = new Array();
      this.pointArray.map((point, index) => {
        points.push({
          x: point.left,
          y: point.top
        });
        this.canvas.remove(point);
      });
      this.lineArray.map((line) => {
        this.canvas.remove(line);
      });
      this.canvas.remove(this.activeShape)
      this.canvas.remove(this.activeLine);
      var polygon = new fabric.Polygon(points, {
        stroke: this.color,
        strokeWidth: this.drawWidth,
        fill: "rgba(255, 255, 255, 0)",
        opacity: 1,
        hasBorders: true,
        hasControls: false
      });

      // 背景图片地址
      // 实例化多边形
      fabric.util.loadImage('https://qntest.mydadui.com/bac/upload/202501/qiniu_20250114174242ee4d362.png', {
        crossOrigin: true
      }).then(img => {
          // 计算缩放比例
          // 将画布canvas添加到pattern中
          const pattern = new fabric.Pattern({
              source: img,
              patternTransform: [1, 0, 0, 1, -polygon.left, -polygon.top],
              repeat: 'no-repeat'
          })
          // 设置多边形为图案填充
          polygon.set('fill', pattern);

         const u = polygon.toDataURL()
         this.imgs.push({
          src: u,
          points: polygon.points,
          x: polygon.left,
          y: polygon.top,
         });
         this.drawPolygon();
      })


      this.activeLine = null;
      this.activeShape = null;
      this.polygonMode = false;
      this.doDrawing = false;
      this.drawType = null;
    },
    drawing(e) {
      if (this.drawingObject) {
        this.canvas.remove(this.drawingObject);
      }
      var canvasObject = null;
      var left = this.mouseFrom.x,
        top = this.mouseFrom.y,
        mouseFrom = this.mouseFrom,
        mouseTo = this.mouseTo;
      switch (this.drawType) {
        case "arrow": //箭头
          var x1 = mouseFrom.x,
            x2 = mouseTo.x,
            y1 = mouseFrom.y,
            y2 = mouseTo.y;
          var w = x2 - x1,
            h = y2 - y1,
            sh = Math.cos(Math.PI / 4) * 16;
          var sin = h / Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
          var cos = w / Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
          var w1 = (16 * sin) / 4,
            h1 = (16 * cos) / 4,
            centerx = sh * cos,
            centery = sh * sin;
          /**
           * centerx,centery 表示起始点，终点连线与箭头尖端等边三角形交点相对x，y
           * w1 ，h1用于确定四个点
           */

          var path = " M " + x1 + " " + y1;
          path += " L " + (x2 - centerx + w1) + " " + (y2 - centery - h1);
          path +=
            " L " + (x2 - centerx + w1 * 2) + " " + (y2 - centery - h1 * 2);
          path += " L " + x2 + " " + y2;
          path +=
            " L " + (x2 - centerx - w1 * 2) + " " + (y2 - centery + h1 * 2);
          path += " L " + (x2 - centerx - w1) + " " + (y2 - centery + h1);
          path += " Z";
          canvasObject = new fabric.Path(path, {
            stroke: this.color,
            fill: this.color,
            strokeWidth: this.drawWidth
          });
          break;
        case "pentagram": //五角星
          var x1 = mouseFrom.x,
            x2 = mouseTo.x,
            y1 = mouseFrom.y,
            y2 = mouseTo.y;
          /**
           * 实现思路  (x1,y1)表示鼠标起始的位置 (x2,y2)表示鼠标抬起的位置
           * r 表示五边形外圈圆的半径，这里建议自己画个图理解
           * 正五边形夹角为36度。计算出cos18°，sin18°备用
           */
          var w = Math.abs(x2 - x1),
            h = Math.abs(y2 - y1),
            r = Math.sqrt(w * w + h * h)
          var cos18 = Math.cos(18 * Math.PI / 180)
          var sin18 = Math.sin(18 * Math.PI / 180)

          /**
           * 算出对应五个点的坐标转化为路径
           */
          var point1 = [x1, y1 + r]
          var point2 = [x1 + 2 * r * (sin18), y1 + r - 2 * r * (cos18)]
          var point3 = [x1 - r * (cos18), y1 + r * (sin18)]
          var point4 = [x1 + r * (cos18), y1 + r * (sin18)]
          var point5 = [x1 - 2 * r * (sin18), y1 + r - 2 * r * (cos18)]

          var path = " M " + point1[0] + " " + point1[1]
          path += " L " + point2[0] + " " + point2[1]
          path += " L " + point3[0] + " " + point3[1]
          path += " L " + point4[0] + " " + point4[1]
          path += " L " + point5[0] + " " + point5[1]
          path += " Z";
          canvasObject = new fabric.Path(path, {
            stroke: this.color,
            fill: this.color,
            strokeWidth: this.drawWidth,
            // angle:180,  //设置旋转角度
          });
          break;
        case "ellipse": //椭圆
          // 按shift时画正圆，只有在鼠标移动时才执行这个，所以按了shift但是没有拖动鼠标将不会画圆
          if (e.e.shiftKey) {
            mouseTo.x - left > mouseTo.y - top ? mouseTo.y = top + mouseTo.x - left : mouseTo.x = left + mouseTo.y - top
          }
          var radius =
            Math.sqrt(
              (mouseTo.x - left) * (mouseTo.x - left) +
              (mouseTo.y - top) * (mouseTo.y - top)
            ) / 2;
          canvasObject = new fabric.Ellipse({
            left: (mouseTo.x - left) / 2 + left,
            top: (mouseTo.y - top) / 2 + top,
            stroke: this.color,
            fill: "rgba(255, 255, 255, 0)",
            originX: "center",
            originY: "center",
            rx: Math.abs(left - mouseTo.x) / 2,
            ry: Math.abs(top - mouseTo.y) / 2,
            strokeWidth: this.drawWidth
          });
          break;
        case "rectangle": //长方形
          // 按shift时画正方型
          if (e.e.shiftKey) {
            mouseTo.x - left > mouseTo.y - top ? mouseTo.y = top + mouseTo.x - left : mouseTo.x = left + mouseTo.y - top
          }
          var path =
            "M " +
            mouseFrom.x +
            " " +
            mouseFrom.y +
            " L " +
            mouseTo.x +
            " " +
            mouseFrom.y +
            " L " +
            mouseTo.x +
            " " +
            mouseTo.y +
            " L " +
            mouseFrom.x +
            " " +
            mouseTo.y +
            " L " +
            mouseFrom.x +
            " " +
            mouseFrom.y +
            " z";
          canvasObject = new fabric.Path(path, {
            left: left,
            top: top,
            stroke: this.color,
            strokeWidth: this.drawWidth,
            fill: "rgba(255, 255, 255, 0)",
            hasControls: false
          });
          //也可以使用fabric.Rect
          break;
        case "text": //文本框
          this.textbox = new fabric.Textbox("", {
            left: mouseFrom.x,
            top: mouseFrom.y - 10,
            // width: 150,
            fontSize: 16,
            borderColor: this.color,
            fill: this.color,
            hasControls: false
          });
          this.canvas.add(this.textbox);
          this.textbox.enterEditing();
          this.textbox.hiddenTextarea.focus();
          break;

        default:
          break;
      }

      if (canvasObject) {
        // canvasObject.index = getCanvasObjectIndex();\
        this.canvas.add(canvasObject); //.setActiveObject(canvasObject)
        this.drawingObject = canvasObject;
      }
    }
  },
  mounted() {
    const self = this;
    self.canvas = new fabric.Canvas("canvas", {
      // skipTargetFind: false, //当为真时，跳过目标检测。目标检测将返回始终未定义。点击选择将无效
      // selectable: false,  //为false时，不能选择对象进行修改
      // selection: false   // 是否可以多个对象为一组
    });
    self.canvas.selectionColor = "rgba(0,0,0,0.05)";
    self.canvas.on("mouse:down", self.mousedown);
    self.canvas.on("mouse:move", self.mousemove);
    self.canvas.on("mouse:up", self.mouseup);
    
    document.onkeydown = e => {
      // 键盘 delect删除所选元素
      if (e.keyCode == 46) {
        self.deleteObj();
      }
      // ctrl+z 删除最近添加的元素
      if (e.keyCode == 90 && e.ctrlKey) {
        self.canvas.remove(
          self.canvas.getObjects()[self.canvas.getObjects().length - 1]
        );
      }
    };
    
    setTimeout(() => {
      self.loadExpImg();
      self.drawPolygon();
    }, 1000)
  }
};
</script>

<style scoped>
.el-container {
  flex-direction: column;
}
img,
input {
  opacity: 0;
  /* display: none; */
}
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
canvas {
  border: 1px dashed black;
}


.draw-btn-group {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

}

.draw-btn-group div {
  margin: 5px;
  cursor: pointer;
}
</style>
