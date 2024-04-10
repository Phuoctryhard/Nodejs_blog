class NewController{
   // [Get]/
    index(req,res){
        res.render("search");
    }
    // [Get]/ :slug
    show(req,res){
        res.send("slug")
    } 
}

module.exports = new NewController