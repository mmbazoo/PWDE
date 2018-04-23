module.exports = {

    // Aktuelle Zeit - Parameter werden nicht benötigt
    current_time: function () {
        return (new Date).toISOString().replace('T', ' ').substr(0, 19);
    }
}