const assert = require('chai').assert;

const cheerio = require('cheerio')
const fs = require("fs")
//const cjq = require('chai-jquery')

     fs.readFile("./index.html", "utf-8", (err, data)=>{
            if(err) {
                done(err)
                return
            }
            let $ = cheerio.load(data)

describe("Html-form Test", function() {
    it("Form exists", function(done) {
   
          let form = $("html > body > form")
            assert(form, "Exists form")
            done()
        })

    it('form action and method', function() {
  assert.exists('form', 'exists form')
 assert.equal($('form').attr("method"), "get");
 assert.equal($('form').attr("action"), "submitform");
           
});
     it('form input contents', function() {


 $('input').attr('type').length > 0;
 assert.equal($('button').attr("type"), "submit", "Add your pizza to the cart");

 assert.equal($('input').attr("type"), "radio", "radio input");
  
})

    })
     
    
})


describe("HTML", function() {
    it("HTML H3", function(done){
        fs.readFile("./index.html", (err, data)=> {
            if(err)
                return done(err)
            let $ = cheerio.load(data)
      let h3 = $("html > body > h3")
            assert(h3, "Exists h3")
            assert(h3.length > 0, "h3 array")
            assert(h3[0].children, "h3 has text")
            assert(h3[0].children[0].data.toLowerCase() == "pizza builder", "h3 textvalue")
            done()
        })
    })

})