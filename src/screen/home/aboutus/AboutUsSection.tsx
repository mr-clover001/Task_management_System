import React from "react";
import Styles from "./AboutUsSection.module.css";
import { Box, Stack, Typography } from "@mui/material";
import Banner from "../../../assests/aboutUsPoster.png";
import Shield from "../../../assests/Shield.png";
import Face from "../../../assests/faceemo.png";
import User from "../../../assests/userr.png";
import GreenTick from "../../../assests/greentick.png";
import { width } from "../../../../node_modules/@mui/system/sizing/sizing.d";

const AboutUsSection = () => {
  const cardData = [
    {
      icon: Shield,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      backgroundColor: "#FEF3EF",
    },
    {
      icon: GreenTick,
      title: "No Hidden Fee",
      description:
        "Everything is put before you with no hidden charges or conditions",
      backgroundColor: "#eaffea",
    },
    {
      icon: Face,
      title: "Guaranteed Satisfaction",
      description:
        "We ensure that you stay 100% satisfied with our offered services",
      backgroundColor: "#f0f8ff",
    },
    {
      icon: User,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      backgroundColor: "#ffe5f0",
    },
  ];
  return (
    <>
      <Box className={Styles.our_story_container}>
        <Stack className={Styles.our_story_container_top}>
          <Stack className={Styles.top_content}>
            <Stack className={Styles.top_content_layout1}>
              <Stack className={Styles.top_content_layout_head}>
                {" "}
                <Stack className={Styles.top_content_layout_head_title}>
                  {" "}
                  <p>WELCOME TO REGISTERKARO.IN</p> <br />
                  <span>About </span>Register Karo
                </Stack>
              </Stack>
              <Stack className={Styles.top_content_layout_info}>
                We have been using Intelegencia as our DevOps vendor for our
                field service applications over the last couple of years and I’m
                extremely pleased with their performance, ability to execute,
                and willingness to adapt in our ever changing environment. Perry
                is an outstanding leader who is fanatical about customer
                satisfaction. He has built a solid team which has consistently
                delivered on projects thereby exceeding everyone’s expectations.{" "}
                <br /> <br /> I would strongly recommend their services to any
                organization that is looking for solid, reliable, and
                predictable outcomes.
              </Stack>
              <Stack className={Styles.top_content_layout_btn}>
                Learn More | {"→"}{" "}
              </Stack>
            </Stack>{" "}
          </Stack>
          <Stack className={Styles.left_content} height="40vh">
            <Stack className={Styles.left_video} height="100%" width="100%">
              <img
                src={Banner}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Stack>
          </Stack>
        </Stack>

        {/* Why Choose to Register Karo */}

        <Box className={Styles.yourQuery_container}>
          <Stack
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            className={Styles.yourQuery_container_left_lay}
          >
            <Box className={Styles.yourQuery_container_left}>
              <Stack className={Styles.left_title}>WHY REGISTERKARO.IN</Stack>
              <Stack className={Styles.left_subtitle}>
                Why Choose Register Karo
              </Stack>
              <Stack className={Styles.leftouery_content}>
                It is with consistent services and results that build trust with
                the people and that in turn help us to serve the business
                better.
              </Stack>
            </Box>
            <Stack
              sx={{
                width: "100%",
                alignItems: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Stack
                className={Styles.card_sep_query}
                sx={{
                  backgroundColor: "#FEF3EF",
                }}
              >
                <Stack className={Styles.card_query_icon}>
                  <img src={Shield} />
                </Stack>
                <Stack className={Styles.card_query_title}>
                  Confidential & Safe
                </Stack>
                <Stack className={Styles.card_query_desc}>
                  All your private information is safe with us
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Box className={Styles.yourQuery_container_right}>
            {cardData.map((card, index) => (
              <Stack
                key={index}
                className={Styles.card_query}
                sx={{
                  backgroundColor: card.backgroundColor,
                }}
              >
                <Stack className={Styles.card_query_icon}>
                  <img src={card.icon} />
                </Stack>
                <Stack className={Styles.card_query_title}>{card.title}</Stack>
                <Stack className={Styles.card_query_desc}>
                  {card.description}
                </Stack>
              </Stack>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutUsSection;
