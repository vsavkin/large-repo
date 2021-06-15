import { render } from '@testing-library/react';

import Components65 from './components65';

describe('Components65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components65 />);
    expect(baseElement).toBeTruthy();
  });
});
