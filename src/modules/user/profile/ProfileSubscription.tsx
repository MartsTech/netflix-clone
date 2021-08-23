import { observer } from "mobx-react-lite";

import { useStore } from "stores/store";
import styled from "styled-components";

const ProfileSubscription = () => {
  const { currentSubscription } = useStore().paymentStore;

  return (
    <StyledContainer>
      <StyledTitle>
        {!currentSubscription
          ? " Plans"
          : "Current Plan: " + `(${currentSubscription.role})`}
      </StyledTitle>

      {currentSubscription && (
        <p>Renewal date: {currentSubscription.current_period_end}</p>
      )}
    </StyledContainer>
  );
};

export default observer(ProfileSubscription);

const StyledContainer = styled.div``;

const StyledTitle = styled.h3`
  margin-top: 1.25rem;
  border-bottom: 1px solid #282c2d;
  padding-bottom: 0.75rem;
  font-weight: 500;
`;

const StyledPlan = styled.span``;
