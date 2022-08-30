function subir(){
    console.log("Subindo"); 
    alert("Subindo");
    try
    {
        db.ref('Subindo').set({
            estado: true 
        })
        console.log('Sucesso')
    }
   catch(error){
    alert('Problemas ao enviar dados ao Firebase')
    }
    try
    {
        db.ref('Descendo').set({
            estado: false 
        })
        console.log('Sucesso')
    }
   catch(error){
    alert('Problemas ao enviar dados ao Firebase')
    }
}

function descer(){
    console.log("Descendo");
    alert("Descendo");
    try
    {
        db.ref('Descendo').set({
            estado: true 
        })
        console.log('Sucesso')
    }
   catch(error){
    alert('Problemas ao enviar dados ao Firebase')
    }
    try
    {
        db.ref('Subindo').set({
            estado: false
        })
        console.log('Sucesso')
    }
   catch(error){
    alert('Problemas ao enviar dados ao Firebase')
    }
}

function acelerar1(){
    alert("1X");
    try
    {
        db.ref('velocidade').set({
            valor: 1 
        })
        console.log('Sucesso')
    }
   catch(error){
    alert('Problemas ao enviar dados ao Firebase')
    }
}

function acelerar2(){
    alert("2X");
    try
    {
        db.ref('velocidade').set({
            valor: 2 
        })
        console.log('Sucesso')
    }
   catch(error){
    alert('Problemas ao enviar dados ao Firebase')
    }
}

function acelerar3(){
    alert("3X"); 
    try
    {
        db.ref('velocidade').set({
            valor: 3
        })
        console.log('Sucesso')
    }
   catch(error){
    alert('Problemas ao enviar dados ao Firebase')
    }
}

function conectarbluetooth(){
    alert("Conectando");
    navigator.bluetooth.requestDevice;
    
}

// btn.addEventListener('')
// btn.addEventListener('')

var firebaseConfig = {
    apiKey: "AIzaSyDlKLIsVUYNTzZReenMQFxT8-OgJxL2Ffg",
    authDomain: "projete2022ds.firebaseapp.com",
    databaseURL: "https://projete2022ds-default-rtdb.firebaseio.com/",
    projectId: "projete2022ds",
    storageBucket: "projete2022ds.appspot.com",
    messagingSenderId: "24071079631",
    appId: "1:24071079631:web:1d32e8359220e23eab99ba",
    measurementId: "G-WC222J4VZD"
}

firebase.initializeApp(firebaseConfig)
db = firebase.database()

function EnviarDados()
{
    try
    {
        db.ref('teste').set({
            valor: 1
        })
        console.log('Sucesso')
    }
   catch(error){
    alert('Problemas ao enviar dados ao Firebase')
    }
}