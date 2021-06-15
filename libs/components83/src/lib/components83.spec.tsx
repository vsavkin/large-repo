import { render } from '@testing-library/react';

import Components83 from './components83';

describe('Components83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components83 />);
    expect(baseElement).toBeTruthy();
  });
});
