import { render } from '@testing-library/react';

import Components60 from './components60';

describe('Components60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components60 />);
    expect(baseElement).toBeTruthy();
  });
});
