import React from "react";
import Svg,{Path,Defs,Pattern,Image,Use} from "react-native-svg";

function Icon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="70"
      height="63"
      fill="none"
      viewBox="0 0 70 63"
    >
      <Path fill="url(#pattern0)" d="M0 0H70V63H0z"></Path>
      <Defs>
        <Pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.01429 .01587)" xlinkHref="#image0_3_54"></Use>
        </Pattern>
        <Image
          id="image0_3_54"
          width="273"
          height="63"
          xlinkHref="data:image/png;base64,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"
        ></Image>
      </Defs>
    </Svg>
  );
}

export default Icon;