import { render } from '@testing-library/react';

import Components39 from './components39';

describe('Components39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components39 />);
    expect(baseElement).toBeTruthy();
  });
});
