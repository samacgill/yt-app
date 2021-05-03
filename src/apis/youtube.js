import axios from "axios";

const KEY = "AIzaSyDHXv_baqRmCgG5zYdbc9F37xE72M_8cOI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
