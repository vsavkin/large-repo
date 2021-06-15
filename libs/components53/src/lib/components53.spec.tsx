import { render } from '@testing-library/react';

import Components53 from './components53';

describe('Components53', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components53 />);
    expect(baseElement).toBeTruthy();
  });
});
