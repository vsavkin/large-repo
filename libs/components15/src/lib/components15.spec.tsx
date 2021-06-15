import { render } from '@testing-library/react';

import Components15 from './components15';

describe('Components15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components15 />);
    expect(baseElement).toBeTruthy();
  });
});
