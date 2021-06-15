import { render } from '@testing-library/react';

import Components58 from './components58';

describe('Components58', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components58 />);
    expect(baseElement).toBeTruthy();
  });
});
