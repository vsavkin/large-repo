import { render } from '@testing-library/react';

import Components17 from './components17';

describe('Components17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components17 />);
    expect(baseElement).toBeTruthy();
  });
});
