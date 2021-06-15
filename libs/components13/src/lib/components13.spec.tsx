import { render } from '@testing-library/react';

import Components13 from './components13';

describe('Components13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components13 />);
    expect(baseElement).toBeTruthy();
  });
});
