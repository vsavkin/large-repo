import { render } from '@testing-library/react';

import Components81 from './components81';

describe('Components81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components81 />);
    expect(baseElement).toBeTruthy();
  });
});
