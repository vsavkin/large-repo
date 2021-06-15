import { render } from '@testing-library/react';

import Components8 from './components8';

describe('Components8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components8 />);
    expect(baseElement).toBeTruthy();
  });
});
