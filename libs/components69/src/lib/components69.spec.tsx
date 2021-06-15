import { render } from '@testing-library/react';

import Components69 from './components69';

describe('Components69', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components69 />);
    expect(baseElement).toBeTruthy();
  });
});
