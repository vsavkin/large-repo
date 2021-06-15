import { render } from '@testing-library/react';

import Components88 from './components88';

describe('Components88', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components88 />);
    expect(baseElement).toBeTruthy();
  });
});
