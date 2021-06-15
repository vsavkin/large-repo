import { render } from '@testing-library/react';

import Components2 from './components2';

describe('Components2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components2 />);
    expect(baseElement).toBeTruthy();
  });
});
