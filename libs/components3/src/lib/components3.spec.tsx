import { render } from '@testing-library/react';

import Components3 from './components3';

describe('Components3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components3 />);
    expect(baseElement).toBeTruthy();
  });
});
