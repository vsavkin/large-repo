import { render } from '@testing-library/react';

import Components30 from './components30';

describe('Components30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components30 />);
    expect(baseElement).toBeTruthy();
  });
});
