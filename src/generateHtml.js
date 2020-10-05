const createTeam = generateHtml => {

    const createManager = manager => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header name manager">
            <h3>${manager.getName()}</h3>
            <h4>Manager</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${manager.getId()}</li>
            <li class="list-group-item email">Email: ${manager.getEmail()}</li>
            <li class="list-group-item office">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
        `;
    };

    const createEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header name engineer">
            <h3>${engineer.getName()}</h3>
            <h4>Engineer</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${engineer.getId()}</li>
            <li class="list-group-item email">Email: ${engineer.getEmail()} </li>
            <li class="list-group-item github">Github: ${engineer.getGithub()}</li>
        </ul>
        </div>
        `;
    };

    const createIntern = intern => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header name intern">
            <h3>${intern.getName()}</h3>
            <h4>Intern</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${intern.getId()}</li>
            <li class="list-group-item email">Email: ${intern.getEmail()}</li>
            <li class="list-group-item school">School: ${intern.getSchool()}</li>
        </ul>
        </div>
        `;
    };

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
            <h1 class="display-4">Your Team!</h1>
        </div>
      </header>
      <main>
        <div class="container-fluid">
            <div class="row">
                ${createTeam(generateHtml)}
            </div>
        </div>
      </main>

    </body>
    </html>
    
    `
}

