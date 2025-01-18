import React from "react";
import { Box, Stack } from "@mui/material";
import Styles from "./Footer.module.css";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Sklogo from "../../assests/Logo.png";
import { useNavigate } from "react-router-dom";
import arrowo from "../../assests/arrow_Icon.svg";

const Footer = () => {
  const navigate = useNavigate();
  const options = [
    { title: "Features" },
    { title: "Solutions" },
    { title: "Integrations" },
    { title: "Enterprise" },
    { title: "Solutions" },
  ];

  const productOptions = [
    { title: "Partners" },
    { title: "Community" },
    { title: "Developers" },
    { title: "App" },
    { title: "Blog" },
  ];

  const complianceOptions = [
    { title: "Channels" },
    { title: "Scale" },
    { title: "Watch the Demo" },
    { title: "Our Competition" },
  ];
  const BISeOptions = [
    { title: "About Us" },
    { title: "News" },
    { title: "Leadership" },
    { title: "Media Kit" },
  ];

  const scrolltoTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Box className={Styles.footer_container}>
        <Stack className={Styles.footer_container_top}>
          <Stack className={Styles.footer_container_socialmedia}>
            <Stack className={Styles.footer_container_companylogo}>
              <img src={Sklogo} alt="OnestoLogo" />{" "}
            </Stack>

            <Stack className={Styles.footer_container_socialmedia_text}>
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </Stack>

            <Stack className={Styles.footer_container_socialmedia_icon}>
              <Stack className={Styles.socialmedia_icon}>
                <MailIcon
                  sx={{ color: "white", fontSize: { xs: "18px", md: "24px" } }}
                />
              </Stack>
              <Stack className={Styles.socialmedia_icon}>
                <InstagramIcon
                  sx={{ color: "white", fontSize: { xs: "18px", md: "24px" } }}
                />
              </Stack>
              <Stack className={Styles.socialmedia_icon}>
                <LinkedInIcon
                  sx={{ color: "white", fontSize: { xs: "18px", md: "24px" } }}
                />
              </Stack>
              <Stack className={Styles.socialmedia_icon}>
                <TwitterIcon
                  sx={{ color: "white", fontSize: { xs: "18px", md: "24px" } }}
                />
              </Stack>
            </Stack>
          </Stack>

          <Stack className={Styles.footer_container_products_options}>
            <Stack className={Styles.spacing_between}>
              <Stack className={Styles.menu_options_head}>
                START A BUSINESS
              </Stack>
              <Stack className={Styles.spacing_between_options}>
                {options.map((option, index) => (
                  <Stack className={Styles.menu_option}>{option.title}</Stack>
                ))}
              </Stack>
            </Stack>
            <Stack className={Styles.spacing_between}>
              <Stack className={Styles.menu_options_head}>
                GOVERNMENT REGISTRATION
              </Stack>
              <Stack className={Styles.spacing_between_options_column}>
                <Stack className={Styles.spacing_between_options}>
                  {productOptions.map((option, index) => (
                    <Stack className={Styles.menu_option}>{option.title}</Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
            <Stack
              className={Styles.spacing_between}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Stack className={Styles.menu_options_head}>
                COMPLIANCE & TAX
              </Stack>
              <Stack className={Styles.spacing_between_options_column}>
                <Stack className={Styles.spacing_between_options}>
                  {complianceOptions.map((option, index) => (
                    <Stack className={Styles.menu_option}>{option.title}</Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
            <Stack
              className={Styles.spacing_between}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Stack className={Styles.menu_options_head}>BIS & CDSCO</Stack>
              <Stack className={Styles.spacing_between_options_column}>
                <Stack className={Styles.spacing_between_options}>
                  {BISeOptions.map((option, index) => (
                    <Stack className={Styles.menu_option}>{option.title}</Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack className={Styles.footer_container_bottom}>
          <Stack
            className={Styles.arrow_icon}
            onClick={() => {
              scrolltoTop();
            }}
          >
            <img src={arrowo} />
          </Stack>
          <Stack className={Styles.footer_container_copyright}>
            © 2025 RegisterKaro. All rights reserved.
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
