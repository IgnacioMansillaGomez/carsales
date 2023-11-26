import { Car } from './Car.types';

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: Car;
}
