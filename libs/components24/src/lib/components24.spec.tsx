import { render } from '@testing-library/react';

import Components24 from './components24';

describe('Components24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components24 />);
    expect(baseElement).toBeTruthy();
  });
});
