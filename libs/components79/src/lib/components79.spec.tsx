import { render } from '@testing-library/react';

import Components79 from './components79';

describe('Components79', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components79 />);
    expect(baseElement).toBeTruthy();
  });
});
