import { render } from '@testing-library/react';

import Components49 from './components49';

describe('Components49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components49 />);
    expect(baseElement).toBeTruthy();
  });
});
