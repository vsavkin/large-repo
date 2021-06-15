import { render } from '@testing-library/react';

import Components80 from './components80';

describe('Components80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components80 />);
    expect(baseElement).toBeTruthy();
  });
});
