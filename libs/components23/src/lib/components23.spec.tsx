import { render } from '@testing-library/react';

import Components23 from './components23';

describe('Components23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components23 />);
    expect(baseElement).toBeTruthy();
  });
});
