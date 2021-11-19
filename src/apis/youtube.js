import axios from "axios";

const KEY = "AIzaSyCm00dA50F5PWTSy_JtIcYkM5k0XadWgBM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
