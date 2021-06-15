import { render } from '@testing-library/react';

import Components74 from './components74';

describe('Components74', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components74 />);
    expect(baseElement).toBeTruthy();
  });
});
