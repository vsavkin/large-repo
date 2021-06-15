import { render } from '@testing-library/react';

import Components85 from './components85';

describe('Components85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components85 />);
    expect(baseElement).toBeTruthy();
  });
});
