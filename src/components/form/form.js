import React, { useState } from "react";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//locals
import { emailIsValid } from "../../utils/validators";
import {
  Container,
  ContainerInput,
  ContainerText,
  Error,
  Input,
  Main,
  Textarea,
} from "./form.style";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !emailIsValid(email)) {
      setNameError(!name);
      setEmailError(!emailIsValid(email));
      return;
    }

    const formData = {
      name: name,
      email: email,
      review: review,
    };

    axios
      .post("http://test.url", formData)
      .then((response) => {
        console.log(response.data);
        toast.success("Enviado com sucesso!");
      })
      .catch((error) => {
        console.error(error);
        toast.success("Erro ao enviar!");
      });
  };

  return (
    <Main onSubmit={handleSubmit}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Container>
        <ContainerInput>
          <label htmlFor="name">Your Name:</label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setNameError(false);
            }}
            className={nameError ? "error" : ""}
          />
          {nameError && <Error>Campo obrigatório</Error>}
        </ContainerInput>
        <ContainerInput>
          <label htmlFor="email">Your E-mail:</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setEmailError(false);
            }}
            className={emailError ? "error" : ""}
          />
          {emailError && <Error>E-mail inválido</Error>}
        </ContainerInput>
        <ContainerText>
          <label htmlFor="review">Review:</label>
          <Textarea
            id="review"
            value={review}
            onChange={(event) => setReview(event.target.value)}
          ></Textarea>
        </ContainerText>
      </Container>
      <button type="submit">Review</button>
    </Main>
  );
};

export default ReviewForm;
