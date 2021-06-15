import { render } from '@testing-library/react';

import Components98 from './components98';

describe('Components98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components98 />);
    expect(baseElement).toBeTruthy();
  });
});
