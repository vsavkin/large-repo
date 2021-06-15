import { render } from '@testing-library/react';

import Components5 from './components5';

describe('Components5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components5 />);
    expect(baseElement).toBeTruthy();
  });
});
