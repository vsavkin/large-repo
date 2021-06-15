import { render } from '@testing-library/react';

import Components10 from './components10';

describe('Components10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components10 />);
    expect(baseElement).toBeTruthy();
  });
});
