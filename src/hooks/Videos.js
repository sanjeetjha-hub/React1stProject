import { useContext } from "react";
import VideosContext from "../Context/VideosContext";

export default function useVideos() {
  return useContext(VideosContext);
}
