import { render } from '@testing-library/react';

import Components57 from './components57';

describe('Components57', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components57 />);
    expect(baseElement).toBeTruthy();
  });
});
