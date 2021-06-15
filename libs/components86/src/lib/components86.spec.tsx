import { render } from '@testing-library/react';

import Components86 from './components86';

describe('Components86', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components86 />);
    expect(baseElement).toBeTruthy();
  });
});
