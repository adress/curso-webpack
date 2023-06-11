const fs = require('fs');

/*este script se encarga de crear el archivo .env con la variable de entorno API
en el servidor*/
if (process.env.API) {
    fs.writeFileSync('./.env',
        `API=${process.env.API}\n`);
} else {
    fs.writeFileSync('./.env',
        `API=https://randomuser.me/api/\n`);
}

