// Sample/demo testimonials. Do not treat as real reviews. 'source' is a UI label.
import { withBase } from "../utils/withBase";

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  photoUrl: string;
  rating: number;
  source: "Google Reviews";
  text: string;
  textEn: string;
  textEs: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Mark Jensen",
    location: "Salt Lake City, UT",
    photoUrl: withBase("/images/testimonial-1.jpg"),
    rating: 5,
    source: "Google Reviews",
    text: "Clear coordination and reliable delivery windows.",
    textEn: "Clear coordination and reliable delivery windows.",
    textEs: "Coordinación clara y ventanas de entrega confiables."
  },
  {
    id: "t2",
    name: "Elena Ortiz",
    location: "Provo, UT",
    photoUrl: withBase("/images/testimonial-2.jpg"),
    rating: 5,
    source: "Google Reviews",
    text: "Mix quality and support kept our crew moving.",
    textEn: "Mix quality and support kept our crew moving.",
    textEs: "La calidad de la mezcla y el soporte mantuvieron al equipo avanzando."
  },
  {
    id: "t3",
    name: "Daniel Kim",
    location: "Ogden, UT",
    photoUrl: withBase("/images/testimonial-3.jpg"),
    rating: 5,
    source: "Google Reviews",
    text: "On-time dispatch with consistent results across pours.",
    textEn: "On-time dispatch with consistent results across pours.",
    textEs: "Despacho puntual con resultados consistentes en los colados."
  },
  {
    id: "t4",
    name: "Sofia Ramirez",
    location: "Lehi, UT",
    photoUrl: withBase("/images/testimonial-4.jpg"),
    rating: 5,
    source: "Google Reviews",
    text: "Responsive team and dependable scheduling.",
    textEn: "Responsive team and dependable scheduling.",
    textEs: "Equipo receptivo y programación confiable."
  },
  {
    id: "t5",
    name: "Tyler Brooks",
    location: "Sandy, UT",
    photoUrl: withBase("/images/testimonial-5.jpg"),
    rating: 5,
    source: "Google Reviews",
    text: "Quality mixes and helpful adjustments on site.",
    textEn: "Quality mixes and helpful adjustments on site.",
    textEs: "Mezclas de calidad y ajustes útiles en obra."
  },
  {
    id: "t6",
    name: "Ana Morales",
    location: "West Jordan, UT",
    photoUrl: withBase("/images/testimonial-6.jpg"),
    rating: 5,
    source: "Google Reviews",
    text: "Good communication and predictable outcomes.",
    textEn: "Good communication and predictable outcomes.",
    textEs: "Buena comunicación y resultados predecibles."
  },
  {
    id: "t7",
    name: "Jason Lee",
    location: "Draper, UT",
    photoUrl: withBase("/images/testimonial-7.jpg"),
    rating: 5,
    source: "Google Reviews",
    text: "Professional dispatch and steady turnaround times.",
    textEn: "Professional dispatch and steady turnaround times.",
    textEs: "Despacho profesional y tiempos de respuesta constantes."
  }
];
