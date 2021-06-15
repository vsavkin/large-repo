import { render } from '@testing-library/react';

import Components52 from './components52';

describe('Components52', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components52 />);
    expect(baseElement).toBeTruthy();
  });
});
