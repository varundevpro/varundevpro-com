import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

import { ContactModal } from "../../../components/contact-modal";
import styled from "styled-components";

const delay = (ms) => new Promise((resolve, reject) => {
  setTimeout(resolve, ms)
})

const postContactDetails = async (data) => {
  const res = await fetch(`/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    
  const result = await res.json()
    
  console.log("Success:", result);

  return {status: 200}
}

export const LetsTalk = () => {
  const [modalState, setModalState] = useState({
    open: false,
    loading: false,
    success: false,
  });

  function closeModal() {
    setModalState((prev) => {
      if (prev.loading) {
        return prev;
      }

      return {
        open: false,
        loading: false,
        success: false,
      };
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    // Open Modal - Show loading...
    setModalState((prev) => ({
      ...prev,
      open: true,
      loading: true,
      success: false,
    }));

    try {
      const { status, data: result } = await postContactDetails(data);
      console.log(result);

      if (status === 200) {
        reset();

        // Show success...
        setModalState((prev) => ({
          ...prev,
          loading: false,
          success: true,
        }));
        return;
      }

      // Show error...
      setModalState((prev) => ({
        ...prev,
        loading: false,
        success: false,
      }));
    } catch (e) {
      console.error(e);

      // Show error...
      setModalState((prev) => ({
        ...prev,
        loading: false,
        success: false,
      }));
    }
  };

  return (
    <>
      <Wrapper id="contact">
        <InnerWrapper>

          <Heading>
            Get in touch
          </Heading>
          <SupportingText>
            Have any questions or want to chat with me? <br /> Just fill out
            the form below.
          </SupportingText>

            <StyledForm
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <Label
                  htmlFor="email"

                >
                  Email
                </Label>
                <InputContainer>
                  <StyledInput
                    id="email"
                    name="email"
                    type="email"
                    hasError={errors.email}
                    autoComplete="email"
                    {...register("email", { required: true })}

                  />
                  {errors.email && (
                    <ErrorIconContainer>
                      <ExclamationCircleIcon aria-hidden="true" />
                    </ErrorIconContainer>
                  )}
                </InputContainer>
                {errors.email && (
                  <ErrorMsgHint>
                    Email is required. That&#39;s how you will get my reply.
                  </ErrorMsgHint>
                )}
              </div>

              <div>
                <Label
                  htmlFor="message"

                >
                  Message
                </Label>
                <InputContainer>
                  <StyledInput
                    as='textarea'
                    id="message"
                    name="message"
                    rows={4}
                    {...register("message", {
                      required: "Drop me a message.",
                      maxLength: {
                        value: 360,
                        message: "It's too long to digest :(",
                      },
                    })}
                    hasError={errors.message}
                    defaultValue={""}
                  />
                  {errors.message && (
                    <ErrorIconContainer>
                      <ExclamationCircleIcon aria-hidden="true" />
                    </ErrorIconContainer>
                  )}
                </InputContainer>
                {errors.message && (
                  <ErrorMsgHint>
                    {errors.message.message}
                  </ErrorMsgHint>
                )}
              </div>
              <div>
                <StyledButton type="submit" >
                  Let&#39;s talk
                </StyledButton>
              </div>
            </StyledForm>
        </InnerWrapper>
      </Wrapper>

      <ContactModal
        {...{
          isOpen: modalState.open,
          closeModal,
          isLoading: modalState.loading,
          isSuccess: modalState.success,
        }}
      />
    </>
  );
};

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.375rem;
  margin-top: 0.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-width: 1px;
  border-style: solid;
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  --tw-ring-offset-shadow: 0 0 0 0px #fff;
  --tw-ring-shadow: 0 0 0 calc(1px + 0px) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  border-color: ${props => props.hasError ? 'rgb(252 165 165)' : 'rgb(80 80 80)'};

  &::placeholder {
    color: ${props => props.hasError ? 'rgb(252 165 165)' : 'rgb(209 213 219)'};
  }

  &:focus {
    border-color: ${props => props.hasError ? 'rgb(239 68 68)' : 'rgb(59 130 246)'};
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 0px #fff,var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);
    --tw-ring-color: ${props => props.hasError ? 'rgb(239 68 68)' : 'rgb(59 130 246)'};
  }
`;

const ErrorIconContainer = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  padding-right: 0.75rem;

  svg {
    height: 1.25rem;
    width: 1.25rem;
    
    color: rgb(239 68 68)
  }

`

const InputContainer = styled.div`
  position: relative;
  margin-top: 4px;
`


const Wrapper = styled.div`
  overflow: hidden;

  padding: 2rem 1rem;

  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;

  @media (min-width: 640px) {
      padding: 3rem 1.5rem;
  }

  @media (min-width: 1024px) {
      padding: 4rem 2rem;
  }
`

const InnerWrapper = styled.div`
  max-width: 36rem;
`

const Heading = styled.h2`
  margin: 1.5em 0 0.75em;

  font-size: 2rem;
  line-height: 1.16em;
  font-weight: 700;
  letter-spacing: -.025em;

  @media screen and (max-width: 40em) {
    font-size: 1.5rem;
  }
`


const SupportingText = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  line-height: 1.7em;
`


const StyledForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
`

const ErrorMsgHint = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(255 145 145);
`

const StyledButton = styled.button`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: transparent;
  
  background-color: rgb(37 99 235);
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  
  color: rgb(255 255 255);
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

&:hover {
  
  background-color: rgb(29 78 216);
}

&:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: 0 0 0 var(--tw-ring-offset-width) rgba(20, 20, 20, 1);
  --tw-ring-shadow: 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  
  --tw-ring-color: rgb(59 130 246);
  --tw-ring-offset-width: 2px;
}

`