import { render } from '@testing-library/react';

import Components91 from './components91';

describe('Components91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components91 />);
    expect(baseElement).toBeTruthy();
  });
});
