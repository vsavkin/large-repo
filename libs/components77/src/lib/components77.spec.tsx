import { render } from '@testing-library/react';

import Components77 from './components77';

describe('Components77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components77 />);
    expect(baseElement).toBeTruthy();
  });
});
