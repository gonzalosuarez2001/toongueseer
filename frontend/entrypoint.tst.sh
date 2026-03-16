#!/bin/sh

echo "Ejecuto Migraciones"
npm run migrate; 

echo "Ejecuto Seed"
npm run seed; 

echo "Inicio Aplicación"
npm run start;


