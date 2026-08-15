function updateBio(){

    let Name = document.getElementById("Name").value;
    let file = document.getElementById("source").files[0];
    let bio = document.getElementById("bio").value;

    document.getElementById('h1').innerHTML = Name;
    document.getElementById('h2').innerHTML = bio;

    if(file){
        let reader = new FileReader();
        reader.onload = function(e){
            document.getElementById('src').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }

}
