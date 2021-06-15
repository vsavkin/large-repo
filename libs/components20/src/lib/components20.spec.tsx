import { render } from '@testing-library/react';

import Components20 from './components20';

describe('Components20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components20 />);
    expect(baseElement).toBeTruthy();
  });
});
