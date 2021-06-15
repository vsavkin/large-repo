import { render } from '@testing-library/react';

import Components95 from './components95';

describe('Components95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components95 />);
    expect(baseElement).toBeTruthy();
  });
});
