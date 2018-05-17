'use strict';
module.exports = function(app) {
    var emotionRequester = require('../controllers/emotionRequester');

    app.route('/emotion')
        .get(emotionRequester.get_emotion)
        .post(emotionRequester.add_emotion);
    app.route('/emotion/:terminalId').get(emotionRequester.get_terminal_emotion);

    function remove_old_emotions() {
        emotionRequester.clear_emotions();
        setTimeout(remove_old_emotions, 10000);
    }
    remove_old_emotions();
};