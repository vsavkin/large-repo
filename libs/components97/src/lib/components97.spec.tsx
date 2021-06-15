import { render } from '@testing-library/react';

import Components97 from './components97';

describe('Components97', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components97 />);
    expect(baseElement).toBeTruthy();
  });
});
