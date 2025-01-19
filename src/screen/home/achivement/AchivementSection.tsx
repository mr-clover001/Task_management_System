import React from "react";
import Styles from "./AchivementSection.module.css";
import { Box, Stack } from "@mui/material";
import WhiteTick from "./../../../assests/whiteCheckbox.png";
import Company1 from "../../../assests/CompanyIcon/coinbase.png";
import Company2 from "../../../assests/CompanyIcon/Webflow.png";
import Company3 from "../../../assests/CompanyIcon/spotify.png";
import Company4 from "../../../assests/CompanyIcon/slack.png";
import Company5 from "../../../assests/CompanyIcon/Zoom.png";
import Company6 from "../../../assests/CompanyIcon/Dropbox.png";
import apple from "../../../assests/CompanyIcon/Frame 7840.png";
import playstore from "../../../assests/CompanyIcon/Frame 7841.png";
import phone from "../../../assests/Blog/PhoneImage.png";

const AchivementSection = () => {
  const achivementNumbers = [
    { id: 1, value: "1M+", title: "Customers" },
    { id: 2, value: "12+", title: "Years of Excellence" },
    { id: 3, value: "41+", title: "R&D Engineers" },
    { id: 4, value: "78+", title: "Countries" },
    { id: 5, value: "3287+", title: "PARTNERS" },
    { id: 6, value: "41+", title: "Awards Received" },
  ];

  const companyLogo = [
    { id: 1, src: Company1 },
    { id: 2, src: Company3 },
    { id: 3, src: Company4 },
    { id: 4, src: Company2 },
    { id: 5, src: Company6 },
    { id: 6, src: Company5 },
  ];

  return (
    <>
      {/* Achivement Number */}
      <Box className={Styles.playstore_container}>
        <Stack className={Styles.playstore_container_left}>
          <Stack className={Styles.playstore_left_content_lay}>
            <Stack className={Styles.playstore_left_title}>
              Manage Your Services by your Mobile Phone
            </Stack>
            <Stack className={Styles.playstore_left_content}>
              Download our app to manage and track your services. Our app
              enables you to stay in touch with our experts and aids you in
              tracking your progress.{" "}
            </Stack>
          </Stack>
          <Stack className={Styles.playstore_left_btn_lay}>
            <Stack className={Styles.eft_btn_text}>Get the App</Stack>
            <Stack className={Styles.playstore_left_download_lay}>
              <Stack className={Styles.download_lay}>
                <Stack className={Styles.download_icon}>
                  <img src={apple} />
                </Stack>
                <Stack className={Styles.download_text_lay}>
                  <Stack className={Styles.download_text}>Get it on</Stack>
                  <Stack className={Styles.download_text_next}>App Store</Stack>
                </Stack>
              </Stack>
              <Stack className={Styles.download_lay}>
                <Stack className={Styles.download_icon}>
                  <img src={playstore} />
                </Stack>
                <Stack className={Styles.download_text_lay}>
                  <Stack className={Styles.download_text}>Get it on</Stack>
                  <Stack className={Styles.download_text_next}>
                    Google Play
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          className={Styles.playstore_container_right}
          sx={{ height: { xs: "40vh", md: "60vh" } }}
        >
          <Stack className={Styles.left_video} height="100%" width="100%">
            <img
              src={phone}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Stack>
        </Stack>
      </Box>

      <Box className={Styles.achivement_container}>
        <Stack className={Styles.achivement_text_lay}>
          <Stack className={Styles.achivement_container_title_text}>
            Why Register karo
          </Stack>
          <Stack className={Styles.achivement_container_text}>
            Some Numbers are important
          </Stack>
        </Stack>

        <Stack className={Styles.achivement_container_icon_layout}>
          {achivementNumbers.map((achivement) => (
            <>
              <Stack className={Styles.achive_icon_layout}>
                <Stack key={achivement.id} className={Styles.icon_layout}>
                  {achivement.value}
                </Stack>
                <Stack className={Styles.achivement_title_text}>
                  {" "}
                  {achivement.title}
                </Stack>
              </Stack>
            </>
          ))}
        </Stack>
      </Box>

      {/* Contact Part */}

      <Box className={Styles.contact_container}>
        <Stack className={Styles.contact_container_title_lay}>
          <Stack className={Styles.contact_subtitle}>1% OF THE INDUSTRY</Stack>
          <Stack className={Styles.contact_title}>
            Welcome to your new digital reality. Now.
          </Stack>
        </Stack>
        <Stack className={Styles.contact_container_inputField}>
          {" "}
          <form className={Styles.form_container}>
            <Box className={Styles.form_input_group}>
              <input
                type="email"
                placeholder="Enter Your Email"
                className={Styles.form_input}
                required
              />
              <button type="submit" className={Styles.form_submit_button}>
                Submit
              </button>
            </Box>
          </form>
        </Stack>
        <Stack className={Styles.contact_container_specility}>
          {" "}
          <Stack className={Styles.contact_specility_lay}>
            <Stack className={Styles.icon_tick}>
              <img src={WhiteTick} />
            </Stack>
            <Stack className={Styles.spec_text}>Instant results</Stack>
          </Stack>
          <Stack className={Styles.contact_specility_lay}>
            <Stack className={Styles.icon_tick}>
              <img src={WhiteTick} />
            </Stack>
            <Stack className={Styles.spec_text}>User-friendly interface</Stack>
          </Stack>
          <Stack className={Styles.contact_specility_lay}>
            <Stack className={Styles.icon_tick}>
              <img src={WhiteTick} />
            </Stack>
            <Stack className={Styles.spec_text}>
              Personalized customization
            </Stack>
          </Stack>
        </Stack>
      </Box>

      {/* Comapany Logos */}
      <Box className={Styles.company_logo_container}>
        <Stack className={Styles.company_logo_container_icon_layout}>
          {companyLogo.map((company) => (
            <Stack key={company.id} className={Styles.c_logoicon_layout}>
              <img src={company.src} />
            </Stack>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default AchivementSection;
