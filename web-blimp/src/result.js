window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const name = sessionStorage.getItem('NAME');
    
    document.getElementById('result-name').innerHTML = name; //replace('$', '')

    firebase.database().ref('users/' + document.getElementById('result-name').innerHTML.replace('.','')).on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          
          var data = childSnapshot.val();
    
          console.log(JSON.stringify(data.userName));
          document.getElementById('userName11').innerHTML = (JSON.stringify(data.userName).replace('"','').replace('"',''))
    
        });
    
      });

})