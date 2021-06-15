import { render } from '@testing-library/react';

import Components34 from './components34';

describe('Components34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components34 />);
    expect(baseElement).toBeTruthy();
  });
});
