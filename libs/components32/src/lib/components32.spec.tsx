import { render } from '@testing-library/react';

import Components32 from './components32';

describe('Components32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components32 />);
    expect(baseElement).toBeTruthy();
  });
});
