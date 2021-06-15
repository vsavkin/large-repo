import { render } from '@testing-library/react';

import Components64 from './components64';

describe('Components64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components64 />);
    expect(baseElement).toBeTruthy();
  });
});
