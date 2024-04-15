const fs = require('fs');
const path = require('path');


// Get the unique filename from command line arguments
const filename = process.argv[2];
const title = process.argv[3];
const tldr = process.argv[4];
const date = new Date();

//display usage
if (filename == "usage")
{
    console.log('<Program Name> <filename or location> <title> <tldr>');
    process.exit(0);
}

// Check if filename is provided
if (!filename || !title || !tldr) {
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
    <title>${filename} tracker</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&display=swap');
        body{background-color: #f8efec;display: grid;grid-template-columns: 10% 80% 10%;font-family: "Noto Sans Mono", monospace;font-optical-sizing: auto;font-weight: 400;font-style: normal;font-variation-settings:"wdth" 100;}
        #main{height: 100vh;display: grid; align-items: center;text-align: center;}
        h1, #date{margin: 0;}
        h1, h3, h4{font-family: "Teko", sans-serif;;font-optical-sizing: auto;font-weight: 400;font-style: normal;} 
        h3, h4{font-weight: 800;}
       #desc{font-style: italic;color: #8e7d77;} 
       a{color: black;}
       #content p{margin: 0;}
       #definition, h4{margin-bottom: 0;}

    </style>
</head>
<body>
    <div id="left"></div>
   <div id="cneter">
    
    <div id="main">
        <div>
            <h1>${title}.</h1>
            <p id="date">${date}</p>
            <p id="desc">TL;DR ${tldr}.</p>
            <a href="#definition">What is low-effort Entertainment to me ?</a>
        </div>
    </div>

    <div id="content">
<h3 id="definition">WHAT DOES low-effort ENTERTAINMENT LOOK LIKE FOR ME NOW ?</h3> 
    <p>Youtube, Shows, Movies, Music(while doing cognetive tasks), League of legends, Discord and Twitch, Reddit and Porn.</p>


        </div>
        </div>
        <div id="right"></div>
</body>
</html>
`;

// Write HTML content to file
const filePath = path.join(__dirname, `/lifeinweeks/${filename}/${filename}_tracker.html`);

fs.writeFileSync(filePath, htmlContent, (err) => {
  if (err) {
    console.error('Error writing HTML file:', err);
    process.exit(1);
  }
  console.log(`HTML file "${filename}.html" created successfully.`);
});
