// a function to generate the contecnt within the blank html
function generateMarkdown(data) {
  
    // Everything within the return is what is actually written to the html file. 
    return ` 

    <!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!--Linking the stylesheets -->

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"> <!-- Bootstrap -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/> <!-- Icons -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/> <!-- Text Fonts -->
    <link rel="stylesheet" href="./Develop/style.css"/> <!-- Additinal Styling -->
    
    <title>Team Visualizer</title>

</head>

<body>
    <header class = "jumbotron"> <!-- jumbotron is a bootstrap styling -->
        <h1> My Team </h1>
        <h1> ${data.nameManager} </h1>
    </header>
    
</body>

</html>
  `; 
  
  } // this template will be passed onto the index.js script through the export below 
  
  
  module.exports = generateMarkdown; // functions must always be exported before working in other scripts. In this case, the other three functions will be called within markdown. 
  // so the generate generateMarkdown actually carries over the readme template to the Index.js file so it can be written. 