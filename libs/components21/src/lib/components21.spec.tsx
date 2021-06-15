import { render } from '@testing-library/react';

import Components21 from './components21';

describe('Components21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components21 />);
    expect(baseElement).toBeTruthy();
  });
});
