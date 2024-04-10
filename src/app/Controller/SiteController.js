class SiteController{
    // [Get]/
     index(req,res){
         res.render("Home");
     }
     // [Get]/ :slug
     show(req,res){
         res.send("Search")
     } 
 }
 
 module.exports = new SiteController
 