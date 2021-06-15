import { render } from '@testing-library/react';

import Components33 from './components33';

describe('Components33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components33 />);
    expect(baseElement).toBeTruthy();
  });
});
