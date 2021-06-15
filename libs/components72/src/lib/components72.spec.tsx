import { render } from '@testing-library/react';

import Components72 from './components72';

describe('Components72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components72 />);
    expect(baseElement).toBeTruthy();
  });
});
