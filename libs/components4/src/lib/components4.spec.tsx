import { render } from '@testing-library/react';

import Components4 from './components4';

describe('Components4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components4 />);
    expect(baseElement).toBeTruthy();
  });
});
