import { render } from '@testing-library/react';

import Components56 from './components56';

describe('Components56', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components56 />);
    expect(baseElement).toBeTruthy();
  });
});
