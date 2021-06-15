import { render } from '@testing-library/react';

import Components70 from './components70';

describe('Components70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components70 />);
    expect(baseElement).toBeTruthy();
  });
});
