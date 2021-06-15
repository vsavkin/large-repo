import { render } from '@testing-library/react';

import Components37 from './components37';

describe('Components37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components37 />);
    expect(baseElement).toBeTruthy();
  });
});
