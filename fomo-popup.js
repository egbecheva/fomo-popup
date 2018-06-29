$(function() {
  var locations = [ "Australia","Canada","California", "Illinois", "Texas", "Pennsylvania", "Arizona", "Texas", "California", "Indiana", "Florida", "California", "Ohio", "North Carolina", "Texas", "Michigan", "Tennessee", "Washington", "Colorado", "Massachusetts", "Tennessee", "Maryland", "Oklahoma", "Kentucky", "Oregon", "Nevada", "Wisconsin", "New Mexico", "Arizona", "Missouri", "Arizona", "Virginia", "Georgia", "Colorado", "Nebraska", "Ohio", "Kansas", "Texas", "Louisiana", "Hawaii", "Aurora, Colorado", "Anaheim, California", "Alaska", "New Jersey", "Nevada", "Nebraska", "New York", "New Jersey", "Indiana", "Arizona", "Virginia", "Nevada", "Louisiana", "Nevada", "Idaho", "Alabama" ]
  
  var products = [
    {
      "name": "3D Printed Moon Lamp",
      "image": "https://cdn.shopify.com/s/files/1/0014/8465/2595/products/moo_grande.png?v=1528639171",
      "url": "https://www.themoonlamps.com/products/moon-lamp"
    },
    {
      "name": "3D Printed Jupiter Lamp",
      "image": "https://cdn.shopify.com/s/files/1/0014/8465/2595/products/Jupiter_grande.png?v=1528638089",
      "url": "https://www.themoonlamps.com/products/3d-printed-jupiter-lamp"
    },
    {
      "name": "3D Printed Earth Lamp",
      "image": "https://cdn.shopify.com/s/files/1/0014/8465/2595/products/earth_8eb195bf-ed51-4dd1-b804-2bf313413dbd_grande.png?v=1528639013",
      "url": "https://www.themoonlamps.com/products/3d-printed-earth-lamp"
    },
  ];   
  
  getProduct();
  getLocation();
  getTime();
  
  function getProduct() {
    var num = Math.floor(Math.random() * products.length);
    $(".product_name").text( (products[num].name) );
    $(".product_image").attr('src',products[num].image);
    $(".product_name").attr('href', (products[num].url) );
  }
  
  function getLocation() {
    var num = Math.floor(Math.random() * locations.length);
    $(".location").text( (locations[num]) );
  }
  
  function getTime() {
    var type    = [ "seconds", "minutes" ];
    var typeNo  = Math.floor( Math.random() * type.length );
    var time    = Math.round( Math.random() * 60 ) + 1;
    
    $(".number").text( time );
    $(".type").text( type[typeNo] );
  }
 
  (function loop() {
      var rand = Math.round(Math.random() * 5000 ) + 8000;
      setTimeout(function() {
        changeNotification();
        loop();  
      }, rand);
  }());
  
  function changeNotification() {
    showNotification();
    setTimeout(function() {
      hideNotification();
    }, 6000)
  }
  
  function showNotification() {
    $("#fomo").addClass("is-visible");
  }
  
  function hideNotification() {
    $("#fomo").removeClass("is-visible");
    setTimeout(function() {
      getProduct();
      getLocation();
      getTime();
    }, 500)
  }
  
});