import { Box, Stack } from "@mui/material";
import React from "react";
import Styles from "./Blog.module.css";
import Image1 from "../../../assests/Blog/Image1.png";
import Image2 from "../../../assests/Blog/Image2.png";
import Image3 from "../../../assests/Blog/Image3.png";
import Image4 from "../../../assests/Blog/Image4.png";
import Image5 from "../../../assests/Blog/Image5.png";
const Blog = () => {
  const ServicesData = [
    {
      id: 1,
      src: Image1,
      author: "Prabhash Mishra",
      date: " 1 Jan 2023 ",
      title: "Small Bussiness and StartUp",
      content:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    },
    {
      id: 2,
      src: Image2,
      author: "Mahesh Kumar",
      date: " 1 Jan 2023 ",
      title: "Scale-Up Company Offer",
      content:
        "Mental models are simple expressions of complex processes or relationships.",
    },
    {
      id: 3,
      src: Image3,
      author: "Rakhi Verma",
      date: " 1 Jan 2023 ",
      title: "Growing Bussiness Package",
      content:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    },
    {
      id: 4,
      src: Image4,
      title: "Scale-Up Company Offer",
      date: " 1 Jan 2023 ",
      content:
        "Collaboration can make our teams stronger, and our individual designs better.",
    },
    {
      id: 5,
      src: Image5,
      title: "Scale-Up Company Offer",
      date: " 1 Jan 2023 ",
      content:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
    },
    {
      id: 6,
      src: Image1,
      title: "Scale-Up Company Offer",
      date: " 1 Jan 2023 ",
      content:
        "Starting a community doesn’t need to be complicated, but how do you get started?",
    },
  ];
  return (
    <>
      <Box className={Styles.service_container}>
        <Stack className={Styles.service_container_title_layout}>
          <Stack className={Styles.service_container_title}>
            EXPLORE OUR BLOGS
          </Stack>
          <Stack className={Styles.service_container_subtitle}>
            Accelerate Digital Transformation
          </Stack>
        </Stack>

        <Stack className={Styles.service_layout_container}>
          {ServicesData.map((service) => (
            <>
              <Stack className={Styles.service_layout}>
                <Stack key={service.id} className={Styles.icon_layout}>
                  <img src={service.src} />
                </Stack>
                <Stack className={Styles.service_title_lay}>
                  <Stack className={Styles.service_date}>
                    {service.author} • {service.date} • Today
                  </Stack>
                  <Stack className={Styles.service_title}>
                    {service.title}{" "}
                  </Stack>
                  <Stack className={Styles.service_content}>
                    {service.content}{" "}
                  </Stack>
                  <Stack className={Styles.service_chips}>
                    <Stack className={Styles.service_chips_1}>
                      Tax & Audit
                    </Stack>
                    <Stack className={Styles.service_chips_2}>Tax Return</Stack>
                  </Stack>
                </Stack>
              </Stack>
            </>
          ))}
        </Stack>
        <Stack className={Styles.req_btn}>
          Show More Blogs <p>→</p>
        </Stack>
      </Box>
    </>
  );
};

export default Blog;
