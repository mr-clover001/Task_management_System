import React from "react";
import Styles from "./CompanyTrusted.module.css";
import { Box, Stack } from "@mui/material";
import Oracle from "../../../assests/OracleIcon.svg";
import Company2 from "../../../assests/Company 2.svg";
import Samsung from "../../../assests/Samsung.png";
import Monday from "../../../assests/MondayComp.png";
import Segement from "../../../assests/segement.png";
const CompanyTrusted = () => {
  const companies = [
    { id: 1, src: Oracle, alt: "Oracle" },
    { id: 2, src: Company2, alt: "Company 2" },
    { id: 3, src: Company2, alt: "Company 2 (Duplicate)" },
    { id: 4, src: Samsung, alt: "Samsung" },
    { id: 5, src: Monday, alt: "Monday" },
    { id: 6, src: Segement, alt: "Segment" },
  ];

  return (
    <>
      <Box className={Styles.company_container}>
        <Stack className={Styles.company_container_text}>
          Trusted By Over 100+ Startups and freelance business
        </Stack>
        <Stack className={Styles.company_container_icon_layout}>
          {companies.map((company) => (
            <Stack key={company.id} className={Styles.icon_layout}>
              <img src={company.src} alt={company.alt} />
            </Stack>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default CompanyTrusted;
