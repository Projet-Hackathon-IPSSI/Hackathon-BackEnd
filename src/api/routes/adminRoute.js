module.exports = (server) => {
    const adminController = require('../controllers/adminController');

    server.route('/admins/register').post(adminController.create_an_admin);
    server.route('/admins/login').post(adminController.login_an_admin);
}