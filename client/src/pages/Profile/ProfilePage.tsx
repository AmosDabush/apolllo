import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { ProgressBar } from "../../components/global";
import { UserInterface } from "../../interfaces/UserInterface";
import { AuthClient } from "../../services";
import "./ProfilePage.scss";
import profileBg from "../../assets/images/landing-pages/dog-profile2.png";

function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [user, setData] = useState<UserInterface | Partial<UserInterface>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Promise<UserInterface> | any =
          await AuthClient.getInstance().getUser();
        setData(response);
      } catch (error: any) {
        console.log(error.response.data);
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
    <>
      <Box
        className="hero-component-img"
        component="img"
        sx={{
          width: "100%",
        }}
        alt="A 3D imaginary box with items coming out from it."
        src={profileBg}
      />
      <Container component="main" className="Profile" disableGutters>
        <Container
          component="main"
          maxWidth={false}
          disableGutters
          className="profile-component-wrapper"
        >
          <Container disableGutters className="profile-component-content">
            {user ? (
              <>
                <div className="font s-45 white">
                  Hello, {user.firstName} {user.lastName}
                </div>
                <span className="font s-25 white">
                  Welcome to Apollo World - The Pinnacle of Digital Wonder! ✨
                </span>
                <p className="white">
                  Experience the Unparalleled: Journey into a realm where
                  innovation knows no bounds. Apollo World isn't just a website;
                  it's a revolution in digital experience. Here, every click
                  leads to discovery, and every page turns to unveil a new
                  horizon.
                </p>
              </>
            ) : (
              <>please login</>
            )}
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default ProfilePage;
