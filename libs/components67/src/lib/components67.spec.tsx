import { render } from '@testing-library/react';

import Components67 from './components67';

describe('Components67', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components67 />);
    expect(baseElement).toBeTruthy();
  });
});
