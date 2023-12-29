import type { Size } from '@/interfaces';
import clsx from 'clsx';

interface Props {
  selectedSize: Size;
  availableSizes: Size[]; // ['XS', 'S', 'M', 'L', 'XL']
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-1">Tallas disponibles</h3>
      <div className="flex gap-4">
        {availableSizes.map((size) => (
          <button key={size} className={clsx('hover:underline text-lg', { underline: size === selectedSize })}>
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
