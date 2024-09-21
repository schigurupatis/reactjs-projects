import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMenuClose } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenuClose());
  }, []);

  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const videoID = searchParams.get("v");

  return (
    <div className="flex justify-start items-start gap-3">
      <div className="w-9/12">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${videoID}`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-3/12">
        <h6>Sidebar</h6>
      </div>
    </div>
  );
};

export default Watch;
