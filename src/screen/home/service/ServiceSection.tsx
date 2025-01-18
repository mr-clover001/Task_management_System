import { Box, Stack } from "@mui/material";
import React from "react";
import Styles from "./ServiceSection.module.css";
import Service1 from "../../../assests/service1.svg";
import Service2 from "../../../assests/service2.svg";
import Service3 from "../../../assests/service3.png";
import Service4 from "../../../assests/service4.png";
import Service5 from "../../../assests/service5.png";
import Service6 from "../../../assests/service6.png";
import Symbol from "../../../assests/Symbol.png";
import { border } from "../../../../node_modules/@mui/system/borders/borders.d";

const ServiceSection = () => {
  const ServicesData = [
    {
      id: 1,
      src: Service1,
      title: "Company Formation",
      content: "Build web-based solutions that enhance customer experience.",
    },
    {
      id: 2,
      src: Service2,
      title: "Company Secretarial Services",
      content:
        "Make data-driven decisions and utilize technology to reach business goals.",
    },
    {
      id: 3,
      src: Service3,
      title: "Virtual Office Address",
      content:
        "Foster customer relationships by effectively serving your market.",
    },
    {
      id: 4,
      src: Service4,
      title: "Annual Compliance Services",
      content: "Turn your ideas into modern products with our design experts.",
    },
    {
      id: 5,
      src: Service5,
      title: "Payroll Services",
      content: "Expand your business across the globe with minimal effort.",
    },
    {
      id: 6,
      src: Service6,
      title: "Bookkeeping Services",
      content:
        "Steering user behaviours with creative design, data insights & technology.",
    },
  ];
  return (
    <>
      <Box className={Styles.service_container}>
        <Stack className={Styles.service_container_title_layout}>
          <Stack className={Styles.service_container_title}>
            WELCOME TO REGISTERKARO.IN
          </Stack>
          <Stack className={Styles.service_container_subtitle}>
            Explore Our Services
          </Stack>
        </Stack>

        <Stack className={Styles.service_layout_container}>
          {ServicesData.map((service) => (
            <>
              <Stack
                className={Styles.service_layout}
                // borderRight={
                //   service.id == 3 || service.id == 6
                //     ? "none"
                //     : " 2px solid #e5e2df"
                // }
              >
                <Stack key={service.id} className={Styles.icon_layout}>
                  <img src={service.src} />
                </Stack>
                <Stack className={Styles.service_title}>{service.title} </Stack>
                <Stack className={Styles.service_content}>
                  {service.content}{" "}
                </Stack>
                <Stack className={Styles.service_learnmore}>
                  Learn More <p>→</p>
                </Stack>
              </Stack>
            </>
          ))}
        </Stack>
        <Stack className={Styles.req_btn}>See All Services</Stack>
      </Box>
    </>
  );
};

export default ServiceSection;
