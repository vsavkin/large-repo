import { render } from '@testing-library/react';

import Components26 from './components26';

describe('Components26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components26 />);
    expect(baseElement).toBeTruthy();
  });
});
