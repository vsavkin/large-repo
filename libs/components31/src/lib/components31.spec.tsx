import { render } from '@testing-library/react';

import Components31 from './components31';

describe('Components31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components31 />);
    expect(baseElement).toBeTruthy();
  });
});
