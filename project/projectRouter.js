const express = require('express');
const db = require('../data/helpers/projectModel.js');
const router = express.Router();

router.get('/', (req, res) => {
  db
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  db
    .get(id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


router.get('/:id/actions', (req, res) => {
  const { id } = req.params;
  db
    .getProjectActions(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


router.post('/', (req, res) => {
  const project = req.body;
  db
    .insert(project)
    .then(projects => {
      console.log('ok');
      res.status(201).json(projects);
    })
    .catch(error => {
      console.log('error');
      res.status(500).json(error);
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  db
    .update(id, changes)
    .then(count => {
      if (count > 0) {
        db.get(id).then(changes => {
          res.status(200).json(changes);
        });
      } else {
        res.status(404).json({
          message: 'project ID does not exist.'
        });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  db
    .remove(id)
    .then(users => {
      res.status(200).json({ users });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;