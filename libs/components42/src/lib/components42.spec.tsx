import { render } from '@testing-library/react';

import Components42 from './components42';

describe('Components42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components42 />);
    expect(baseElement).toBeTruthy();
  });
});
