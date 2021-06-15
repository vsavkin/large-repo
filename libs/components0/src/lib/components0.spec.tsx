import { render } from '@testing-library/react';

import Components0 from './components0';

describe('Components0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components0 />);
    expect(baseElement).toBeTruthy();
  });
});
