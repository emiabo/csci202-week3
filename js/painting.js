function paint () {
    var canvas = document.getElementById('frame');
    var ctx = canvas.getContext('2d');

    //triangle A (top left) #8d8c94
    ctx.fillStyle = '#8d8c94'
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.lineTo(175, 0);
    ctx.lineTo(0, 175);
    ctx.lineTo(0, 0);
    ctx.fill();
    ctx.stroke();
    //triangle B (top right) #706768
    ctx.fillStyle = '#706768'
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.moveTo(250, 0);
    ctx.lineTo(500, 0);
    ctx.lineTo(375, 125);
    ctx.lineTo(250, 0);
    ctx.fill();
    ctx.stroke();
    //triangle C (mid left) #25211f
    ctx.fillStyle = '#25211f'
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.moveTo(175, 0);
    ctx.lineTo(175, 500);
    ctx.lineTo(0, 325);
    ctx.lineTo(0, 175);
    ctx.fill();
    ctx.stroke();
    //triangle D (top mid) #d1c9be
    ctx.fillStyle = '#d1c9be'
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.moveTo(175, 0);
    ctx.lineTo(250, 0);
    ctx.lineTo(375, 125);
    ctx.lineTo(175, 325);
    ctx.fill();
    ctx.stroke();
    //triangle E (right) #a82612
    ctx.fillStyle = '#a82612'
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.moveTo(500, 500);
    ctx.lineTo(350, 500);
    ctx.lineTo(175, 325);
    ctx.lineTo(500, 0);
    ctx.fill();
    ctx.stroke();
    //triangle F (bottom left side) #c6a34a
    ctx.fillStyle = '#c6a34a'
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.moveTo(0, 325);
    ctx.lineTo(0, 500);
    ctx.lineTo(87.5, 412.5)
    ctx.fill();
    //triangle G (bottom left bottom) #d1c9be
    ctx.fillStyle = '#d1c9be'
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.lineTo(175, 500);
    ctx.lineTo(87.5, 412.5);
    ctx.fill();
    //triangle H (bottom mid) #8d8c94
    ctx.fillStyle = '#8d8c94'
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.moveTo(175, 500);
    ctx.lineTo(350, 500);
    ctx.lineTo(175, 325);
    ctx.fill();
}
//IDEAS: Look into adding animations to this (just use a framework at that point)