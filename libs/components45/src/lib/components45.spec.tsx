import { render } from '@testing-library/react';

import Components45 from './components45';

describe('Components45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components45 />);
    expect(baseElement).toBeTruthy();
  });
});
