import { useDirection } from "@soperio/theming";

export default function Test({ ...props })
{
  const direction = useDirection()
  return (
    <div w="100%" alignItems="center" dflex flexCol justifyContent="center" py="10">

      <div dflex flexRow gap="10" w="full">
        <div h="20" bgColor="sky-500" flexBasis="1/3" />
        <div h="20" bgColor="sky-500" flexBasis="1/3" />
        <div h="20" bgColor="sky-500" flexBasis="1/3" />
      </div>

      <svg opacity={"100"}/>


      <div w="48" h="48" bgColor="#0099ff">Blue RGB</div>
      <div w="48" h="48" bgColor="#0099ff" bgOpacity="50">Blue RGB 50% opacity</div>
      <div w="48" h="48" bgColor="#0099ff80">Blue RGBA 50% alpha</div>
      <div w="48" h="48" bgColor="#0099ff80" bgOpacity="50">Blue RGBA 50% alpha 50% opacity</div>
      <div w="48" h="48" bgColor="rgb(0, 153, 255)">Blue rgb()</div>
      <div w="48" h="48" bgColor="rgb(0, 153, 255)" bgOpacity="50">Blue rgb() 50% opacity</div>
      <div w="48" h="48" bgColor="rgb(0, 153, 255, 0.5)" bgOpacity="50">Blue rgb() 50% alpha 50% opacity</div>



      <div dflex flexRow spaceX="2">
        <div>Direction</div>
        <div>is</div>
        <div>{direction ? "LTR" : "RTL"}</div>
      </div>

      <div w="48" h="48" dflex flexCol alignItems="center" placeContent="center" fontWeight="600" bgColor="#0099ff" bgOpacity="50" mb="5">
        <div>Test Opacity</div>
        <div>Color before Opacity</div>
      </div>

      <div w="48" h="48" dflex flexCol alignItems="center" placeContent="center" fontWeight="600" bgOpacity="50" bgColor="#0099ff" mb="5">
        <div>Test Opacity</div>
        <div>Color after Opacity</div>
      </div>

      <input placeholder="Hello" placeholderColor="#00ff00" placeholderOpacity="25" fontWeight="600"/>

      <div bgColor="sky-500" shadow="x2" w="16" h="16"></div>

      <div dflex flexCol w="min" italic>

        <span
          trait="typo.display3"
          textColor="sky-500"
          fontWeight="800"
          textShadow="sm"
          textShadowBlur="sm"
        >
          GRADIENT TEXT
        </span>

        <span
          trait="typo.display3"
          bgGradient
          bgGradientFrom="sky-500"
          bgGradientTo="pink-500"
          bgClip="text"
          style={{ WebkitTextFillColor: "transparent" }}
          fontWeight="800"
        >
          GRADIENT TEXT
        </span>

        <span
          trait="typo.display3"
          bgGradient
          bgGradientDir="to bottom"
          bgGradientFrom="sky-500"
          bgGradientTo="pink-500"
          bgClip="text"
          style={{ WebkitTextFillColor: "transparent" }}
          fontWeight="800"
        >
          GRADIENT TEXT
        </span>

        <span
          trait="typo.display3"
          bgGradient="radial"
          bgGradientFrom="sky-500"
          bgGradientTo="pink-500"
          bgClip="text"
          style={{ WebkitTextFillColor: "transparent" }}
          fontWeight="800"
        >
          GRADIENT TEXT
        </span>
      </div>


      <div
        mb="16"
        trait="typo.display4"
        bgGradientFrom="pink-500" bgGradient bgGradientVia="yellow-500" bgGradientTo="sky-500"
        bgClip="text" bgGradientDir=""
        textAlign="center"
        style={{ WebkitTextFillColor: "transparent" }}>
        Text test example gradient background
      </div>

      <div mb="16" h="16" bgColor="pink-500" rounded="" outline="1" outlineColor="sky-500" outlineOffset="2" outlineOpacity="59" py="2" textAlign="center">
        <span textColor="white" shadow="x2" trait="typo.display4" style={{ textShadow: "1px 1px 1px #000" }}>Text test example</span>
      </div>
      <div mb="16" h="16" w="16" bgColor="pink-500" rounded ring="8" ringColor="sky-500" ringOffset="4" ringOffsetColor="yellow-500" />
      <div mb="16" h="16" w="16" bgColor="pink-500" rounded shadow />

      <div mb="16" h="16" w="16" bgGradient bgGradientDir="to top right" bgGradientFrom="pink-500" bgGradientVia="yellow-500" bgGradientTo="sky-500" />
      <div mb="16" h="16" w="16" bgGradient="radial" bgGradientFrom="pink-500" bgGradientVia="yellow-500" bgGradientTo="sky-500" />
      <div mb="16" h="16" w="16" bgGradient="conic" bgGradientFrom="pink-500" bgGradientVia="yellow-500" bgGradientTo="sky-500" />
      <div h="16" w="96" bgColor="sky-500" hover_bgColor="pink-500" transition="colors" duration="5000ms" />
      <div>
        {/* <div as="span" bgColor="red-500">{"Hello, am a <div> or a <a> ?"}</div> */}
      </div>
      <div></div>
      <div group p="10" bgColor="pink-500" hover_bgColor="sky-500" textColor="white" hover_textColor="black">
        <p textColor="blue-500" groupHover_textColor="white" lg_groupHover_textColor="yellow">Subtitle</p>
        <p>Text</p>
      </div>
    </div>
  );
}
