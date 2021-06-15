import { render } from '@testing-library/react';

import Components43 from './components43';

describe('Components43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components43 />);
    expect(baseElement).toBeTruthy();
  });
});
