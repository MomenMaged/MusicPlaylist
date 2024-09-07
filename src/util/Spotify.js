// const clientId = ""; //insert Spotify client id here
// const redirectUri = ""; //insert app url here
// let accessToken;
const audioList = [
  
    
  {
    id: 1,
    name: "Omry ebtada",
    artist: "tamer Hosny",
    album: "Omry ebtada",
    // uri: track.uri,
    preview: "https://serv10.mrmazika.com/dl/th/tamer-hosny/albums/omry-ebtdaa/01._Omry_Ebtada.mp3",
    image: "omry.jpeg"
  },
  {
    id: 2,
    name: "Awlny klam",
    artist: "tamer Hosny",
    album: "Khalek folazy",
    // uri: track.uri,
    preview: "https://serv10.mrmazika.com/songs_2021/MrMaZiKa.Com_tamr_hsni_kwlny_klam.mp3",
    image: "awlny.jpg"
  },
  {
  id: 3,
    name: "Hawwa",
    artist: "tamer Hosny",
    album: "Hormon al sa3ada",
    // uri: track.uri,
    preview: "https://serv10.mrmazika.com/songs_2024/MrMaZiKa.Com_krym_dyskw_klbi_dh_rah_mny.mp3",
    image: "hawwa.jpeg"
  },
  {
    id: 5,
    name: "Nasene leh",
    artist: "tamer hosny",
    album: "3esh bsho2ak",
    // uri: track.uri,
    preview: "https://serv10.mrmazika.com/dl/th/tamer-hosny/albums/eish-besho2ak/03._Nasseeny_Leih.mp3",
    image: "Tamer.jpg"
  },
  {
    id: 12,
    name: "Habit ya alby",
    artist: "amr diab",
    album: "El lelady",
    // uri: track.uri,
    preview: "https://serv10.mrmazika.com/dl/3en/amr-diab/albums/al-leila/06_Habeet_Ya_Alby.mp3",
    image: "habit.jpg"
  },
  {
    id: 6,
    name: "Sa3t al fora2",
    artist: "amr diab",
    album: "El lela",
    // uri: track.uri,
    preview: "https://serv10.mrmazika.com/dl/3en/amr-diab/albums/shoft-elayam/07._Saaet_El_Foraaa.mp3",
    image: "unnamed.jpg"
  },
  
  {
    id: 8,
    name: "Hekayat",
    artist: "amr diab",
    album: "El lelady",
    // uri: track.uri,
    preview: "https://serv10.mrmazika.com/dl/3en/amr-diab/albums/el-lilady/04.Hikayat.mp3",
    image: "hekayat.jpg"
  },
  {
    id: 4,
    name: "3esh bhso2ak",
    artist: "tamer Hosny",
    album: "3esh bsho2ak",
    // uri: track.uri,
    preview: "https://serv10.mrmazika.com/songs_2024/MrMaZiKa.Com_krym_dyskw_klbi_dh_rah_mny.mp3",
    image: "Tamer.jpg"
  }
  
 
]


const Spotify = {
 

  search(term) {
    return new Promise((res, rej) => {
      const filteredAudioList = audioList.filter((audio) =>{
        return audio.artist.includes(term)
      })
      res(filteredAudioList, null);

    })
    
  },

  savePlaylist(name, trackUris) {
    new Promise((res, rej) => {

      if (!name || !trackUris.length) {
        return;
      }
      
     
      let userId;
      
      res(audioList, null);
    })

    
  },
};

export default Spotify;
