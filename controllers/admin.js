/**
 * GET /admin
 * List all appointments.
 */
var Book = require('../models/Admin.js');

exports.getBooks = (req, res) => {
  Book.find((err, docs) => {
    res.render('admin', { admin: docs });
  });
};