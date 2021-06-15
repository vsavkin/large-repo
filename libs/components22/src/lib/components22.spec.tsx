import { render } from '@testing-library/react';

import Components22 from './components22';

describe('Components22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components22 />);
    expect(baseElement).toBeTruthy();
  });
});
