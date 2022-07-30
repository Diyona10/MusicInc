
let musics=[
    {
        id:1,
        name:"Akhiyaan",
        artist:"Mitraz",
        audioSrc:"audios/Akhiyaan - Mitraz.mp3",
        imageSrc:"images/66387.jpg"
    },
    {
        id:2,
        name:"GO Down Deh",
        artist:"Sean Paul",
        audioSrc:"audios/Go Down Deh_320(PagalWorld).mp3",
        imageSrc:"images/47882.jpg"
    },
    {
        id:3,
        name:"Sugar n Brownies",
        artist:"Dharia",
        audioSrc:"audios/Sugar n Brownies - DHARIA_320- [PagalWorld.NL].mp3",
        imageSrc:"images/70861.jpg"
    },
    {
        id:4,
        name:"Voodoo",
        artist:"Badshah",
        audioSrc:"audios/Voodoo Badshah 320 Kbps.mp3",
        imageSrc:"images/Voodoo-English-2022-20220420053630-500x500.jpg"
    },
    {
        id:5,
        name:"Galliyan Returns",
        artist:"Manoj Muntashir",
        audioSrc:"audios/Galliyan Returns - Ek Villain Returns.mp3",
        imageSrc:"images/MUSIC_Galliyan Returns (From _Ek Villain Returns_)_1659166402242.jpg"
    },
    
]

for( let i=0;i<musics.length;i++)
{
    let tile=document.createElement("div");
    tile.classList.add("tile");
    
    let thumbnail= document.createElement("div");
    thumbnail.classList.add("thumbnail")
    
    let img=document.createElement("img");
    img.src=musics[i].imageSrc;
    
    thumbnail.append(img);
    tile.append(thumbnail);
    
    let description=document.createElement("div");
    description.classList.add("description");
    
    let h2=document.createElement("h2");
    h2.append(musics[i].name)
    description.append(h2)
    
    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);
    
    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });
    
    document.querySelector(".music-list").append(tile)
    
}


function playMusic(music)
{
    document.querySelector(".main-thumbnail-img").src = music.imageSrc;
    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();
}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
}