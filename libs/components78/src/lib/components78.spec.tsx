import { render } from '@testing-library/react';

import Components78 from './components78';

describe('Components78', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components78 />);
    expect(baseElement).toBeTruthy();
  });
});
