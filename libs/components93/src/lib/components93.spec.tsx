import { render } from '@testing-library/react';

import Components93 from './components93';

describe('Components93', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components93 />);
    expect(baseElement).toBeTruthy();
  });
});
