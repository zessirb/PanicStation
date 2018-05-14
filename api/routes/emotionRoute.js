'use strict';
module.exports = function(app) {
    var emotionAction = require('../controllers/emotionAction');

    app.route('/emotion')
        .get(emotionAction.get_emotion)
        .post(emotionAction.add_emotion);
};