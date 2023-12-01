AFRAME.registerComponent("move-box", {
    schema:{
        moveX:{
            type:"number", default:1}
    },
tick:function(){
    var pos = this.el.getAttribute("position")
    this.data.moveX+=0.01
    pos.x = this.data.moveX
    this.el.setAttribute("position", {
        x:pos.x, y:pos.y, z:pos.z
    })
}
})