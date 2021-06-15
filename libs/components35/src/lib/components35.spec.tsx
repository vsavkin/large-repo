import { render } from '@testing-library/react';

import Components35 from './components35';

describe('Components35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components35 />);
    expect(baseElement).toBeTruthy();
  });
});
