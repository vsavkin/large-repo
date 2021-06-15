import { render } from '@testing-library/react';

import Components29 from './components29';

describe('Components29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components29 />);
    expect(baseElement).toBeTruthy();
  });
});
