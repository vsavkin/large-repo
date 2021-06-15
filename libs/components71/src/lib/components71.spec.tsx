import { render } from '@testing-library/react';

import Components71 from './components71';

describe('Components71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components71 />);
    expect(baseElement).toBeTruthy();
  });
});
