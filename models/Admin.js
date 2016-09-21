var adminSchema = new mongoose.Schema({
  name: String
});

var Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;