import { render } from '@testing-library/react';

import Components38 from './components38';

describe('Components38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components38 />);
    expect(baseElement).toBeTruthy();
  });
});
