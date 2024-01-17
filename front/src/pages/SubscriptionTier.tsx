import { Helmet } from "react-helmet-async";
import { SubscriptionTierView } from "../sections/subscriptionTier/view";

const SubscriptionTier = () => {
  return (
    <>
      <Helmet>
        <title>Bouquets</title>
      </Helmet>
      <SubscriptionTierView />
    </>
  );
};

export default SubscriptionTier;
