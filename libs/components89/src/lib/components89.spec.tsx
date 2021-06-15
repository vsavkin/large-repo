import { render } from '@testing-library/react';

import Components89 from './components89';

describe('Components89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components89 />);
    expect(baseElement).toBeTruthy();
  });
});
