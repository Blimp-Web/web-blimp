var scroll_distance = 0;
var max_scroll = 10;
var num = 0;
num_index = []
total_scroll = 0
var num_add = 1
var img2_list = []
var price_list = []
var store_names = []



var database = firebase.database();



//var ref = database.ref("Women's Clothing:");

//ref.on('value', gotData, errData)





addEventListener('scroll', () => {
    scroll_distance += 1;
    total_scroll += 1;
    console.log((num_index[0] + 1) + " @#@#@#@#@#")
    console.log(scroll_distance);
    if (scroll_distance == max_scroll){
        scroll_distance = 0;
        num += num_add;
        num_index.push(num)
        console.log("new scrooll"); 
        let new_it = document.createElement('div');
        let img = document.createElement('img');
        let img2 = document.createElement('img');
        let title = document.createElement('h1');
        let prices = document.createElement('h1');
        let store_name = document.createElement('h2');
        let form = document.createElement('form');
        let in1 = document.createElement('input');
        let in2 = document.createElement('input');
        let in3 = document.createElement('input');
        let in4 = document.createElement('input');
        let in5 = document.createElement('input');
        let in6 = document.createElement('input');
        let in7 = document.createElement('input');
        let in8 = document.createElement('input');
        let in9 = document.createElement('input');
        let in10 = document.createElement('input');
        let in11 = document.createElement('input');
        let in12 = document.createElement('input');
        let in13 = document.createElement('input');
        let in14 = document.createElement('img');
        let select = document.createElement('select');
        let o1 = document.createElement('option')
        let o2 = document.createElement('option');
        let o3 = document.createElement('option');
        let o4 = document.createElement('option');
        let o5 = document.createElement('option');
        let new_style = document.createElement('button');

        var niche = "Men's Clothing:";
        var img_list = []
        title_list = []
        var color_list = []
        var color_list2 = []
        var color_list3 = []
        var color_list4 = []
        var color_list5 = []

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
              var color = data[k].color;
              var color2 = data[k].color2;
              var color3 = data[k].color3;
              var color4 = data[k].color4;
              var color5 = data[k].color5;
              var titlex = data[k].title;
              var price = data[k].price;
              var store_name = database.sn;
              img_list.push(JSON.stringify(image));
              img2_list.push(JSON.stringify(image2));
              title_list.push(JSON.stringify(titlex));
              price_list.push(JSON.stringify(price));
              color_list.push(JSON.stringify(color));
              color_list2.push(JSON.stringify(color2));
              color_list3.push(JSON.stringify(color3));
              color_list4.push(JSON.stringify(color4));
              color_list5.push(JSON.stringify(color5));
              store_names.push(JSON.stringify(store_name));
              console.log(store_name);
              console.log("yes");


    
    
          }
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });




        new_it.setAttribute("id", ("newitem" + num));
        new_it.setAttribute('class', "widget");
        img.setAttribute("class", ('imgg'));
        console.log(img_list);
        img.setAttribute('src', img_list[num].replace(/['"]+/g, ''));
        img.setAttribute('id', ("item_img" + num));

        
        // .replace(/['"]+/g, '')
        title.setAttribute('id', 'titletext');
        title.innerHTML = title_list[num].replace(/['"]+/g, ''); //.replace(/['"]+/g, '')
        store_name.setAttribute('id', 'store-name');
        store_name.innerHTML = "QRWR Official Store";
        prices.setAttribute('id', ('price_item' + num));
        prices.setAttribute('class', 'prices');
        prices.innerHTML = parseFloat(price_list[num].split('-')[0].replace('"', '').replace('$', '').split('.')[0].replace("US", '') * 1.25) + '$';

        var new_it_num = document.getElementById("newitem" + num);
        var gh = (num_index[0] + 1)


        document.body.appendChild(new_it);
        document.body.appendChild(new_it);
        document.getElementById("newitem" + num).appendChild(img);
        //document.getElementById("newitem" + num).appendChild(img2); 
        document.getElementById('newitem' + num).appendChild(title);
        document.getElementById('newitem' + num).appendChild(store_name);
        document.getElementById('newitem' + num).appendChild(prices);
        //document.getElementById("newitem" + num).appendChild(in1)

        var bodyRect = document.body.getBoundingClientRect(),
        elemRect = document.getElementById('newitem' + (num_index[0] + 1)).getBoundingClientRect(),
        offset   = elemRect.top - bodyRect.top;
      
        console.log(offset + "important new element vertical offset from body" );
        console.log('$#$#$#$#$#$##$#$##$#$#$#$#$#$#$#$#$#$##$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$##$#$###$#$#$#$#$#')
      
          if (elemRect.top < 0){
            document.body.removeChild(document.getElementById('newitem' + (num_index[0] + 1)));
            //num -= 1;
            num_index.shift();
            img2_list.shift();
      
        }
        if (num >= 20){
          num_add = 0;
        }

      form.setAttribute('id', ("formid" + num));
      form.setAttribute('class', "form-style");
      form.setAttribute('target', "paypal");
      form.setAttribute('action', "https://www.paypal.com/cgi-bin/webscr");
      form.setAttribute('method', "post");

      document.getElementById("newitem" + num).appendChild(form);

      in1.setAttribute('type', "hidden");
      in1.setAttribute('name', "cmd");
      in1.setAttribute('value', "_cart");

      document.getElementById("formid" + num).appendChild(in1);

      in2.setAttribute('type', "hidden");
      in2.setAttribute('name', "business");
      in2.setAttribute('value', "maksym.vovk@outlook.com");

      document.getElementById("formid" + num).appendChild(in2);

      in3.setAttribute('type', "hidden");
      in3.setAttribute('name', 'lc');
      in3.setAttribute('value', 'US');

      document.getElementById("formid" + num).appendChild(in3);

      in4.setAttribute('type', "hidden");
      in4.setAttribute('name', "item_name");
      in4.setAttribute('value', title_list[num].replace('""', '')); //name //title_list[num]

      document.getElementById("formid" + num).appendChild(in4);

      in5.setAttribute('type', "hidden");
      in5.setAttribute('name', "amount");
      in5.setAttribute('value', parseFloat(price_list[num].split('-')[0].replace('"', '').replace('$', '').split('.')[0].replace("US", '') * 1.25)); //price

      document.getElementById("formid" + num).appendChild(in5)

      in6.setAttribute('type', "hidden");
      in6.setAttribute('name', "currency_code");
      in6.setAttribute('value', "USD");

      document.getElementById("formid" + num).appendChild(in6);

      in7.setAttribute('type', "hidden");
      in7.setAttribute('name', "button_subtype");
      in7.setAttribute('value', "products");

      document.getElementById("formid" + num).appendChild(in7);

      in8.setAttribute('type', "hidden");
      in8.setAttribute('name', "no_note");
      in8.setAttribute('value', "0");

      document.getElementById("formid" + num).appendChild(in8);

      in9.setAttribute('type', "hidden");
      in9.setAttribute('name', "tax_rate");
      in9.setAttribute('value', "0.000");

      document.getElementById("formid" + num).appendChild(in9);

      in10.setAttribute('type', "hidden");
      in10.setAttribute('name', "shipping");
      in10.setAttribute('value', "0.00");

      document.getElementById("formid" + num).appendChild(in10);

      in11.setAttribute('type', "hidden");
      in11.setAttribute('name', "add");
      in11.setAttribute('value', "1");

      document.getElementById("formid" + num).appendChild(in11);

      in12.setAttribute('type', "hidden");
      in12.setAttribute('name', "bn");
      in12.setAttribute('value', "PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest");

      document.getElementById("formid" + num).appendChild(in12);

      in13.setAttribute('type', "image");
      in13.setAttribute('style', 'position: relative; top: -500px; left: -10px;')
      in13.setAttribute('class', 'add_t_c')
      in13.setAttribute('src', "add_to_cart.png"); //https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif
      in13.innerHTML = 'Add to Cart'
      in13.setAttribute('border', "0");
      in13.setAttribute('name', "submit");
      in13.setAttribute('alt', "Add to Cart");  //PayPal - The safer, easier way to pay online!

      document.getElementById("formid" + num).appendChild(in13);

      in14.setAttribute('alt', "");
      in14.setAttribute('border', "0");
      in14.setAttribute('value', "1");
      in14.setAttribute('src', "https://www.paypalobjects.com/en_US/i/scr/pixel.gif")
      in14.setAttribute('width', "1");
      in14.setAttribute('height', "1");

      document.getElementById("formid" + num).appendChild(in14);

      select.setAttribute('id', "select" + num);
      select.setAttribute('class', 'colors')

      document.getElementById("newitem" + num).appendChild(select);

      o1.setAttribute('id', 'o1' + num)
      o1.setAttribute('value', color_list[num].replace(/['"]+/g, ''));
      o1.innerHTML = color_list[num].replace(/['"]+/g, '');

      o2.setAttribute('id', 'o2' + num)
      o2.setAttribute('value', color_list2[num]);
      o2.innerHTML = color_list2[num];

      o3.setAttribute('id', 'o3' + num)
      o3.setAttribute('value', color_list3[num]);
      o3.innerHTML = color_list3[num];

      o4.setAttribute('id', 'o4' + num)
      o4.setAttribute('value', color_list4[num]);
      o4.innerHTML = color_list4[num];

      o5.setAttribute('id', 'o5' + num)
      o5.setAttribute('value', color_list4[num]);
      o5.innerHTML = color_list4[num];

      document.getElementById('select' + num).appendChild(o1);
      document.getElementById('select' + num).appendChild(o2);
      document.getElementById('select' + num).appendChild(o3);
      document.getElementById('select' + num).appendChild(o4);
      document.getElementById('select' + num).appendChild(o5);

      new_style.setAttribute('id', 'ns_btn');
      new_style.setAttribute('onclick', 'new_i_s()')
      new_style.innerHTML = 'View More'

      document.getElementById("newitem" + num).appendChild(new_style);

      /*var bodyRect = document.body.getBoundingClientRect(),
      elemRect = document.getElementById('newitem' + (num_index[0] + 1)).getBoundingClientRect(),
      offset   = elemRect.top - bodyRect.top;
    
      console.log(offset + "important new element vertical offset from body" );
      console.log('$#$#$#$#$#$##$#$##$#$#$#$#$#$#$#$#$#$##$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$##$#$###$#$#$#$#$#')
    
        if (elemRect.top < 0){
          document.body.removeChild(document.getElementById('newitem' + (num_index[0] + 1)));
          //num -= 1;
          num_index.shift();
          img2_list.shift();
    
      }
      if (num >= 20){
        num_add = 0;
      }*/


    };
});

function new_i_s(){
  window.location.href="viewmore.html";

  const im1 = document.getElementById('item_img' + (num_index[0] + 1)).getAttribute('src');
  const o1 = document.getElementById('o1' + (num_index[0] + 1)).innerHTML
  const o2 = document.getElementById('o2' + (num_index[0] + 1)).innerHTML
  const o3 = document.getElementById('o3' + (num_index[0] + 1)).innerHTML
  const o4 = document.getElementById('o4' + (num_index[0] + 1)).innerHTML
  const o5 = document.getElementById('o5' + (num_index[0] + 1)).innerHTML
  const pricee = document.getElementById('price_item' + (num_index[0] + 1)).innerHTML

  console.log(document.getElementById('item_img' + (num_index[0] + 1)).getAttribute('src'));
  //const surname = document.getElementById('surname').value;

  // to set into local storage
  /* localStorage.setItem("NAME", name);
  localStorage.setItem("SURNAME", surname); */

  //CN = current number//
  
  sessionStorage.setItem("IMG1", im1);
  sessionStorage.setItem('O1', o1);
  sessionStorage.setItem('O2', o2);
  sessionStorage.setItem('O3', o3);
  sessionStorage.setItem('O4', o4);
  sessionStorage.setItem('O5', o5);
  sessionStorage.setItem("PRICE", pricee.replace('$', ''));
  sessionStorage.setItem('CN', parseFloat(num_index[0] + 1));

  alert(sessionStorage.getItem('CN'));
  console.log(sessionStorage.getItem('CN') + " *******************************************")
  //sessionStorage.setItem("SURNAME", surname);

  return;
}

function off(){
  var bodyRect = document.body.getBoundingClientRect(),
  elemRect = document.getElementById('newitem' + (num_index[0] + 1)).getBoundingClientRect(),
  offset   = elemRect.top - bodyRect.top;

  console.log(offset + "important new element vertical offset from body" );
  console.log('$#$#$#$#$#$##$#$##$#$#$#$#$#$#$#$#$#$##$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$##$#$###$#$#$#$#$#')

    if (elemRect.top < 0){
      document.body.removeChild(document.getElementById('newitem' + (num_index[0] + 1)));
      //num -= 1;
      num_index.shift();

  }

};



function tst(){
  firebase.database().ref('users/' + document.getElementById('result-name').innerHTML.replace('.','')).on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      
      var data = childSnapshot.val();

      console.log(JSON.stringify(data.userName));
      document.getElementById('userName11').innerHTML = (JSON.stringify(data.userName).replace('""',''))

    });

  });
}
function new_item_button(){
  window.location.href="/static/newitem.html"

}



function ifUser(){

  if (document.getElementById('result-name').innerHTML == ''){
    let login = document.createElement('a');

    login.setAttribute('href', 'signin.html');
    login.setAttribute('id', 'loginInButton');
    login.innerHTML = 'signin';
    document.body.appendChild(login);
  }
  else{
    let profile = document.createElement('a');

    profile.setAttribute('onclick', 'openProfile()');
    profile.setAttribute('id', 'profileButton');
    profile.innerHTML = 'PROFILE ';
    document.body.appendChild(profile);

    let new_item_button = document.createElement('button');

    new_item_button.setAttribute('class', 'createPost');
    new_item_button.setAttribute('onclick', 'new_item_button()');
    new_item_button.innerHTML = 'New Item';
    document.body.appendChild(new_item_button);
  }

}

function openProfile(){
   let profileBox = document.createElement('div');
   let ProfileH1 = document.createElement('h1');
   let profileUserName = document.createElement('h2');
   let profileUserEmail = document.createElement('h2');
   let box = document.getElementById('profileContainer');
   let redButtonX = document.createElement('button');

   profileBox.setAttribute('id', 'profileContainer');
   ProfileH1.innerHTML = 'Profile';
   ProfileH1.setAttribute('id', 'profileH1');
   profileUserName.innerHTML = 'User: ' + document.getElementById('userName11').innerHTML;
   profileUserName.setAttribute('id', 'profileTxt');
   profileUserEmail.innerHTML = 'Email: ' + document.getElementById('result-name').innerHTML;
   profileUserEmail.setAttribute('id', 'profileTxt2');


   redButtonX.setAttribute('id', 'redButtonX')
   redButtonX.innerHTML = 'X';
   redButtonX.setAttribute('onclick', 'closeProfile()')

   document.body.appendChild(profileBox);
   profileBox.appendChild(ProfileH1);
   profileBox.appendChild(profileUserName);
   profileBox.appendChild(profileUserEmail);
   profileBox.appendChild(redButtonX);

}
function closeProfile(){
  document.body.removeChild(document.getElementById('profileContainer'))
}

/*function offf(){
  var bodyRect = document.body.getBoundingClientRect(),
  elemRect = document.getElementById('newitem' + (num_index[0] + 1)).getBoundingClientRect(),
  offset   = elemRect.top - bodyRect.top;

  console.log(elemRect.top);
  console.log(bodyRect.top);

  console.log(offset + "important new element vertical offset from body" );
  console.log('$#$#$#$#$#$##$#$##$#$#$#$#$#$#$#$#$#$##$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$##$#$###$#$#$#$#$#')

};*/









//<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
//<input type="hidden" name="cmd" value="_cart">1
//<input type="hidden" name="business" value="maksym.vovk@outlook.com">2
//<input type="hidden" name="lc" value="US">3
//<input type="hidden" name="item_name" value="x">4
//<input type="hidden" name="amount" value="1.00">5
//<input type="hidden" name="currency_code" value="USD">6
//<input type="hidden" name="button_subtype" value="products">7
//<input type="hidden" name="no_note" value="0">8
//<input type="hidden" name="tax_rate" value="0.000">9
//<input type="hidden" name="shipping" value="0.00">10
//<input type="hidden" name="add" value="1">11
//<input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest">12
//<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">13
//<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">14
//</form>


/*<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
<input type="hidden" name="cmd" value="_cart">
<input type="hidden" name="business" value="maksym.vovk@outlook.com">
<input type="hidden" name="lc" value="US">
<input type="hidden" name="item_name" value="Casio Watch">
<input type="hidden" name="button_subtype" value="products">
<input type="hidden" name="no_note" value="0">
<input type="hidden" name="currency_code" value="CAD">
<input type="hidden" name="tax_rate" value="0.000">
<input type="hidden" name="shipping" value="0.00">
<input type="hidden" name="add" value="1">
<input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest">
<table>
<tr><td><input type="hidden" name="on0" value="colors">colors</td></tr><tr><td><select name="os0">
	<option value="Option 1">Option 1 $1.00 CAD</option>
	<option value="Option 2">Option 2 $1.00 CAD</option>
	<option value="Option 3">Option 3 $1.00 CAD</option>
	<option value="Option 4">Option 4 $1.00 CAD</option>
	<option value="Option 5">Option 5 $1.00 CAD</option>
	<option value="Option 6">Option 6 $1.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="option_select0" value="Option 1">
<input type="hidden" name="option_amount0" value="1.00">
<input type="hidden" name="option_select1" value="Option 2">
<input type="hidden" name="option_amount1" value="1.00">
<input type="hidden" name="option_select2" value="Option 3">
<input type="hidden" name="option_amount2" value="1.00">
<input type="hidden" name="option_select3" value="Option 4">
<input type="hidden" name="option_amount3" value="1.00">
<input type="hidden" name="option_select4" value="Option 5">
<input type="hidden" name="option_amount4" value="1.00">
<input type="hidden" name="option_select5" value="Option 6">
<input type="hidden" name="option_amount5" value="1.00">
<input type="hidden" name="option_index" value="0">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>*/
