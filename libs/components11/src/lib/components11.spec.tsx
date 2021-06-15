import { render } from '@testing-library/react';

import Components11 from './components11';

describe('Components11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components11 />);
    expect(baseElement).toBeTruthy();
  });
});
