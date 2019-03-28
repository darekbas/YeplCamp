var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

commentSchema.pre("remove", function(next){
    // delete any references to this comment from campgrounds
    this.model("Campground").update(
        { },
        { "$pull": {"comments": this._id}},
        { "multi": true},
        next
    );
});

// commentSchema.pre("save", function(next){
//     // delete any references to this comment from campgrounds
//     this.model("Comment").update(
//         { },
//         { "$pull": {"comments": this._id}},
//         { "multi": true},
//         next
//     );
// });



module.exports = mongoose.model("Comment", commentSchema);