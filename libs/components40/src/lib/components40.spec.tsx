import { render } from '@testing-library/react';

import Components40 from './components40';

describe('Components40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components40 />);
    expect(baseElement).toBeTruthy();
  });
});
