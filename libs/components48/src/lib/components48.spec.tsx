import { render } from '@testing-library/react';

import Components48 from './components48';

describe('Components48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components48 />);
    expect(baseElement).toBeTruthy();
  });
});
