import { render } from '@testing-library/react';

import Components6 from './components6';

describe('Components6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components6 />);
    expect(baseElement).toBeTruthy();
  });
});
