import { render } from '@testing-library/react';

import Components55 from './components55';

describe('Components55', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components55 />);
    expect(baseElement).toBeTruthy();
  });
});
