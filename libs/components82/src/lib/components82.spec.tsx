import { render } from '@testing-library/react';

import Components82 from './components82';

describe('Components82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components82 />);
    expect(baseElement).toBeTruthy();
  });
});
