import { render } from '@testing-library/react';

import Components28 from './components28';

describe('Components28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components28 />);
    expect(baseElement).toBeTruthy();
  });
});
