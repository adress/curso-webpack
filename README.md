# Curso WebPack

Webpack es una herramieta que toma tu codigo js y lo optimiza de la mejor manera,
tambien es una herramienta que te ayuda empaquetar codigo


instalar dependencias de desarrollo para usar webpack 
```bash
npm i webpack webpack-cli -D
```

## Configuracion Sin Archivos
por defecto sin archivos de configuracion la configuracion por defecto es:

Entrada:

- src
  - index.js

Salida:

- dist
  - main.js   

## Compilar indicando el modo
```bash
npx webpack --mode development
```
```bash
npx webpack --mode production
```


## Configuracion con archivos

Webpack usa el archivos configuracion que le indeican que debe hacer, como estandar se crea un archivo llamado `webpack.config.js`
en la raiz del proyecto. 

Ejecutar webpack con archivo de configuracion
```bash
npx webpack --mode production --config webpack.config.js
```

Nota: en el `package.json` en el partado se escrips se puede agregar
```
"build": "webpack --mode production"
```
esto permitara ejecutar el webpack y de manera automatica bucara el archivo `webpack.config.js`
en la raiz del proyecto. Para ejecutarlo usar:
```bash
npm run build
```


## Algunos Modulos

## Babel

Babel te permite hacer que tu código JavaScript sea compatible con todos los navegadores, debes agregar a tu proyecto las siguientes dependencias

```
npm install -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime
```

- babel-loader nos permite usar babel con webpack
- @babel/core es babel en general
- @babel/preset-env trae y te permite usar las ultimas características de JavaScript
- @babel/plugin-transform-runtime te permite trabajar con todo el tema de asincronismo como ser async y await

Debes crear el archivo de configuración de babel el cual tiene como nombre .babelrc


## Plugins
### html webpack 
Es un pligin muy util cuando se trabaja con HTML, para instalarlos

```bash
npm i html-webpack-plugin -D
```

### Trabajar con css

```bash
npm i mini-css-extract-plugin css-loader -D
```
para tabajar con preprocesadores como sylus (pre procesador parecido a less)
```
npm install stylus-loader -D
```
### Copiar archivos de un lugar a otro
util para copiar por ejemplos activos estaticos como magenes al bunddle de produccion
```bash
npm install copy-webpack-plugin -D
```
### Plugin para trabajar con CDNs
```bash
npm install url-loader file-loader -D
```

### PLugin optimizacion de archivos
Util para optimizas css y javascript
```bash
npm install css-minimizer-webpack-plugin terser-webpack-plugin -D
```

### Plugin para trabajar con variables de entorno
```bash
npm install dotenv-webpack -D
```

### plugin para limpar el dist
se usa para limpiar la cartpeta dist antes de genrar el bundle
```bash
npm install clean-webpack-plugin -D
```
Nota: Webpack ahora tiene un flag clean que permite limpiar el output directory sin tener que instalar el plugin
```json
output: { 
	clean: true
}
```

### Plugin servidor de desarrollo
```bash
npm install webpack-dev-server -D
```

### Plugin analisis de archivos a optimizar
```bash
npm install webpack-bundle-analyzer -D
```
Ejecutar analisis
```bash
 npx webpack --profile --json > status.json
 npx webpack-bundle-analyzer status.json 
```




## Otras notas 

*Modo watch*
se peude agregar la propiedad `watch: true` en el archivop webpack o `"watch": "npm run dev --watch"`
en el package json

*Genrar los source maps*
en el archivo `webpack` inicar `devtool: 'source-map'`

*Loaders*
Fuera de contexto, webpack solamente entiende JavaScript y JSON. Los loaders nos permite procesar archivos de otros tipos para convertirnos en módulos válidos que serán consumidos por nuestras aplicaciones y agregadas como dependencias.

En alto nivel, los loaders poseen 2 configuraciones principales:

- test: propiedad que identifica cuáles archivos deberán ser transformados
- use: propiedad que identifica el loader que será usado para transformar a dichos archivos

*Plugins*
Mientras los loaders transforman ciertos tipos de módulos, los plugins _son utilizados para extender tareas específicas, como la optimización de paquetes, la gestión de activos y la inyección de variables de entorno.

Una vez importado el plugin, podemos desear el personalizarlos a través de opciones.
