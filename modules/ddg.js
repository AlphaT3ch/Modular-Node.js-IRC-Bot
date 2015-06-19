"use strict"
// Duck Duck Go module - usage: ddg search-query

var ddg = require('ddg');

var options = {
        "no_html": "1"
}

exports.module = function() {
        this.onCommand_ddg = function(user, args) {
                var chan = this.channel;
                if(args.trim() != "") {
                        ddg.query(args, function(err, data){
                                if(data.Abstract) {
                                        var msg = data.Abstract;
                                } else if (data.AbstractText) {
                                        var msg = data.Abstract.Text;
                                } else {
                                        var msg = "Unknown Description";
                                }
                                if (data.AbstractURL == "" || data.Heading == "" || msg == "") {
                                        chan.say("No results found");
                                } else {
                                        chan.say(data.AbstractURL + ' -- ' + data.Heading + ': "' + msg + '"');
                                }
                        });
                } else {
                        chan.say("You're doing it wrong.\nUsage: ddg search-query");
                }
        }
}

