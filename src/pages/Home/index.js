import React, { useCallback, useState } from "react";

import Header from "~/components/Header";
import Modal from "~/components/Modal";

import { Container, Content } from "./styles";

function Home() {
  const [toggleModal, setToggleModal] = useState(false);
  const [actualModal, setActualModal] = useState("");

  const handleToggleModal = useCallback(
    (modal) => {
      setToggleModal(!toggleModal);

      setActualModal(modal);
    },
    [toggleModal]
  );

  return (
    <Container before={toggleModal}>
      <Header handleToggleModal={handleToggleModal} />

      <Content>
        <h1>Home</h1>
      </Content>

      {toggleModal && (
        <Modal
          handleToggleModal={handleToggleModal}
          actualModal={actualModal}
        />
      )}
    </Container>
  );
}

export default Home;
