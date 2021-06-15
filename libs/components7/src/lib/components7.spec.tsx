import { render } from '@testing-library/react';

import Components7 from './components7';

describe('Components7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components7 />);
    expect(baseElement).toBeTruthy();
  });
});
