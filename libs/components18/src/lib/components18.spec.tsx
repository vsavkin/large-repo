import { render } from '@testing-library/react';

import Components18 from './components18';

describe('Components18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components18 />);
    expect(baseElement).toBeTruthy();
  });
});
