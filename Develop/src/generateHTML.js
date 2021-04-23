// a function to generate the contecnt within the blank html
function generateHTML(dataManager, dataTeammate1, dataTeammate2) {
  
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
    <link rel="stylesheet" href="../style.css"/> <!-- Additinal Styling -->
    
    <title>Team Visualizer</title>

</head>

<body>
    <header class = "jumbotron"> <!-- jumbotron is a bootstrap styling -->
        <h1> My Team </h1>

    </header>
    

    <div class = "main">
        <!-- Manager example -->
        <div class="card shadow " style="width: 18rem;">
            <div class="card-body cardTitle-head">
                <h4 class="card-title">${dataManager.name}</h4>
                <div class = "card_iconANDtitle">
                    <i class="fas fa-mug-hot"></i>
                    <h5 class="card-title cardClass">Manager</h5>
                </div>
            </div>
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item border border-2">ID: <span class = "textColoring"> ${dataManager.id} </span> </li>
                <li class="list-group-item border border-2">Email: <span class = "textColoring"> ${dataManager.email} </span> </li>
                <li class="list-group-item border border-2">Office Number: <span class = "textColoring"> ${dataManager.phone} </span> </li>
            </ul>

        </div>

        <!-- Engineer example -->
        <div class="card shadow" style="width: 18rem;">
            <div class="card-body cardTitle-head">
                <h4 class="card-title">${dataTeammate1.name}</h4>
                <div class = "card_iconANDtitle">
                    <i class="fas fa-glasses"></i>
                    <h5 class="card-title cardClass">Engineer</h5>
                </div>
            </div>
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item border border-2">ID: ${dataTeammate1.id} </li>
                <li class="list-group-item border border-2">Email: ${dataTeammate1.email}</li>
                <li class="list-group-item border border-2">GitHub: ${dataTeammate1.github}</li>
            </ul>

        </div>

        <!-- Intern example -->
        <div class="card shadow" style="width: 18rem;">
            <div class="card-body cardTitle-head">
                <h4 class="card-title">${dataTeammate2.name}</h4>
                <div class = "card_iconANDtitle">
                    <i class="fas fa-user-graduate"></i>
                    <h5 class="card-title cardClass">Intern</h5>
                </div>
            </div>
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item border border-2">ID: ${dataTeammate2.id}</li>
                <li class="list-group-item border border-2">Email: ${dataTeammate2.email}</li>
                <li class="list-group-item border border-2">School: ${dataTeammate2.school}</li>
            </ul>

        </div>

    </div>

    <script src = "./Develop/script.js"></script>
</body>

</html>

  `; 
  
  } // this template will be passed onto the index.js script through the export below 
  
  
  module.exports = generateHTML; // functions must always be exported before working in other scripts. In this case, the other three functions will be called within markdown. 
  // so the generate generateMarkdown actually carries over the readme template to the Index.js file so it can be written. 