import React from "react";
import Styles from "./IdeasSection.module.css";
import Idea1 from "../../../assests/IdeaIcon.png";
import Idea2 from "../../../assests/Idea2Icon.png";
import Image from "../../../assests/ScreenShotofVideo.png";
import { Box, Stack } from "@mui/material";

const IdeasSection = () => {
  return (
    <>
      <Box className={Styles.ideas_container}>
        <Stack className={Styles.ideas_container_left}>
          <Stack className={Styles.left_head_lay}>
            <Stack className={Styles.title}> 0ur Video Introductions</Stack>
            <Stack className={Styles.subtitle}>
              {" "}
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt apis dui.
            </Stack>
          </Stack>
          <Stack className={Styles.left_content_lay}>
            <Stack className={Styles.content_lay}>
              <Stack className={Styles.content_icon}>
                <img src={Idea1} />
              </Stack>
              <Stack className={Styles.content_content}>
                <Stack className={Styles.content_title}>
                  {" "}
                  Explore ideas together
                </Stack>
                <Stack className={Styles.content_subtitle}>
                  {" "}
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </Stack>
              </Stack>
            </Stack>
            <Stack className={Styles.content_lay}>
              <Stack className={Styles.content_icon}>
                <img src={Idea2} />
              </Stack>
              <Stack className={Styles.content_content}>
                <Stack className={Styles.content_title}>
                  {" "}
                  Bring those ideas to life
                </Stack>
                <Stack className={Styles.content_subtitle}>
                  {" "}
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack className={Styles.ideas_container_right} height="40vh">
          <Stack className={Styles.left_video} height="100%" width="100%">
            <img
              src={Image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default IdeasSection;
