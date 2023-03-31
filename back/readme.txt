npm i cors
npm i express
npm i jsonwebtoken
npm i morgan
npm i bcryptjs
npm i mongoose

npm i nodemon --save-dev
npm i dotenv --save-dev
npm i @types/cors --save-dev
npm i @types/express --save-dev
npm i @types/morgan --save-dev
npm i @types/jsonwebtoken --save-dev
npm i @types/mongoose --save-dev  // Deprecated

tsc --init

"target": "es2016"
"outdir": "./build"
"resolveJsonModule": true


"build": "tsc -w"
"dev": "nodemon build/index.js"

mkdir src
mkdir src/app
mkdir src/app/private
mkdir src/app/public
mkdir src/app/shared
mkdir src/config
mkdir src/config/api
mkdir src/config/connection