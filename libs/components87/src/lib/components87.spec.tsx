import { render } from '@testing-library/react';

import Components87 from './components87';

describe('Components87', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components87 />);
    expect(baseElement).toBeTruthy();
  });
});
