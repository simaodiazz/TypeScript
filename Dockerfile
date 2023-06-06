# Define a imagem base como o Node.js na versão 14 com uma imagem Alpine Linux que é uma destribuição leve.
FROM node:18-alpine

# Define o diretório de trabalho dentro de contêiner para /usr/src/app onde o código será copiado e onde os comandos serão executados
WORKDIR /usr/src/app

# Copia o arquivo package.json e package-lock.json e guarda na imagem
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos para o diretório de trabalho
COPY . .

# Compilar o código TypeScript
RUN npm run build

# Comando para iniciar o aplicativo
CMD [ "npm", "start" ]
