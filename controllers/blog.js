const {readJSON, writeJSON} = require ("../utils.js")

module.exports = {
    index: (req, res) => {
        const posts = readJSON("posts")
        res.format({
            html: () => {
                let outputHTML = `<main style="text-align: center;">
                <h1> Ecco la lista dei miei post</h1>
                <a href="/">Vuoi tornare alla home?</a>
                `
                posts.forEach(({title, content, cover, tags}) => {
                    outputHTML += `<div>
                                <h4>${title}</h4>
                                <img src="/${cover}" alt="${title}" style="width:450px;"/>
                                <p>${content}</p>
                                <ul style="display: flex; justify-content: center; gap: 50px;list-style-type: none;">
                    `
                    tags.forEach(tag => outputHTML += `<li style="background-color: coral; padding: 5px 10px; text-transform: uppercase;"> ${tag} </li>`);
                    outputHTML += `</ul>
                                </div>`
                })
                outputHTML += "</main>"
                res.send(outputHTML)
            },
            json: () => {
                res.json(posts)
            }
        })
    },
    add: (req, res) => {
        const posts = readJSON("posts")
        writeJSON("posts", [...posts, req.body])
        res.send("Nuovo post inserito")
    }
}