import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

function ClientsSection(props) {
  const items = [
    {
      name: "hemel",
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/hemel-logo-kereste-web.svg",
      width: "130px",
    },
    {
      name: "unlu",
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/%C3%BCnl%C3%BC-boya-logo-kereste-web.svg",
      width: "90px",
    },
    {
      name: "remmers",
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/remmers-logo-web-kereste.svg",
      width: "150px",
    },
    {
      name: "",
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/rothoblaas-web-logo.svg",
      width: "200px",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Box textAlign="center">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={4}
            textAlign="center"
          />
          <Grid container={true} justifyContent="center">
            {items.map((item, index) => (
              <Grid item={true} xs={12} md="auto" key={index}>
                <Box py={2} px={3}>
                  <img src={item.image} width={item.width} alt={item.name} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}

export default ClientsSection;
