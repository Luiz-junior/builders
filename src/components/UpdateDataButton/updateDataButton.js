import React from "react";
import PropTypes from "prop-types";

import { Container, TouchableOpacity, TextButton } from "./styles";

const UpdateDataButton = ({ handleUpdateData }) => {
  return (
    <Container>
      <TouchableOpacity
        onPress={() => handleUpdateData()}
        testID="update-button"
      >
        <TextButton>Atualizar</TextButton>
      </TouchableOpacity>
    </Container>
  );
};

UpdateDataButton.propTypes = {
  handleUpdateData: PropTypes.func.isRequired,
};

export default UpdateDataButton;
