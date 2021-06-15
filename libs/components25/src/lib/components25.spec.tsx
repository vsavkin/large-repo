import { render } from '@testing-library/react';

import Components25 from './components25';

describe('Components25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components25 />);
    expect(baseElement).toBeTruthy();
  });
});
