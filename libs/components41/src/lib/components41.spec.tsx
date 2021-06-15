import { render } from '@testing-library/react';

import Components41 from './components41';

describe('Components41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components41 />);
    expect(baseElement).toBeTruthy();
  });
});
