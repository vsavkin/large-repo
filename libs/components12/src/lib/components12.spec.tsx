import { render } from '@testing-library/react';

import Components12 from './components12';

describe('Components12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components12 />);
    expect(baseElement).toBeTruthy();
  });
});
