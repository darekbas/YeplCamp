var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
                
var data = [
        {
            name:"Campground 1",
            image:"https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg",
            description:"Nice forest with a lot of space for tents and stuff"
        },
        {
            name:"Campground 2",
            image:"https://www.appletonmn.com/vertical/Sites/%7B4405B7C1-A469-4999-9BC5-EC3962355392%7D/uploads/campground_(2).jpg",
            description:"You can have a barbecue here "
        },
        {
            name:"Campground 3",
            image:"https://www.pc.gc.ca/en/pn-np/ab/banff/activ/camping/~/media/802FD4AF791F4C6886E18CBF4A2B81B2.ashx?w=595&h=396&as=1",
            description:"A nice place for a picnic"
        }
    ]

function seedDB(){
   Campground.remove({}, function(err){
        if(err){
            console.log(err); 
        } else {
            console.log("removed all campgrounds");
        }
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!")
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("Added new campground");
                        Comment.create(
                            {
                                text:"I wish a could be there",
                                author:"Darek"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else{
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                        })  
                    }
                });
            });
        });
    });
}

module.exports = seedDB;

