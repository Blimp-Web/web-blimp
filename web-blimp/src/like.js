window.addEventListener('load', () =>{
    let like_button = document.getElementById('like_button')
    like_button.onclick(like())
})



function like(){
    let likes = document.getElementById('like_count').innerHTML

    let like_button = document.getElementById('like_button')

    likes






}



firebase.database().ref('users/' + document.getElementById('result-name').innerHTML.replace('.','')).on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      
      var data = childSnapshot.val();

      console.log(JSON.stringify(data.userName));

    });

  });



  firebase.database().ref(/users/+ sessionStorage.getItem('NAME').replace('.','') + '/liked/' + title).on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      
      var data = childSnapshot.val();

      console.log(JSON.stringify(data.like));


    });

  });

    