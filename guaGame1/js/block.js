var Block = function (position) {
  // positon 是 [0, 0] 格式
   var p = position
   var image = imageFromPath('img/block.png')
   var o = {
     image: image,
     x: p[0],
     y: p[1],
     w: 39,
     h: 17,
     alive: true,//加，修改方便
   }
   o.kill = function () {
     o.alive = false
   }
   o.collide = function (b) {
     return (rectIntersects(o, b)||rectIntersects(b, o)) && o.alive
   }
   return o
 }