import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ContactModalAnimation } from "./animation";
import { ContactModalTitle } from "./title";
import { ContactModalMessage } from "./message";
import styled from "styled-components";

export const ContactModal = ({ isOpen, closeModal, isLoading, isSuccess }) => {
  return (
    <StyledDialog open={isOpen} onClose={closeModal}>
      <div className="min-h-screen px-4 text-center">
        <>
          <StyledPanel>
            <ContactModalAnimation {...{ isLoading, isSuccess, isOpen }} />

            <DialogTitle>
              <ContactModalTitle {...{ isLoading, isSuccess, isOpen }} />
            </DialogTitle>
            <SupportingText>
              <p>
                <ContactModalMessage {...{ isLoading, isSuccess, isOpen }} />
              </p>
            </SupportingText>

            <ButtonContainer>
              {<StyledButton
                type="button"
                disabled={isLoading}
                onClick={closeModal}
              >
                Got it, thanks!
              </StyledButton>}
            </ButtonContainer>
          </StyledPanel>
        </>
      </div>
    </StyledDialog>
  );
};

const DialogTitle = styled(Dialog.Title)`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5rem;
`

const SupportingText = styled.div`
  margin-top: 1rem;
`

const ButtonContainer = styled.div`
  margin-top: 1rem;
`

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: transparent;
  --tw-bg-opacity: 1;
  background-color: rgb(219 234 254 / var(--tw-bg-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(30 58 138 / var(--tw-text-opacity));

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(:disabled) {
    &:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(191 219 254 / var(--tw-bg-opacity));
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
        var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
        calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
        var(--tw-shadow, 0 0 #0000);
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
      --tw-ring-offset-width: 2px;
    }
  }
`;

const StyledDialog = styled(Dialog)`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 10;
  overflow-y: auto;
  background-color: rgb(0 0 0 / 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPanel = styled(Dialog.Panel)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: inline-block;
  width: 100%;
  max-width: 28rem;
  border-radius: 1rem;
  color: rgb(255, 255, 255);
  background-color: rgb(50, 50, 50);
  padding: 1.5rem;
  text-align: left;
  vertical-align: middle;

  a {
    font-weight: bold;
    text-decoration: underline;
    color: #44d295;
  }
`;
