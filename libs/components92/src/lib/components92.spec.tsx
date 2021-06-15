import { render } from '@testing-library/react';

import Components92 from './components92';

describe('Components92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components92 />);
    expect(baseElement).toBeTruthy();
  });
});
