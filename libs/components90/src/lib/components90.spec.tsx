import { render } from '@testing-library/react';

import Components90 from './components90';

describe('Components90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components90 />);
    expect(baseElement).toBeTruthy();
  });
});
