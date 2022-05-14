
description 'Made With Fivem-Script-Template by Amped'

fx_version 'cerulean'

games { 'rdr3', 'gta5' }

lua54 'yes'

ui_page 'src/html/index.html'


client_scripts {
    'client/main.lua'
}

server_scripts {
    'server/main.lua'
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
}