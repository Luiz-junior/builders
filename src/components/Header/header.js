import React from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";

import { Container, CityText, CityContainer } from "./styles";

const Header = ({ city }) => {
  return (
    <Container>
      <CityContainer>
        <Image
          source={require("../../../assets/place.png")}
          testID="place-img"
        />
        <CityText>{city}</CityText>
      </CityContainer>

      <Image
        source={require("../../../assets/user_avatar.png")}
        testID="avatar-img"
      />
    </Container>
  );
};

Header.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Header;
