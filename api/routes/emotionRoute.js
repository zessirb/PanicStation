'use strict';
module.exports = function(app) {
    var emotionAction = require('../controllers/emotionAction');

    app.route('/emotion')
        .get(emotionAction.get_emotion)
        .post(emotionAction.add_emotion);

    function remove_old_emotions() {
        emotionAction.clear_emotions();
        setTimeout(remove_old_emotions, 10000);
    }
    remove_old_emotions();
};