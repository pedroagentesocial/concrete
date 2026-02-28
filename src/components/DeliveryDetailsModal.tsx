import Modal from "./Modal";
import { t, type Lang } from "../i18n";

type Props = {
  lang: Lang;
  open: boolean;
  onClose: () => void;
  titleId: string;
};

const DeliveryDetailsModal = ({ lang, open, onClose, titleId }: Props) => {
  const title = t<string>(lang, "pages.products.deliveryDetails.title");
  const subtitle = t<string>(lang, "pages.products.deliveryDetails.subtitle");
  const sections = [
    "scheduling",
    "access",
    "unloading",
    "sitePrep",
    "cancellations"
  ];

  return (
    <Modal open={open} onClose={onClose} titleId={titleId} closeLabel={t<string>(lang, "common.close")}>
      <h2 id={titleId} className="text-lg font-semibold text-text">
        {title}
      </h2>
      <p className="text-sm text-text/80">{subtitle}</p>
      <div className="mt-4 grid gap-4">
        {sections.map((section) => {
          const sectionTitle = t<string>(lang, `pages.products.deliveryDetails.sections.${section}.title`);
          const items = t<string[]>(lang, `pages.products.deliveryDetails.sections.${section}.items`);
          return (
            <div key={section} className="rounded-2xl border border-muted bg-white p-4">
              <p className="text-sm font-semibold text-text">{sectionTitle}</p>
              <ul className="mt-2 space-y-1 text-sm text-text/80">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-text/70">{t<string>(lang, "pages.products.deliveryDetails.disclaimer")}</p>
    </Modal>
  );
};

export default DeliveryDetailsModal;
