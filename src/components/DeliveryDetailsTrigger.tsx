import { useState } from "react";
import Button from "./Button";
import DeliveryDetailsModal from "./DeliveryDetailsModal";
import { t, type Lang } from "../i18n";

type Props = {
  lang: Lang;
};

const DeliveryDetailsTrigger = ({ lang }: Props) => {
  const [open, setOpen] = useState(false);
  const titleId = "delivery-details-title";
  const dialogId = `${titleId}-dialog`;

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="secondary"
        className="h-11 px-6"
        aria-controls={dialogId}
        aria-expanded={open}
      >
        {t<string>(lang, "pages.products.deliveryDetailsCta")}
      </Button>
      <DeliveryDetailsModal lang={lang} open={open} onClose={() => setOpen(false)} titleId={titleId} />
    </>
  );
};

export default DeliveryDetailsTrigger;
