import { render } from '@testing-library/react';

import Components66 from './components66';

describe('Components66', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components66 />);
    expect(baseElement).toBeTruthy();
  });
});
