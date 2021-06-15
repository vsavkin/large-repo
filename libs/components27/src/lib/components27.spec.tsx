import { render } from '@testing-library/react';

import Components27 from './components27';

describe('Components27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components27 />);
    expect(baseElement).toBeTruthy();
  });
});
