function generateHtml(data) {
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
                <div class="card" style="width: 18rem;">
                <div class="card-header name manager">
                    <h3>${data.managername}</h3>
                    <h4>Manager</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item id">ID: ${data.managerid}</li>
                    <li class="list-group-item email">Email: ${data.manageremail}</li>
                    <li class="list-group-item office">Office Number: ${data.office}</li>
                </ul>
                </div>
                <div class="card" style="width: 18rem;">
                <div class="card-header name engineer">
                    <h3>${data.engineername}</h3>
                    <h4>Engineer</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item id">ID: ${data.engineerid}</li>
                    <li class="list-group-item email">Email: ${data.engineeremail} </li>
                    <li class="list-group-item github">Github: ${data.github}</li>
                </ul>
                </div>
                <div class="card" style="width: 18rem;">
                <div class="card-header name intern">
                    <h3>${data.internname}</h3>
                    <h4>Intern</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item id">ID: ${data.internid}</li>
                    <li class="list-group-item email">Email: ${data.internemail}</li>
                    <li class="list-group-item school">School: ${data.school}</li>
                </ul>
                </div>
            </div>
        </div>
      </main>

    </body>
    </html>
    
    `
}

module.exports = generateHtml;