module.exports = (server) => {
    const formController = require('../controllers/formController');

    server.route('/forms')
        .get(formController.list_all_forms)
        .post(formController.create_a_form);

    server.route('/forms/:form_id') // req.params.form_id
        .get(formController.get_a_form)
        .put(formController.update_a_form)
        .delete(formController.delete_a_form);
}