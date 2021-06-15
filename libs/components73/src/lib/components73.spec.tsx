import { render } from '@testing-library/react';

import Components73 from './components73';

describe('Components73', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components73 />);
    expect(baseElement).toBeTruthy();
  });
});
