# Teslo Shop 🛒

## Correr en Dev

1. Clonar el repositorio
2. Crear una copia del archivo `.env.template` y renombrarla a `.env` para configurar las variables de entorno
3. Instalar las dependencias `npm install`
4. Levantar la base de datos `docker compose up -d`
5. Correr las migraciones de prisma `npx prisma migrate dev`
6. Ejecutar el seed o semilla `npx run seed`
7. Iniciar el servidor `npm run dev`

## Correr en producción

## Notas:

- Cuando ya se tiene una base de datos creada y queremos que se vea reflejada en prisma, podemos usar el comando `npx prisma db pull` este comando nos ayudara a sincronizar la base de datos con los archivos de prisma.

- `npx prisma migrate dev` se encarga de ejecutar las migraciones de prisma que se encuentren en la carpeta `prisma/migrations`
