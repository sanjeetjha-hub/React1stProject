import { useContext } from "react";
import VideoDispatchContext from "../Context/VideoDispatchContext";

export default function useVideoDispatch() {
  return useContext(VideoDispatchContext);
}
