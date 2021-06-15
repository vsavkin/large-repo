import { render } from '@testing-library/react';

import Components46 from './components46';

describe('Components46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components46 />);
    expect(baseElement).toBeTruthy();
  });
});
