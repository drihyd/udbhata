function printheader() {


   document.write("<header id=\"Header\">");
   document.write(" <div class=\"container header\">");
   document.write(" <div class=\"row\">");
   document.write(" <div class=\"col-xs-6 col-sm-4\">");
   document.write(" <div class=\"logo\">");
   document.write(" <a href=\"index.html\">  <img src=\"assets/img/Logo.png\" class=\"img-fluid\" alt=\"udbhata\"> </a>");
   document.write(" <\/div>");
   document.write(" <\/div>");
   document.write("<div class=\"col-xs-6 col-sm-8\">");
   document.write("   <input type=\"checkbox\" id=\"chk\">");
   document.write("   <label for=\"chk\" class=\"show-menu-btn\">");
   document.write("  <div class=\"menuu\">  <i class=\"fa fa-bars\"><\/i> <\/div>");
   document.write("  <\/label>");
   document.write(" <ul class=\"menu\">");
   document.write("   <a href=\"index.html\" class=\" link_1\" >Home<\/a>");
   document.write("   <a href=\"solution.html \" class=\"link_1\">Solutions<\/a>");
   document.write("   <a href=\"qoris.html \" class=\"link_1\">Qoris<\/a>");
   document.write("  <a href=\"blog.html\">Blog<\/a>");
  
   document.write(" <a href=\"#about-contact\" class=\"inner-link link_1 contact_us\">Contact<\/a>");
   document.write(" <label for=\"chk\" class=\"hide-menu-btn\">");
   document.write(" <i class=\"fa fa-times\"><\/i>");
   document.write("   <\/label>");
   document.write("   <\/ul>");
   document.write(" <\/div>");
   document.write(" <\/div>");
   document.write(" <\/div>");
   document.write(" <\/header> ");
}

var jump=function(e)
{
   if (e){
       e.preventDefault();
       var target = $(this).attr("index.html#About-us");
   }else{
       var target = location.hash;
   }

   $('html,body').animate(
   {
       scrollTop: $(target).offset().top-180
   },1000,function()
   {
       location.hash = target;
   });

}

$('html, body').hide();

$(document).ready(function()
{
    $('a[href^=#About-us]').bind("click", jump);

    if (location.hash){
        setTimeout(function(){
            $('html, body').scrollTop(0).show();
            jump();
        }, 0);
    }else{
        $('html, body').show();
    }

   $(function(){

    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        console.log(urlRegExp)
        $('.menu a').each(function(){
            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('active');
            }
        });

});
});

