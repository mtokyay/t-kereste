import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 160,
  },
}));

function ContentCardsSection3(props) {
  const classes = useStyles();

  const items = [
    {
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/insaatl%C4%B1k-kereste-web.jpeg",
      title: "İnşaatlık Kereste",
      body: "",
      url: "/urunlerimiz-insaatlik-kereste",
    },
    {
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/emprenyeli-lambri-web.jpg",
      title: "Emprenyeli Lambri",
      body: "",
      url: "/urunlerimiz-emprenyeli-lambri",
    },
    {
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/emprenyeli-kereste-web.jpg",
      title: "Emprenyeli Kereste",
      body: "",
      url: "/urunlerimiz-emprenyeli-kereste",
    },
    {
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/ithal-ladin-2-s%C4%B1n%C4%B1f-lambrijpg.jpg",
      title: "İthal Ladin 2. Sınıf Lambri",
      body: "",
      url: "/urunlerimiz-ithal-ladin-2-sınıf-lambri",
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
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} justifyContent="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} md={6} lg={3} key={index}>
              <Card>
                <Link href={item.url} passHref={true}>
                  <CardActionArea component="a">
                    <CardMedia
                      image={item.image}
                      title={item.name}
                      className={classes.media}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom={true}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default ContentCardsSection3;
