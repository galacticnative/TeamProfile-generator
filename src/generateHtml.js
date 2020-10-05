const createTeam = generateHtml => {
    //generates manager data into a card in the html
    //the getName() function is pulling data from the /lib files
    const createManager = manager => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header name manager bg-success">
            <h3>${manager.getName()}</h3>
            <h4>Manager</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${manager.getId()}</li>
            <a class="list-group-item email" href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
            <li class="list-group-item office">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
        `;
    };
    //generates the engineer data into a card
    const createEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header name engineer bg-primary">
            <h3>${engineer.getName()}</h3>
            <h4>Engineer</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${engineer.getId()}</li>
            <a class="list-group-item email" href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
            <a class="list-group-item github" href="https://github.com/${engineer.getGithub()}" target="_blank">Github: ${engineer.getGithub()}</a>
        </ul>
        </div>
        `;
    };
    //generates the intern data
    const createIntern = intern => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header name intern bg-warning">
            <h3>${intern.getName()}</h3>
            <h4>Intern</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${intern.getId()}</li>
            <a class="list-group-item email" href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
            <li class="list-group-item school">School: ${intern.getSchool()}</li>
        </ul>
        </div>
        `;
    };
    //pulling array data and returning a string to insert into employee data
    const insertData = [];

    insertData.push(generateHtml
        .filter(teammate => teammate.getRole() === "Manager")
        .map(manager => createManager(manager))
    );
    insertData.push(generateHtml
        .filter(teammate => teammate.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    insertData.push(generateHtml
        .filter(teammate => teammate.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return insertData.join("");

}
//connects generateHtml file to the index.js file
module.exports = generateHtml => {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="jumbotron">
            <h1 class="display-4 text-center">Your Team!</h1>
        </div>
      </header>
      <main>
        <div class="container">
            <div class="row">
                <div class="data-area col-12 d-flex justify-content-center mr-3">
                ${createTeam(generateHtml)}
                </div>
            </div>
        </div>
      </main>

    </body>
    </html>
    
    `
}

