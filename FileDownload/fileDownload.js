function downloadFile(){
    fetch("https://api.imgflip.com/get_memes")
  .then((res) => res.json())
  .then((data) => {
        var memes = new Array();
        memes = data.data.memes;
        // console.log(memes);
        // const randomNumber = Math.floor(Math.random() * memes.length)

        const url = window.URL.createObjectURL(new Blob([memes[0]]));
        // const url = memes[randomNumber].url; 
        console.log(url)

        
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download','image.jpg');
        document.body.appendChild(link);
        link.click();
    })
}
