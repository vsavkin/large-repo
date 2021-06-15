import { render } from '@testing-library/react';

import Components75 from './components75';

describe('Components75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components75 />);
    expect(baseElement).toBeTruthy();
  });
});
