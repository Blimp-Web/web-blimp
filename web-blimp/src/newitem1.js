window.addEventListener('load', function() {
    document.querySelector('input[id="photo"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url

            //sessionStorage.setItem('file', URL.createObjectURL(this.files[0]))
            //firebase.storage().ref('file/'+'faaart.png').put(this.files[0])


        }
        
        //})
    });


  });

var selectedFile; 
function getfile() 
{ 
    var pic = document.getElementById("photo"); 

     // selected file is that file which user chosen by html form 
    selectedFile = pic.files[0]; 

     // make save button disabled for few seconds that has id='submit_link' 
    document.getElementById('submit_link').removeAttribute('disabled'); 
    console.log(selectedFile);
    //myfunction(); // call below written function 
}
 
function myfunction() 
{ 
    // select unique name for everytime when image uploaded 
    // Date.now() is function that give current timestamp 
    var name = sessionStorage.getItem('NAME').replace('.', '') + Date.now(); 

    // make ref to your firebase storage and select images folder 
    var storageRef = firebase.storage().ref('/images/'+ name); 

    // put file to firebase  
    var uploadTask = storageRef.put(selectedFile); 


    // all working for progress bar that in html 
    // to indicate image uploading... report 
    uploadTask.on('state_changed', function(snapshot){ 
      var progress =  
       (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
        var uploader = document.getElementById('uploader'); 
        uploader.value=progress; 
        switch (snapshot.state) { 
          case firebase.storage.TaskState.PAUSED: 
            console.log('Upload is paused'); 
            break; 
          case firebase.storage.TaskState.RUNNING: 
            console.log('Upload is running'); 
            break; 
        } 
    }, function(error) {console.log(error); 
    }, function() { 

         // get the uploaded image url back 
         uploadTask.snapshot.ref.getDownloadURL().then( 
          function(downloadURL) { 

         // You get your url from here 
         var uEmail = sessionStorage.getItem('NAME')
         firebase.database().ref('Images/'+ uEmail.replace('.','')).push({
             imaeg1: downloadURL,
             title: document.getElementById('title_text').value,
             price: document.getElementById('price_float').value,
             shipping: document.getElementById('shipping_float').value,
             tax: document.getElementById('tax_float').value,
             paypal: document.getElementById('paypalemail').value,
             currency: document.getElementById('curr').value,
             store_name: sessionStorage.getItem('NAME'),
             likes: 0


         });
          console.log('File available at', downloadURL); 
          //document.getElementById('img12').setAttribute('src', downloadURL)

        // print the image url  
         console.log(downloadURL); 
        document.getElementById('submit_link').removeAttribute('disabled'); 
      }); 
    }); 
};


function next(){
  document.getElementById('headertext').setAttribute('hidden','true')
  document.getElementById('title_text').setAttribute('hidden','true')
  document.getElementById('photo').setAttribute('hidden','true')
  document.getElementById('myImg').setAttribute('style','border: none;')
  document.getElementById('myImg').setAttribute('width','0px')
  document.getElementById('myImg').setAttribute('height','0px')
  document.getElementById('next').setAttribute('hidden', 'true')
  document.getElementById('tut_img').setAttribute('hidden', 'true')

  document.getElementById('price_float').removeAttribute('hidden')
  document.getElementById('shipping_float').removeAttribute('hidden')
  document.getElementById('tax_float').removeAttribute('hidden')
  document.getElementById('paypalemail').removeAttribute('hidden')
  //document.getElementById('uploader').removeAttribute('hidden')
  document.getElementById('curr').removeAttribute('hidden')
  //document.getElementById('submit_link').removeAttribute('hidden')
  document.getElementById('curr_text').removeAttribute('hidden')
  document.getElementById('headertext2').removeAttribute('hidden')
  document.getElementById('curr_container').removeAttribute('hidden')
  document.getElementById('back').removeAttribute('hidden')
  document.getElementById('tut_pay').removeAttribute('hidden')
  document.getElementById('preview').removeAttribute('hidden')


}
function back(){
  document.getElementById('price_float').setAttribute('hidden','true')
  document.getElementById('shipping_float').setAttribute('hidden','true')
  document.getElementById('tax_float').setAttribute('hidden','true')
  document.getElementById('paypalemail').setAttribute('hidden','true')
  document.getElementById('uploader').setAttribute('hidden','true')
  document.getElementById('curr').setAttribute('hidden','true')
  document.getElementById('submit_link').setAttribute('hidden','true')
  document.getElementById('curr_text').setAttribute('hidden','true')
  document.getElementById('headertext2').setAttribute('hidden','true')
  document.getElementById('curr_container').setAttribute('hidden','true')
  document.getElementById('back').setAttribute('hidden', 'true')
  document.getElementById('tut_pay').setAttribute('hidden', 'true')
  document.getElementById('preview').setAttribute('hidden', 'true')

  document.getElementById('headertext').removeAttribute('hidden')
  document.getElementById('title_text').removeAttribute('hidden')
  document.getElementById('photo').removeAttribute('hidden')
  document.getElementById('myImg').setAttribute('style','border: 2px solid black;')
  document.getElementById('myImg').setAttribute('width','320px')
  document.getElementById('myImg').setAttribute('height','320px')
  document.getElementById('next').removeAttribute('hidden')
  document.getElementById('tut_img').removeAttribute('hidden')
}
function back2(){
  document.getElementById('myImg').setAttribute('style','border: none;')
  document.getElementById('myImg').setAttribute('width','0px')
  document.getElementById('myImg').setAttribute('height','0px')
  document.getElementById('preview_text').setAttribute('hidden', 'true')
  document.getElementById('preview_price').setAttribute('hidden', 'true')
  document.getElementById('back2').setAttribute('hidden', 'true')
  document.getElementById('preview_title_text').setAttribute('hidden', 'true')
  document.getElementById('submit_link').setAttribute('hidden','true')
  document.getElementById('uploader').setAttribute('hidden','true')

  document.getElementById('price_float').removeAttribute('hidden')
  document.getElementById('shipping_float').removeAttribute('hidden')
  document.getElementById('tax_float').removeAttribute('hidden')
  document.getElementById('paypalemail').removeAttribute('hidden')
  document.getElementById('uploader').removeAttribute('hidden')
  document.getElementById('curr').removeAttribute('hidden')
  document.getElementById('submit_link').removeAttribute('hidden')
  document.getElementById('curr_text').removeAttribute('hidden')
  document.getElementById('headertext2').removeAttribute('hidden')
  document.getElementById('curr_container').removeAttribute('hidden')
  document.getElementById('back').removeAttribute('hidden')
  document.getElementById('tut_pay').removeAttribute('hidden')
  document.getElementById('preview').removeAttribute('hidden')
}

function preview(){
  document.getElementById('price_float').setAttribute('hidden','true')
  document.getElementById('shipping_float').setAttribute('hidden','true')
  document.getElementById('tax_float').setAttribute('hidden','true')
  document.getElementById('paypalemail').setAttribute('hidden','true')
  document.getElementById('uploader').setAttribute('hidden','true')
  document.getElementById('curr').setAttribute('hidden','true')
  document.getElementById('submit_link').setAttribute('hidden','true')
  document.getElementById('curr_text').setAttribute('hidden','true')
  document.getElementById('headertext2').setAttribute('hidden','true')
  document.getElementById('curr_container').setAttribute('hidden','true')
  document.getElementById('back').setAttribute('hidden', 'true')
  document.getElementById('tut_pay').setAttribute('hidden', 'true')
  document.getElementById('preview').setAttribute('hidden', 'true')

  document.getElementById('myImg').setAttribute('width','320px')
  document.getElementById('myImg').setAttribute('height','320px')
  document.getElementById('myImg').setAttribute('style', 'position: relative; top: 1.5%;')
  document.getElementById('preview_text').removeAttribute('hidden')
  document.getElementById('preview_title_text').removeAttribute('hidden')
  document.getElementById('preview_title_text').innerHTML = document.getElementById('title_text').value
  document.getElementById('preview_title_text').setAttribute('style', 'position: relative; top: -81%; left: 25%; white-space: nowrap;')
  document.getElementById('preview_price').removeAttribute('hidden')
  document.getElementById('preview_price').innerHTML = document.getElementById('price_float').value + '$'
  document.getElementById('back2').removeAttribute('hidden')
  document.getElementById('submit_link').removeAttribute('hidden')
  document.getElementById('uploader').removeAttribute('hidden')
}

