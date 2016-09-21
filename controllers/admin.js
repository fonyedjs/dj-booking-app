/**
 * GET /admin
 * List all appointments.
 */
var Admin = require('../models/Admin.js');

exports.getAdmin = (req, res) => {
  Admin.find((err, docs) => {
    res.render('admin', { admin: docs });
  });
};