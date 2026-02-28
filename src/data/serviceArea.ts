export type ServiceArea = {
  hq: {
    name: string;
    addressDisplay: string;
    phoneDisplay: string;
    phoneHref: string;
    emailDisplay: string;
    emailHref: string;
    hoursKey: string;
    mapHref: string;
    imageSrc?: string;
    imageAltKey?: string;
  };
  areas: string[];
};

export const serviceArea: ServiceArea = {
  hq: {
    name: "home.serviceArea.hq.name",
    addressDisplay: "home.serviceArea.hq.address",
    phoneDisplay: "home.serviceArea.hq.phone",
    phoneHref: "tel:+18015550148",
    emailDisplay: "home.serviceArea.hq.email",
    emailHref: "mailto:sales@wasatchcement.com",
    hoursKey: "home.serviceArea.hours.standard",
    mapHref: "https://maps.google.com/?q=1250%20N%20200%20W%2C%20Salt%20Lake%20City%2C%20UT",
    imageSrc: "/images/locations-1.jpg",
    imageAltKey: "home.serviceArea.images.mainAlt"
  },
  areas: [
    "home.serviceArea.areas.saltLakeCity",
    "home.serviceArea.areas.westValleyCity",
    "home.serviceArea.areas.sandy",
    "home.serviceArea.areas.draper",
    "home.serviceArea.areas.lehi",
    "home.serviceArea.areas.orem",
    "home.serviceArea.areas.provo",
    "home.serviceArea.areas.ogden",
    "home.serviceArea.areas.layton",
    "home.serviceArea.areas.bountiful",
    "home.serviceArea.areas.tooele",
    "home.serviceArea.areas.parkCity"
  ]
};
