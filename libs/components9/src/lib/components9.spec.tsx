import { render } from '@testing-library/react';

import Components9 from './components9';

describe('Components9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components9 />);
    expect(baseElement).toBeTruthy();
  });
});
