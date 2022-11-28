import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Input, InputWrapper, Label } from "../../components/formItems";
import Modal from "../../components/Modal";
import { GradientButton } from "../../components/Button";

function BookNowModal({ product, user, setProduct }) {
  function handleModalClose() {
    setProduct(null);
  }
  console.info(product);
  return (
    <Modal open={!!product} onClose={handleModalClose}>
      <Wrapper>
        <Heading>Book Now</Heading>
        <MobileSection>
          {/* <SwiperContainer></SwiperContainer> */}
        </MobileSection>

        {/******************* Form Start  *********************/}
        <Form>
          <InputWrapper>
            <Label>Meet Up Location</Label>
            <Input name="phoneNumber" placeholder="Where do you want to meet" />
          </InputWrapper>
          <InputWrapper>
            <Label>Phone Number</Label>
            <Input name="phoneNumber" placeholder="01__________" />
          </InputWrapper>
          <GradientButton type="submit">Submit</GradientButton>
        </Form>
        {/******************** Form End  *********************/}
      </Wrapper>
    </Modal>
  );
}

export default BookNowModal;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Heading = styled.h1`
  text-transform: capitalize;
`;

const SwiperContainer = styled(Swiper)``;

const SwiperItem = styled(SwiperSlide)``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MobileSection = styled.div``;
