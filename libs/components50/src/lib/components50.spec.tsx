import { render } from '@testing-library/react';

import Components50 from './components50';

describe('Components50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components50 />);
    expect(baseElement).toBeTruthy();
  });
});
