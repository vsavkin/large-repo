import { render } from '@testing-library/react';

import Components62 from './components62';

describe('Components62', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components62 />);
    expect(baseElement).toBeTruthy();
  });
});
