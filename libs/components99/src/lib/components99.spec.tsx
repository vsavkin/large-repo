import { render } from '@testing-library/react';

import Components99 from './components99';

describe('Components99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components99 />);
    expect(baseElement).toBeTruthy();
  });
});
