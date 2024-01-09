import { Box, Button, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "../../components/global";
import { AuthClient } from "../../services";
import heroImage from "../../assets/images/landing-pages/dog1.png";
import "./HomePage.scss";

function Homepage() {
  const [loading, setLoading] = useState(true);
  const [posts, setData] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response: Promise<string> | any =
          await AuthClient.getInstance().getHomepage();
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
      return true;
    };

    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  if (loading) {
    return <ProgressBar />;
  }

  return (
    <Container
      component="main"
      maxWidth={false}
      disableGutters
      className="homepage homepage-main-wrapper"
    >
      <Container
        component="section"
        maxWidth={false}
        disableGutters
        className="hero-component-wrapper"
      >
        <Box
          className="hero-component-img"
          component="img"
          // sx={{
          //   width: '100%',
          // }}
          alt="A 3D imaginary box with items coming out from it."
          src={heroImage}
        />
        <Container disableGutters className="hero-component-content">
          <h1>apollo</h1>
          <p className="black">
            a Brighter Tomorrow In a world where the future unfolds in
            unexpected ways, our journey towards a better tomorrow is more
            crucial than ever.
          </p>
          <p className="black">
            We believe in the power of innovation, the resilience of the human
            spirit, and the collective action that binds us all. Our Vision: A
            world where every step we take is a step towards a more sustainable,
            equitable, and compassionate future. We embrace the unknown with
            courage, guided by the wisdom of our shared experiences and the
            endless possibilities of our imaginations. Our Mission: To empower
            communities, ignite change, and inspire actions that make a tangible
            difference.
          </p>
          <p>
            We're committed to fostering solutions that not only address today's
            challenges but also pave the way for a future we can all be proud
            of.
            <br />
            Project: <a href="https://github.com/AmosDabush/apolllo">github</a>
          </p>
          <Button
            component={Link}
            to="/my-club"
            variant="contained"
            color="secondary"
            sx={{
              my: 1,
              mx: 0,
              p: "10px",
              paddingX: "25px",
              fontSize: "16px",
            }}
          >
            Create My Space
          </Button>
        </Container>
      </Container>
    </Container>
  );
}

export default Homepage;
