import { render } from '@testing-library/react';

import Components84 from './components84';

describe('Components84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components84 />);
    expect(baseElement).toBeTruthy();
  });
});
