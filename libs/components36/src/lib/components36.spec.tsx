import { render } from '@testing-library/react';

import Components36 from './components36';

describe('Components36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components36 />);
    expect(baseElement).toBeTruthy();
  });
});
