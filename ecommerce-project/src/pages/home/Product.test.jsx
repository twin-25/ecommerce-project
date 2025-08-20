import {expect, it, describe, vi} from 'vitest';
import { Product } from './Product';
import { render, screen } from '@testing-library/react';


describe('product component', ()=>{
  it('displays the product  details correctly', () =>{
    const product = {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"]
  }
  const loadCart = vi.fn();
    render(<Product product={product} loadCart={loadCart}/>);

    expect (screen.getByText("Intermediate Size Basketball")).toBeInTheDocument();
    expect(screen.getByText('$20.95')).toBeInTheDocument();
    expect(screen.getByTestId('product-image')).toHaveAttribute('src', "images/products/intermediate-composite-basketball.jpg",
    );
    expect(screen.getByTestId('product-rating-stars-image')
  ).toHaveAttribute('src', 'images/ratings/rating-40.png');
    expect(screen.getByText('127')).toBeInTheDocument();
  })
})