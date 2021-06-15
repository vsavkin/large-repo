import { render } from '@testing-library/react';

import Components51 from './components51';

describe('Components51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components51 />);
    expect(baseElement).toBeTruthy();
  });
});
