const fs = require('fs');
const fxmanifest = `description 'Made With Fivem-Script-Template by Amped'

fx_version 'cerulean'

games { 'rdr3', 'gta5' }

lua54 'yes'

client_scripts {
    'client/client.lua'
}

server_scripts {
    'server/server.lua'
}

shared_scripts {
    'config/config.lua'
}

escrow_ignore {
    'config/config.lua'
}
`;
const fxmanifestnui = `
description 'Made With Fivem-Script-Template by Amped'

fx_version 'cerulean'

games { 'rdr3', 'gta5' }

lua54 'yes'

ui_page 'src/html/index.html'


client_scripts {
    'client/client.lua'
}

server_scripts {
    'server/server.lua'
}

shared_scripts {
    'config/config.lua'
}

escrow_ignore {
    'config/config.lua'
}

files {
    'src/html/index.html',
    'src/html/style.css',
    'src/js/main.js',
}`;
const client = ``;
const server = ``;
const config = `Config = {}`;
const js = `$(function(){
    $("body").hide();
    window.onload = function(e) {
        window.addEventListener("message", (event) => {
            var item = event.data;
            if(item !== undefined && item.type === "ui") {
                if(item.display === true) {
                    $('body').show();
                } else {
                    $('body').hide();
                }
            } 
        })
    }
})`;
const clientnui = `local display = false

function UI(toggle)
    display = toggle
    SetNuiFocus(toggle, toggle)
    SendNUIMessage({
        type = "ui",
        enable = toggle
    })
end`;
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fivem Nui</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    
    <script src="../js/main.js"></script>
</body>
</html>
`
// ask for input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
readline.question('Type> ', type => {
    if (type === "1") {
        readline.question('What is the name of your script? ', (answer) => {
            fs.mkdir(answer, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    fs.mkdir(`${answer}/client`, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            fs.mkdir(`${answer}/server`, (err) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    fs.mkdir(`${answer}/config`, (err) => {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            // wait 1 second
                                            fs.writeFile(`${answer}/fxmanifest.lua`, fxmanifest, (err) => {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    console.log('Successfully created fxmanifest.lua');
                                                }
                                            });
                                            fs.writeFile(`${answer}/config/config.lua`, config, (err) => {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    console.log('Successfully created config.lua');
                                                }
                                            });
                                            fs.writeFile(`${answer}/client/client.lua`, client, (err) => {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    console.log('Successfully created client.lua');
                                                }
                                            });
                                            fs.writeFile(`${answer}/server/server.lua`, server, (err) => {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    console.log('Successfully created server.lua');
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
            readline.close();
        });
    } else if (type === "2") {
        readline.question('What is the name of your script? ', (answer) => {
            fs.mkdir(answer, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    fs.mkdir(`${answer}/client`, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            fs.mkdir(`${answer}/server`, (err) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    fs.mkdir(`${answer}/config`, (err) => {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            fs.mkdir(`${answer}/src`, (err) => {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    fs.mkdir(`${answer}/src/css`, (err) => {
                                                        if (err) {
                                                            console.log(err);
                                                        } else {
                                                            fs.mkdir(`${answer}/src/js`, (err) => {
                                                                if (err) {
                                                                    console.log(err);
                                                                } else {
                                                                    fs.mkdir(`${answer}/src/html`, (err) => {
                                                                        if (err) {
                                                                            console.log(err);
                                                                        } else {
                                                                            fs.writeFile(`${answer}/fxmanifest.lua`, fxmanifestnui, (err) => {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                } else {
                                                                                    console.log('Successfully created fxmanifest.lua');
                                                                                }
                                                                            });
                                                                            fs.writeFile(`${answer}/config/config.lua`, config, (err) => {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                } else {
                                                                                    console.log('Successfully created config.lua');
                                                                                }
                                                                            });
                                                                            fs.writeFile(`${answer}/client/client.lua`, clientnui, (err) => {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                } else {
                                                                                    console.log('Successfully created client.lua');
                                                                                }
                                                                            });
                                                                            fs.writeFile(`${answer}/server/server.lua`, server, (err) => {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                } else {
                                                                                    console.log('Successfully created server.lua');
                                                                                }
                                                                            });
                                                                            fs.writeFile(`${answer}/src/css/style.css`, ``, (err) => {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                } else {
                                                                                    console.log('Successfully created style.css');
                                                                                }
                                                                            });
                                                                            fs.writeFile(`${answer}/src/js/main.js`, js, (err) => {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                } else {
                                                                                    console.log('Successfully created main.js');
                                                                                }
                                                                            });
                                                                            fs.writeFile(`${answer}/src/html/index.html`, html, (err) => {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                } else {
                                                                                    console.log('Successfully created index.html');
                                                                                }
                                                                            });
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
            readline.close();
        });
    }
});