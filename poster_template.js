const fs = require('fs');
const path = require('path');


// Get the unique filename from command line arguments
const filename = process.argv[2];
const goal = process.argv[3];
const duration = process.argv[4];
const started = process.argv[5];

//display usage
if (filename == "usage")
{
    console.log('<Program Name> <filename> <goal> <duration> <started>');
    process.exit(0);
}

// Check if filename is provided
if (!filename || !goal || !duration|| !started) {
  console.error('Unvalid arguments.');
  process.exit(1);
}

// Generate HTML content
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${filename} Door ! This is the ${filename} page in this tiny website, here i track every worthy event related to ${filename}.</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&display=swap');
        body{margin: 0;background-color: #f8efec;}
        canvas{width: 100%;}
        #upper{height: 70vh;text-align: center;display: grid;}
        h1{  font-family: "Teko", sans-serif;font-optical-sizing: auto;font-weight: 400;font-style: normal;}
        ul{list-style: none;}
        li{display: inline-block;padding: 0 5px 0 5px;}
        p{margin-top: 0px;margin-bottom: 0;color: #8e7d77;}
        p, a{font-family: "Noto Sans Mono", monospace;font-optical-sizing: auto;font-weight: 400;font-style: normal;font-variation-settings:"wdth" 100;}
        a{color: black; }
        #events{height: 100vh;display: grid;grid-template-columns: 1fr 1fr 1fr;text-align: center;border: 1px dashed black;}
        #events div{border: 1px dashed black;display: grid;align-items: center;height: 100%;}
        #events a{text-decoration: none;font-family: "Teko", sans-serif;font-weight: 400;font-size: 1.2em;}
        #topic{color:black} 
        #goal{text-align: start;font-size: .7em;}
        #goal p{color: black;}
        #goal span{color: #8e7d77;}
        #main{display: grid;align-content: center;}        
        .squares{width: 10px;height: 10px;}
        #exp li{display: ruby;}
        #early {background-color: #a6d3ff;}
        #creche{background-color: #9dd894;}
        #elem{  background-color: #ffff94;}
        #mid{   background-color: #ffc68c;}
        #high{  background-color: #ff9c9c;}
        #squareLife { background-color: #c9b7db;}
        /*ADD the following css to the template script and already made posters*/            
        @media only screen and (max-width: 880px ) { 
            p, a{font-size: .8em;}
            #main p{text-align: start;} 
            #main{width: 80%;justify-self: center;}
        

        }
        @media only screen and (max-width: 406px ) { 
            #main{width: 95%;}
            #events{grid-template-columns: 1fr 1fr ;}
            #events div{height:100%;}
        }
        @media only screen and (max-width: 340px ) { 
            p, a{font-size: .6em;}
            #events{grid-template-columns: 1fr;}
            #events div{height: 20vh;}
            ul{padding-left: 0;}
            #main{width: 95%;}
        }
    </style>
</head>
<body>
    <section id="upper">       
     <div id="goal">
    <p><span>Current Goal: </span>${goal}.</p>
    <p><span>Duration: </span>${duration}</p>
    <p><span>Started: </span>${started}</p>
</div>
<div id="main">
        <h1>${filename}</h1>
        <p>Below is a poster representing my life in weeks, Each Square represents a week of my life.</p>
        <p>Each row is 1 year and It has events related to my journey in the topic of <span id="topic">{${filename}}</span>.</p>
        <p>Scroll down after the poster to read.</p>
        <p>Amuse yourself !</p>
        <ul>
            <li><a href="../../blog/blog.html"> Blog</a></li>
            <li><a href="../../LiW.html">  Life in weeks</a></li>
            <li><a href="../../contact.html">Contact</a></li>
        </ul>
        <ul id="exp">
        <li><div class="squares" id="early"></div><p>Early years</p></li>
        <li><div class="squares" id="creche"></div><p>Creche</p></li>
        <li><div class="squares" id="elem"></div>  <p>Elementary</p></li>
        <li><div class="squares" id="mid"></div>   <p>Middle</p></li>
        <li><div class="squares" id="high"></div>  <p>High</p></li>
        <li><div class="squares" id="squareLife"></div>  <p>Life</p></li>
    </ul>
        </div>
    </section>
        <section id="life">
        <canvas id="canvas" width="1350%" height="1200%"></canvas> 
    </section>
    <section id="events">
<a href="#"><div>Hello ${filename}</div></a>

    </section>
    <script>
  const ctx = document.getElementById("canvas").getContext("2d");
    let left_eventsSX = 190;

  //Square
    function draw(x, y, color) {      
        ctx.fillStyle = color;        
        ctx.fillRect(x, y, 10, 10);
        //ctx.strokeRect(x, y, 10, 10);
}
function draw_uncolored(x, y) {      
        ctx.strokeRect(x, y, 10, 10);
}

let YAxis = 10;
let weeks = 0;
for (let i = 1; i <= 90; i++) {
    let XAxis = 350;
    for (let index = 1; index <= 52; index++) {
        if (i <= 4)
            draw(XAxis, YAxis, '#a6d3ff');
        else if (i <= 6)
            draw(XAxis, YAxis, '#9dd894');
        else if (i <= 12)
            draw(XAxis, YAxis, '#ffff94');
        else if (i <= 15)
            draw(XAxis, YAxis, '#ffc68c');
        else if (i <= 18)
            draw(XAxis, YAxis, '#ff9c9c');
        else if (i <= 24)//18 OCT 2023 
            draw(XAxis, YAxis, '#c9b7db');
        else if (i == 25 && index <= 21)//Additional weeks after my latest birthday
            draw(XAxis, YAxis, '#c9b7db');
        else
            draw_uncolored(XAxis, YAxis);
        
        XAxis += 13;
    }
    weeks += 52;
    YAxis += 13;
}


//TEXT events 
function draw_events() {
    ctx.font = "15px serif"; 
    ctx.fillStyle = 'black';        
    ctx.fillText("Hello ${filename}", left_eventsSX, 50);
}
draw_events();
//DRAW A LINEs and Circles
function event_zero(startX, startY, endX, endY, color = 'black', lineWidth = 3) {
            ctx.beginPath(); // Begin path
            ctx.strokeStyle = color; // Set line color
            ctx.lineWidth = lineWidth; // Set line width
            ctx.arc(endX + 5, endY, 8, 0, Math.PI * 2, true);
            ctx.moveTo(startX, startY); // Move to starting point
            ctx.lineTo(endX, endY); // Draw line to ending point
            ctx.stroke(); // Stroke the path
            ctx.closePath(); // Close path
        }
event_zero(left_eventsSX + 95, 30, 350, 17);
    </script>
</body>
</html>
</html>
`;

// Write HTML content to file
const filePath = path.join(__dirname, `/lifeinweeks/${filename}/${filename}.html`);
fs.mkdirSync(`./lifeinweeks/${filename}`, (err) => {
    if (err) {
        console.error('Error creating folder:', err);
        process.exit(1);
      }
      console.log(`"${filename} folder" created successfully.`);
})
fs.writeFileSync(filePath, htmlContent, (err) => {
  if (err) {
    console.error('Error writing HTML file:', err);
    process.exit(1);
  }
  console.log(`HTML file "${filename}.html" created successfully.`);
});
