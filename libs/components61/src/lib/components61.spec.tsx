import { render } from '@testing-library/react';

import Components61 from './components61';

describe('Components61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components61 />);
    expect(baseElement).toBeTruthy();
  });
});
