import { render } from '@testing-library/react';

import Components68 from './components68';

describe('Components68', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components68 />);
    expect(baseElement).toBeTruthy();
  });
});
