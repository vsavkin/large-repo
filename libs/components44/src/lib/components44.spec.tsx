import { render } from '@testing-library/react';

import Components44 from './components44';

describe('Components44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components44 />);
    expect(baseElement).toBeTruthy();
  });
});
