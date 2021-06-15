import { render } from '@testing-library/react';

import Components63 from './components63';

describe('Components63', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components63 />);
    expect(baseElement).toBeTruthy();
  });
});
