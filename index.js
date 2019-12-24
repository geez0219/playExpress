// import express from "express";

const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send(
        `
        <p> Hello world </p>
        `
    );
})

const PORT = 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));