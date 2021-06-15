import { render } from '@testing-library/react';

import Components59 from './components59';

describe('Components59', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components59 />);
    expect(baseElement).toBeTruthy();
  });
});
