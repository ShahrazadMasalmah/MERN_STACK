const Author = require("../models/author.model");

// create an author document in the database
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then( newAuthor => {
            res.json(newAuthor)
        })
        .catch( error => {
            res.status(400).json(error)
        });
}

// retrieve all authors from database
module.exports.findAllAuthors = (req, res) => {
    Author.find({})
        .then( allAuthors => {
            res.json(allAuthors)
        })
        .catch( error => {
            res.json(error)
        });
}

// retrieve one author from database
module.exports.getAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(Author => res.json(Author))
        .catch(err => res.json(err))
}

// update the inputs in the author document
module.exports.updateAuthor = (req, res) => {
    const { name } = req.body;
    if (name && name.length < 3) { 
        return res.status(400).json({ errors: { name: "Author name must be at least 3 characters long!" }});
      }
      if (!name) { 
        return res.status(400).json({ errors: {name: "Author name is required!"} });
      }
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

// delete one author document from database
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}