export type Location = {
  id: string;
  name: string;
  serviceAreaKey: string;
  addressDisplay: string;
  phoneDisplay: string;
  phoneHref: string;
  hoursKey: string;
  mapHref: string;
  imageSrc?: string;
  imageAltKey?: string;
};

export const locations: Location[] = [
  {
    id: "loc-main",
    name: "home.locations.main.name",
    serviceAreaKey: "home.locations.main.serviceArea",
    addressDisplay: "home.locations.main.address",
    phoneDisplay: "home.locations.main.phone",
    phoneHref: "tel:+18015550148",
    hoursKey: "home.locations.hours.standard",
    mapHref: "https://maps.google.com/?q=1250%20N%20200%20W%2C%20Salt%20Lake%20City%2C%20UT",
    imageSrc: "/images/locations-1.jpg",
    imageAltKey: "home.locations.images.mainAlt"
  }
];
