var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
                
var data = [
        {
            name:"Salomon Creek",
            image:"https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg",
            description:"Aliquam pulvinar aliquam lectus id convallis. Vestibulum tincidunt mi a euismod viverra. Cras luctus aliquam erat vulputate aliquam. Praesent ex massa, lobortis ut quam in, sollicitudin luctus mi. Aliquam bibendum ultrices nunc, ut varius felis dignissim nec. Sed tempor leo sit amet augue maximus, eget luctus elit sollicitudin. Sed ut tincidunt dolor, ac mattis turpis. Mauris ornare dictum auctor. Integer neque metus, rhoncus sed varius consequat, lacinia id libero. Proin gravida non mauris a sollicitudin. Morbi est mauris, rhoncus vel laoreet id, auctor quis est. Suspendisse congue ante a erat porta, at euismod tellus elementum. Pellentesque enim massa, placerat a nibh at, lacinia consequat nisi. Cras ac lacus nec metus lacinia vehicula. Vestibulum mollis tristique ligula, id gravida urna varius at."
        },
        {
            name:"Masenarik",
            image:"https://www.appletonmn.com/vertical/Sites/%7B4405B7C1-A469-4999-9BC5-EC3962355392%7D/uploads/campground_(2).jpg",
            description:"Pellentesque tincidunt quam lorem, eu lacinia ex elementum sed. Nullam egestas dolor sit amet velit laoreet posuere. Ut cursus elit at massa pellentesque sollicitudin. Cras pretium suscipit lectus, in iaculis dui tristique quis. Nullam condimentum porttitor pretium. Vivamus vestibulum eros id dolor accumsan, nec vestibulum mauris euismod. Maecenas sit amet ullamcorper est, ac iaculis metus. Donec ultrices nibh metus, sed varius augue lobortis sit amet. Integer aliquam sed nisl non egestas. Aliquam lobortis massa id fermentum porttitor. Nullam accumsan ex nibh, non ultricies sapien efficitur vitae. Sed dignissim posuere magna, sed tempor leo varius vitae. Etiam vel diam eget ante auctor fringilla. Sed ante tellus, tempor quis faucibus sit amet, tincidunt in purus."
        },
        {
            name:"Forest roads",
            image:"https://www.pc.gc.ca/en/pn-np/ab/banff/activ/camping/~/media/802FD4AF791F4C6886E18CBF4A2B81B2.ashx?w=595&h=396&as=1",
            description:"Morbi mollis turpis ut lorem vehicula, in scelerisque dolor dapibus. Quisque blandit pretium sodales. Etiam convallis nisi nec eros semper suscipit. Curabitur molestie commodo efficitur. Mauris ultricies tristique congue. Suspendisse ac molestie leo. Nullam ut mauris non augue pretium pulvinar vitae nec augue. Proin purus nisl, imperdiet et felis a, scelerisque gravida mi. Mauris dignissim gravida pretium. Aliquam iaculis et massa id hendrerit. Duis id pulvinar velit. Pellentesque fringilla, leo in vulputate feugiat, est sapien faucibus ligula, quis malesuada diam tortor sit amet ante."
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

