import { Avatar, Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { UploadFileOutlined } from "@mui/icons-material";
import heroImage from "../../assets/images/landing-pages/dog2.png";
import HeroBanner from "../../components/global/HeroBanner/HeroBanner";
import "./SpacePage.scss";

function SpacePage() {
  const { spaceSlug } = useParams();
  console.log(spaceSlug);

  const heroBanner = {
    description: "Add things to your box, and make this your own space!",
    image: heroImage,
    imageText: spaceSlug + " is available!",
    // linkText: '#',
    title: spaceSlug + " is available!",
  };

  return (
    <Container component="main" className="space">
      <HeroBanner data={heroBanner} />
      <Container>
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <UploadFileOutlined />
          </Avatar>
          <Typography variant="h6">
            Get in touch by filling out the form
          </Typography>
          <Container maxWidth="md">
            <Typography align="center" gutterBottom>
              <p>
                We're committed to fostering solutions that not only address
                today's challenges but also pave the way for a future we can all
                be proud of.
              </p>
            </Typography>
          </Container>
        </Box>
      </Container>
    </Container>
  );
}

export default SpacePage;
