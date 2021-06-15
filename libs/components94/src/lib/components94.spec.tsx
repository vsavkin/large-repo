import { render } from '@testing-library/react';

import Components94 from './components94';

describe('Components94', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components94 />);
    expect(baseElement).toBeTruthy();
  });
});
