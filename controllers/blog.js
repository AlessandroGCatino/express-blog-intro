const {readJSON} = require ("../utils.js")

module.exports = {
    index: (req, res) => {
        const posts = readJSON("posts")
        res.format({
            html: () => {
                let outputHTML = "<main>"
                posts.forEach(({title, content, cover, tags}) => {
                    outputHTML += `<div style="text-align: center;">
                                <h1>${title}</h1>
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
    }
}