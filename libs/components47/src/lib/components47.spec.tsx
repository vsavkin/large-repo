import { render } from '@testing-library/react';

import Components47 from './components47';

describe('Components47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components47 />);
    expect(baseElement).toBeTruthy();
  });
});
