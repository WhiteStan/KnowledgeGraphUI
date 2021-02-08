export default function draw(ctx, x, y, color, text) {
    ctx.fillStyle = color;
    let length = 10 * 1.286 * 8;
    ctx.fillRect(x, y, length, length);
    
    ctx.fillStyle = "red";
    ctx.font = "10pt sans-serif";
    ctx.fillText(text, x+20, y+length/2);

    return {
      length: length,
      x: x,
      y: y,
      color: color
    };
};