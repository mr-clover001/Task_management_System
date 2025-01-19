import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Styles from "./HomeScreen.module.css";
import Banner from "../../assests/Section.png";
import Star from "../../assests/star.png";
import StarRating from "../../assests/Starrating.svg";
import playbtn from "../../assests/playbtn.svg";
import clienticon from "../../assests/client.svg";
import handshake from "../../assests/handshake.svg";
import AboutUsSection from "./aboutus/AboutUsSection";
import CompanyTrusted from "./trustedCompany/CompanyTrusted";
import ServiceSection from "./service/ServiceSection";
import IdeasSection from "./idea/IdeasSection";
import Blog from "./blog/Blog";
import FaqAccordion from "./faqSection/FaqAccordion";
import AchivementSection from "./achivement/AchivementSection";
const HomeScreen = () => {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const faqItems = [
    {
      title: "Can I recover deleted files from desktop with this software?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      title: "Can I recover deleted files from desktop with this software?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      title: "Can I recover deleted files from desktop with this software?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      title: "Can I recover deleted files from desktop with this software?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
  ];
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <>
      <Box className={Styles.main_container}>
        {/* Main Page */}
        <Box className={Styles.home_container}>
          <Stack className={Styles.homepage_banner}>
            <img
              src={Banner}
              style={{
                width: "100%",
                maxWidth: "100%",
                objectFit: "cover",
                display: "block",
                height: "70vh",
              }}
              className={Styles.slideImage}
            />
          </Stack>

          <Stack className={Styles.homepage_banner_content}>
            <Stack className={Styles.google_rating}>
              <Stack className={Styles.google_rating_star}>
                <img src={Star} />
              </Stack>
              <Stack className={Styles.google_rating_text}>Google Rating</Stack>
              <Stack className={Styles.google_rating_star_star}>
                <img src={StarRating} />
              </Stack>
            </Stack>
            <Stack className={Styles.homepage_banner_title}>
              Your trusted partner <br />
              for compliance business needs
            </Stack>
            <Stack className={Styles.homepage_banner_subtitle}>
              An online business compliance platform <br /> that helps
              entrepreneurs and other <br />
              individuals with various, <span> registrations</span>,
              <span>tax filings</span>, and other <span>legal</span>
              <span>matters</span>.
            </Stack>
            <Stack className={Styles.achivement_layout}>
              <Stack className={Styles.single_achivement_layout}>
                <Stack className={Styles.achivement_icon}>
                  <img src={handshake} />
                </Stack>
                <Stack className={Styles.achivement_content}>
                  <Stack className={Styles.achivement_value}>4.5+</Stack>
                  <Stack className={Styles.achivement_text}>
                    Customer Rating
                  </Stack>
                </Stack>
              </Stack>
              <Stack className={Styles.single_achivement_layout}>
                <Stack className={Styles.achivement_icon}>
                  <img src={clienticon} />
                </Stack>
                <Stack className={Styles.achivement_content}>
                  <Stack className={Styles.achivement_value}>20,000+</Stack>
                  <Stack className={Styles.achivement_text}>Clients</Stack>
                </Stack>
              </Stack>
              <Stack className={Styles.single_achivement_layout}>
                <Stack className={Styles.achivement_icon}>
                  <img src={handshake} />
                </Stack>
                <Stack className={Styles.achivement_content}>
                  <Stack className={Styles.achivement_value}>99.8%</Stack>
                  <Stack className={Styles.achivement_text}>
                    Financial Stability
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack className={Styles.homepage_banner_btn}>
              <Stack className={Styles.req_btn}>Talk An Expert</Stack>
              <Stack className={Styles.play_btn}>
                <Stack className={Styles.play_btn_lay}>
                  {" "}
                  <img src={playbtn} />
                </Stack>
                <Stack className={Styles.play_btn_text}>See how it works</Stack>{" "}
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* Trusted Company */}
        <CompanyTrusted />

        {/* Serverice Section */}
        <ServiceSection />

        {/* About Us Section */}
        <Box className={Styles.story_section_container}>
          <AboutUsSection />
        </Box>

        {/* Idea Section */}
        <IdeasSection />

        {/* Blog */}
        <Blog />

        {/* FAQs Section */}
        <Box className={Styles.faq_section_container}>
          <Stack className={Styles.faq_title_lay}>
            <Stack className={Styles.faq_section_container_subtitle}>FAQ</Stack>
            <Stack className={Styles.faq_section_container_title}>
              Frequently asked questions
            </Stack>{" "}
          </Stack>
          <Stack className={Styles.faq_section_accordion}>
            {/* Initially show only 2 FAQ items */}
            {faqItems
              .slice(0, showAll ? faqItems.length : 2)
              .map((faq, index) => (
                <FaqAccordion
                  key={index}
                  title={faq.title}
                  content={faq.content}
                />
              ))}

            {/* Toggle button to show more/less */}
            <Stack
              onClick={toggleShowAll}
              className={Styles.view_more}
              sx={{
                cursor: "pointer",
                color: "blue",
                marginTop: { xs: "0px", md: "10px" },
              }}
            >
              {showAll ? "View Less" : "View More"} {"  →"}
            </Stack>
          </Stack>
        </Box>

        {/* Achivement and Connect with Us */}

        <AchivementSection />
      </Box>
    </>
  );
};

export default HomeScreen;
