var database = firebase.database();

var niche = "Men's Clothing:";
var img_list = []
var img2_list = []
var img3_list = []
var img4_list = []
var img4_list = []
var img5_list = []
title_list = []
var color_list = []
var color_list2 = []
var color_list3 = []
var color_list4 = []
var color_list5 = []
//var price_list = []

window.addEventListener('load', () => {




    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */

    const c_n = sessionStorage.getItem('CN');
    console.log(c_n);
    
    const im1 = sessionStorage.getItem('IMG1');
    const o1 = sessionStorage.getItem('O1');
    const o2 = sessionStorage.getItem('O2');
    const o3 = sessionStorage.getItem('O3');
    const o4 = sessionStorage.getItem('O4');
    const o5 = sessionStorage.getItem('O5');
    const price1 = sessionStorage.getItem('PRICE');
    
    document.getElementById('img1').setAttribute('src', im1);
    //document.getElementById('img11').setAttribute('src', img1);
    document.getElementById('option1').innerHTML = '01';
    document.getElementById('option2').innerHTML = '02';
    document.getElementById('option3').innerHTML = '03';
    document.getElementById('option4').innerHTML = '04';
    document.getElementById('option5').innerHTML = '05';
    document.getElementById('price').innerHTML = price1 +'$';

    /*document.getElementById('option1').innerHTML = o1;
    document.getElementById('option2').innerHTML = o2;
    document.getElementById('option3').innerHTML = o3;
    document.getElementById('option4').innerHTML = o4;
    document.getElementById('option5').innerHTML = o5;
    document.getElementById('price').innerHTML = price1;*/

    var db = firebase.database()
    var ref = db.ref('My_Products/' + niche);
    
    // Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", function(snapshot) {
      data = snapshot.val();
      keys = Object.keys(data);
      for (var i = 0 ; i < keys.length; i++){
          var k = keys[i]
          var image = data[k].image;
          var image2 = data[k].image2;
          var image3 = data[k].image3;
          var image4 = data[k].image4
          var image5 = data[k].image5
          var titlex = data[k].title;
          //var price = data[k].price;
          img_list.push(JSON.stringify(image));
          //price_list.push(JSON.stringify(price));

          if (image2 == undefined){
            img2_list.push(JSON.stringify(image2)); 
          }
          else{
            img2_list.push(JSON.stringify(image2).replace(/['"]+/g, ''));
          }
          if (image3 == undefined){
            img3_list.push(JSON.stringify(image3)); 
          }
          else{
            img3_list.push(JSON.stringify(image3).replace(/['"]+/g, ''));
          }
          if (image4 == undefined){
            img4_list.push(JSON.stringify(image4)); 
          }
          else{
            img4_list.push(JSON.stringify(image4).replace(/['"]+/g, ''));
          }
          if (image5 == undefined){
            img5_list.push(JSON.stringify(image5)); 
          }
          else{
            img5_list.push(JSON.stringify(image5).replace(/['"]+/g, ''));
          }

          title_list.push(JSON.stringify(titlex));
          document.getElementById('title').innerHTML = title_list[sessionStorage.getItem('CN')];
          document.getElementById('img2').setAttribute('src', img2_list[sessionStorage.getItem('CN')]);
          document.getElementById('img3').setAttribute('src', img3_list[sessionStorage.getItem('CN')]);
          document.getElementById('img4').setAttribute('src', img4_list[sessionStorage.getItem('CN')]);
          document.getElementById('img5').setAttribute('src', img5_list[sessionStorage.getItem('CN')]);
          document.getElementById('img11').setAttribute('src', sessionStorage.getItem('IMG1'));
          //document.getElementById('price').innerHTML = price_list[sessionStorage.getItem('CN')];
          //console.log(price_list);

          
          console.log(img2_list);
          console.log("yes");




      }

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });


})


function body_hover(){
    document.getElementById('img1').setAttribute('src', sessionStorage.getItem('IMG1')); //document.getElementById('img1').getAttribute('src'));
    document.getElementById('num_color').innerHTML = '01';
}

function img2_hover(){

    document.getElementById('img1').setAttribute('src', document.getElementById('img2').getAttribute('src'));
    document.getElementById('num_color').innerHTML = '02';
}

function img3_hover(){

    document.getElementById('img1').setAttribute('src', document.getElementById('img3').getAttribute('src'));
    document.getElementById('num_color').innerHTML = '03';
}

function img4_hover(){

    document.getElementById('img1').setAttribute('src', document.getElementById('img4').getAttribute('src'));
    document.getElementById('num_color').innerHTML = '04';
}

function img5_hover(){

    document.getElementById('img1').setAttribute('src', document.getElementById('img5').getAttribute('src'));
    document.getElementById('num_color').innerHTML = '05';
}
function Cart(){
  document.getElementById('item_name').setAttribute('value', document.getElementById('select').value + " " + title_list[sessionStorage.getItem('CN')]);
  document.getElementById('item_price').setAttribute('value', sessionStorage.getItem('PRICE')); //document.getElementById('select').value + " " + 
}


/*function get_new_it_it(){

    let select = document.createElement('select');
    let o1 = document.createElement('option')
    let o2 = document.createElement('option');
    let o3 = document.createElement('option');
    let o4 = document.createElement('option');
    let o5 = document.createElement('option');

    let h1 = document.createElement('h1')
        
    select.setAttribute('id', "select");
    select.setAttribute('class', 'colors')

    document.body.appendChild(select);

    o1.setAttribute('value', color_list[parseFloat(sessionStorage.getItem('CN'))].replace(/['"]+/g, ''));
    o1.innerHTML = color_list[parseFloat(sessionStorage.getItem('CN'))].replace(/['"]+/g, ''); //replace(/['"]+/g, '') //parseFloat(sessionStorage.getItem('CN'))

    o2.setAttribute('value', color_list2[parseFloat(sessionStorage.getItem('CN'))].replace(/['"]+/g, ''));
    o2.innerHTML = color_list2[parseFloat(sessionStorage.getItem('CN'))].replace(/['"]+/g, '');

    o3.setAttribute('value', color_list3[parseFloat(sessionStorage.getItem('CN'))].replace(/['"]+/g, ''));
    o3.innerHTML = color_list3[parseFloat(sessionStorage.getItem('CN'))].replace(/['"]+/g, '');

    o4.setAttribute('value', color_list4[parseFloat(sessionStorage.getItem('CN'))].replace(/['"]+/g, ''));
    o4.innerHTML = color_list4[parseFloat(sessionStorage.getItem('CN'))].replace(/['"]+/g, '');

    o5.setAttribute('value', color_list4[parseFloat(sessionStorage.getItem('CN'))].replace(/['"]+/g, ''));
    o5.innerHTML = color_list4[parseFloat(sessionStorage.getItem('CN'))].replace(/['"]+/g, '');

    document.getElementById('select').appendChild(o1);
    document.getElementById('select').appendChild(o2);
    document.getElementById('select').appendChild(o3);
    document.getElementById('select').appendChild(o4);
    document.getElementById('select').appendChild(o5);

    h1.innerHTML = color_list[parseFloat(sessionStorage.getItem('CN'))].replace(/['"]+/g, '');*/
    



    

